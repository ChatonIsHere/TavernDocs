---
title: "IKSolverManagerWrapper"
description: "Character component that runs a Final IK solver as part of the character's fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IKSolverManagerWrapper

A **class** in `Root.Township`, `Alta.Character`.

Character component that runs a Final IK solver as part of the character's fixed update.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IKSolverManagerWrapper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iksolvermanager" /><code>{"private IK ikSolverManager"}</code> | Backing field for `IkSolverManager`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iksolvermanager-2" /><code>{"IK IkSolverManager { get; }"}</code> | The Final IK `IK` component this drives. |
| <Link id="m-solver" /><code>{"IKSolver Solver { get; }"}</code> | The solver of that IK component. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Updates the IK solver, then runs the base fixed update. |
