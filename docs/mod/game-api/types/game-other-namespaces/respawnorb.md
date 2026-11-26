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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`EventOrb`](/mod/game-api/types/game-other-namespaces/eventorb)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnOrb()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circulartimer" /><code>{"private Image circularTimer"}</code> | <span className="api-desc">UI image whose fill shows respawn progress.</span> |
| <Link id="m-respawntime" /><code>{"private float respawnTime"}</code> | <span className="api-desc">Total seconds until respawn.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-starttimer" /><code>{"void StartTimer(float timeToRespawn)"}</code> | <span className="api-desc">Sets the respawn time and starts filling the circular timer.</span> |
| <Link id="m-updatetimer" /><code>{"void UpdateTimer(float increaseToRespawnTimer)"}</code> | <span className="api-desc">Adds seconds to the respawn time; the running fill adjusts to it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatecirculartimer" /><code>{"private IEnumerator UpdateCircularTimer() (iterator)"}</code> | <span className="api-desc">Coroutine that fills the timer image over `respawnTime`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RespawnOrb`:

<div className="api-used-in">

[`DownedState.GetRespawnOrb`](/mod/game-api/types/alta-player/downedstate#m-getrespawnorb), [`DownedState.respawnOrb`](/mod/game-api/types/alta-player/downedstate#m-respawnorb).

</div>
