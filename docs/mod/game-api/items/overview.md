---
title: Items, interaction and damage
description: How hands grab things, how items sit in docks and bags, and how hits turn into damage, with the side each part runs on.
sidebar_position: 1
---

# Items, interaction and damage

This area covers everything a hand touches: picking things up, belts and bags, item wear, buttons and levers, weapons, hits, health and what happens to your items when you die. All of it lives in `Root.Township`. Many types have no namespace; the rest are in `Alta.Inventory`, `Alta.Impact`, `Alta.Character`, `Alta.QuickAccessActions` and `Alta.Pages`.

## The big picture

- **Hands are `Interactor`s.** Each hand of each player has one. When you squeeze grip, it looks for the best `Interactable` it overlaps and starts an interaction with it.
- **Almost everything you can hold is a `Pickup`.** `Pickup` is an `Interactable` with a rigidbody, grab points, an `Item` definition and a joint to the hand.
- **Belts, the back slot, bag slots, shelves and pouches are `PickupDock`s.** A dock is also an `Interactable`. While an item is docked, you grab the dock and it hands you the item.
- **Weapons and tools are `ImpactTool`s, and anything that can be hit has `ImpactDetector`s.** A hit becomes an `ImpactHit`, which a `HealthObject` turns into damage.

## Who decides what

The game trusts clients more than you might expect. In short:

| What | Decided by | Notes |
| --- | --- | --- |
| Grabbing and letting go | The grabbing player's client | It sends the grab; the server only checks that the hand belongs to the sender and that the player is alive. No distance check. |
| Putting an item in a dock | The client, then the server checks | The server runs `PickupDock.CheckAllowed` and sends a correction if it refuses. |
| Splitting stacks, pouches, quantities | Server | Clients ask; the server spawns pouches and keeps `QuantityStored`. |
| A held weapon hitting a creature, tree or rock | The wielder's client | It works out the hit and sends `SyncImpact`. The server checks only that the sender last held the tool. |
| A creature's weapon hitting a player | The victim's client | Same message, other direction. |
| A player hitting a player | Server | The server resolves PvP hits itself. |
| Damage, health, death, durability, embedding | Server | Clients see the results through stat sync and entity messages. |
| Fall damage | The falling client reports the drop height | The server deals the damage. |

So a server mod sees every grab, dock and hit, but it sees most of them after a client already acted.

All of this was checked against the server build that Tavern servers run (assembly 0.0.39.2). For the classes in this area it's the same code as the client download, so these server checks are the only ones there are.

Numbers marked "asset values" come from the game's prefabs and settings assets in build main-1.7.2.1.42203. They're a few examples. The [reference tables](../reference/overview.md) list every item, material and durability setting.

Everything in this area runs on Unity's main thread, from Unity callbacks (`Update`, `LateUpdate`, collisions) and network message handlers. The few `async` methods (`PlayerHealth.GrantInvincibilityToImpacts`, the start delay on `PhysicalButton`) use `Task.Delay` and carry on through Unity's synchronisation context, so also on the main thread. See [Impacts and hit detection](impacts.md) and [Interactor and hands](interactor-and-hands.md) for the details.

## Pages in this area

| Page | What's on it |
| --- | --- |
| [Interactable](interactable.md) | The base class for anything a hand can interact with. Events, filters, forwarding, channels. |
| [Interactor and hands](interactor-and-hands.md) | Hands, `Controller`, how a grab is picked, how grabs are networked, giving items from the server. |
| [Pickup](pickup.md) | Things you can hold. Joints, weight, docking events, breaking. |
| [Grab points and hand-touch points](grab-points.md) | `GrabPoint` (where a hand holds an item) and `HandHoverPoint` (hold your hand on it to activate). |
| [Docks](docks.md) | `PickupDock`, stacks, `CheckAllowed`, filters, dock settings. |
| [Player inventory](player-inventory.md) | Hands, back slot, belt slots, bags, pouches and `PickupContainer`. Reading and filling a player's inventory. |
| [Items and materials](items-and-materials.md) | `Item` definitions, tags, `PhysicalMaterial` and `PhysicalMaterialPart`. |
| [Durability](durability.md) | `DurabilityModule`: wear, stages, breaking. |
| [Embedding](embedding.md) | `Embeddable`: arrows and blades that stick into things. |
| [Impacts and hit detection](impacts.md) | `ImpactTool`, `ImpactDetector`, `ImpactHit`, how a swing becomes a hit and who works it out. |
| [Health and damage](health-and-damage.md) | `HealthObject`, `PlayerHealth`, `DamageData`, damage sources and multipliers, `AOEDamage`. |
| [Death and items](death-and-items.md) | What happens to held and docked items when a player is downed and dies. |
| [Buttons and levers](buttons-and-levers.md) | `PhysicalButton`, `Lever` and friends. |
| [Quick access menu](quick-access-menu.md) | The wrist menu and summoned action items. |
| [Pages and books](pages-and-books.md) | Recipe pages, books and the town's shared page list. |

Spawning in general is in [Spawning](../world/spawning.md). Item-specific spawning (into a dock, as a pouch) is on [Player inventory](player-inventory.md).

## Other types in this area

These exist and you may run into them. They're not covered in depth.

| Type | What it is |
| --- | --- |
| `MultiHandPickup`, `CapPickup` | `Pickup` subclasses for two-handed items and caps. |
| `PullPickup`, `TelescopicPickup`, `RotatePickup`, `MovePickup`, `WheelGrab`, `RopeGrab` | Behaviours on pickups that slide, extend, turn or are pulled along a path. |
| `SpawnerGrab` | Grabbing it spawns a fresh item into your hand (a dispenser). |
| `AssistGrabInteractable`, `GrabAssistController` | The grab assist setting: reaching for things a little out of range. Created per hand only when the setting is on. |
| `LongHoldInteractable` | An interactable you must hold for a while. |
| `InteractionForwarder` | An interactable that passes the grab on to another one. |
| `FakePickup` | An `Interactable` that looks like a pickup but isn't one. |
| `PickupHolder` | Holds one pickup in place (server decides, synced). |
| `PickupArea` | Tracks the pickups inside a trigger. |
| `HoverPickup` | Floats a pickup back to a target spot when it's let go. |
| `PickupDecay` | Server-side decay timer for pickups, paused while held or docked. |
| `ThrowablePickup` | Base for custom throw behaviour (`ThrowAlignHelper`). |
| `PlayerInteractionManager`, `PlayerInteractionRestrictor` | Server-side per-player charge counters ("you can take 3 of these"). |
| `HeldPickupHandler`, `PickupBasedSkill`, `PowerHit` | Skills that read how you use a held item. |
| `Chest`, `Lock`, `KeyItem`, `LockableHinge` | Lockable storage in `Alta.Inventory`. |
| `CommunalStorage`, `StorageOrganizer` | Shared storage in `Alta.Inventory`. |
| `AutomaticDockArea`, `RejectDockArea` | Areas that dock or refuse items dropped into them. |
| `DockByDefault`, `PickupDockPedestalSpawn`, `EmptyDockAfterTimePeriod` | Docks that start filled, refill or empty themselves. |
| `ImpactSystemHitManager` | Lets a client subscribe to the server's hits (debug hit display). |
| `DamageDisplayer`, `DamagePopup`, `HitboxVisualizer` | Damage numbers and hitbox debug views. |
| `FakePlayerHealth` | A `HealthObject` for training targets. |
| `Belt` | A drive belt between pulleys in mechanisms. Not the player's belt. |
