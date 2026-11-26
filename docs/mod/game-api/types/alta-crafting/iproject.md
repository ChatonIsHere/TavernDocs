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
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; set; }"}</code> | <span className="api-desc">The level being built now.</span> |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; set; }"}</code> | <span className="api-desc">True when every piece of the last level is done.</span> |
| <Link id="m-mappedpieces" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> MappedPieces { get; }"}</code> | <span className="api-desc">Every piece, by hash.</span> |
| <Link id="m-recipe" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" Recipe { get; }"}</code> | <span className="api-desc">The recipe being built.</span> |
| <Link id="m-station" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" Station { get; }"}</code> | <span className="api-desc">The station it's on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canremoveatlevel" /><code>{"bool CanRemoveAtLevel(int level)"}</code> | <span className="api-desc">Whether a piece at a level may be taken off without breaking higher levels.</span> |
| <Link id="m-clear" /><code>{"void Clear(bool isReturningMaterials)"}</code> | <span className="api-desc">Clears every piece, optionally dropping their materials.</span> |
| <Link id="m-fail" /><code>{"void Fail(int hash, bool isCritical)"}</code> | <span className="api-desc">Empties a failed piece; a critical one may pop others of its level.</span> |
| <Link id="m-reevaluatelevel" /><code>{"void ReevaluateLevel()"}</code> | <span className="api-desc">Works out the current level and completion from the pieces and enables or disables levels to match.</span> |
| <Link id="m-setmaxlevel" /><code>{"void SetMaxLevel()"}</code> | <span className="api-desc">Jumps to the last level.</span> |
| <Link id="m-setpiececomplete" /><code>{"void SetPieceComplete(int hash, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" complettingPlayer)"}</code> | <span className="api-desc">Called when a piece is done. Opens the next level when a level is full, or completes the project and reports the craft task.</span> |
| <Link id="m-setupresult" /><code>{"void SetupResult("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> | <span className="api-desc">Copies each piece's material onto the matching part of the finished item.</span> |
| <Link id="m-syncdestroyeffect" /><code>{"void SyncDestroyEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Client: plays a piece's destroy effect.</span> |
| <Link id="m-syncpiece" /><code>{"void SyncPiece("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> | <span className="api-desc">Writes or reads one piece's state.</span> |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(int rangeLevel)"}</code> | <span className="api-desc">Updates each piece's look for a viewing distance level.</span> |

## Used in

Members of other types that take, return or hold a `IProject`:

<div className="api-used-in">

[`GenericCraftingPiece.project`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-project), [`GenericCraftingPiece.Setup`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-setup), [`GenericCraftingPieceDefinition.GetNewPiece`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingStation.currentProject`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-currentproject).

</div>
