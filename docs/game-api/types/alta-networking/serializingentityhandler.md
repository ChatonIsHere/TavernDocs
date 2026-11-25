---
title: "SerializingEntityHandler"
description: "delegate SerializingEntityHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializingEntityHandler

A **delegate** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializingEntityHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(uint lastIndex, uint index, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, uint size, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int startIndex, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(uint lastIndex, uint index, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, uint size, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int startIndex)"}</code> |

## Used in

Members of other types that take, return or hold a `SerializingEntityHandler`:

[`SceneSerializer.WritingEntity`](/game-api/types/alta-networking/sceneserializer#m-writingentity).
