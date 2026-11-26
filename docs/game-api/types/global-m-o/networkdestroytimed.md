---
title: "NetworkDestroyTimed"
description: "Destroys its entity after a set time plus an optional random extra."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkDestroyTimed

A **class** in `Root.Township`, no namespace.

Destroys its entity after a set time plus an optional random extra. Server only; a top-level entity with this is never saved.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkDestroyTimed()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | Timeline entry for the scheduled destroy. |
| <Link id="m-randomadditionaltime" /><code>{"private float randomAdditionalTime"}</code> | Up to this many extra random seconds are added. |
| <Link id="m-time" /><code>{"private float time"}</code> | Seconds before the entity is destroyed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: stops a top-level entity from saving and schedules `Destroy`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"private void Destroy()"}</code> | Destroys the entity across the network, first detaching it if it is embedded in a parent. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the scheduled destroy. |

</details>
