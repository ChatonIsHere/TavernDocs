---
title: "IProject"
description: "A recipe in progress on a generic crafting station, built level by level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IProject

An **interface** in `Root.Township`, `Alta.Crafting`.

A recipe in progress on a generic crafting station, built level by level. `GenericCraftingProject` is the only implementation.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`GenericCraftingProject`](/mod/game-api/types/alta-crafting/genericcraftingproject)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; set; }"}</code> | The level being built now. |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; set; }"}</code> | True when every piece of the last level is done. |
| <Link id="m-mappedpieces" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> MappedPieces { get; }"}</code> | Every piece, by hash. |
| <Link id="m-recipe" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" Recipe { get; }"}</code> | The recipe being built. |
| <Link id="m-station" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" Station { get; }"}</code> | The station it's on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canremoveatlevel" /><code>{"bool CanRemoveAtLevel(int level)"}</code> | Whether a piece at a level may be taken off without breaking higher levels. |
| <Link id="m-clear" /><code>{"void Clear(bool isReturningMaterials)"}</code> | Clears every piece, optionally dropping their materials. |
| <Link id="m-fail" /><code>{"void Fail(int hash, bool isCritical)"}</code> | Empties a failed piece; a critical one may pop others of its level. |
| <Link id="m-reevaluatelevel" /><code>{"void ReevaluateLevel()"}</code> | Works out the current level and completion from the pieces and enables or disables levels to match. |
| <Link id="m-setmaxlevel" /><code>{"void SetMaxLevel()"}</code> | Jumps to the last level. |
| <Link id="m-setpiececomplete" /><code>{"void SetPieceComplete(int hash, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" complettingPlayer)"}</code> | Called when a piece is done. Opens the next level when a level is full, or completes the project and reports the craft task. |
| <Link id="m-setupresult" /><code>{"void SetupResult("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> | Copies each piece's material onto the matching part of the finished item. |
| <Link id="m-syncdestroyeffect" /><code>{"void SyncDestroyEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Client: plays a piece's destroy effect. |
| <Link id="m-syncpiece" /><code>{"void SyncPiece("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | Writes or reads one piece's state. |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(int rangeLevel)"}</code> | Updates each piece's look for a viewing distance level. |

## Used in

Members of other types that take, return or hold a `IProject`:

[`GenericCraftingPiece.project`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-project), [`GenericCraftingPiece.Setup`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-setup), [`GenericCraftingPieceDefinition.GetNewPiece`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingStation.currentProject`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-currentproject).
