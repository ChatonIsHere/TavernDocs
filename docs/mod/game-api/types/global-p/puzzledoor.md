---
title: "PuzzleDoor"
description: "Test door for the light puzzle: turns its material green when its condition is complete and red when not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleDoor

A **class** in `Root.Township`, the global namespace.

Test door for the light puzzle: turns its material green when its condition is complete and red when not. It doesn't move.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleDoor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-condition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition"}</code> | <span className="api-desc">Condition that opens the door.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the condition and applies its current state.</span> |
| <Link id="m-closedoor" /><code>{"private void CloseDoor()"}</code> | <span className="api-desc">Sets the renderer colour to red.</span> |
| <Link id="m-doorstatechanged" /><code>{"private void DoorStateChanged("}<Link to="/mod/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition)"}</code> | <span className="api-desc">Opens or closes the door to match the condition, logging each change.</span> |
| <Link id="m-opendoor" /><code>{"private void OpenDoor()"}</code> | <span className="api-desc">Sets the renderer colour to green.</span> |

</details>
