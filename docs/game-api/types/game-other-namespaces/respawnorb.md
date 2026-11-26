---
title: "RespawnOrb"
description: "Orb shown while a player is downed, with a circular timer that fills until they respawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOrb

A **class** in `Root.Township`, `Township.Downed`.

Orb shown while a player is downed, with a circular timer that fills until they respawn. `DownedState` spawns it and drives the timer.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`EventOrb`](/game-api/types/game-other-namespaces/eventorb)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnOrb()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circulartimer" /><code>{"private Image circularTimer"}</code> | UI image whose fill shows respawn progress. |
| <Link id="m-respawntime" /><code>{"private float respawnTime"}</code> | Total seconds until respawn. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-starttimer" /><code>{"void StartTimer(float timeToRespawn)"}</code> | Sets the respawn time and starts filling the circular timer. |
| <Link id="m-updatetimer" /><code>{"void UpdateTimer(float increaseToRespawnTimer)"}</code> | Adds seconds to the respawn time; the running fill adjusts to it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatecirculartimer" /><code>{"private IEnumerator UpdateCircularTimer() (iterator)"}</code> | Coroutine that fills the timer image over `respawnTime`. |

</details>

## Used in

Members of other types that take, return or hold a `RespawnOrb`:

[`DownedState.GetRespawnOrb`](/game-api/types/alta-player/downedstate#m-getrespawnorb), [`DownedState.respawnOrb`](/game-api/types/alta-player/downedstate#m-respawnorb).
