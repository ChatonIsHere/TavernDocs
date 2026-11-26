---
title: "Constructor.PlaceFound<T>"
description: "Callback the PAGaC Constructor runs for each spot where a rule or part fits: the grid position, rotation, start offset and the axis multipliers for that..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Constructor.PlaceFound&lt;T&gt;

A **private delegate** in `Root.Township`, `Alta.PAGaC`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Callback the PAGaC `Constructor` runs for each spot where a rule or part fits: the grid position, rotation, start offset and the axis multipliers for that rotation.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`Constructor`](/mod/game-api/types/alta-world-generation/constructor)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceFound(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(T part, int x, int y, int z, int rotation, int startX, int startZ, int xxMultiplier, int xzMultiplier, int zxMultiplier, int zzMultiplier, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(T part, int x, int y, int z, int rotation, int startX, int startZ, int xxMultiplier, int xzMultiplier, int zxMultiplier, int zzMultiplier)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PlaceFound&lt;T>`:

[`Constructor.CheckPlace`](/mod/game-api/types/alta-world-generation/constructor#m-checkplace), [`Constructor.HandlePart`](/mod/game-api/types/alta-world-generation/constructor#m-handlepart).
