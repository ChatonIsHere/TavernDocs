---
title: "ProjectileComponent"
description: "Base for components on a Projectile that react when it collides."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectileComponent

An **abstract class** in `Root.Township`, no namespace.

Base for components on a `Projectile` that react when it collides.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ProjectileEffect`](/game-api/types/global-p/projectileeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProjectileComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-projectile" /><code>{"private "}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectile"}</code> | Backing field for `Projectile`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-projectile-2" /><code><Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{" "}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{" { get; }"}</code> | The projectile on this object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks the projectile's `Collided` event. |
| <Link id="m-projectilecollided" /><code>{"protected abstract void ProjectileCollided("}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectile)"}</code> | Runs when the projectile hits something. |
