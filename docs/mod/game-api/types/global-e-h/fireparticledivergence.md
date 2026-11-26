---
title: "FireParticleDivergence"
description: "Pushes fire particles sideways and shortens their life when they enter the particle system's first trigger collider, so flames part around an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireParticleDivergence

A **class** in `Root.Township`, the global namespace.

Pushes fire particles sideways and shortens their life when they enter the particle system's first trigger collider, so flames part around an object.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireParticleDivergence()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-divergencecollider" /><code>{"private Collider divergenceCollider"}</code> | <span className="api-desc">Collider particles diverge from. Overwritten with the trigger module's first collider on enable.</span> |
| <Link id="m-enter" /><code>{"private List<ParticleSystem.Particle> enter"}</code> | <span className="api-desc">Reused list of particles that entered the trigger this frame.</span> |
| <Link id="m-lifetimereduction" /><code>{"private float lifeTimeReduction"}</code> | <span className="api-desc">Divisor for an entering particle's remaining lifetime. Default 1.1.</span> |
| <Link id="m-maxforce" /><code>{"private float maxForce"}</code> | <span className="api-desc">Cap on the push velocity, also used when a particle is exactly on the collider's axis.</span> |
| <Link id="m-particlesystem" /><code>{"private ParticleSystem particleSystem"}</code> | <span className="api-desc">The particle system on this object.</span> |
| <Link id="m-pushforce" /><code>{"private float pushForce"}</code> | <span className="api-desc">Scale for the push velocity.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Scale for the push, divided by the particle's offset from the collider.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleenteredparticles" /><code>{"private void HandleEnteredParticles(int numberOfParticlesEntered)"}</code> | <span className="api-desc">Sets each entering particle's horizontal velocity away from the collider and divides its remaining lifetime by `lifeTimeReduction`.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Caches the particle system and takes the collider from its trigger module.</span> |
| <Link id="m-onparticletrigger" /><code>{"private void OnParticleTrigger()"}</code> | <span className="api-desc">Unity callback: gets entering particles, adjusts them and writes them back.</span> |

</details>
