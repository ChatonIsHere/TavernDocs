---
title: "ProfessionDiskAvailablePointsVisualizer"
description: "Client: skill shrine visual for one profession path's available points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionDiskAvailablePointsVisualizer

A **class** in `Root.Township`, the global namespace.

Client: skill shrine visual for one profession path's available points. Shows the tree icon and fades it and the fill in or out, with particles while open.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ExperienceFillVisualizer`](/mod/game-api/types/global-e-h/experiencefillvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfessionDiskAvailablePointsVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private static readonly int _Alpha"}</code> | <span className="api-desc">Shader property id for the icon's alpha.</span> |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> | <span className="api-desc">Shader property id for the fill's alpha limit.</span> |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> | <span className="api-desc">Particles played while open.</span> |
| <Link id="m-runninganimation" /><code>{"private Coroutine runningAnimation"}</code> | <span className="api-desc">The fade currently running.</span> |
| <Link id="m-spriterenderer" /><code>{"private SpriteRenderer spriteRenderer"}</code> | <span className="api-desc">Shows the path's tree icon.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Fades out and stops the particles.</span> |
| <Link id="m-setpath" /><code>{"override void SetPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Sets the path, shows its tree icon and resets to hidden.</span> |
| <Link id="m-openinternal" /><code>{"protected override void OpenInternal()"}</code> | <span className="api-desc">Plays the particles and fades in.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate(float target)"}</code> | <span className="api-desc">Starts a fade to the given alpha, stopping any fade already running.</span> |
| <Link id="m-runanimation" /><code>{"private IEnumerator RunAnimation(float target) (iterator)"}</code> | <span className="api-desc">Coroutine that fades the icon's `_Alpha` and the fill's `_AlphaLimit` to the target.</span> |

</details>
