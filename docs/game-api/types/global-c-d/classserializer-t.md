---
title: "ClassSerializer<T>"
description: "A Sync that writes a plain object to an entity message by calling a serialize delegate you pass in, using the latest chunk versioning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializer&lt;T&gt;

A **class** in `Root.Township`, no namespace.

A `Sync` that writes a plain object to an entity message by calling a serialize delegate you pass in, using the latest chunk versioning.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`Sync`](/game-api/types/alta-networking/sync)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClassSerializer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, T target, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> sync)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> sync"}</code> | The delegate that writes the target object to a stream. |
| <Link id="m-target" /><code>{"private T target"}</code> | The object being synced. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | Returns `Serialize` as this sync's serialize method. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes `target` to the stream for a player by calling the `sync` delegate. |

## Used in

Members of other types that take, return or hold a `ClassSerializer&lt;T>`:

[`ClassSerializationHelper.Prepare`](/game-api/types/global-c-d/classserializationhelper#m-prepare).
