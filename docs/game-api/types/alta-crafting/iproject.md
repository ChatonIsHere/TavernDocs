---
title: "IProject"
description: "interface IProject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IProject

An **interface** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`GenericCraftingProject`](/game-api/types/alta-crafting/genericcraftingproject)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; set; }"}</code> |  |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; set; }"}</code> |  |
| <Link id="m-mappedpieces" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> MappedPieces { get; }"}</code> |  |
| <Link id="m-recipe" /><code><Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" Recipe { get; }"}</code> |  |
| <Link id="m-station" /><code><Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" Station { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canremoveatlevel" /><code>{"bool CanRemoveAtLevel(int level)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear(bool isReturningMaterials)"}</code> |  |
| <Link id="m-fail" /><code>{"void Fail(int hash, bool isCritical)"}</code> |  |
| <Link id="m-reevaluatelevel" /><code>{"void ReevaluateLevel()"}</code> |  |
| <Link id="m-setmaxlevel" /><code>{"void SetMaxLevel()"}</code> |  |
| <Link id="m-setpiececomplete" /><code>{"void SetPieceComplete(int hash, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" complettingPlayer)"}</code> |  |
| <Link id="m-setupresult" /><code>{"void SetupResult("}<Link to="/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> |  |
| <Link id="m-syncdestroyeffect" /><code>{"void SyncDestroyEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |  |
| <Link id="m-syncpiece" /><code>{"void SyncPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |  |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(int rangeLevel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IProject`:

[`GenericCraftingPiece.project`](/game-api/types/alta-crafting/genericcraftingpiece#m-project), [`GenericCraftingPiece.Setup`](/game-api/types/alta-crafting/genericcraftingpiece#m-setup), [`GenericCraftingPieceDefinition.GetNewPiece`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-getnewpiece), [`GenericCraftingStation.currentProject`](/game-api/types/alta-crafting/genericcraftingstation#m-currentproject).
