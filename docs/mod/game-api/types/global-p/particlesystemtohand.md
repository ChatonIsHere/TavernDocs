---
title: "ParticleSystemToHand"
description: "Client-side effect that pulls a particle system's particles towards the local player's hands, alternating left and right, and kills them on arrival."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleSystemToHand

A **class** in `Root.Township`, the global namespace.

Client-side effect that pulls a particle system's particles towards the local player's hands, alternating left and right, and kills them on arrival.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleSystemToHand()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editingparticlesystem" /><code>{"private ParticleSystem editingParticleSystem"}</code> | <span className="api-desc">The particle system whose particles are moved.</span> |
| <Link id="m-particles" /><code>{"private ParticleSystem.Particle[] particles"}</code> | <span className="api-desc">Buffer of up to 64 particles read from the system.</span> |
| <Link id="m-speedoverlifetime" /><code>{"private AnimationCurve speedOverLifetime"}</code> | <span className="api-desc">Speed towards the hand, by particle remaining lifetime.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-moveparticle" /><code>{"private void MoveParticle(Vector3 targetPosition, int startingIndex, int particleCount)"}</code> | <span className="api-desc">Moves every other particle towards the target hand, killing those that get within about 0.3 m.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Plays the system while there is a local player and moves the particles to the grip points.</span> |

</details>
