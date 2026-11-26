---
title: "StaticAchievementTrigger"
description: "A trigger collider that completes a game achievement for any player who walks into it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticAchievementTrigger

A **class** in `Root.Township`, `Alta.Map`.

A trigger collider that completes a game achievement for any player who walks into it. Server only.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticAchievementTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" findAction"}</code> | The `GameAchievement` to complete. |
| <Link id="m-triggercollider" /><code>{"private Collider triggerCollider"}</code> | The trigger collider; kept on the AI layer. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Server: when a player's character enters, completes `findAction` for that player. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: moves the trigger collider to the AI layer. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Turns the collider on only on the server. |

</details>
