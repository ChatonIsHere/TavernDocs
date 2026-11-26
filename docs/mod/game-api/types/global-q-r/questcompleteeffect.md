---
title: "QuestCompleteEffect"
description: "Pooled popup shown when a quest task is done: shows the task text, scales up with a light, rises, then shrinks and returns to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestCompleteEffect

A **class** in `Root.Township`, the global namespace.

Pooled popup shown when a quest task is done: shows the task text, scales up with a light, rises, then shrinks and returns to the pool. Client visual.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuestCompleteEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lightfader" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{" lightFader"}</code> | <span className="api-desc">Light turned on during the effect and off as it shrinks.</span> |
| <Link id="m-onscaleupended" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onScaleUpEnded"}</code> | <span className="api-desc">Event fired with the scaled transform when the scale-up ends.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Current animation progress.</span> |
| <Link id="m-scaleanimationduration" /><code>{"private float scaleAnimationDuration"}</code> | <span className="api-desc">Seconds the scale up and scale down each take.</span> |
| <Link id="m-scaleanimationprogress" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" scaleAnimationProgress"}</code> | <span className="api-desc">Event given the scale progress each frame.</span> |
| <Link id="m-scalingtarget" /><code>{"private Transform scalingTarget"}</code> | <span className="api-desc">Transform that is scaled.</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Text renderer showing the task description.</span> |
| <Link id="m-upanimationduration" /><code>{"private float upAnimationDuration"}</code> | <span className="api-desc">Seconds the rise animation takes.</span> |
| <Link id="m-upduration" /><code>{"private float upDuration"}</code> | <span className="api-desc">Total seconds from start of rise to start of shrink.</span> |
| <Link id="m-upprogress" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" upProgress"}</code> | <span className="api-desc">Event given the rise progress each frame.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptask" /><code>{"void SetupTask(string taskDescription)"}</code> | <span className="api-desc">Sets the text shown on the popup.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Starts the animation coroutine when the object is taken from the pool.</span> |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> | <span className="api-desc">Coroutine that scales up, plays the rise, waits, scales down and releases the object.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pool's `Requested` event to start the animation.</span> |

</details>
