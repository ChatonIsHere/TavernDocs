---
title: "DebugLoadMarker"
description: "QA helper that keeps the chunks around an entity force loaded as it moves, as if a player stood there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugLoadMarker

A **class** in `Root.Township`, `Alta.QATools`.

QA helper that keeps the chunks around an entity force loaded as it moves, as if a player stood there. Made by a debugging console command through `Setup`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`IChunkLoader`](/mod/game-api/types/alta-console/debugloadmarker-ichunkloader), [`NormalChunkLoader`](/mod/game-api/types/alta-console/debugloadmarker-normalchunkloader), [`OptimisedChunkLoader`](/mod/game-api/types/alta-console/debugloadmarker-optimisedchunkloader)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private DebugLoadMarker("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Creates a `DebugLoadMarker` from `entity`.</span> |

</details>

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkloader" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/debugloadmarker-ichunkloader">{"DebugLoadMarker.IChunkLoader"}</Link>{" chunkLoader"}</code> | <span className="api-desc">The loader that picks which chunks to keep loaded.</span> |
| <Link id="m-currentloadedchunks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> currentLoadedChunks"}</code> | <span className="api-desc">Chunks this marker currently force loads.</span> |
| <Link id="m-dynamiclist" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList"}</code> | <span className="api-desc">Shared scratch set filled by the loader each update.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity being followed.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">The entity's transform, checked for movement.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered late update method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"static void Setup("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Attaches a load marker to an entity. Uses the optimised loader on a simple server, the normal one otherwise.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Disable("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops the late update when the entity is destroyed. Chunks it force loaded are not released.</span> |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> | <span className="api-desc">Late update: recalculates loaded chunks when the entity's transform has moved.</span> |
| <Link id="m-updatechunks" /><code>{"private void Updatechunks()"}</code> | <span className="api-desc">Force loads the chunks the loader picks for the entity's position and un-force-loads ones no longer needed.</span> |

</details>
