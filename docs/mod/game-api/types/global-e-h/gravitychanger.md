---
title: "GravityChanger"
description: "Debug component on a player character: holding the Debug1 action on both hands raises global gravity until it is reversed, then it drops back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GravityChanger

A **class** in `Root.Township`, the global namespace.

Debug component on a player character: holding the Debug1 action on both hands raises global gravity until it is reversed, then it drops back.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GravityChanger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultgravity" /><code>{"private float defaultGravity"}</code> | <span className="api-desc">Gravity Y at start.</span> |
| <Link id="m-gravitychange" /><code>{"private float gravityChange"}</code> | <span className="api-desc">Gravity change per frame.</span> |
| <Link id="m-gravityupcoroutine" /><code>{"private Coroutine gravityUpCoroutine"}</code> | <span className="api-desc">Running raise coroutine.</span> |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | <span className="api-desc">Backing field for `PlayerCharacter`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playercharacter-2" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> | <span className="api-desc">The player character on this object.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bringgravitydown" /><code>{"private IEnumerator BringGravityDown() (iterator)"}</code> | <span className="api-desc">Coroutine that lowers `Physics.gravity` back to the default.</span> |
| <Link id="m-bringgravityup" /><code>{"private IEnumerator BringGravityUp() (iterator)"}</code> | <span className="api-desc">Coroutine that raises gravity each frame while both Debug1 actions are held, with haptics, then calls `BringGravityDown`.</span> |
| <Link id="m-changegravity" /><code>{"private void ChangeGravity("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Restarts `BringGravityUp` when Debug1 starts on either hand.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Saves the default gravity and hooks Debug1 on both controllers.</span> |

</details>
