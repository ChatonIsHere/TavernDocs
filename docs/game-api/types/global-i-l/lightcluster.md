---
title: "LightCluster"
description: "Cluster that drives one light by how many parts it holds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightCluster

A **class** in `Root.Township`, no namespace.

Cluster that drives one light by how many parts it holds. The server syncs the count and clients set the light intensity from a curve.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`Cluster`](/game-api/types/global-c-d/cluster)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LightCluster()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clusterlight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" clusterLight"}</code> | The light driven by the count. |
| <Link id="m-intensityoverquantity" /><code>{"private AnimationCurve intensityOverQuantity"}</code> | Curve of light intensity against part count. |
| <Link id="m-synccount" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncCount"}</code> | Sync message for the part count. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addingfinished" /><code>{"override void AddingFinished("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | After parts are added, syncs the new count and updates the light. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the count sync message. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current count to a joining player. |
| <Link id="m-removeinternal" /><code>{"protected override void RemoveInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | After a part is removed, syncs the new count and updates the light. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synccount-2" /><code>{"private void SyncCount("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int count)"}</code> | Sends the part count (0 to 31). Remote clients update the light. |
| <Link id="m-updatecount" /><code>{"private void UpdateCount(int count)"}</code> | Client: turns the light off at zero parts, otherwise sets its intensity from the curve. |

</details>
