---
title: "EnableAndUnchildIfClose"
description: "Client effect helper: when triggered near the local player, unparents and enables its object, then destroys it after a delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnableAndUnchildIfClose

A **class** in `Root.Township`, the global namespace.

Client effect helper: when triggered near the local player, unparents and enables its object, then destroys it after a delay.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IDontGetRigibody`](/mod/game-api/types/global-i-l/idontgetrigibody)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnableAndUnchildIfClose()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyafter" /><code>{"private float destroyAfter"}</code> | Seconds before the object is destroyed; 0 or less keeps it. |
| <Link id="m-distancesquared" /><code>{"private float distanceSquared"}</code> | Squared distance from the local player within which it triggers. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"void Trigger()"}</code> | Does nothing on a headless server or if the local player is too far; otherwise unparents, enables and schedules destruction. |
