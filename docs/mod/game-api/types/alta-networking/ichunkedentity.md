---
title: "IChunkedEntity"
description: "What Chunker needs from the object it tracks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChunkedEntity

An **interface** in `Root.Township`, `Alta.Networking`.

What `Chunker` needs from the object it tracks. `NetworkEntity` is the only implementation.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`NetworkEntity`](/mod/game-api/types/alta-networking/networkentity)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunker" /><code><Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" { get; }"}</code> | <span className="api-desc">The chunker that tracks this entity's chunk and parent.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onparentchanged" /><code>{"void OnParentChanged("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | <span className="api-desc">Called by `Chunker` when the entity's parent entity changes. `NetworkEntity` raises `ParentChanged` and the old and new parents' child events.</span> |

## Used in

Members of other types that take, return or hold a `IChunkedEntity`:

<div className="api-used-in">

[`PlayerEntitySyncServer.BeginEntityAdded`](/mod/game-api/types/alta-world/playerentitysyncserver#m-beginentityadded), [`PlayerEntitySyncServer.BeginEntityRemoved`](/mod/game-api/types/alta-world/playerentitysyncserver#m-beginentityremoved), [`Chunker.chunkedEntity`](/mod/game-api/types/global-c-d/chunker#m-chunkedentity).

</div>
