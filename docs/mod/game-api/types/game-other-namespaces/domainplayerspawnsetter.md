---
title: "DomainPlayerSpawnSetter"
description: "Marker that sets its parent Domain's player spawn point to its own transform when enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DomainPlayerSpawnSetter

A **class** in `Root.Township`, `ATT.Domains`.

Marker that sets its parent `Domain`'s player spawn point to its own transform when enabled. Server (or local test) only.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DomainPlayerSpawnSetter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a yellow sphere at the spawn point.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Server or local test: calls `SetDomainSpawnPoint`.</span> |
| <Link id="m-setdomainspawnpoint" /><code>{"private void SetDomainSpawnPoint()"}</code> | <span className="api-desc">Sets the parent domain's spawn point to this transform, or logs an error if there is no parent domain.</span> |

</details>
