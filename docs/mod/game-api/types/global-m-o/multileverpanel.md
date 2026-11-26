---
title: "MultiLeverPanel"
description: "Links a set of selection levers so that moving one to selectionIndex moves all the others to desiredIndex, like radio buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiLeverPanel

A **class** in `Root.Township`, the global namespace.

Links a set of selection levers so that moving one to `selectionIndex` moves all the others to `desiredIndex`, like radio buttons.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiLeverPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-desiredindex" /><code>{"private int desiredIndex"}</code> | <span className="api-desc">Index the other levers are reset to.</span> |
| <Link id="m-levers" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{"[] levers"}</code> | <span className="api-desc">The linked levers.</span> |
| <Link id="m-selectionindex" /><code>{"private int selectionIndex"}</code> | <span className="api-desc">Index that counts as switched on (1 by default).</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleselection" /><code>{"private void HandleSelection("}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" activatedLever, int oldIndex, int currentSelection)"}</code> | <span className="api-desc">When a lever reaches `selectionIndex`, sets every other lever to `desiredIndex`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks `SelectionChanged` on every lever.</span> |

</details>
