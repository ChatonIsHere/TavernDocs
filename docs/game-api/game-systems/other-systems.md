---
title: Other systems
description: GameTaskManager action reporting, enchantments, mechanisms, logic circuits and fuses.
sidebar_position: 15
---

# Other systems

Smaller systems in `Root.Township`. All server-driven.

## GameTaskManager

`GameTaskManager : NetworkEntityBehaviour`, top level. The singleton behind achievements, action stats and micro tutorial flags. `static GameTaskManager Instance`.

Game code reports player actions to it with:

```csharp
public static void ActionExecuted(IPlayer player, GameTaskActionArgument argument)
```

The argument's type says what happened:

| Argument | Reported by |
| --- | --- |
| `EatingAmountArgument` | `Eater`, when a player finishes eating (on whichever side ran the bite) |
| `SpecificSpawnItemTaskArgument` | `Smelter` (filter `Smelt`), `GenericCraftingProject` (filter `Generic`), `TimberBlock` (chiselling) |
| `SpecificCraftTaskArgument` | `JointSlot.TryConnect`, when a held item gets a part |
| `DockObjectTaskArgument` | `PickupDock` |
| `DestroyActionArgument` | `HealthObject`, when a player's tool destroys something |
| `TransferAmountArgument`, `FinishSpawnProjectTaskArgument` | `PickupContainer`, `RepairBox` |
| `HandTouchTaskArgument` | `HandHoverPoint` |
| `MaxValueTaskArgument` | `CaveLayerChunk`, the deepest cave layer reached |

In `InitializeAsServer` the manager registers itself for auto-save, maps every `GameAction` valid for the current scene index by its channel, and hooks every `GameAchievement`. `ActionExecuted` only counts arguments whose channel has actions in that map.

That makes a prefix on `ActionExecuted` a cheap way to hear about many actions. Two things to know:

- The manager only counts for players it has a tracker for. Trackers are made in `OnConnected` (`async void`) after it fetches the player's stats and achievements from Alta's achievement service. If that call fails, the player gets no tracker and nothing counts, but `ActionExecuted` is still called, so your prefix still sees it. Neither TavernLib nor TavernEssentials replaces the achievement calls, so on Tavern servers whether trackers exist depends on what that call does without Alta's service.
- `ActionExecuted` catches and logs any exception from its own work. `Eater` calls it on clients too, so check `NetworkSceneManager.IsServer` if you only want the server's report.

```csharp
using Alta.Networking.Scripts.Player;
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(GameTaskManager), nameof(GameTaskManager.ActionExecuted))]
static class ActionPatch
{
    static void Prefix(IPlayer player, GameTaskActionArgument argument)
    {
        if (player != null && argument is EatingAmountArgument)
        {
            MelonLogger.Msg($"{player.UserInfo.Username} finished eating");
        }
    }
}
```

Other members: `IncrementForPlayer(GameAction, IPlayer)`, `IsAchievementCompletedByPlayer(IPlayer, GameAchievement)`, `IsTutorialCompletedByPlayer`, and `Clear...ForPlayer` methods for one user id.

## Enchantments

`Alta.Enchantments`. An `Enchantment` (`HashedGeneralValue<Enchantment>`) is a list of `Binding`s, each a set of `EnchantmentTrigger`s and `EnchantmentEffect`s (both `ScriptableObject`s).

| Type | What it is |
| --- | --- |
| `Enchantable` | On an item. `EnchantmentApplication Add(Enchantment)`, `EnchantmentApplication Get(Enchantment)`. Adds its `initial` enchantments on the server at spawn. |
| `EnchantmentApplication` | An enchantment active on one item. |
| `EnchantmentTrigger` | When it fires. `CreateApplication` applies the trigger on the server only. `QuickDrawTrigger` is one (a fast, effective hit within `timeToHit`). |
| `EnchantmentEffect` | What it does: `DamageMultiplier` (default 1.2x), `DurabilitySaveEnchantment` (less durability lost). |

`Enchantable` saves its current enchantments, but its `Load` is empty, so on load it only gets the prefab's `initial` list back. As far as the code shows, an enchantment added at runtime doesn't survive a restart.

## Mechanisms

`Alta.Mechanisms`. Physical controls.

| Type | What it is |
| --- | --- |
| `Mechanism` | Abstract. Watches an `ActivationPickup`; while it's held (and, if hand based, the base is held too), the server runs the subclass's `CheckAction` coroutine. When that completes an action it calls `OnActivated`, which raises `activatedEffects` and, on the server, `activatedOnServer`. |
| `Crank` | A `Mechanism` turned by hand in half or quarter turns. |
| `NonPhysicalLever` | A lever with `IsActive`, `MoveToPosition(float)`, `ForceFull(bool)`, `ForceEmpty(bool)`. |
| `PullAway` | Something you pull off, raising `onPulled` past a distance. |
| `Scrubber` | A grab handle that slides along a `Path` in `Steps` steps and raises `updatedStep`. |
| `BendPath`, `StraightPath`, `Path` | The path a moving part follows. |

## Logic

`Alta.Logic`. Wiring between world objects such as levers, doors and puzzles: senders hold values, receivers react to them, and `GlobalLogicManager` stores the values by id so they save with the world.

| Type | What it is |
| --- | --- |
| `GlobalLogicManager` | `static Current`, `static Global`. Holds every logic value (`GetData<TData>(ref uint identifier)`). Saved. |
| `LogicBoolSender`, `LogicFloatSender`, `LogicIntSender`, `LogicVector3Sender` | Hold a value. `LogicBoolSender.UpdateValue(bool)` and `ReadValue()`. |
| `LogicBoolReceiver` | Reacts to a bool sender: `IsActive`, `event UnityAction<bool> Changed`, `Activated`, `Deactivated`. |
| `LogicGateReceiver`, `LogicSumIntReceiver`, `LogicSumFloatReceiver` | Combine several senders. |
| `LogicFloatThresholdReceiver`, `LogicIntThresholdReceiver`, `LogicFloatRangeReceiver`, `LogicIntRangeReceiver`, `LogicIntToBool` | Turn numbers into on and off. |
| `LogicFloatChangeOnBool`, `LogicFloatReset` | Change or reset a float over time. |
| `PositionProvider` | A saved position (local or world) that logic can move. |

Senders and receivers find their manager in `InitializeAsServer` (a parent `GlobalLogicManager`, or the global one).

`LogicBoolReceiver.Deactivated` adds and removes its handler on the activate event, not the deactivate one. A handler you add to `Deactivated` runs when the receiver turns on. Use `Changed` and check the value:

```csharp
public static void Watch(LogicBoolReceiver receiver)
{
    receiver.Changed += isOn => MelonLogger.Msg($"{receiver.name} is now {(isOn ? "on" : "off")}");
}
```

## Fuse

`Fuse : NetworkEntityBehaviour`, top level. Burns down over `fuseTime` once lit, then raises `finishedOnServer` (explosives use this). An `IFlammable`, so fires and sparks can light it.

| Member | What it does |
| --- | --- |
| `void TryLight()`, `void Unlight()`, `void ToggleLight(bool isLit)` | Server only. Unlighting resets it to full length. |
| `bool IsLit`, `bool IsFinished { get; }` | |

A lit fuse marks its pickup transient and can block docking while lit. Its state is saved.

## See also

- [Overview](overview.md)
- [Crafting](crafting.md)
