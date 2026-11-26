---
title: "SerializeMethod<T>"
description: "Callback that reads or writes data for one player on a stream, with an extra argument of type T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializeMethod&lt;T&gt;

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback that reads or writes data for one player on a stream, with an extra argument of type `T`. A non-generic version without the argument sits in the same file.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializeMethod(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, T arguments, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, T arguments)"}</code> |

## Used in

Members of other types that take, return or hold a `SerializeMethod&lt;T>`:

[`MethodSyncClass<T>.method`](/game-api/types/alta-networking/methodsyncclass-t#m-method), [`MethodSyncClass<T>.MethodSyncClass<T>`](/game-api/types/alta-networking/methodsyncclass-t#m-ctor), [`MethodSyncStruct<T>.method`](/game-api/types/alta-networking/methodsyncstruct-t#m-method), [`MethodSyncStruct<T>.MethodSyncStruct<T>`](/game-api/types/alta-networking/methodsyncstruct-t#m-ctor).
