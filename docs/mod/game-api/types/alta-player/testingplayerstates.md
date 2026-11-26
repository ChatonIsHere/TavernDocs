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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TestingPlayerStates()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/testingplayerstates">{"TestingPlayerStates"}</Link>{" Instance"}</code> | <span className="api-desc">The last `TestingPlayerStates` to wake.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdying" /><code>{"private bool isDying"}</code> | <span className="api-desc">Inspector button that raises `Died`.</span> |
| <Link id="m-isequipment" /><code>{"private bool isEquipment"}</code> | <span className="api-desc">Inspector button that raises `EnteredEquipment`.</span> |
| <Link id="m-ishurting" /><code>{"private bool isHurting"}</code> | <span className="api-desc">Inspector button that raises `Hurt`.</span> |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> | <span className="api-desc">The player state manager to drive.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-died" /><code>{"event Action Died"}</code> | <span className="api-desc">Raised by the Die inspector button.</span> |
| <Link id="m-enteredequipment" /><code>{"event Action EnteredEquipment"}</code> | <span className="api-desc">Raised by the Equipment inspector button.</span> |
| <Link id="m-hurt" /><code>{"event Action Hurt"}</code> | <span className="api-desc">Raised by the Hurt inspector button.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Raises the event for whichever inspector button was pressed.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets the state manager to `Playing`.</span> |

</details>
