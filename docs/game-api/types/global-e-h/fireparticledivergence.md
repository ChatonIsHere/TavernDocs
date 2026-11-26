---
title: "FireParticleDivergence"
description: "Pushes fire particles sideways and shortens their life when they enter the particle system's first trigger collider, so flames part around an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireParticleDivergence

A **class** in `Root.Township`, no namespace.

Pushes fire particles sideways and shortens their life when they enter the particle system's first trigger collider, so flames part around an object.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FireParticleDivergence()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-divergencecollider" /><code>{"private Collider divergenceCollider"}</code> | Collider particles diverge from. Overwritten with the trigger module's first collider on enable. |
| <Link id="m-enter" /><code>{"private List<ParticleSystem.Particle> enter"}</code> | Reused list of particles that entered the trigger this frame. |
| <Link id="m-lifetimereduction" /><code>{"private float lifeTimeReduction"}</code> | Divisor for an entering particle's remaining lifetime. Default 1.1. |
| <Link id="m-maxforce" /><code>{"private float maxForce"}</code> | Cap on the push velocity, also used when a particle is exactly on the collider's axis. |
| <Link id="m-particlesystem" /><code>{"private ParticleSystem particleSystem"}</code> | The particle system on this object. |
| <Link id="m-pushforce" /><code>{"private float pushForce"}</code> | Scale for the push velocity. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Scale for the push, divided by the particle's offset from the collider. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleenteredparticles" /><code>{"private void HandleEnteredParticles(int numberOfParticlesEntered)"}</code> | Sets each entering particle's horizontal velocity away from the collider and divides its remaining lifetime by `lifeTimeReduction`. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Caches the particle system and takes the collider from its trigger module. |
| <Link id="m-onparticletrigger" /><code>{"private void OnParticleTrigger()"}</code> | Unity callback: gets entering particles, adjusts them and writes them back. |

</details>
