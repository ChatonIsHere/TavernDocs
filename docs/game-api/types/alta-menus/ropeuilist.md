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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UIList`](/game-api/types/alta-menus/uilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeUIList()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-board" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropepoweredelementboard">{"RopePoweredElementBoard"}</Link>{" board"}</code> | The rope board that positions the rows. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"override float CurrentValue { get; set; }"}</code> | The scroll position, read from and written to the board. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"override void AddElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Adds the row to the board and the element list. |
| <Link id="m-clearlist" /><code>{"override void ClearList(bool isDestroyingElements = false)"}</code> | Clears the list and the board. |
| <Link id="m-completereset" /><code>{"override void CompleteReset(IEnumerable<"}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> newElements, bool isDestroyingElements)"}</code> | Replaces all rows and puts the board back on the same scroll value. |
| <Link id="m-removeelement" /><code>{"override void RemoveElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Removes the row from the list and the board. |
