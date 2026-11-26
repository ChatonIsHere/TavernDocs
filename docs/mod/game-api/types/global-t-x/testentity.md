---
title: "TestEntity"
description: "Developer test behaviour with an inspector button that spawns many copies of a prefab as children of this entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TestEntity

A **class** in `Root.Township`, the global namespace.

Developer test behaviour with an inspector button that spawns many copies of a prefab as children of this entity.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TestEntity()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | <span className="api-desc">Inspector button that calls `Spawn`.</span> |
| <Link id="m-numbertospawn" /><code>{"private int numberToSpawn"}</code> | <span className="api-desc">How many copies to spawn (100 by default).</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Prefab to spawn.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Reads the button field and does nothing else.</span> |
| <Link id="m-spawn" /><code>{"private void Spawn()"}</code> | <span className="api-desc">Spawns `numberToSpawn` copies of `prefab` at this transform, saved as children of this entity.</span> |

</details>
