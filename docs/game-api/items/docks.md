---
title: Docks
description: PickupDock, the slot type behind belts, the back slot, bag slots, shelves and pouches, with stacking, CheckAllowed and the server's role.
sidebar_position: 6
---

# Docks

`Alta.Inventory.PickupDock` in `Root.Township`. An `Interactable`. Runs on both sides: clients dock and undock straight away, the server checks and owns the quantities.

A dock is a slot an item snaps into. The player's hips, belt and back are docks; so are a bag's slots, the slots on shelves, crates and racks, and the inside of a pouch. One dock holds one kind of item, possibly as a stack.

Get one from the object (`GetComponent<PickupDock>()`), from a pickup (`pickup.Dock` for where it is, `pickup.SubDocks` for its own slots) or from a player (see [Player inventory](player-inventory.md)).

## How a dock holds things

- **Only one real item.** A stack of 12 flint in a dock is one `Pickup` (`DockedPickup`) plus a number (`QuantityStored`). When the server docks another of the same kind, it destroys the incoming item and adds one. When one is taken out, the server spawns a new copy from saved data to sit in the dock. So the docked `Pickup` object can change under you; keep the dock, not the item.
- **The dock is what you grab.** A docked item has `IsInteractable` off and forwards to its dock. The dock is interactable (if its settings say it's grabbable), and its `CheckForward` hands the grab to the docked item.
- **Only a hard grab works.** `AssessScore` refuses a local hand unless `RawInput.HardGrab` is on.
- **Stacks come out as pouches.** Taking more than one item out spawns a pouch holding them (server). See [Player inventory](player-inventory.md#pouches-and-pickupcontainer).

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `Pickup DockedPickup { get; }` | The item in it, or null. | |
| `bool HasDockedPickup { get; }` | An item that isn't being destroyed. | |
| `Item dockedType` | Public field: the kind of item in it. | Stays set while the quantity is above 0. |
| `int QuantityStored { get; set; }` | How many. | The server's value is the truth; clients get it through the `SyncA` message. Setting it raises `QuantityChanged`. |
| `int MaxQuantityCurrentlyPossible { get; }` | Stack limit from the item's `DockedStackSize` times the settings' `MaxContainedStacks`. | |
| `bool CanDockAmount(int)` | Room for that many more. | |
| `float TotalWeight { get; }` | Item weight times quantity. | |
| `PickupDockSettings Settings { get; }` | The dock's rules. | A shared asset. See below. |
| `Transform SnapPoint { get; }` | Where docked items sit. | |
| `Collider PickupRange { get; }` | The trigger a hand must touch to take from it. | Switched off on headless builds. |
| `bool IsOwnedByPlayer { get; }` / `PlayerController PlayerController { get; }` | Set for docks on a player's body. | Other players' hands get nothing from `CheckForward`. |
| `int HoverCount { get; set; }` | Items currently hovering over it, client side. | Drives the grow-on-hover effect. |
| `AllowedResult CheckAllowed(Interactor, Pickup)` | Whether one of this pickup may go in. | |
| `AllowedResult CheckAllowed(Interactor, Pickup, int quantity, out PickupDock finalDock)` | The full check. `finalDock` can be a slot inside the docked bag. | |
| `AllowedResult CheckAllowed(Item)` | Only the item and tag rules. | |
| `Pickup UndockAll(Interactor interactor = null, Transform target = null)` | Empties it. On the server, more than one comes out as a pouch. | Returns what came out. |
| `bool UndockQuantity(int quantity, out Pickup)` | Takes that many out (one as itself, more as a pouch). | Server. |
| `bool UndockMaximum(out Pickup, int max = int.MaxValue)` | Takes up to one stack out. | Server. |
| `bool UndockUnlimitedPouches(int, out List<Pickup>)` | Takes many, as several pouches. | Server. |
| `void UndockTo(Transform)` | Empties it at a spot. | Server only. |
| `void DestroyAmount(int)` / `DestroyAmountToEmpty()` | Destroys items from the stack. | Server only; does nothing on a client. |
| `MethodSync SyncQuantity { get; }` | Sends the quantity. | |

`AllowedResult` values: `Ok`, `NoDock`, `NoPickup`, `NoItem`, `FilterFail`, `EmptyPouch`, `WrongItem`, `NotIncludedItem`, `NotIncludedTag`, `ExcludedTag`, `NoHandAllowed`, `CustomFail`, `Disabled`, `OtherPlayerDockFail`, `CraftingSizeInvalid`, `CraftingStackableInvalid`, `WrongCraftedItemFail`, `CraftedItemFail`, `CumbersomeItemFail`, `DockingInterferedWith`, `TransientPickupFail`, `Full`, `PartOfPickup`.

## Events

| Event | Signature | When |
| --- | --- | --- |
| `PreItemDocked` | `PickupDockInteractionHandler(Interactor, Pickup, PickupDock)` | An item is about to be placed. |
| `ItemDocked` | same | An item went in. The interactor is null when code did it. |
| `ItemUndocked` | same | An item came out. |
| `QuantityChanged` | `QuantityChangeHandler()` | The count changed. |
| `DockFilter` | `DockFilter(Interactor, Pickup, ref bool result)` | Lets you refuse an item. Set `result = false`. |
| `HoverCountChanged` | `PickupDockHoverHandler(PickupDock, int oldCount)` | Hover effect, client side. |
| `OnSubDocked` / `OnSubUndocked` | `SubDockHandler(Interactor, PickupDock subDock, Pickup, PickupDock topDock)` | The item this dock is part of (a bag, for a bag slot) went into or out of another dock. |
| `UpdatedPlayerOwnership` | `PickupDockHandler(PickupDock)` | The dock was tied to a player. |
| `WeightChanged`, `UpdateContent` | `Action` | Weight or contents changed. |

The dock events fire on every machine that applies the dock. Only on the server do they line up with the real quantity.

## What CheckAllowed checks

In order: the dock isn't part of the pickup itself; transient pickups; whether hands may dock here at all (`IsHandDockingAllowed`); the item exists; the dock's `DockFilter`; for a pouch, its contents instead of the pouch; stacking rules; disabled pickups; player-owned docks while either player is in combat; included items, included and excluded tags; failing that, a free slot inside the bag already in the dock (`IsAllowingSubDocking`); room in the stack; crafted items matching; `IInterfereWithDocking` parts (two stacked items must have the same material); crafted items allowed; the pickup's own `DockFilter`; the item's crafting size against the dock's minimum and maximum.

The tag and size checks are what keep a sword off the small belt slots and a greataxe off the hips. See [the player's slots](#the-players-slots) for the real numbers.

:::note
Only the combat check stops another player putting things into your docks. Taking from them is blocked separately (`PlayerDocks` and `CheckForward`). From the code it looks like a player can put an item into someone else's belt or back slot when neither is in combat.
:::

## Who decides

A client docks an item as soon as the player lets go over the dock, without waiting. It sends a `Docking` message. The server checks that the sender owns the hand, runs `CheckAllowed` and docks it on its copy. If that fails, it logs `Failed to dock ... on server` and sends the client back where the item really is.

The client runs `CheckAllowed` too, to find a dock under the item it's holding (`PickupDockingChecker`), but once it has picked one, a failed check doesn't stop the dock on a client. Only the server's answer counts.

## Docking from code

On the server, pass a null interactor. The server's check still applies:

```csharp
public static PickupDock.AllowedResult StowHeld(PlayerCharacter character, PickupDock dock, bool left)
{
    Interactor hand = (left ? character.LeftController : character.RightController).Interactor;
    if (!(hand.InteractingWith is Pickup pickup)) return PickupDock.AllowedResult.NoPickup;
    PickupDock.AllowedResult allowed = dock.CheckAllowed(null, pickup);
    if (allowed != PickupDock.AllowedResult.Ok) return allowed;
    hand.StopInteract(isFromServer: false, isForced: true);
    return pickup.DockInto(null, dock, 1);
}
```

Let go of a held item first, with a forced stop. From reading the code, a client that still holds the item answers a server dock by undocking it again, so docking a held item without dropping it gets undone.

`CheckAllowed(null, ...)` skips the `IsHandDockingAllowed` rule, since there's no hand, so code can fill docks that players can't.

To make a dock refuse something:

```csharp
public static void OnlyAccept(PickupDock dock, Item allowed)
{
    dock.DockFilter += (Interactor interactor, Pickup pickup, ref bool result) =>
    {
        if (pickup.Item != allowed) result = false;
    };
}
```

Add it on the server for it to take effect. Add it on clients too, or players see the item snap in and then jump back out.

## PickupDockSettings

`Alta.Inventory.PickupDockSettings` is a `ScriptableObject` asset that many docks share. Its read-only properties are the dock's rules: `IncludedTags`, `ExcludedTags`, `IncludedItems`, `IsHandDockingAllowed`, `IsStackingDisabled`, `IsStackingEnforced`, `IsMultiStackingAllowed`, `MaxContainedStacks`, `MinimumCraftingSize`, `MaximumCraftingSize`, `IsAllowingSubDocking`, `SubDockPriority`, `IsAllowingCraftedItems`, `IsAcceptingTransientPickups`, `IsGrabbable`, `IsSnapping`, `AllowsCrafting`, `HaveInteractorMemory`, `AllowContainerInteraction`, `IsDockingAutomatic`, and the sounds and visuals.

The fields behind them are private. If you change one (with `Traverse` or att-stubs), you change every dock that uses that asset, on that machine only.

### The player's slots

Asset values (build main-1.7.2.1.42203). The player prefab is `VR Player Character New`.

| Setting | `Back Slot` | `Belt Side` | `Belt Front` |
| --- | --- | --- | --- |
| Used by | The back slot | The two tool slots (`Tool Slot Right`, `Tool Slot Left`) | The two pouch slots (`Pouch Slot Right`, `Pouch Slot Left`) |
| `includedTags` | Back, Tool Handle | Small, Medium Tool, Tool | Small, Medium Tool |
| `minimumCraftingSize` / `maximumCraftingSize` | 4 / none | none / 8 | none / 1 |
| `isAllowingSubDocking` | on (items go into the worn bag) | off | off |
| `maxContainedStacks` | 1 | 1 | 1 |
| `dockedScaleMultiplier` | 1 | 0.667 (Small items shrink) | 0.667 (Small and Medium Tool items shrink) |
| `isPhysicalTriggersOnly` | off | on | off |
| `isAllowingCumbersomeItems` | on | off | off |
| `haveInteractorMemory` | on | on | on |

Each of the four belt docks also has a `PickupContainer` with `pickupDuration` 0.5, breakable, halving.

What that means for some items (sizes and tags from their `Item` assets):

| Item | Tags | Size | Back | Tool slot | Pouch slot |
| --- | --- | --- | --- | --- | --- |
| Short Sword | Medium Tool, All, Tool | 4 | no (no Back or Tool Handle tag) | yes | no (too big) |
| Rusty Greataxe | Back, All, Medium Tool | 10 | yes | no (too big) | no |
| Wooden Bag | Back, Wall Hangable, Bag | 4 | yes | no | no |
| Stick | Small, All, Fuel, Torch | 1 | no | yes | yes |

A crafted item is measured by its `CraftingPart.Size` instead of the item's size.

### Bags, pouches and storage

| Settings asset | Used by | `includedTags` | `maxContainedStacks` |
| --- | --- | --- | --- |
| `Standard Storage Dock` | The 6 slots of a Wooden Bag, 9 slots of a Bag | All | 2 |
| `Hoarder Storage Dock` | 16 slots of a Hoarder Bag | All | 1 |
| `Large Roll Dock` | 2 more slots on a Hoarder Bag (18 in all), 1 on a Bag | Large Roll | 1 |
| `Ore Storage Dock` | The 4 slots of an Ore Bag | Ore, Ingot (and the items Stone, Sandstone Stone, Crystal Gem Blue, Crystal Shard Blue) | 3 |
| `Forage Storage Dock` | 5 of the 9 slots of a Forage Basket Bag (the other 4 are standard) | Cookable, Forage | 4 |
| `Pouch` | The dock inside a pouch | All | 1 (scale 0.5) |
| `Shelf Storage` | Shelves | All | 3 |

`maxContainedStacks` times the item's `DockedStackSize` is how many fit in one slot: a Standard Storage slot holds 100 sticks (stack size 50) or 60 flint (stack size 30). Bags have no size limit on their slots.

There are 69 `PickupDockSettings` assets in all; the reference tables list every one.

## Hooking it

- `PickupDock.CheckAllowed(Interactor, Pickup, int, out PickupDock)` is the one place every dock decision goes through. A postfix on the server can change `__result`. It's called often on clients while an item hovers, so keep it cheap there.
- `PickupDocker.DockInto` (`Alta.Inventory`) does the docking for a pickup; `Pickup.DockInto` calls it. The private `PickupDocker.RequestDock` is the network handler.
- The explicit interface methods `IDockable.Dock` and `IDockable.Undock` on `PickupDock` place and remove the item and update the quantity. Patch them by their full name, for example `AccessTools.Method(typeof(PickupDock), "IDockable.Dock")` (`IDockable` has no namespace).

### Headless traps

Rover, a headless bot client, found two:

- `PickupDock.Awake` switches `PickupRange` off when the game is headless. A headless client can't take anything out of a dock until you switch it back on.
- The dock sounds (`ItemDockedSound`, `ItemUnDockedSound`, `DockHoverSound`, all private) throw without audio. The undock sound runs in the middle of a grab, so the item leaves the dock without a joint to the hand and falls. A Harmony finalizer that returns null silences them.

A dedicated server isn't affected by the sounds: they're only hooked up when there's a local player.

## See also

- [Player inventory](player-inventory.md)
- [Pickup](pickup.md)
- [Items and materials](items-and-materials.md)
