---
title: "TempDoor"
description: "Prototype door that listens to a temporary puzzle condition but does nothing with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TempDoor

A **class** in `Root.Township`, no namespace.

Prototype door that listens to a temporary puzzle condition but does nothing with it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TempDoor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-condition" /><code>{"private "}<Link to="/game-api/types/global-p/puzzleconditiontemp">{"PuzzleConditionTemp"}</Link>{" condition"}</code> | The puzzle condition watched. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the condition's state changes. |
| <Link id="m-statechanged" /><code>{"private void StateChanged("}<Link to="/game-api/types/global-p/puzzleconditiontemp">{"PuzzleConditionTemp"}</Link>{" condition)"}</code> | Reads the condition's completion state and does nothing with it. |

</details>
