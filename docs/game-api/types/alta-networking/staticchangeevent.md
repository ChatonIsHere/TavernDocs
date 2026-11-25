---
title: "StaticChangeEvent"
description: "delegate StaticChangeEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticChangeEvent

A **delegate** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticChangeEvent(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(uint objectHash, bool isModified, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke(uint objectHash, bool isModified)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StaticChangeEvent`:

[`ModifiableStaticManager.ObjectChanged`](/game-api/types/alta-networking/modifiablestaticmanager#m-objectchanged).
