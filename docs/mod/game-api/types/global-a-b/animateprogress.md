---
title: "AnimateProgress"
description: "Animates a value from 0 to 1 over a set time and passes it to a FloatEvent each frame, for driving UI or effects from inspector events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimateProgress

A **class** in `Root.Township`, the global namespace.

Animates a value from 0 to 1 over a set time and passes it to a `FloatEvent` each frame, for driving UI or effects from inspector events.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimateProgress()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Seconds the 0 to 1 animation takes. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Current progress, 0 to 1. |
| <Link id="m-progressupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressUpdate"}</code> | Event invoked with the progress every step. |
| <Link id="m-resetsonloop" /><code>{"private bool resetsOnLoop"}</code> | If true, calling `Animate` after it finished starts again from 0. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered update method. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"void Animate()"}</code> | Starts (or restarts) the per-frame update; resets to 0 first if `resetsOnLoop` is set and it had finished. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Sets progress back to 0 and fires the event with 0. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters the update. |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | Per-frame step: adds delta time over `duration`, clamps at 1 and stops there, then fires the event. |

</details>
