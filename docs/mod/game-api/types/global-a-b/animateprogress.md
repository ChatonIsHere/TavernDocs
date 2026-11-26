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
| <Link id="m-ctor" /><code>{"AnimateProgress()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Seconds the 0 to 1 animation takes.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Current progress, 0 to 1.</span> |
| <Link id="m-progressupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressUpdate"}</code> | <span className="api-desc">Event invoked with the progress every step.</span> |
| <Link id="m-resetsonloop" /><code>{"private bool resetsOnLoop"}</code> | <span className="api-desc">If true, calling `Animate` after it finished starts again from 0.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered update method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"void Animate()"}</code> | <span className="api-desc">Starts (or restarts) the per-frame update; resets to 0 first if `resetsOnLoop` is set and it had finished.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Sets progress back to 0 and fires the event with 0.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the update.</span> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | <span className="api-desc">Per-frame step: adds delta time over `duration`, clamps at 1 and stops there, then fires the event.</span> |

</details>
