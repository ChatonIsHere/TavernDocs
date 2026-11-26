---
title: "MultiLeverPanel"
description: "Links a set of selection levers so that moving one to selectionIndex moves all the others to desiredIndex, like radio buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiLeverPanel

A **class** in `Root.Township`, no namespace.

Links a set of selection levers so that moving one to `selectionIndex` moves all the others to `desiredIndex`, like radio buttons.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiLeverPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-desiredindex" /><code>{"private int desiredIndex"}</code> | Index the other levers are reset to. |
| <Link id="m-levers" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{"[] levers"}</code> | The linked levers. |
| <Link id="m-selectionindex" /><code>{"private int selectionIndex"}</code> | Index that counts as switched on (1 by default). |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleselection" /><code>{"private void HandleSelection("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" activatedLever, int oldIndex, int currentSelection)"}</code> | When a lever reaches `selectionIndex`, sets every other lever to `desiredIndex`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks `SelectionChanged` on every lever. |

</details>
