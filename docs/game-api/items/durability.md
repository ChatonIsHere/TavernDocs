---
title: Durability
description: DurabilityModule, which wears tools and weapons down with each hit, shows damage stages and breaks the item, all on the server.
sidebar_position: 9
---

# Durability

`DurabilityModule` in `Root.Township` (no namespace). A `NetworkEntityBehaviour` on a pickup. The wear is worked out on the server only; clients get the current stage.

Tools and weapons wear as they hit things. The module keeps an `Integrity` from 1 (new) to 0 (broken). As it drops past thresholds the item changes look (stages), and at 0 it breaks.

Get it with `pickup.DurabilityModule`, or `GetComponent<DurabilityModule>()`.

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `float Integrity { get; }` | 1 when new, 0 when broken. | Only right on the server. Clients only get the stage. |
| `int CurrentStage { get; }` | Which damage look is showing, 0 for none. | Synced to clients. |
| `Pickup Pickup { get; }` | Its pickup. | |
| `DurabilityModule AttachedTo { get; }` | For a crafted part, the module of the item it's part of. | Wear on a part goes to the whole. |
| `void AffectDurability(float damage)` | Wears it down by this much. | Server only; does nothing elsewhere or when `enabled` is false. |
| `void AttachTo(DurabilityModule)` / `void Detach()` | Joins or splits durability when crafting. | |
| `bool CheckBreak()` | Breaks it if integrity is 0. | |
| `void UpdateMaterial(PhysicalMaterial)` | Applies the material's durability multiplier. | Called by `PhysicalMaterialPart.SetMaterial`. |
| `event Action<DurabilityVisual> OnChangedStage` | The stage changed. | Both sides. |
| `AltaEvent brokeOnServer` | Public field, invoked when it breaks on the server. | |

## How wear works

1. A hit is resolved (see [Impacts](impacts.md)). `ImpactTool.GenerateHit` or `GenerateImpactOnDetector` turns the hit's effectiveness into a wear amount (`DurabilityGlobalSettings.EvaluateEfectivenessDamage`, times the hit's `DurabilityLostMultiplier`) and calls `Pickup.AffectDurability` on the part that hit and on the tool. Blocking with an item wears it by the hit's damage.
2. `Pickup.AffectDurability` raises `Pickup.OnAffectDurability`. `DurabilityModule` subscribes to it in `InitializeAsServer`, so only the server reacts.
3. `AffectDurability` scales the amount by the settings' `DamageConversion` and takes it off integrity, either as a fraction of the remaining durability or, for chance-based items, as a roll that leaves it whole or broken.
4. When integrity passes a stage threshold, the server sends the new stage. At 0, `CheckBreak` calls `Pickup.Break()`, which destroys the item on the server and plays the break effect on clients.

Because the remaining durability goes down by the same amount each time, an item breaks after about `durability / (wear × damageConversion)` hits of the same kind. Integrity is the remaining durability as a fraction of the starting one.

## Asset values

Asset values (build main-1.7.2.1.42203). Every `DurabilitySettings` asset:

| Asset | `isChanceBasedDurability` | `durability` | `damageConversion` |
| --- | --- | --- | --- |
| `1 - Very Weak Durability` | no | 10 | 0.3 |
| `2 - Weak Durability` | no | 30 | 0.3 |
| `3 - Standard Durability` | no | 60 | 0.3 |
| `4 - Strong Durability` | no | 130 | 0.3 |
| `5 - Very Strong Durability` | no | 170 | 0.3 |
| `Break next hit` | yes | 1 | 1 |
| `High Chance` | yes | 0.3 | 1 |
| `Standard Chance` | yes | 0.1 | 1 |
| `Low Chance` | yes | 0.005 | 1 |
| `unbreakable` | yes | 0 | 1 |

For chance-based items, `durability` is the chance threshold: a hit breaks the item when a random roll (raised to `1 / damage`) falls below it, so 0 never breaks and 1 almost always does.

`DurabilityGlobalSettings.effectivenessToDurabilityDamage` turns a hit's effectiveness into wear. Its keys are (0, 0), (0.2, 0.75), (0.4, 1) and (1, 0.35): a middling hit wears a tool more than a perfect one.

Some items: Short Sword uses `2 - Weak Durability`; Katana and Rusty Greataxe use `3 - Standard Durability`; Arrow uses `1 - Very Weak Durability`. The ready-made `Pick Axe` prefab (item `Pick`) has no `DurabilityModule` and never wears; crafted tools get their durability from their parts (see `AttachedTo`). Worked out from those numbers, a Short Sword lasts about 286 perfect hits (30 / (0.35 × 0.3)) or 100 hits at effectiveness 0.4. The reference tables list the settings of every item.

Integrity is saved with the item.

:::warning[Two things that look like bugs]
From the code (confirmed by how ATTMateriaLib works around it):

- **Material durability does nothing.** `UpdateMaterial` scales the private `baseDurability`, but wear is measured against `currentDurability`, which was set in `Awake` and only gets recomputed in a private method nothing calls (`ReevaluateRemainingDurabilityFromIntegrity`). So a material's `DurabilityMultiplier` (Carsi Alloy 5, Gold 0.5) doesn't change how long a tool lasts.
- **A reload restores the remaining hits.** Only `integrity` is saved. After a restart `currentDurability` starts full again, so a half-worn tool keeps its worn look but gets a full set of hits before it breaks.

ATTMateriaLib sets `baseDurability` from the material and calls `ReevaluateRemainingDurabilityFromIntegrity` after `UpdateMaterial`, `Load` and `ReplacedWith`. Both are private; reach them through att-stubs or `AccessTools`.
:::

Stacking: an item with damage stages that's been worn can't stack onto a fresh one, unless the prefab allows docking damaged items, in which case only same-stage items stack.

## Hooking it

Make tools last forever, on the server:

```csharp
[HarmonyPatch(typeof(DurabilityModule), nameof(DurabilityModule.AffectDurability))]
static class Unbreakable
{
    static bool Prefix() => false;
}
```

Or scale wear: take `ref float damage` in the prefix and change it. Read the state on the server:

```csharp
public static string Describe(Pickup pickup)
{
    DurabilityModule module = pickup.DurabilityModule;
    if (module == null) return "no durability";
    return $"integrity {module.Integrity:0.00}, stage {module.CurrentStage}";
}
```

- `AffectDurability` is the one entry point for wear from hits. A crafted part forwards the call to the module it's `AttachedTo`, so a prefix that scales `damage` runs twice for it: once on the part, once on the whole item. Check `__instance.AttachedTo == null` to act only once.
- Saving and replacing use explicit interface methods. To patch them, use their full names, as ATTMateriaLib does: `"ISavable<DurabilityModuleSaveData>.Load"` and `"Alta.Networking.IEntityReplaceHandler.ReplacedWith"`.
- Setting a module's `enabled` to false also stops wear.

## See also

- [Impacts and hit detection](impacts.md)
- [Items and materials](items-and-materials.md)
- [Pickup](pickup.md)
