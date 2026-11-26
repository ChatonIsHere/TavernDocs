---
title: "ProjectileComponent"
description: "Base for components on a Projectile that react when it collides."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectileComponent

An **abstract class** in `Root.Township`, the global namespace.

Base for components on a `Projectile` that react when it collides.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ProjectileEffect`](/mod/game-api/types/global-p/projectileeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProjectileComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-projectile" /><code>{"private "}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectile"}</code> | <span className="api-desc">Backing field for `Projectile`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-projectile-2" /><code><Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{" "}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{" { get; }"}</code> | <span className="api-desc">The projectile on this object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks the projectile's `Collided` event.</span> |
| <Link id="m-projectilecollided" /><code>{"protected abstract void ProjectileCollided("}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectile)"}</code> | <span className="api-desc">Runs when the projectile hits something.</span> |
