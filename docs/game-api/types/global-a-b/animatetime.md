---
title: "AnimateTime"
description: "Client visual that clones a pip around a circle and pulses their height in a travelling wave, like a spinner."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimateTime

A **class** in `Root.Township`, no namespace.

Client visual that clones a pip around a circle and pulses their height in a travelling wave, like a spinner.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimateTime()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationspeed" /><code>{"private float animationSpeed"}</code> | Wave cycles per second. |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | Current wave phase, 0 to 1. |
| <Link id="m-pip" /><code>{"private Transform pip"}</code> | The template pip, also used as the first one. |
| <Link id="m-pipcount" /><code>{"private int pipCount"}</code> | How many pips go around the circle. |
| <Link id="m-pips" /><code>{"private Transform[] pips"}</code> | All pip transforms, made in `Awake`. |
| <Link id="m-scalecurve" /><code>{"private AnimationCurve scaleCurve"}</code> | Maps the wave value (a cosine, -1 to 1) to a pip's Y scale. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes `pipCount` copies of the pip, spaced evenly around the forward axis. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Advances the wave and sets each pip's Y scale from `scaleCurve`. |

</details>
