---
title: "GravityChanger"
description: "Debug component on a player character: holding the Debug1 action on both hands raises global gravity until it is reversed, then it drops back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GravityChanger

A **class** in `Root.Township`, no namespace.

Debug component on a player character: holding the Debug1 action on both hands raises global gravity until it is reversed, then it drops back.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GravityChanger()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultgravity" /><code>{"private float defaultGravity"}</code> | Gravity Y at start. |
| <Link id="m-gravitychange" /><code>{"private float gravityChange"}</code> | Gravity change per frame. |
| <Link id="m-gravityupcoroutine" /><code>{"private Coroutine gravityUpCoroutine"}</code> | Running raise coroutine. |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | Backing field for `PlayerCharacter`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playercharacter-2" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> | The player character on this object. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bringgravitydown" /><code>{"private IEnumerator BringGravityDown() (iterator)"}</code> | Coroutine that lowers `Physics.gravity` back to the default. |
| <Link id="m-bringgravityup" /><code>{"private IEnumerator BringGravityUp() (iterator)"}</code> | Coroutine that raises gravity each frame while both Debug1 actions are held, with haptics, then calls `BringGravityDown`. |
| <Link id="m-changegravity" /><code>{"private void ChangeGravity("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Restarts `BringGravityUp` when Debug1 starts on either hand. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Saves the default gravity and hooks Debug1 on both controllers. |

</details>
