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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleImpactor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel"}</code> | <span className="api-desc">Backing field for `Channel`.</span> |
| <Link id="m-damagetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" damageType"}</code> | <span className="api-desc">Backing field for `DamageType`.</span> |
| <Link id="m-localparticlesystem" /><code>{"private ParticleSystem localParticleSystem"}</code> | <span className="api-desc">Backing field for `ParticleSystem`.</span> |
| <Link id="m-particlecrippledamage" /><code>{"private float particleCrippleDamage"}</code> | <span className="api-desc">Backing field for `ParticleCrippleDamage`.</span> |
| <Link id="m-particlehealthdamage" /><code>{"private float particleHealthDamage"}</code> | <span className="api-desc">Backing field for `ParticleHealthDamage`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">The impact channel the particle hits use.</span> |
| <Link id="m-damagetype-2" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" DamageType { get; }"}</code> | <span className="api-desc">The impact type the particle hits count as.</span> |
| <Link id="m-particlecrippledamage-2" /><code>{"float ParticleCrippleDamage { get; }"}</code> | <span className="api-desc">Cripple damage per particle hit.</span> |
| <Link id="m-particlehealthdamage-2" /><code>{"float ParticleHealthDamage { get; }"}</code> | <span className="api-desc">Health damage per particle hit.</span> |
| <Link id="m-particlesystem" /><code>{"ParticleSystem ParticleSystem { get; }"}</code> | <span className="api-desc">The particle system on this object.</span> |
