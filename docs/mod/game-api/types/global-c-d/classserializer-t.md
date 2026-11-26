---
title: "ClassSerializer<T>"
description: "A Sync that writes a plain object to an entity message by calling a serialize delegate you pass in, using the latest chunk versioning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializer&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

A `Sync` that writes a plain object to an entity message by calling a serialize delegate you pass in, using the latest chunk versioning.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`Sync`](/mod/game-api/types/alta-networking/sync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClassSerializer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, T target, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> sync)"}</code> | <span className="api-desc">Creates a `ClassSerializer` from `entity`, `target`, `messageType` and `sync`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> sync"}</code> | <span className="api-desc">The delegate that writes the target object to a stream.</span> |
| <Link id="m-target" /><code>{"private T target"}</code> | <span className="api-desc">The object being synced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | <span className="api-desc">Returns `Serialize` as this sync's serialize method.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes `target` to the stream for a player by calling the `sync` delegate.</span> |

## Used in

Members of other types that take, return or hold a `ClassSerializer&lt;T>`:

<div className="api-used-in">

[`ClassSerializationHelper.Prepare`](/mod/game-api/types/global-c-d/classserializationhelper#m-prepare).

</div>
