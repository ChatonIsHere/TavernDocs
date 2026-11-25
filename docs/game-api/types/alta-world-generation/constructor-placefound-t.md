---
title: "Constructor.PlaceFound<T>"
description: "delegate Constructor.PlaceFound<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Constructor.PlaceFound&lt;T&gt;

A **private delegate** in `Root.Township`, `Alta.PAGaC`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Constructor`](/game-api/types/alta-world-generation/constructor)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlaceFound(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(T part, int x, int y, int z, int rotation, int startX, int startZ, int xxMultiplier, int xzMultiplier, int zxMultiplier, int zzMultiplier, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(T part, int x, int y, int z, int rotation, int startX, int startZ, int xxMultiplier, int xzMultiplier, int zxMultiplier, int zzMultiplier)"}</code> |

## Used in

Members of other types that take, return or hold a `PlaceFound&lt;T>`:

[`Constructor.CheckPlace`](/game-api/types/alta-world-generation/constructor#m-checkplace), [`Constructor.HandlePart`](/game-api/types/alta-world-generation/constructor#m-handlepart).
