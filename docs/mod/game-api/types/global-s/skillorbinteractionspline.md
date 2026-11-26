---
title: "SkillOrbInteractionSpline"
description: "Pooled particle stream that flows along a spline from a player's elbow through the wrist to a skill orb, coloured for buying or selling."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbInteractionSpline

A **class** in `Root.Township`, the global namespace.

Pooled particle stream that flows along a spline from a player's elbow through the wrist to a skill orb, coloured for buying or selling. Client visuals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Nested types** [`SplineParamaters`](/mod/game-api/types/global-s/skillorbinteractionspline-splineparamaters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbInteractionSpline()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | <span className="api-desc">Current particle colour.</span> |
| <Link id="m-androidparticles" /><code>{"private ParticleSystem androidParticles"}</code> | <span className="api-desc">Separate particle system, probably for the Android build.</span> |
| <Link id="m-buyingcolor" /><code>{"private Color buyingColor"}</code> | <span className="api-desc">Particle colour when buying.</span> |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | <span className="api-desc">Player character whose IK update drives `RenderUpdate`.</span> |
| <Link id="m-direction" /><code>{"private int direction"}</code> | <span className="api-desc">Side sign, flipped for the right hand.</span> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | <span className="api-desc">The arm's elbow bone.</span> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | <span className="api-desc">The arm's wrist bone.</span> |
| <Link id="m-isbuying" /><code>{"private bool isBuying"}</code> | <span className="api-desc">Whether the stream is for buying (reversed flow).</span> |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> | <span className="api-desc">Particle system moved along the spline.</span> |
| <Link id="m-particles-2" /><code>{"private ParticleSystem.Particle[] Particles"}</code> | <span className="api-desc">Buffer of particles read and written each render update.</span> |
| <Link id="m-sellingcolor" /><code>{"private Color sellingColor"}</code> | <span className="api-desc">Particle colour when selling.</span> |
| <Link id="m-speedparameters" /><code>{"private float[] speedParameters"}</code> | <span className="api-desc">Tangent lengths at each spline stage, indexed by `SplineParamaters`.</span> |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | <span className="api-desc">The Bezier spline the particles follow.</span> |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> | <span className="api-desc">World position of the orb.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renderupdate" /><code>{"void RenderUpdate()"}</code> | <span className="api-desc">Rebuilds the spline from the arm and orb positions and moves each particle along it by lifetime.</span> |
| <Link id="m-set" /><code>{"void Set("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" orb, bool isBuying)"}</code> | <span className="api-desc">Attaches the stream to the interacting hand's arm and the orb and picks the colour.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Sizes the particle buffer and hooks `Requested` to clean up.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getindex" /><code>{"private int GetIndex(int index, int max)"}</code> | <span className="api-desc">Reverses a control point index when buying, so the stream flows the other way.</span> |
| <Link id="m-resetunpooled" /><code>{"private void ResetUnpooled("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Unhooks from the character's IK pre-render callback.</span> |

</details>
