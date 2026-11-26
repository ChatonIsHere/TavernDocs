---
title: "ProjectileEffect"
description: "Plays a pooled effect and a sound where its projectile hits, facing out from the surface."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectileEffect

A **class** in `Root.Township`, the global namespace.

Plays a pooled effect and a sound where its projectile hits, facing out from the surface.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ProjectileComponent`](/mod/game-api/types/global-p/projectilecomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProjectileEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> | <span className="api-desc">Optional pooled effect at the hit point.</span> |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> | <span className="api-desc">Optional sound at the hit point.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-projectilecollided" /><code>{"protected override void ProjectileCollided("}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectile)"}</code> | <span className="api-desc">Spawns `effectDefinition` and plays `soundEffect` at the hit point.</span> |
