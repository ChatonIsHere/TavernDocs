---
title: "DummyCharacterController"
description: "Character component that forwards updates and the local flag to the controller collection on its character dummy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DummyCharacterController

A **class** in `Root.Township`, `Alta.Character`.

Character component that forwards updates and the local flag to the controller collection on its character dummy.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DummyCharacterController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pointer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> | Pointer to the character dummy whose controllers this drives. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocal" /><code>{"override bool IsLocal { get; set; }"}</code> | Whether this character is the local player. Setting it also sets it on the dummy's controllers. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | While active, runs the dummy's controllers' fixed update, then its own. |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | While active, runs the dummy's controllers' update. It then calls the base fixed update, not the base update. |
