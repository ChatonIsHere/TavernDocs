---
title: "ProfessionDiskAvailablePointsVisualizer"
description: "Client: skill shrine visual for one profession path's available points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionDiskAvailablePointsVisualizer

A **class** in `Root.Township`, no namespace.

Client: skill shrine visual for one profession path's available points. Shows the tree icon and fades it and the fill in or out, with particles while open.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ExperienceFillVisualizer`](/game-api/types/global-e-h/experiencefillvisualizer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfessionDiskAvailablePointsVisualizer()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private static readonly int _Alpha"}</code> | Shader property id for the icon's alpha. |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> | Shader property id for the fill's alpha limit. |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> | Particles played while open. |
| <Link id="m-runninganimation" /><code>{"private Coroutine runningAnimation"}</code> | The fade currently running. |
| <Link id="m-spriterenderer" /><code>{"private SpriteRenderer spriteRenderer"}</code> | Shows the path's tree icon. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Fades out and stops the particles. |
| <Link id="m-setpath" /><code>{"override void SetPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Sets the path, shows its tree icon and resets to hidden. |
| <Link id="m-openinternal" /><code>{"protected override void OpenInternal()"}</code> | Plays the particles and fades in. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate(float target)"}</code> | Starts a fade to the given alpha, stopping any fade already running. |
| <Link id="m-runanimation" /><code>{"private IEnumerator RunAnimation(float target) (iterator)"}</code> | Coroutine that fades the icon's `_Alpha` and the fill's `_AlphaLimit` to the target. |

</details>
