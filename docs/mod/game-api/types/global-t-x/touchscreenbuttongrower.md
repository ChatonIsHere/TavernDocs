---
title: "TouchScreenButtonGrower"
description: "Scales a TouchScreenButtonOld along a curve while it is pressed, and snaps it back to its starting size on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButtonGrower

A **class** in `Root.Township`, the global namespace.

Scales a `TouchScreenButtonOld` along a curve while it is pressed, and snaps it back to its starting size on release. Client-side visual only.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonGrower()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenbuttonold">{"TouchScreenButtonOld"}</Link>{" button"}</code> | <span className="api-desc">The button being scaled.</span> |
| <Link id="m-growcurve" /><code>{"private AnimationCurve growCurve"}</code> | <span className="api-desc">Scale multiplier over normalised time 0 to 1.</span> |
| <Link id="m-growduration" /><code>{"private float growDuration"}</code> | <span className="api-desc">Seconds the grow takes.</span> |
| <Link id="m-growroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" growRoutine"}</code> | <span className="api-desc">The running grow coroutine, or null.</span> |
| <Link id="m-startingscale" /><code>{"private Vector3 startingScale"}</code> | <span className="api-desc">The button's local scale at `Start`.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-growbutton" /><code>{"private IEnumerator GrowButton() (iterator)"}</code> | <span className="api-desc">Coroutine that scales the button by `growCurve` over `growDuration` seconds.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Resets the button's scale.</span> |
| <Link id="m-resetscale" /><code>{"private void ResetScale()"}</code> | <span className="api-desc">Stops any grow in progress and restores the starting scale. Called on release.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the button's press and release events and records its starting scale.</span> |
| <Link id="m-startgrow" /><code>{"private void StartGrow()"}</code> | <span className="api-desc">Restarts the grow coroutine. Called on press.</span> |

</details>
