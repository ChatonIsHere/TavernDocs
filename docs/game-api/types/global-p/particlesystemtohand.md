---
title: "ParticleSystemToHand"
description: "Client-side effect that pulls a particle system's particles towards the local player's hands, alternating left and right, and kills them on arrival."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleSystemToHand

A **class** in `Root.Township`, no namespace.

Client-side effect that pulls a particle system's particles towards the local player's hands, alternating left and right, and kills them on arrival.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleSystemToHand()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editingparticlesystem" /><code>{"private ParticleSystem editingParticleSystem"}</code> | The particle system whose particles are moved. |
| <Link id="m-particles" /><code>{"private ParticleSystem.Particle[] particles"}</code> | Buffer of up to 64 particles read from the system. |
| <Link id="m-speedoverlifetime" /><code>{"private AnimationCurve speedOverLifetime"}</code> | Speed towards the hand, by particle remaining lifetime. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-moveparticle" /><code>{"private void MoveParticle(Vector3 targetPosition, int startingIndex, int particleCount)"}</code> | Moves every other particle towards the target hand, killing those that get within about 0.3 m. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Plays the system while there is a local player and moves the particles to the grip points. |

</details>
