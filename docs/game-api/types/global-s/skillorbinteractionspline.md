---
title: "SkillOrbInteractionSpline"
description: "Pooled particle stream that flows along a spline from a player's elbow through the wrist to a skill orb, coloured for buying or selling."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbInteractionSpline

A **class** in `Root.Township`, no namespace.

Pooled particle stream that flows along a spline from a player's elbow through the wrist to a skill orb, coloured for buying or selling. Client visuals.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Nested types** [`SplineParamaters`](/game-api/types/global-s/skillorbinteractionspline-splineparamaters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbInteractionSpline()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | Current particle colour. |
| <Link id="m-androidparticles" /><code>{"private ParticleSystem androidParticles"}</code> | Separate particle system, probably for the Android build. |
| <Link id="m-buyingcolor" /><code>{"private Color buyingColor"}</code> | Particle colour when buying. |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | Player character whose IK update drives `RenderUpdate`. |
| <Link id="m-direction" /><code>{"private int direction"}</code> | Side sign, flipped for the right hand. |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | The arm's elbow bone. |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | The arm's wrist bone. |
| <Link id="m-isbuying" /><code>{"private bool isBuying"}</code> | Whether the stream is for buying (reversed flow). |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> | Particle system moved along the spline. |
| <Link id="m-particles-2" /><code>{"private ParticleSystem.Particle[] Particles"}</code> | Buffer of particles read and written each render update. |
| <Link id="m-sellingcolor" /><code>{"private Color sellingColor"}</code> | Particle colour when selling. |
| <Link id="m-speedparameters" /><code>{"private float[] speedParameters"}</code> | Tangent lengths at each spline stage, indexed by `SplineParamaters`. |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | The Bezier spline the particles follow. |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> | World position of the orb. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renderupdate" /><code>{"void RenderUpdate()"}</code> | Rebuilds the spline from the arm and orb positions and moves each particle along it by lifetime. |
| <Link id="m-set" /><code>{"void Set("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" orb, bool isBuying)"}</code> | Attaches the stream to the interacting hand's arm and the orb and picks the colour. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sizes the particle buffer and hooks `Requested` to clean up. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getindex" /><code>{"private int GetIndex(int index, int max)"}</code> | Reverses a control point index when buying, so the stream flows the other way. |
| <Link id="m-resetunpooled" /><code>{"private void ResetUnpooled("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Unhooks from the character's IK pre-render callback. |

</details>
