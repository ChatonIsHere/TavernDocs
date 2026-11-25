---
title: "Cluster"
description: "A network entity that groups child entities (its parts) and destroys itself on the server once every part is gone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Cluster

A **class** in `Root.Township`, no namespace.

A network entity that groups child entities (its parts) and destroys itself on the server once every part is gone. On server spawn it collects the network prefabs under its transform.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`LightCluster`](/game-api/types/global-i-l/lightcluster), [`RockCluster`](/game-api/types/global-q-r/rockcluster)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Cluster()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-parts" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> parts"}</code> | The entities currently in the cluster. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part, bool isSingle, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Adds an entity as a part and watches for it being destroyed. Pass `isSingle` true to call `AddingFinished` straight after. |
| <Link id="m-addingfinished" /><code>{"virtual void AddingFinished("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Hook for subclasses, called once the parts have been added. Does nothing by default. |
| <Link id="m-checkdestroy" /><code>{"virtual void CheckDestroy()"}</code> | Server: destroys the cluster entity if it has no parts left. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Adds every child network prefab as a part, makes the cluster their chunking parent, then calls `AddingFinished`. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | Removes a part, calls `RemoveInternal`, then `CheckDestroy`. Also runs when a part is destroyed. |
| <Link id="m-addinternal" /><code>{"protected virtual void AddInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | Hook for subclasses, called when a new part is added. |
| <Link id="m-removeinternal" /><code>{"protected virtual void RemoveInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | Hook for subclasses, called when a part is removed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-remove-2" /><code>{"private void Remove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part, bool isUnloading)"}</code> | Removes a part, calls `RemoveInternal`, then `CheckDestroy`. Also runs when a part is destroyed. |

</details>

## Used in

Members of other types that take, return or hold a `Cluster`:

[`ClusterGenerator.cluster`](/game-api/types/alta-world-generation/clustergenerator#m-cluster).
