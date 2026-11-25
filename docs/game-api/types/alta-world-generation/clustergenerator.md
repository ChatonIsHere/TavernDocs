---
title: "ClusterGenerator"
description: "class ClusterGenerator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClusterGenerator

A **class** in `Root.Township`, `Alta.Caves.Displays`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClusterGenerator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cluster" /><code>{"private "}<Link to="/game-api/types/global-c-d/cluster">{"Cluster"}</Link>{" cluster"}</code> |  |
| <Link id="m-isgeneratingfirsttime" /><code>{"private bool isGeneratingFirstTime"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/clustersettings">{"ClusterSettings"}</Link>{" settings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgeneratingfirsttime-2" /><code>{"protected override bool IsGeneratingFirstTime { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-positionchild" /><code>{"private void PositionChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> |  |
