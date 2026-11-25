---
title: "GenericCraftingProject"
description: "class GenericCraftingProject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingProject

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`IProject`](/game-api/types/alta-crafting/iproject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenericCraftingProject("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station, "}<Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-levelledpieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"[][] levelledPieces"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; set; }"}</code> |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; set; }"}</code> |
| <Link id="m-mappedpieces" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{"> MappedPieces { get; private set; }"}</code> |
| <Link id="m-recipe" /><code><Link to="/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" Recipe { get; private set; }"}</code> |
| <Link id="m-station" /><code><Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" Station { get; private set; }"}</code> |

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-canremoveatlevel" /><code>{"private bool Alta.Crafting.IProject.CanRemoveAtLevel(int level)"}</code> |
| <Link id="m-clear" /><code>{"private void Alta.Crafting.IProject.Clear(bool isReturningMaterials)"}</code> |
| <Link id="m-fail" /><code>{"private void Alta.Crafting.IProject.Fail(int hash, bool isCritical)"}</code> |
| <Link id="m-reevaluatelevel" /><code>{"private void Alta.Crafting.IProject.ReevaluateLevel()"}</code> |
| <Link id="m-setmaxlevel" /><code>{"private void Alta.Crafting.IProject.SetMaxLevel()"}</code> |
| <Link id="m-setpiececomplete" /><code>{"private void Alta.Crafting.IProject.SetPieceComplete(int hash, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" complettingPlayer)"}</code> |
| <Link id="m-setupresult" /><code>{"private void Alta.Crafting.IProject.SetupResult("}<Link to="/game-api/types/alta-crafting/genericcraftingresult">{"GenericCraftingResult"}</Link>{" result)"}</code> |
| <Link id="m-syncdestroyeffect" /><code>{"private void Alta.Crafting.IProject.SyncDestroyEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |
| <Link id="m-syncpiece" /><code>{"private void Alta.Crafting.IProject.SyncPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int pieceIndex)"}</code> |
| <Link id="m-updaterenderers" /><code>{"private void Alta.Crafting.IProject.UpdateRenderers(int rangeLevel)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingProject`:

[`GenericCraftingRecipe.InitializeProject`](/game-api/types/alta-crafting/genericcraftingrecipe#m-initializeproject).
