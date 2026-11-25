---
title: Player inventory
description: A player's hands, back slot and belt slots, bags and pouches, how to read them and how to put items in from the server.
sidebar_position: 7
---

# Player inventory

There's no inventory list in ATT. What a player carries is whatever sits in their hands and in the docks on their body, and in the docks of whatever sits there. This page shows where those are and how to read and fill them.

## Where things are

| Place | How to get it | Type |
| --- | --- | --- |
| Left and right hand | `character.LeftController.Interactor`, `character.RightController.Interactor` | `Interactor` (see [Interactor and hands](interactor-and-hands.md)) |
| Back slot | `character.BackDocks`, first entry | `PickupDock` |
| Hips and belt | `character.BeltDocks`, four entries (see below) | `PickupDock` |
| A bag's slots | `bag.SubDocks.TotalDocks` | `PickupDock` |
| A pouch's contents | The single dock in `pouch.SubDocks` | `PickupDock` |

`character` is an `Alta.Character.PlayerCharacter`. From a networked player that's `player.PlayerController as PlayerCharacter`, or `Player.PlayerCharacter` on the `Player` class. `BackDocks` and `BeltDocks` are `PickupDockGroup`s, which are `ComponentGroup<PickupDock>`: enumerable, with `Count` and `Components`.

:::note
`ComponentGroup<T>` implements interfaces from `Alta.Build`. Using `BackDocks` or `BeltDocks` from your mod needs a reference to `Alta.Build.dll` as well as `Root.Township.dll`.
:::

The four belt entries, in the group's order (asset values, build main-1.7.2.1.42203):

| Index | Object in the prefab | Settings | Takes |
| --- | --- | --- | --- |
| 0 | `Tool Slot Right` | `Belt Side` | Small, Medium Tool or Tool items up to size 8 (swords, tools) |
| 1 | `Pouch Slot Right` | `Belt Front` | Small or Medium Tool items up to size 1 (pouches, sticks) |
| 2 | `Pouch Slot Left` | `Belt Front` | same as 1 |
| 3 | `Tool Slot Left` | `Belt Side` | same as 0 |

`Alta.Character.Inventory` calls these entries left hip, left belt, right hip and right belt. Those names don't match the objects (its "right hip" is a pouch slot), so go by index or by `dock.Settings.name`. Rover's slot names follow `Alta.Character.Inventory`. See [Docks](docks.md#the-players-slots) for the full settings and which items fit where.

## Reading it

```csharp
public static IEnumerable<string> Describe(PlayerCharacter character)
{
    foreach (var (name, controller) in new[] { ("left hand", character.LeftController), ("right hand", character.RightController) })
        if (controller.TryGetHeldPickup(out var held))
            yield return $"{name}: {held.Entity.OriginalName}";

    PickupDock back = character.BackDocks.FirstOrDefault();
    if (back != null && back.HasDockedPickup)
    {
        yield return $"back: {back.DockedPickup.Entity.OriginalName}";
        if (back.DockedPickup.SubDocks != null)
            foreach (PickupDock slot in back.DockedPickup.SubDocks.TotalDocks)
                if (slot.HasDockedPickup)
                    yield return $"  bag: {slot.DockedPickup.Entity.OriginalName} x{slot.QuantityStored}";
    }

    PickupDock[] belt = character.BeltDocks.ToArray();
    for (int i = 0; i < belt.Length && i < BeltNames.Length; i++)
        if (belt[i].HasDockedPickup)
            yield return $"{BeltNames[i]}: {belt[i].DockedPickup.Entity.OriginalName} x{belt[i].QuantityStored}";
}
```

`BeltNames` is a `string[]` with your own names for the four entries, for example the object names above. Read quantities on the server: clients only learn them through sync. A pouch in a belt slot shows up as one pouch; its contents are in the pouch's own dock.

## Bags

A bag is a `Pickup` with its own slots: `pickup.SubDocks` is a `DockArray` (`Alta.Inventory`).

| Member | What it does |
| --- | --- |
| `IEnumerable<PickupDock> Docks` | Its own slots. |
| `IEnumerable<PickupDock> TotalDocks` | Its slots and those of nested dock arrays. |
| `int Count` / `int TotalCount` | How many slots. |
| `int QuantityStored` | Items in all slots. |
| `float CalculateWeight(Pickup)` | Weight of the contents. |
| `event Action WeightChanged` | Contents changed weight. |

Bags differ in size, so read the slots off the bag each time. Asset values for some bags:

| Bag | Slots | Item weight |
| --- | --- | --- |
| Wooden Bag | 6 (`Standard Storage Dock`, 2 stacks each) | 0.4 |
| Bag | 9 standard and 1 `Large Roll Dock` | |
| Hoarder Bag | 16 (`Hoarder Storage Dock`, 1 stack each) and 2 `Large Roll Dock` | 15 |
| Ore Bag | 4 (`Ore Storage Dock`, ores and ingots, 3 stacks each) | |
| Forage Basket Bag | 5 forage and 4 standard | |

The weight of what's inside counts too (`Pickup.TotalWeight`).

What Rover found about worn bags:

- **Putting in goes through the back slot.** Let go of an item at the back slot while a bag is in it, and the back dock passes it to a free slot in the bag (`IsAllowingSubDocking`; the slots' `SubDockPriority` and what they already hold decide which).
- **Taking out needs the bag off.** The bag's own slots can't be reached while it's on the back. A player takes the bag off with one hand and takes from it with the other.

## Pouches and PickupContainer

A stack outside a dock is a **pouch**: a small pickup (`CommonPrefabs.PouchItem`, prefab `CommonPrefabs.PouchPrefab`) with one dock inside holding the stack. `pickup.IsPouch` tells you, and `pickup.GetPouchItem()` says what's in it.

`PickupContainer` (no namespace, an `Interactable`) is the component that makes grabbing a stack work. It sits on pouches and on docks that hold stacks. When a hand grabs one:

- From a dock holding a stack, a quick grab takes one item. Holding the grab for `pickupDuration` (0.5 s on the player's belt docks and on pouches) takes the whole stack as a pouch.
- From a pouch held in your other hand, a quick grab takes one item. Holding the grab splits off half (when there are more than 3) into a new pouch.
- Holding two containers, one in each hand, and moving your hands moves items one at a time between them (the `PickupContainer` message, run by the server).
- When a breakable pouch drops to one item, the server destroys the pouch and the item is left (in your hand if you held the pouch).
- Letting go of a pouch over a dock empties the pouch into the dock and destroys the pouch.

Pouches are spawned by the server. A client asks with the `SpawnPouch` message; the server checks that the hand belongs to the sender and that the player is alive.

## Putting items in from the server

`SpawnHelper.SpawnDocked` spawns an item straight into a dock:

```csharp
public static bool GiveToBack(PlayerCharacter character, Item item, int count)
{
    if (!NetworkSceneManager.IsServer) return false;
    PickupDock back = character.BackDocks.FirstOrDefault();
    return back != null && SpawnHelper.SpawnDocked(item, count, SpawnData.Default, back, character.Entity.Chunk);
}
```

If a bag is on the back, the item goes into one of its slots. If the dock refuses it, `SpawnDocked` logs an error, leaves the item at the dock in the fallback chunk you passed, and returns false.

Other helpers in `SpawnHelper` (no namespace):

| Method | What it does |
| --- | --- |
| `bool SpawnDocked(Item, int count, SpawnData, PickupDock, Chunk fallbackChunk = null, Action<Pickup> preDockModify = null)` | Spawns `count` of an item into a dock. `preDockModify` runs before docking, for example to set a material. |
| `bool SpawnDocked(uint prefabHash, int count, ...)` | Same, by prefab hash. |
| `NetworkEntity SpawnPouchOrPickup(Item, int count, SpawnData, Chunk, Vector3 position, Quaternion rotation = default)` | A loose item, or a pouch of them if `count > 1` and it stacks. |

To put an existing item into a hand, see [Interactor and hands](interactor-and-hands.md#driving-hands-from-the-server). To move a held item into a slot, see [Docks](docks.md#docking-from-code). Spawning in general is in the world area.

## Alta.Character.Inventory

`PlayerCharacter.Inventory` is a small helper the micro tutorial uses:

| Member | What it does |
| --- | --- |
| `void DockHeldItemsToBack()` | If the back slot is empty, docks the left hand's item there, or else the right hand's. |
| `void DropHeldItems()` | Both hands let go. |
| `void DropHeldItems(IEnumerable<PickupTag> tags)` | Both hands let go of items with one of these tags (or with no `Item`). |

Its hand and dock stores are private. Not to be confused with `Alta.Console.Commands.Inventory`, which builds the console's inventory reply.

## Other inventory types

| Type | What it is |
| --- | --- |
| `Alta.Inventory.PlayerDocks` | On the body; adds an `InteractionFilter` to every dock so only the owner can take from them. |
| `PlayerDockDropper` | Empties a dock when the player's scale changes. |
| `Alta.Character.AccessibleDocks` | The accessibility option that moves belt docks to easier spots (local player). |
| `Alta.Character.DockPositionController` | Places belt docks for the body type. |
| `Alta.Inventory.CharacterDockManager` | A `ComponentGroup` of `PickupDockGroup`s. |

## See also

- [Docks](docks.md)
- [Death and items](death-and-items.md)
- [Interactor and hands](interactor-and-hands.md)
