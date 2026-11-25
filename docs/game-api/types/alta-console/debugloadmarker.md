---
title: "DebugLoadMarker"
description: "class DebugLoadMarker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugLoadMarker

A **class** in `Root.Township`, `Alta.QATools`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`IChunkLoader`](/game-api/types/alta-console/debugloadmarker-ichunkloader), [`NormalChunkLoader`](/game-api/types/alta-console/debugloadmarker-normalchunkloader), [`OptimisedChunkLoader`](/game-api/types/alta-console/debugloadmarker-optimisedchunkloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private DebugLoadMarker("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkloader" /><code>{"private "}<Link to="/game-api/types/alta-console/debugloadmarker-ichunkloader">{"DebugLoadMarker.IChunkLoader"}</Link>{" chunkLoader"}</code> |  |
| <Link id="m-currentloadedchunks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> currentLoadedChunks"}</code> |  |
| <Link id="m-dynamiclist" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"static void Setup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-disable" /><code>{"private void Disable("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatechunks" /><code>{"private void Updatechunks()"}</code> |  |
