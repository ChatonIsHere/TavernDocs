---
title: "StreamMethod"
description: "A method that reads or writes something on a serialization stream."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamMethod

A **delegate** in `Root.Township`, `Alta.Networking`.

A method that reads or writes something on a serialization stream. Used as the handler for `Sync` and `MethodSync`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StreamMethod(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `StreamMethod`:

[`MethodSync.MethodSync`](/game-api/types/alta-networking/methodsync#m-ctor-2), [`Sync.Sync`](/game-api/types/alta-networking/sync#m-ctor).
