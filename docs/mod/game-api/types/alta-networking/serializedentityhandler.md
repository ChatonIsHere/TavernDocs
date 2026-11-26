---
title: "SerializedEntityHandler"
description: "Handler for the EntitySerializer.WroteEntity and ReadEntity events, given the serializer, the entity and its raw serialized bits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedEntityHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Handler for the `EntitySerializer.WroteEntity` and `ReadEntity` events, given the serializer, the entity and its raw serialized bits.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedEntityHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint[] data, uint bitlength, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint[] data, uint bitlength)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SerializedEntityHandler`:

[`EntitySerializer.ReadEntity`](/mod/game-api/types/alta-networking/entityserializer#m-readentity), [`EntitySerializer.WroteEntity`](/mod/game-api/types/alta-networking/entityserializer#m-wroteentity).
