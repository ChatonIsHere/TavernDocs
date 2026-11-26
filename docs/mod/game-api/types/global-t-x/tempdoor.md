---
title: "TempDoor"
description: "Prototype door that listens to a temporary puzzle condition but does nothing with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TempDoor

A **class** in `Root.Township`, the global namespace.

Prototype door that listens to a temporary puzzle condition but does nothing with it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TempDoor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-condition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/puzzleconditiontemp">{"PuzzleConditionTemp"}</Link>{" condition"}</code> | <span className="api-desc">The puzzle condition watched.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the condition's state changes.</span> |
| <Link id="m-statechanged" /><code>{"private void StateChanged("}<Link to="/mod/game-api/types/global-p/puzzleconditiontemp">{"PuzzleConditionTemp"}</Link>{" condition)"}</code> | <span className="api-desc">Reads the condition's completion state and does nothing with it.</span> |

</details>
