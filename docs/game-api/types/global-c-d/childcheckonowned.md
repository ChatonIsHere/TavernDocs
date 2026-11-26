---
title: "ChildCheckOnOwned"
description: "Server: when the entity spawns, fires one of two events depending on whether it has child entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildCheckOnOwned

A **class** in `Root.Township`, no namespace.

Server: when the entity spawns, fires one of two events depending on whether it has child entities.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChildCheckOnOwned()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haschild" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" hasChild"}</code> | Fired on server spawn when the entity has at least one child. |
| <Link id="m-hasnochild" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" hasNoChild"}</code> | Fired on server spawn when the entity has no children. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: fires `hasChild` if the entity has children, otherwise `hasNoChild`. |
