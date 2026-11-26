---
title: "TestingPlayerStates"
description: "Test component for player states: inspector buttons fire hurt, die and equipment events, and it puts its state manager into Playing at start."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TestingPlayerStates

A **class** in `Root.Township`, `Alta.PlayerStates`.

Test component for player states: inspector buttons fire hurt, die and equipment events, and it puts its state manager into Playing at start.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TestingPlayerStates()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/testingplayerstates">{"TestingPlayerStates"}</Link>{" Instance"}</code> | The last `TestingPlayerStates` to wake. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdying" /><code>{"private bool isDying"}</code> | Inspector button that raises `Died`. |
| <Link id="m-isequipment" /><code>{"private bool isEquipment"}</code> | Inspector button that raises `EnteredEquipment`. |
| <Link id="m-ishurting" /><code>{"private bool isHurting"}</code> | Inspector button that raises `Hurt`. |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> | The player state manager to drive. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-died" /><code>{"event Action Died"}</code> | Raised by the Die inspector button. |
| <Link id="m-enteredequipment" /><code>{"event Action EnteredEquipment"}</code> | Raised by the Equipment inspector button. |
| <Link id="m-hurt" /><code>{"event Action Hurt"}</code> | Raised by the Hurt inspector button. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Raises the event for whichever inspector button was pressed. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets the state manager to `Playing`. |

</details>
