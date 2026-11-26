---
title: "ParticleImpactor"
description: "Settings for a particle system whose particles deal damage when they hit, such as a spray attack: the impact channel, damage amounts and impact type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleImpactor

A **class** in `Root.Township`, `Alta.Impact`.

Settings for a particle system whose particles deal damage when they hit, such as a spray attack: the impact channel, damage amounts and impact type.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticleImpactor()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel"}</code> | Backing field for `Channel`. |
| <Link id="m-damagetype" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" damageType"}</code> | Backing field for `DamageType`. |
| <Link id="m-localparticlesystem" /><code>{"private ParticleSystem localParticleSystem"}</code> | Backing field for `ParticleSystem`. |
| <Link id="m-particlecrippledamage" /><code>{"private float particleCrippleDamage"}</code> | Backing field for `ParticleCrippleDamage`. |
| <Link id="m-particlehealthdamage" /><code>{"private float particleHealthDamage"}</code> | Backing field for `ParticleHealthDamage`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" Channel { get; }"}</code> | The impact channel the particle hits use. |
| <Link id="m-damagetype-2" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" DamageType { get; }"}</code> | The impact type the particle hits count as. |
| <Link id="m-particlecrippledamage-2" /><code>{"float ParticleCrippleDamage { get; }"}</code> | Cripple damage per particle hit. |
| <Link id="m-particlehealthdamage-2" /><code>{"float ParticleHealthDamage { get; }"}</code> | Health damage per particle hit. |
| <Link id="m-particlesystem" /><code>{"ParticleSystem ParticleSystem { get; }"}</code> | The particle system on this object. |
