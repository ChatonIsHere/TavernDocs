---
title: "QuestCompleteEffect"
description: "Pooled popup shown when a quest task is done: shows the task text, scales up with a light, rises, then shrinks and returns to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestCompleteEffect

A **class** in `Root.Township`, no namespace.

Pooled popup shown when a quest task is done: shows the task text, scales up with a light, rises, then shrinks and returns to the pool. Client visual.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QuestCompleteEffect()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lightfader" /><code>{"private "}<Link to="/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{" lightFader"}</code> | Light turned on during the effect and off as it shrinks. |
| <Link id="m-onscaleupended" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onScaleUpEnded"}</code> | Event fired with the scaled transform when the scale-up ends. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Current animation progress. |
| <Link id="m-scaleanimationduration" /><code>{"private float scaleAnimationDuration"}</code> | Seconds the scale up and scale down each take. |
| <Link id="m-scaleanimationprogress" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" scaleAnimationProgress"}</code> | Event given the scale progress each frame. |
| <Link id="m-scalingtarget" /><code>{"private Transform scalingTarget"}</code> | Transform that is scaled. |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Text renderer showing the task description. |
| <Link id="m-upanimationduration" /><code>{"private float upAnimationDuration"}</code> | Seconds the rise animation takes. |
| <Link id="m-upduration" /><code>{"private float upDuration"}</code> | Total seconds from start of rise to start of shrink. |
| <Link id="m-upprogress" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" upProgress"}</code> | Event given the rise progress each frame. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptask" /><code>{"void SetupTask(string taskDescription)"}</code> | Sets the text shown on the popup. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Starts the animation coroutine when the object is taken from the pool. |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> | Coroutine that scales up, plays the rise, waits, scales down and releases the object. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pool's `Requested` event to start the animation. |

</details>
