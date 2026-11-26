---
title: "SerializingEntityHandler"
description: "Callback for SceneSerializer.WritingEntity, raised before each entity's data is written into a sync stream, with its index, serializer, bit size and stream."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializingEntityHandler

A **delegate** in `Root.Township`, `Alta.Networking.Internal`.

Callback for `SceneSerializer.WritingEntity`, raised before each entity's data is written into a sync stream, with its index, serializer, bit size and stream.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializingEntityHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(uint lastIndex, uint index, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, uint size, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int startIndex, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(uint lastIndex, uint index, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, uint size, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int startIndex)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SerializingEntityHandler`:

[`SceneSerializer.WritingEntity`](/game-api/types/alta-networking/sceneserializer#m-writingentity).
