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
| <Link id="m-ctor" /><code>{"IKSolverManagerWrapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iksolvermanager" /><code>{"private IK ikSolverManager"}</code> | <span className="api-desc">Backing field for `IkSolverManager`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iksolvermanager-2" /><code>{"IK IkSolverManager { get; }"}</code> | <span className="api-desc">The Final IK `IK` component this drives.</span> |
| <Link id="m-solver" /><code>{"IKSolver Solver { get; }"}</code> | <span className="api-desc">The solver of that IK component.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Updates the IK solver, then runs the base fixed update.</span> |
