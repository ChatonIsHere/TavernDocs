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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializedEntityHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint[] data, uint bitlength, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint[] data, uint bitlength)"}</code> |

## Used in

Members of other types that take, return or hold a `SerializedEntityHandler`:

[`EntitySerializer.ReadEntity`](/game-api/types/alta-networking/entityserializer#m-readentity), [`EntitySerializer.WroteEntity`](/game-api/types/alta-networking/entityserializer#m-wroteentity).
