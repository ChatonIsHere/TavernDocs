---
title: "TimedEvent"
description: "A plain component that fires a TransformEvent once, or every interval seconds when repeating."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedEvent

A **class** in `Root.Township`, the global namespace.

A plain component that fires a `TransformEvent` once, or every `interval` seconds when repeating. Runs locally on whichever side has it, with no networking or saving.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> | <span className="api-desc">Inspector button that calls `Begin` from `OnValidate`.</span> |
| <Link id="m-btnstop" /><code>{"private bool btnStop"}</code> | <span className="api-desc">Inspector button that calls `Stop` from `OnValidate`.</span> |
| <Link id="m-interval" /><code>{"private float interval"}</code> | <span className="api-desc">Seconds between repeats. Only shown when `isRepeating` is ticked.</span> |
| <Link id="m-isrepeating" /><code>{"private bool isRepeating"}</code> | <span className="api-desc">When true, `Begin` keeps firing every `interval` seconds instead of once.</span> |
| <Link id="m-isrunningonawake" /><code>{"private bool isRunningOnAwake"}</code> | <span className="api-desc">When true, `Begin` is called in `Awake`.</span> |
| <Link id="m-repeat" /><code>{"private Coroutine repeat"}</code> | <span className="api-desc">The running repeat coroutine, or null.</span> |
| <Link id="m-runhere" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" runHere"}</code> | <span className="api-desc">Event invoked with this object's transform each time the timer fires.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> | <span className="api-desc">Fires `runHere` once, or starts the repeat coroutine when `isRepeating` is set (restarting it if already running).</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the repeat coroutine if one is running.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stops any running repeat, then calls `Begin` if `isRunningOnAwake` is set.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor hook: ticking the Play or Stop inspector buttons calls `Begin` or `Stop`.</span> |
| <Link id="m-repeatrun" /><code>{"private IEnumerator RepeatRun() (iterator)"}</code> | <span className="api-desc">Coroutine that invokes `runHere` with this transform, then waits `interval` seconds, forever.</span> |

</details>
