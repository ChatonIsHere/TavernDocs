---
title: "BasicDummyCharacterController"
description: "Simple driver that runs a character dummy's controller collection every frame, for dummies with no player behind them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDummyCharacterController

A **class** in `Root.Township`, `Alta.Character`.

Simple driver that runs a character dummy's controller collection every frame, for dummies with no player behind them.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDummyCharacterController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pointer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> | <span className="api-desc">Pointer to the character dummy to drive.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Calls `FixedUpdateCharacterComponent` on the dummy's controller collection every frame.</span> |

</details>
