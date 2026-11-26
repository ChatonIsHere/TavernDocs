---
title: "PuzzleDoor"
description: "Test door for the light puzzle: turns its material green when its condition is complete and red when not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleDoor

A **class** in `Root.Township`, no namespace.

Test door for the light puzzle: turns its material green when its condition is complete and red when not. It doesn't move.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PuzzleDoor()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-condition" /><code>{"private "}<Link to="/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition"}</code> | Condition that opens the door. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the condition and applies its current state. |
| <Link id="m-closedoor" /><code>{"private void CloseDoor()"}</code> | Sets the renderer colour to red. |
| <Link id="m-doorstatechanged" /><code>{"private void DoorStateChanged("}<Link to="/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition)"}</code> | Opens or closes the door to match the condition, logging each change. |
| <Link id="m-opendoor" /><code>{"private void OpenDoor()"}</code> | Sets the renderer colour to green. |

</details>
