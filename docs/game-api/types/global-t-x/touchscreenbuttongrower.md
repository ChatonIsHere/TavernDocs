---
title: "TouchScreenButtonGrower"
description: "Scales a TouchScreenButtonOld along a curve while it is pressed, and snaps it back to its starting size on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButtonGrower

A **class** in `Root.Township`, no namespace.

Scales a `TouchScreenButtonOld` along a curve while it is pressed, and snaps it back to its starting size on release. Client-side visual only.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonGrower()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenbuttonold">{"TouchScreenButtonOld"}</Link>{" button"}</code> | The button being scaled. |
| <Link id="m-growcurve" /><code>{"private AnimationCurve growCurve"}</code> | Scale multiplier over normalised time 0 to 1. |
| <Link id="m-growduration" /><code>{"private float growDuration"}</code> | Seconds the grow takes. |
| <Link id="m-growroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" growRoutine"}</code> | The running grow coroutine, or null. |
| <Link id="m-startingscale" /><code>{"private Vector3 startingScale"}</code> | The button's local scale at `Start`. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-growbutton" /><code>{"private IEnumerator GrowButton() (iterator)"}</code> | Coroutine that scales the button by `growCurve` over `growDuration` seconds. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Resets the button's scale. |
| <Link id="m-resetscale" /><code>{"private void ResetScale()"}</code> | Stops any grow in progress and restores the starting scale. Called on release. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the button's press and release events and records its starting scale. |
| <Link id="m-startgrow" /><code>{"private void StartGrow()"}</code> | Restarts the grow coroutine. Called on press. |

</details>
