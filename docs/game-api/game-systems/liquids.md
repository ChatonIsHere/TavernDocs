---
title: Liquids
description: Liquid containers, LiquidDefinition and LiquidData, pouring and dipping, and how liquid reaches the mouth.
sidebar_position: 11
---

# Liquids

`Alta.Liquid` in `Root.Township`. Only the server moves liquid.

Water, potions, stews and drinks are all liquid in a container. A container holds one liquid at a whole-number level. Liquid moves when you pour it (pouring particles hit another container), dip one container into another, or drink it (the mouth is a container too).

## LiquidDefinition, LiquidContent and LiquidData

| Type | What it is |
| --- | --- |
| `LiquidDefinition` | `HashedGeneralValue<LiquidDefinition>` asset under `Cooking/Liquids`: a named liquid (water, a potion). `LiquidData Data`, `LiquidContent GetAsLiquidContent()` (cached). |
| `LiquidContent` | What's in a container: `LiquidDefinition Liquid`, `LiquidData Data`, `bool IsCustom`. Stews are custom content with their own data. |
| `LiquidData` | `[Serializable]` class: `Effects` (`EffectDefinitionApplication`s), `ColorTint`, `LiquidVisual`, `ChunkVisuals`, `CookablesUsed`, `IsConsumableThroughSkin`. `void Apply(EffectHandler target, float strength)` applies its effects. |

`LiquidData.Serialize` sends the tint, the visual by hash, the effects (up to 1023, each by hash with its strength) and the chunk visuals (up to 256, by hash). A client needs every one of those assets. `GetSave` and `Load` do the same for saves. CookingLib patches `SerializeEffectsArray` and `Load` to carry its own liquids.

## ILiquidContainer

`Alta.Liquid.ILiquidContainer`. Implemented by `LiquidContainer` (the usual one, a network entity), `StaticLiquidContainer` (a plain `MonoBehaviour` one, probably for fixed bodies of water) and whatever the drinking mouth carries.

| Member | What it does |
| --- | --- |
| `LiquidContent ContainedLiquid { get; }` | What's in it. |
| `int CurrentContentLevel`, `int ContainerSize`, `int SpaceLeft { get; }` | Amounts, in whole units. |
| `bool IsEmpty`, `bool IsFull { get; }` | |
| `int ContainerPriority { get; }` | Dipping only fills a lower-priority container from a higher one. |
| `bool CanRemoveFrom { get; set; }` | Whether liquid can leave. |
| `bool CanAddTo(LiquidContent liquid)` | Runs the `AddFilter` handlers. |
| `bool FillIntoContainer(ILiquidContainer other, int amount, bool isForced = false)` | Moves liquid. |
| `void ForceEmpty()` | Empties it. |
| `event LiquidFillFilter AddFilter` | `void (LiquidData data, ref bool result)`. Set `result = false` to refuse a liquid. |
| `event LiquidContainerAmountChangedHandler ContentLevelChanged` | `(container, oldLevel, newLevel)`. |
| `event LiquidTypeChangedHandler ContainedLiquidChanged` | The liquid changed. |

`static bool LiquidContainer.FillInto(ILiquidContainer from, ILiquidContainer to, int amount, bool isForced = false)` does every move. It returns false on a client (outside the editor), so liquid only moves on the server. It checks compatibility, `CanAddTo`, `CanRemoveFrom` and space, unless forced.

`GlobalLiquidContainer.Instance` is an unlimited source and sink:

- `static bool FillLiquidIntoContainer(LiquidContent liquid, ILiquidContainer container, int amount, bool isForced = false)` creates liquid in a container.
- `static bool RemoveLiquidFromContainer(ILiquidContainer container, int amount, bool isForced = false)` destroys it.

Containers with a liquid distribution fill themselves with a random liquid when they're generated.

## Dipping: LiquidContainerTrigger

`Alta.Liquid.LiquidContainerTrigger : MonoBehaviour`. The trigger on a container's surface. `OnTriggerEnter` and `OnTriggerExit` are public. It counts colliders per rigidbody and tracks pickups and containers that enter. On the server, a lower-priority container dipped in gets filled. It plays splash particles off headless.

DyeingAPI and CookingLib postfix `OnTriggerEnter` to react to an item dipped in a liquid. Steady clears its `handledRigidbodies`, `handledPickups`, `handledLiquidContainers` and `handledPourableLiquidContainers` dictionaries because they can keep destroyed objects.

## Hooking it

- **Make liquid:** `GlobalLiquidContainer.FillLiquidIntoContainer(definition.GetAsLiquidContent(), container, amount)` on the server.
- **Refuse a liquid:** add an `AddFilter` handler. The mouth uses this to refuse drinks you can't have.
- **React to drinking:** see [Hunger, eating and drinking](hunger-and-eating.md).
- A liquid's `LiquidData` is shared by everything holding that definition. Copy it before changing effects, or every bottle of that liquid changes.

## Other types in this area

| Type | What it is |
| --- | --- |
| `PourableContainer`, `IPourableContainer` | Pouring out when tipped, with particles that fill what they hit. |
| `LiquidContainerLid` | A lid that opens and closes a container. |
| `PickupLiquidContainerEnabler` | Links a pickup to its container, pouring and surface, and filters what can be added. |
| `LiquidHeatAreaController` | Links a container's liquid to a heat area and heat point. |
| `LiquidSettings` | `GlobalSettings`: transition speed, splash and pouring particles, `DebugWaterConcoction`. |
| `LiquidSurfaceVisual`, `BottledLiquid`, `LiquidVisualData` and the `*MaterialCreator` types | Client visuals. |

## See also

- [Cooking](cooking.md)
- [Effects](effects.md)
