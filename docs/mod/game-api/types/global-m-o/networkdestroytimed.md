---
title: "NetworkDestroyTimed"
description: "Destroys its entity after a set time plus an optional random extra."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkDestroyTimed

A **class** in `Root.Township`, the global namespace.

Destroys its entity after a set time plus an optional random extra. Server only; a top-level entity with this is never saved.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkDestroyTimed()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">Timeline entry for the scheduled destroy.</span> |
| <Link id="m-randomadditionaltime" /><code>{"private float randomAdditionalTime"}</code> | <span className="api-desc">Up to this many extra random seconds are added.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Seconds before the entity is destroyed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: stops a top-level entity from saving and schedules `Destroy`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"private void Destroy()"}</code> | <span className="api-desc">Destroys the entity across the network, first detaching it if it is embedded in a parent.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the scheduled destroy.</span> |

</details>
