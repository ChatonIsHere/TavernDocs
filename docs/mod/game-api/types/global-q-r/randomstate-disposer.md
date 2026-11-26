---
title: "RandomState.Disposer"
description: "Shared IDisposable returned by RandomState.Push, so a using block restores the previous Unity random state when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomState.Disposer

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Shared `IDisposable` returned by `RandomState.Push`, so a `using` block restores the previous Unity random state when it ends.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RandomState`](/mod/game-api/types/global-q-r/randomstate)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Disposer()"}</code> | Creates a `RandomState.Disposer` with default values. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private void System.IDisposable.Dispose()"}</code> | Calls `RandomState.Pop`, putting back the random state saved by the matching `Push`. |

</details>

## Used in

Members of other types that take, return or hold a `Disposer`:

[`RandomState.disposer`](/mod/game-api/types/global-q-r/randomstate#m-disposer).
