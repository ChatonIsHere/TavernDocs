---
title: "LightCluster"
description: "Cluster that drives one light by how many parts it holds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightCluster

A **class** in `Root.Township`, the global namespace.

Cluster that drives one light by how many parts it holds. The server syncs the count and clients set the light intensity from a curve.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`Cluster`](/mod/game-api/types/global-c-d/cluster)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightCluster()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clusterlight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" clusterLight"}</code> | <span className="api-desc">The light driven by the count.</span> |
| <Link id="m-intensityoverquantity" /><code>{"private AnimationCurve intensityOverQuantity"}</code> | <span className="api-desc">Curve of light intensity against part count.</span> |
| <Link id="m-synccount" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncCount"}</code> | <span className="api-desc">Sync message for the part count.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addingfinished" /><code>{"override void AddingFinished("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">After parts are added, syncs the new count and updates the light.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the count sync message.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current count to a joining player.</span> |
| <Link id="m-removeinternal" /><code>{"protected override void RemoveInternal("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | <span className="api-desc">After a part is removed, syncs the new count and updates the light.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synccount-2" /><code>{"private void SyncCount("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int count)"}</code> | <span className="api-desc">Sends the part count (0 to 31). Remote clients update the light.</span> |
| <Link id="m-updatecount" /><code>{"private void UpdateCount(int count)"}</code> | <span className="api-desc">Client: turns the light off at zero parts, otherwise sets its intensity from the curve.</span> |

</details>
