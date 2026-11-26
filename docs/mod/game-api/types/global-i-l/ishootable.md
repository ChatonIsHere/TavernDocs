---
title: "IShootable"
description: "A projectile a bow can fire, such as Arrow or a light beam."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShootable

An **interface** in `Root.Township`, the global namespace.

A projectile a bow can fire, such as `Arrow` or a light beam. Used by `ExtraArrowUpdater` for extra arrows.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Arrow`](/mod/game-api/types/global-a-b/arrow), [`Projectile`](/mod/game-api/types/global-p/projectile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The projectile's network entity. |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The projectile's rigidbody; kept kinematic while it rides on the bow. |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> | The projectile's transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shoot" /><code>{"void Shoot(Vector3 velocity)"}</code> | Launches the projectile with the given velocity. |

## Used in

Members of other types that take, return or hold a `IShootable`:

[`ExtraArrowUpdater.CreateExtraArrow`](/mod/game-api/types/global-e-h/extraarrowupdater#m-createextraarrow), [`ExtraArrowUpdater.ExtraArrowData.Arrow`](/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata#m-arrow).
