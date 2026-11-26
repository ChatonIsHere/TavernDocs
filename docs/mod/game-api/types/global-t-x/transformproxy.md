---
title: "TransformProxy"
description: "A plain position and rotation, for sending a place over the network (for example where to play particles) without a Transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformProxy

A **class** in `Root.Township`, the global namespace.

A plain position and rotation, for sending a place over the network (for example where to play particles) without a Transform.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Derived types** [`BreakOnImpact.TransformProxyEvent`](/mod/game-api/types/global-a-b/breakonimpact-transformproxyevent), [`BreakOnImpact.TransformProxyHandler`](/mod/game-api/types/global-a-b/breakonimpact-transformproxyhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformProxy()"}</code> | <span className="api-desc">Creates a `TransformProxy` from `target`.</span> |
| <Link id="m-ctor-2" /><code>{"TransformProxy(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Creates a `TransformProxy` from `target`.</span> |
| <Link id="m-ctor-3" /><code>{"TransformProxy(Transform target)"}</code> | <span className="api-desc">Creates a `TransformProxy` from `target`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">The world position.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | <span className="api-desc">The world rotation.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeparticles" /><code>{"static void SerializeParticles("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" sync)"}</code> | <span className="api-desc">Reads or writes the position and a compressed rotation. Reading makes a new proxy.</span> |

## Used in

Members of other types that take, return or hold a `TransformProxy`:

<div className="api-used-in">

[`BreakOnImpact.syncBreaking`](/mod/game-api/types/global-a-b/breakonimpact#m-syncbreaking), [`BreakOnImpact.SyncBreaking`](/mod/game-api/types/global-a-b/breakonimpact#m-syncbreaking-2), [`BreakOnImpact.SyncEffect`](/mod/game-api/types/global-a-b/breakonimpact#m-synceffect), [`BreakOnImpact.syncHitting`](/mod/game-api/types/global-a-b/breakonimpact#m-synchitting), [`BreakOnImpact.SyncHitting`](/mod/game-api/types/global-a-b/breakonimpact#m-synchitting-2), [`ColoredPooledParticleSpawner.SpawnAndColorParticles`](/mod/game-api/types/global-c-d/coloredpooledparticlespawner#m-spawnandcolorparticles), [`PooledObjectDefinitionBase.SpawnAtProxy`](/mod/game-api/types/global-p/pooledobjectdefinitionbase#m-spawnatproxy).

</div>
