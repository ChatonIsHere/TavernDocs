---
title: "SeedSprayManager"
description: "On a gotera or fern: spawns its SeedSpray as a child entity on the server and fires it on request while the creature lives."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeedSprayManager

A **class** in `Root.Township`, `Alta.Intelligence`.

On a gotera or fern: spawns its `SeedSpray` as a child entity on the server and fires it on request while the creature lives.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Combat, damage and death](/mod/game-api/creatures/combat-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SeedSprayManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-healthobject" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject"}</code> | <span className="api-desc">The creature's health, checked before shooting and passed to the spray.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">The seed spray prefab to spawn.</span> |
| <Link id="m-spray" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/seedspray">{"SeedSpray"}</Link>{" spray"}</code> | <span className="api-desc">The spawned spray.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: spawns the spray prefab under this transform (not saved), sets its shooter from the prefab root's `ITargetPointer`, and gives it the health object.</span> |
| <Link id="m-shoot" /><code>{"void Shoot()"}</code> | <span className="api-desc">Server: fires the spray if the creature's health is above 0. Called from animation and network events on the prefab.</span> |
