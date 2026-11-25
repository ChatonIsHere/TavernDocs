---
title: Pickup
description: The component on everything you can hold, with its grab, dock and break events and what runs on which side.
sidebar_position: 4
---

# Pickup

`Pickup` in `Root.Township` (no namespace). An `Interactable`. Runs on both sides; docking on release starts on the holder's client, breaking is the server's.

A `Pickup` is anything a hand can hold: tools, logs, ore, food, bags, pouches. It owns the rigidbody, the grab points, the joint to the hand and the link to the item's definition (`Item`). Subclasses include `MultiHandPickup` (needs several hands), `CapPickup`, `KeyItem` and `DockableJoints`.

## Getting one

- `entity.CommonPickup` on a `NetworkEntity` (the entity's main pickup, or null).
- `interactor.InteractingWith as Pickup`, or `controller.TryGetHeldPickup(out var pickup)`, for what a hand holds.
- `dock.DockedPickup` for what sits in a dock.
- `GetComponent<Pickup>()` / `GetComponentInParent<Pickup>()` from a collider you hit.

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `Item Item { get; set; }` | The item definition: name, tags, weight, stack size. | See [Items and materials](items-and-materials.md). |
| `PickupDock Dock { get; }` | The dock it's in, or null. | |
| `bool IsDocked { get; }` | `Dock != null`. | |
| `Rigidbody Rigidbody { get; }` | Its rigidbody. | A pickup with none can't be grabbed. |
| `NetworkRigidbody NetworkRigidbody { get; }` | Syncs its physics. | Networking area. |
| `GrabPoint[] GrabPoints { get; }` | Where hands may hold it. | See [Grab points](grab-points.md). |
| `GrabPoint BestGrab { get; }` | The grab point the last assessment picked. | |
| `PickUpJointType JointType { get; }` | How it's joined to the hand: `FixedJoint`, `SpringJoint`, `VelocityJoint` (default), `CustomFixedJoint`, `EmptyJoint`, `RegularUpdateFixedJoint`. | `EmptyJoint` items don't move to the hand. |
| `PickupJoints JointManager { get; }` | Makes and breaks the hand joints. | |
| `DockArray SubDocks { get; }` | Its own slots, for bags and pouches. Null for most items. | See [Player inventory](player-inventory.md#bags). |
| `bool IsPouch { get; }` | True for the stack pouch item. | |
| `Item GetPouchItem()` | For a pouch, what's inside. | |
| `float RawWeight { get; }` | `Item.Weight`. | |
| `float PhysicalWeight { get; }` | Raw weight times the material's weight multiplier. | |
| `float TotalWeight { get; }` | Itself, crafted parts, and everything in its sub docks. | Feeds the player's carry weight. |
| `PhysicalMaterialPart PhysicalMaterial { get; }` | Its material, if it has one. | |
| `DurabilityModule DurabilityModule { get; }` | Its wear, if it has any. | See [Durability](durability.md). |
| `CraftingPart CraftingPart { get; }` / `bool IsCrafted { get; set; }` | Crafting data. | Crafting area. |
| `bool IsSwingable { get; }` / `BlockLevel BlockLevel { get; set; }` | Combat flags. `BlockLevel` decides whether it blocks hits. | |
| `bool IsDockingBlocked { get; set; }` | Stops it docking when let go. | |
| `bool IsTransient { get; set; }` | Marks a temporary pickup. Most docks refuse these. | |
| `LootValue CurrentValue { get; set; }` | Trade value. | |
| `PickupDock.AllowedResult DockInto(Interactor, PickupDock, int quantity, bool isInstantMovementForced = false)` | Puts it in a dock. | See [Docks](docks.md#docking-from-code). |
| `void Undock(Interactor, bool isScalingBack, int quantity)` | Takes it out of its dock. | |
| `void Break()` | Breaks it: effects on clients, destroys it on the server. | |
| `void AffectDurability(float)` | Raises `OnAffectDurability`. Only the server listens. | |
| `bool CheckDockFilter(Interactor, PickupDock)` | Runs its `DockFilter`. | |
| `void EnsureBestGrabFound(Interactor)` | Picks the grab point for a hand, using dock grab memory when there is one. | Good hook for custom grips. |
| `void SetupGrabPoint(Interactor, GrabPoint)` | Forces the grab point for the next grab. | |
| `void ReplaceWith(Pickup)` | Moves every hand holding this onto another pickup. | Used when an item turns into another (cooking, crafting). |

### On common items

Asset values (build main-1.7.2.1.42203): swords, the greataxe, the pick and arrows use `VelocityJoint` (2); bags use `RegularUpdateFixedJoint` (5). All of these have `isTightGrab` on. Swords and the greataxe are `isSwingable` with `BlockLevel` `BlockPhysicalOnly`; bags, the pick and arrows are `CantBlock`.

## Events

| Event | When | Side |
| --- | --- | --- |
| `InteractionStarted` / `InteractionEnded` (from `Interactable`) | A hand takes hold or lets go. | Every machine that applies the grab. |
| `event PickupHandler PickupGrabbed` | After the grab is set up and the item is in the hand. `delegate void PickupHandler(Pickup, Interactor)` | Same. |
| `event Action<Interactor, Pickup, PickupDock> Docked` / `Undocked` | It went into or out of a dock. The interactor is null when code did it. | Every machine; the server is the one that counts. |
| `event PickupDockInteractionHandler PreDocked` | Just before docking. | Same. |
| `event PickupDockFilter DockFilter` | Lets you refuse a dock for this item. `delegate void PickupDockFilter(Interactor, PickupDock, ref bool result)` | Checked by `PickupDock.CheckAllowed`, which only has the last word on the server. |
| `event Action WeightChanged` | Something in its sub docks changed weight. | |
| `event Action<float> OnAffectDurability` | A hit wore it down. | `DurabilityModule` subscribes on the server only. |
| `PickupEvent BreakEvent` | It broke. | |

On the server, a grab by a player also broadcasts a `PlayerGrabbedPrefabEvent` (`ATT.EventBus.TownshipEvents`) on the game's event bus, with the player and the grabbed prefab. The micro tutorial listens to it.

## What a grab does

`Pickup.Interact` runs when a hand takes hold, on every machine that applies the grab:

1. Records the hand and the holder (base `Interactable.Interact`).
2. Takes it out of its population (so a spawner stops counting it) and makes the rigidbody non-kinematic.
3. Picks the grab point. For a docked item with grab memory, the hand goes back to where you last held it.
4. Undocks it if it was docked.
5. Makes the hand's entity its chunking parent, so it travels with the player.
6. Moves it to the hand (it snaps across if it's far away), applies the grab point and creates the joint.
7. On the holder's client, starts looking for docks the item hovers over.
8. Raises `PickupGrabbed`.

`Pickup.FinishInteraction` undoes this. If the hand that let go is the local player's and the item is over a dock that accepts it, it docks (`TryDock`). Otherwise it falls, and a client takes over its physics for a moment so the throw looks right on everyone's screen.

## Hooking it

Log every grab on the server:

```csharp
[HarmonyPatch(typeof(Pickup), nameof(Pickup.Interact))]
static class LogGrabs
{
    static void Postfix(Pickup __instance, Interactor interactor)
    {
        if (!NetworkSceneManager.IsServer) return;
        var player = interactor.Controller?.PlayerController?.NetworkPlayer;
        if (player == null) return;
        MelonLogger.Msg($"{player.UserInfo.Username} picked up {__instance.Entity.OriginalName}");
    }
}
```

`MultiHandPickup` overrides `Interact` and `FinishInteraction` but calls the base, so this patch still sees it.

- `Pickup.EnsureBestGrabFound(Interactor)` decides the grab point. A prefix that calls `SetupGrabPoint` and returns false gives an item your own grip; the Portal Gun mod does this so dock grab memory doesn't override its grip.
- `Pickup.Break()` runs on the server first, then on clients through the `PickupBreak` message. Check the side.
- `Pickup.Interact` also runs for grabs replayed from other players, so on a client it fires for remote players too. Compare `interactor.IsLocal` if you only want the local player.

:::warning[Sounds are client only]
Grab and let-go sounds are hooked up in `OnEnable` only when the game isn't headless. A server never plays them, and a headless client (a bot) never subscribes them. Docks are different: see [Docks](docks.md#headless-traps).
:::

## See also

- [Grab points and hand-touch points](grab-points.md)
- [Docks](docks.md)
- [Interactor and hands](interactor-and-hands.md)
