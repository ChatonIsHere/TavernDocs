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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDummyCharacterController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pointer" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> | Pointer to the character dummy to drive. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Calls `FixedUpdateCharacterComponent` on the dummy's controller collection every frame. |

</details>
