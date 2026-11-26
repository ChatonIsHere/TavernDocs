---
title: "ChildCheckOnOwned"
description: "Server: when the entity spawns, fires one of two events depending on whether it has child entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildCheckOnOwned

A **class** in `Root.Township`, the global namespace.

Server: when the entity spawns, fires one of two events depending on whether it has child entities.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChildCheckOnOwned()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haschild" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" hasChild"}</code> | <span className="api-desc">Fired on server spawn when the entity has at least one child.</span> |
| <Link id="m-hasnochild" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" hasNoChild"}</code> | <span className="api-desc">Fired on server spawn when the entity has no children.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: fires `hasChild` if the entity has children, otherwise `hasNoChild`.</span> |
