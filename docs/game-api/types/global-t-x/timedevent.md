---
title: "TimedEvent"
description: "A plain component that fires a TransformEvent once, or every interval seconds when repeating."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedEvent

A **class** in `Root.Township`, no namespace.

A plain component that fires a `TransformEvent` once, or every `interval` seconds when repeating. Runs locally on whichever side has it, with no networking or saving.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> | Inspector button that calls `Begin` from `OnValidate`. |
| <Link id="m-btnstop" /><code>{"private bool btnStop"}</code> | Inspector button that calls `Stop` from `OnValidate`. |
| <Link id="m-interval" /><code>{"private float interval"}</code> | Seconds between repeats. Only shown when `isRepeating` is ticked. |
| <Link id="m-isrepeating" /><code>{"private bool isRepeating"}</code> | When true, `Begin` keeps firing every `interval` seconds instead of once. |
| <Link id="m-isrunningonawake" /><code>{"private bool isRunningOnAwake"}</code> | When true, `Begin` is called in `Awake`. |
| <Link id="m-repeat" /><code>{"private Coroutine repeat"}</code> | The running repeat coroutine, or null. |
| <Link id="m-runhere" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" runHere"}</code> | Event invoked with this object's transform each time the timer fires. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> | Fires `runHere` once, or starts the repeat coroutine when `isRepeating` is set (restarting it if already running). |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops the repeat coroutine if one is running. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stops any running repeat, then calls `Begin` if `isRunningOnAwake` is set. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor hook: ticking the Play or Stop inspector buttons calls `Begin` or `Stop`. |
| <Link id="m-repeatrun" /><code>{"private IEnumerator RepeatRun() (iterator)"}</code> | Coroutine that invokes `runHere` with this transform, then waits `interval` seconds, forever. |

</details>
