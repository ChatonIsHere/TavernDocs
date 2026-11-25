---
title: "Cluster"
description: "class Cluster in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Cluster

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`LightCluster`](/game-api/types/global-i-l/lightcluster), [`RockCluster`](/game-api/types/global-q-r/rockcluster)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Cluster()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-parts" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> parts"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part, bool isSingle, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-addingfinished" /><code>{"virtual void AddingFinished("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-checkdestroy" /><code>{"virtual void CheckDestroy()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> |  |
| <Link id="m-addinternal" /><code>{"protected virtual void AddInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> |  |
| <Link id="m-remove-2" /><code>{"private void Remove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part, bool isUnloading)"}</code> |  |
| <Link id="m-removeinternal" /><code>{"protected virtual void RemoveInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Cluster`:

[`ClusterGenerator.cluster`](/game-api/types/alta-world-generation/clustergenerator#m-cluster).
