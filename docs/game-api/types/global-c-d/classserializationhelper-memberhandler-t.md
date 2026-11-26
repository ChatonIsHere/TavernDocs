---
title: "ClassSerializationHelper.MemberHandler<T>"
description: "Handler that builds the stream read and write actions for one reflected field or property, given its type and getter and setter delegates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializationHelper.MemberHandler&lt;T&gt;

A **delegate** in `Root.Township`, no namespace.

Handler that builds the stream read and write actions for one reflected field or property, given its type and getter and setter delegates. Used when preparing reflection-based save serializers.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ClassSerializationHelper`](/game-api/types/global-c-d/classserializationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MemberHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> |

## Used in

Members of other types that take, return or hold a `MemberHandler&lt;T>`:

[`ClassSerializationHelper.Prepare`](/game-api/types/global-c-d/classserializationhelper#m-prepare-4), [`ClassSerializationHelper.SerializeByType`](/game-api/types/global-c-d/classserializationhelper#m-serializebytype).
