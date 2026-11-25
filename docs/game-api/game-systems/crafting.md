---
title: Crafting
description: Joining parts with CraftingPart and JointSlot, generic crafting stations driven by recipe pages, and RaycastCrafter kits.
sidebar_position: 7
---

# Crafting

`Alta.Crafting` in `Root.Township`, plus the top-level `RaycastCrafter`. Server decides.

The game crafts in three different ways:

- **Joining parts.** You hold two parts together (a handle and a blade) and drop one; it snaps into a slot on the other. `CraftingPart`, `JointSlot`, `JointInsert`. There's no recipe list: what fits is decided by slot and insert types.
- **Generic crafting stations.** A recipe page goes into a station's dock, the station shows ghost pieces, and you fill each piece with the right material and nail it. `GenericCraftingStation`, `GenericCraftingRecipe`, `GenericCraftingProject`.
- **Raycast crafters.** A kit item that, when dropped onto a suitable surface, places itself or turns into another prefab. `RaycastCrafter`.

Smelting, cooking and chiselling have their own systems. See [Smelting and forging](smelting-and-forging.md), [Cooking](cooking.md) and [Farming, woodcutting and carpentry](farming-and-woodcutting.md).

## Joining parts

### CraftingPart

`Alta.Crafting.CraftingPart : NetworkEntityBehaviour`. On every part that can join or be joined. Get it with `pickup.CraftingPart` or `GetComponent<CraftingPart>()`.

| Member | What it does | Notes |
| --- | --- | --- |
| `JointSlot[] Slots { get; }` | Where other parts can go into this one. | |
| `JointInsert Insert { get; }` | How this part goes into others. Null if it can't. | |
| `CraftingPart ConnectedTo { get; }` | The part this one is inserted into. | |
| `CraftingPart GetTopLevel()` | The root of the assembly (the whole item). | |
| `virtual void AttemptCraft(JointSlot slot)` | Tries to insert this part into `slot`. On the server it connects; it also sends the request. | `ConfirmationCraftingPart` overrides it to wait for nailing. |
| `void Crafted(bool isLoad)`, `void Decrafted(bool isLoad)` | Raised on a join or split. | `Crafted` is called on the inserted part, the slot's part and the top-level part, so three times per join. |
| `void DisconnectFull()` | Splits this part off. | |
| `int Size { get; }`, `int PartCount { get; }` | Size and part count of the assembly. | |

The flow: when you hold a part in each hand, `CraftingOptions.Create` (client) works out which slots fit and previews them. Dropping one calls `AttemptCraft` with the best slot. The client's request reaches the server's private `AttemptCraft(IPlayer, Stream, uint)`, which checks the insert is free and calls `JointSlot.TryConnect`. The server then syncs the join to everyone.

### JointSlot

`Alta.Crafting.JointSlot : JointPoint`.

| Member | What it does | Notes |
| --- | --- | --- |
| `bool TryConnect(CraftingPart insertPart, bool isPlayingEffects)` | Joins `insertPart` here: parents it, attaches durability, raises `Crafted`, reports a `SpecificCraftTaskArgument` and syncs. | Runs on the server and again on each client from the sync. `isPlayingEffects` is false for parts that spawn or load already joined, and when an assembly is rebuilt after a replace. |
| `bool TryDisconnect(bool isPlayingEffects)` | Splits the inserted part out. | |
| `bool Supports(JointInsertType type)` | Whether an insert type fits this slot's types. | |
| `CraftingPart ConnectedPart { get; }`, `bool IsUsed { get; }` | What's in it. | |

On the server, a join also broadcasts an `ItemCraftedEvent` (part hashes and player) on the game's event bus, for the micro tutorials.

## Generic crafting stations

### GenericCraftingRecipe

`Alta.Crafting.GenericCraftingRecipe : SimpleHashedGeneralValue<GenericCraftingRecipe>`. An asset. Get one with `GenericCraftingRecipe.All`, or by the result with `static GenericCraftingRecipe GetRecipe(NetworkPrefab prefab)` (the result map is built once, on first use).

| Member | What it does |
| --- | --- |
| `GenericCraftingPieceDefinition[] Pieces { get; }` | The ghost pieces: each has a `source` `Item`, a `position`, a `level`, `isCritical`, nail settings and how much damage makes it pop. |
| `uint ResultHash { get; }` | The prefab spawned when done. |
| `SerializedTransform SpawnOffset { get; }` | Where the result appears. |
| `Dictionary<uint, int> PrefabQuantities { get; }` | Material counts by prefab hash, worked out on each call. |

`SimpleHashedGeneralValue` adds `IsDisabledOnSimpleServer` and `SimpleAll`.

### GenericCraftingStation

`Alta.Crafting.GenericCraftingStation : NetworkEntityBehaviour`. A station in the world.

- A page docked in its `recipeDock` (server, `OnPageDocked`) loads the page's `GenericCraftingRecipe` as a new `GenericCraftingProject`, unless pieces are already filled. Undocking the page clears an empty project and returns materials.
- Pieces fill in levels. When every piece of the last level is complete, `GenericCraftingProject` reports a `SpecificSpawnItemTaskArgument` for the result and marks the project complete.
- Grabbing the finished project (a fake interactable around the pieces) calls the private `SpawnResult` on the server: it spawns the result prefab, clears the project and loads the page's recipe again.
- Releasing a finished result back on a station (`GenericCraftingResult`) turns it back into a project, so it can be taken apart, unless something on it blocks decrafting.

| Member | What it does |
| --- | --- |
| `void TryAddPiece(int bestPieceKey, Action<GenericCraftingPiece> callback)` | Fills a piece. |
| `void UpdateProjectComplete(bool hasEffects = false)` | Syncs whether the project is done. |
| `void SetupProjectFromResult(GenericCraftingResult result)` | Rebuilds a project from a finished item. |

`GenericCraftingSettings` (global settings) holds the station's materials, effects and nail effects.

## RaycastCrafter

`RaycastCrafter : NetworkEntityBehaviour`, top level. On kit items.

When the last hand lets go and the item isn't docked, the server waits a frame, then raycasts `distance` metres in `direction` for a surface whose normal is within its limits. If it hits, it either places the item there (made kinematic) or replaces it with `prefabToReplaceWith`, and syncs the result. While held, clients show where it would land.

The server counts the rigidbodies within 0.1 m of the landing point. If 10 or more different entities are there, it kicks the player who dropped the kit ("Raycast crafter - placing too many on top of each other."), and then places it anyway.

`bool IsCrafted { get; }` says whether it's placed. `FireStatusRaycastCrafter` is a subclass for fires.

## Hooking it

- **Station results:** postfix the private `GenericCraftingStation.SpawnResult`; it returns the spawned `NetworkEntity`.
- **Joins:** `JointSlot.TryConnect` runs once per join (on each side). `CraftingPart.Crafted` runs three times per join, so it's a poor counter.
- **Recipes are assets.** To add a generic recipe you'd need a new `GenericCraftingRecipe` registered in `HashedGeneralValue`'s table, a page that carries it, and the result prefab on clients. Changing an existing recipe's result on the server only changes what spawns.

```csharp
[HarmonyPatch(typeof(GenericCraftingStation), "SpawnResult")]
static class StationResultPatch
{
    static void Postfix(NetworkEntity __result)
    {
        if (__result != null)
        {
            MelonLogger.Msg($"Station made {__result.Prefab.name}");
        }
    }
}

[HarmonyPatch(typeof(JointSlot), nameof(JointSlot.TryConnect))]
static class PartsJoinedPatch
{
    static void Postfix(JointSlot __instance, CraftingPart insertPart, bool isPlayingEffects, bool __result)
    {
        if (!__result || !isPlayingEffects || !NetworkSceneManager.IsServer)
        {
            return;
        }
        CraftingPart top = __instance.CraftingPart.GetTopLevel();
        MelonLogger.Msg($"{insertPart.Entity.Prefab.name} joined to {__instance.CraftingPart.Entity.Prefab.name} (item: {top.Entity.Prefab.name})");
    }
}
```

`SpawnResult` is private: the first patch names it by string, which works against the real game. The second uses public members only.

## Other types in this area

| Type | What it is |
| --- | --- |
| `JointInsert`, `JointInsertType`, `JointSlotType`, `JointPoint` | The two ends of a join and their type assets. |
| `ConfirmationCraftingPart` | A part whose join must be confirmed by nailing. |
| `AddonCraftingPart` | A part that shows an extra visual (`jointAddon`) while it's inserted. Client only. |
| `GenericCraftingPiece`, `GenericCraftingNail`, `NailSettings` | A station's ghost piece and its nails. |
| `GenericCraftingComponent` | A material that can fill a station piece. |
| `GenericAssemblyStation`, `GenericAssemblyPart` | A docking station (a `DecraftingComponent`) that tracks parts and chiselables around a docked part. |
| `DecraftingComponent`, `DecraftingDeck` | Taking things apart. The deck holds an item and splits it with a lever. |
| `CraftingTester` | Dev tool that builds every part combination. |

## See also

- [Smelting and forging](smelting-and-forging.md)
- The items area, for `Pickup`, `Item` and docks
