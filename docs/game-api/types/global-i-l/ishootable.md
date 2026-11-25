---
title: "IShootable"
description: "interface IShootable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShootable

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Arrow`](/game-api/types/global-a-b/arrow), [`Projectile`](/game-api/types/global-p/projectile)

## Properties

| Member |
| --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-shoot" /><code>{"void Shoot(Vector3 velocity)"}</code> |

## Used in

Members of other types that take, return or hold a `IShootable`:

[`ExtraArrowUpdater.CreateExtraArrow`](/game-api/types/global-e-h/extraarrowupdater#m-createextraarrow), [`ExtraArrowUpdater.ExtraArrowData.Arrow`](/game-api/types/global-e-h/extraarrowupdater-extraarrowdata#m-arrow).
