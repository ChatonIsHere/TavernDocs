---
title: "ClassSerializer<T>"
description: "class ClassSerializer<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializer&lt;T&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`Sync`](/game-api/types/alta-networking/sync)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClassSerializer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, T target, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> sync)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-sync" /><code>{"private Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> sync"}</code> |
| <Link id="m-target" /><code>{"private T target"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `ClassSerializer&lt;T>`:

[`ClassSerializationHelper.Prepare`](/game-api/types/global-c-d/classserializationhelper#m-prepare).
