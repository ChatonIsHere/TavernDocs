---
title: "ClassSerializationHelper.Finalize<T>"
description: "Callback for ClassSerializationHelper.Prepare, called once with the read and write delegates it built for a type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClassSerializationHelper.Finalize&lt;T&gt;

A **delegate** in `Root.Township`, no namespace.

Callback for `ClassSerializationHelper.Prepare`, called once with the read and write delegates it built for a type.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ClassSerializationHelper`](/game-api/types/global-c-d/classserializationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Finalize(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead, Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncRead, Action<T, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> syncWrite)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `Finalize&lt;T>`:

[`ClassSerializationHelper.Prepare`](/game-api/types/global-c-d/classserializationhelper#m-prepare-4).
