---
title: "GenericCraftingProject"
description: "The project in progress on a GenericCraftingStation: the recipe's pieces grouped into levels, where each level unlocks once the one before is complete."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingProject

A **class** in `Root.Township`, `Alta.Crafting`.

The project in progress on a `GenericCraftingStation`: the recipe's pieces grouped into levels, where each level unlocks once the one before is complete.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`IProject`](/game-api/types/alta-crafting/iproject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingProject("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station, "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | Creates a `GenericCraftingProject` from `station` and `recipe`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-levelledpieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"[][] levelledPieces"}</code> | The pieces, grouped by level. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; set; }"}</code> | The level currently being filled. |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; set; }"}</code> | True once every piece on the last level is complete. |
| <Link id="m-mappedpieces" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> MappedPieces { get; private set; }"}</code> | All the project's pieces, keyed by piece hash. |
| <Link id="m-recipe" /><code><Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" Recipe { get; private set; }"}</code> | The recipe being built. |
| <Link id="m-station" /><code><Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" Station { get; private set; }"}</code> | The station this project is on. |

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canremoveatlevel" /><code>{"private bool Alta.Crafting.IProject.CanRemoveAtLevel(int level)"}</code> | Whether a piece at the given level can be taken out, given the current level and whether the next level has anything in it. |
| <Link id="m-clear" /><code>{"private void Alta.Crafting.IProject.Clear(bool isReturningMaterials)"}</code> | Clears every piece, spawning refuse for filled pieces if materials are being returned. |
| <Link id="m-fail" /><code>{"private void Alta.Crafting.IProject.Fail(int hash, bool isCritical)"}</code> | Empties a failed piece and plays its destroy effect. A critical fail can also pop other pieces on that level. |
| <Link id="m-reevaluatelevel" /><code>{"private void Alta.Crafting.IProject.ReevaluateLevel()"}</code> | Works out the current level from which pieces are complete, enabling or disabling pieces to match. |
| <Link id="m-setmaxlevel" /><code>{"private void Alta.Crafting.IProject.SetMaxLevel()"}</code> | Sets the current level to the last one. |
| <Link id="m-setpiececomplete" /><code>{"private void Alta.Crafting.IProject.SetPieceComplete(int hash, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" complettingPlayer)"}</code> | Marks progress after a piece completes. Unlocks the next level, or completes the project and counts it for tasks. |
| <Link id="m-setupresult" /><code>{"private void Alta.Crafting.IProject.SetupResult("}<Link to="/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> | Copies each piece's material onto the matching part of the crafted result. |
| <Link id="m-syncdestroyeffect" /><code>{"private void Alta.Crafting.IProject.SyncDestroyEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Network sync for a piece's destroy effect. Clients play it when they read it. |
| <Link id="m-syncpiece" /><code>{"private void Alta.Crafting.IProject.SyncPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Network sync of one piece's state, by piece hash. |
| <Link id="m-updaterenderers" /><code>{"private void Alta.Crafting.IProject.UpdateRenderers(int rangeLevel)"}</code> | Passes the viewer's distance level to every piece so it can update its renderers. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingProject`:

[`GenericCraftingRecipe.InitializeProject`](/game-api/types/alta-crafting/genericcraftingrecipe#m-initializeproject).
