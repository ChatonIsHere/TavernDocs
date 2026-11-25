---
title: "RespawnOrb"
description: "class RespawnOrb in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOrb

A **class** in `Root.Township`, `Township.Downed`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`EventOrb`](/game-api/types/game-other-namespaces/eventorb)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnOrb()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-circulartimer" /><code>{"private Image circularTimer"}</code> |
| <Link id="m-respawntime" /><code>{"private float respawnTime"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-starttimer" /><code>{"void StartTimer(float timeToRespawn)"}</code> |
| <Link id="m-updatetimer" /><code>{"void UpdateTimer(float increaseToRespawnTimer)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-updatecirculartimer" /><code>{"private IEnumerator UpdateCircularTimer() (iterator)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RespawnOrb`:

[`DownedState.GetRespawnOrb`](/game-api/types/alta-player/downedstate#m-getrespawnorb), [`DownedState.respawnOrb`](/game-api/types/alta-player/downedstate#m-respawnorb).
