---
title: "AnimateTime"
description: "Client visual that clones a pip around a circle and pulses their height in a travelling wave, like a spinner."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimateTime

A **class** in `Root.Township`, the global namespace.

Client visual that clones a pip around a circle and pulses their height in a travelling wave, like a spinner.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimateTime()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> | <span className="api-desc">Wave cycles per second.</span> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">Current wave phase, 0 to 1.</span> |
| <Link id="m-pip" /><code>{"private Transform pip"}</code> | <span className="api-desc">The template pip, also used as the first one.</span> |
| <Link id="m-pipcount" /><code>{"private int pipCount"}</code> | <span className="api-desc">How many pips go around the circle.</span> |
| <Link id="m-pips" /><code>{"private Transform[] pips"}</code> | <span className="api-desc">All pip transforms, made in `Awake`.</span> |
| <Link id="m-scalecurve" /><code>{"private AnimationCurve scaleCurve"}</code> | <span className="api-desc">Maps the wave value (a cosine, -1 to 1) to a pip's Y scale.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes `pipCount` copies of the pip, spaced evenly around the forward axis.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Advances the wave and sets each pip's Y scale from `scaleCurve`.</span> |

</details>
