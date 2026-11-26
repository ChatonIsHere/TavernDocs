---
title: "INetworkProjectile"
description: "A networked projectile: its entity, physics parts and effect setup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkProjectile

An **interface** in `Root.Township`, `Alta.Impact`.

A networked projectile: its entity, physics parts and effect setup.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`NetworkContactProjectile`](/mod/game-api/types/alta-items/networkcontactprojectile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"Collider Collider { get; }"}</code> | The projectile's collider. |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The projectile's network entity. |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; set; }"}</code> | The projectile's rigidbody. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The projectile's transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffects" /><code>{"void InitializeEffects()"}</code> | Sets up the projectile's effects. |
