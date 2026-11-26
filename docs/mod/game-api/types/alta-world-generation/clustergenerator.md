---
title: "ClusterGenerator"
description: "Generated network behaviour that spawns a random number of child prefabs around itself and adds them to a Cluster."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClusterGenerator

A **class** in `Root.Township`, `Alta.Caves.Displays`.

Generated network behaviour that spawns a random number of child prefabs around itself and adds them to a `Cluster`. Server side, saved as children.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClusterGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cluster" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cluster">{"Cluster"}</Link>{" cluster"}</code> | <span className="api-desc">The cluster the spawned children are added to.</span> |
| <Link id="m-isgeneratingfirsttime" /><code>{"private bool isGeneratingFirstTime"}</code> | <span className="api-desc">Backing field for `IsGeneratingFirstTime`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Object pipeline that picks the networked prefab to spawn.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/clustersettings">{"ClusterSettings"}</Link>{" settings"}</code> | <span className="api-desc">Cluster settings: child count curve and how children are placed.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgeneratingfirsttime-2" /><code>{"protected override bool IsGeneratingFirstTime { get; }"}</code> | <span className="api-desc">Returns `isGeneratingFirstTime`, so whether it generates on first spawn is set per prefab.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Spawns a count of prefabs picked from the settings curve, positions each with the settings and adds them to the cluster.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the cluster's offset radius as a red wire sphere.</span> |
| <Link id="m-positionchild" /><code>{"private void PositionChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Places a spawned child using the cluster settings.</span> |

</details>
