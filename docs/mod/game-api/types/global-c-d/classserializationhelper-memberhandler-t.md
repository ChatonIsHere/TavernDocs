---
title: "ClassSerializationHelper.MemberHandler<T>"
description: "Handler that builds the stream read and write actions for one reflected field or property, given its type and getter and setter delegates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializationHelper.MemberHandler&lt;T&gt;

A **delegate** in `Root.Township`, the global namespace.

Handler that builds the stream read and write actions for one reflected field or property, given its type and getter and setter delegates. Used when preparing reflection-based save serializers.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`ClassSerializationHelper`](/mod/game-api/types/global-c-d/classserializationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MemberHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Type type, Delegate get, Delegate set, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, ref Action<T, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `MemberHandler&lt;T>`:

[`ClassSerializationHelper.Prepare`](/mod/game-api/types/global-c-d/classserializationhelper#m-prepare-4), [`ClassSerializationHelper.SerializeByType`](/mod/game-api/types/global-c-d/classserializationhelper#m-serializebytype).
