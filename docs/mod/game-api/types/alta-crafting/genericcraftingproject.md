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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`IProject`](/mod/game-api/types/alta-crafting/iproject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingProject("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | <span className="api-desc">Creates a `GenericCraftingProject` from `station` and `recipe`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-levelledpieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"[][] levelledPieces"}</code> | <span className="api-desc">The pieces, grouped by level.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; set; }"}</code> | <span className="api-desc">The level currently being filled.</span> |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; set; }"}</code> | <span className="api-desc">True once every piece on the last level is complete.</span> |
| <Link id="m-mappedpieces" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> MappedPieces { get; private set; }"}</code> | <span className="api-desc">All the project's pieces, keyed by piece hash.</span> |
| <Link id="m-recipe" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" Recipe { get; private set; }"}</code> | <span className="api-desc">The recipe being built.</span> |
| <Link id="m-station" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" Station { get; private set; }"}</code> | <span className="api-desc">The station this project is on.</span> |

## Methods

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canremoveatlevel" /><code>{"private bool Alta.Crafting.IProject.CanRemoveAtLevel(int level)"}</code> | <span className="api-desc">Whether a piece at the given level can be taken out, given the current level and whether the next level has anything in it.</span> |
| <Link id="m-clear" /><code>{"private void Alta.Crafting.IProject.Clear(bool isReturningMaterials)"}</code> | <span className="api-desc">Clears every piece, spawning refuse for filled pieces if materials are being returned.</span> |
| <Link id="m-fail" /><code>{"private void Alta.Crafting.IProject.Fail(int hash, bool isCritical)"}</code> | <span className="api-desc">Empties a failed piece and plays its destroy effect. A critical fail can also pop other pieces on that level.</span> |
| <Link id="m-reevaluatelevel" /><code>{"private void Alta.Crafting.IProject.ReevaluateLevel()"}</code> | <span className="api-desc">Works out the current level from which pieces are complete, enabling or disabling pieces to match.</span> |
| <Link id="m-setmaxlevel" /><code>{"private void Alta.Crafting.IProject.SetMaxLevel()"}</code> | <span className="api-desc">Sets the current level to the last one.</span> |
| <Link id="m-setpiececomplete" /><code>{"private void Alta.Crafting.IProject.SetPieceComplete(int hash, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" complettingPlayer)"}</code> | <span className="api-desc">Marks progress after a piece completes. Unlocks the next level, or completes the project and counts it for tasks.</span> |
| <Link id="m-setupresult" /><code>{"private void Alta.Crafting.IProject.SetupResult("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> | <span className="api-desc">Copies each piece's material onto the matching part of the crafted result.</span> |
| <Link id="m-syncdestroyeffect" /><code>{"private void Alta.Crafting.IProject.SyncDestroyEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Network sync for a piece's destroy effect. Clients play it when they read it.</span> |
| <Link id="m-syncpiece" /><code>{"private void Alta.Crafting.IProject.SyncPiece("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Network sync of one piece's state, by piece hash.</span> |
| <Link id="m-updaterenderers" /><code>{"private void Alta.Crafting.IProject.UpdateRenderers(int rangeLevel)"}</code> | <span className="api-desc">Passes the viewer's distance level to every piece so it can update its renderers.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingProject`:

<div className="api-used-in">

[`GenericCraftingRecipe.InitializeProject`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-initializeproject).

</div>
