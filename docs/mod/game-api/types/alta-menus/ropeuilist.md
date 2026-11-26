---
title: "RopeUIList"
description: "A UI list whose rows are laid out on a RopePoweredElementBoard, so the player scrolls by pulling a rope."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeUIList

A **class** in `Root.Township`, `Alta.Meta.UI`.

A UI list whose rows are laid out on a `RopePoweredElementBoard`, so the player scrolls by pulling a rope.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`UIList`](/mod/game-api/types/alta-menus/uilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeUIList()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-board" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/ropepoweredelementboard">{"RopePoweredElementBoard"}</Link>{" board"}</code> | <span className="api-desc">The rope board that positions the rows.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"override float CurrentValue { get; set; }"}</code> | <span className="api-desc">The scroll position, read from and written to the board.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"override void AddElement("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Adds the row to the board and the element list.</span> |
| <Link id="m-clearlist" /><code>{"override void ClearList(bool isDestroyingElements = false)"}</code> | <span className="api-desc">Clears the list and the board.</span> |
| <Link id="m-completereset" /><code>{"override void CompleteReset(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> newElements, bool isDestroyingElements)"}</code> | <span className="api-desc">Replaces all rows and puts the board back on the same scroll value.</span> |
| <Link id="m-removeelement" /><code>{"override void RemoveElement("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Removes the row from the list and the board.</span> |
