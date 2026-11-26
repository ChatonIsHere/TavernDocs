---
title: "SkillOrbInteractionSpline"
description: "class SkillOrbInteractionSpline in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbInteractionSpline

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Nested types** [`SplineParamaters`](/game-api/types/global-s/skillorbinteractionspline-splineparamaters)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillOrbInteractionSpline()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> |
| <Link id="m-androidparticles" /><code>{"private ParticleSystem androidParticles"}</code> |
| <Link id="m-buyingcolor" /><code>{"private Color buyingColor"}</code> |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> |
| <Link id="m-direction" /><code>{"private int direction"}</code> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> |
| <Link id="m-isbuying" /><code>{"private bool isBuying"}</code> |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> |
| <Link id="m-particles-2" /><code>{"private ParticleSystem.Particle[] Particles"}</code> |
| <Link id="m-sellingcolor" /><code>{"private Color sellingColor"}</code> |
| <Link id="m-speedparameters" /><code>{"private float[] speedParameters"}</code> |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-renderupdate" /><code>{"void RenderUpdate()"}</code> |
| <Link id="m-set" /><code>{"void Set("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" orb, bool isBuying)"}</code> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getindex" /><code>{"private int GetIndex(int index, int max)"}</code> |
| <Link id="m-resetunpooled" /><code>{"private void ResetUnpooled("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |

</details>
