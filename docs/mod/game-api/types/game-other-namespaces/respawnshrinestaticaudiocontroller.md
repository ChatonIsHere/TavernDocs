---
title: "RespawnShrineStaticAudioController"
description: "Plays a respawn shrine's looping sound while it has at least one subscriber."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineStaticAudioController

A **class** in `Root.Township`, `ATT.Respawn`.

Plays a respawn shrine's looping sound while it has at least one subscriber.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineStaticAudioController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loopingsoundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/loopingsoundeffect">{"LoopingSoundEffect"}</Link>{" loopingSoundEffect"}</code> | The looping sound played while fuel is being used. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setfuelconsumptionaudioplaystate" /><code>{"void SetFuelConsumptionAudioPlayState(int numberOfSubscribers)"}</code> | Starts the loop when there are subscribers and stops it when there are none. |

## Used in

Members of other types that take, return or hold a `RespawnShrineStaticAudioController`:

[`PoweredRespawnShrine.staticAudioController`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-staticaudiocontroller).
