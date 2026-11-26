---
title: "RandomState.Disposer"
description: "Shared IDisposable returned by RandomState.Push, so a using block restores the previous Unity random state when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomState.Disposer

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Shared `IDisposable` returned by `RandomState.Push`, so a `using` block restores the previous Unity random state when it ends.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RandomState`](/game-api/types/global-q-r/randomstate)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Disposer()"}</code> |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private void System.IDisposable.Dispose()"}</code> | Calls `RandomState.Pop`, putting back the random state saved by the matching `Push`. |

</details>

## Used in

Members of other types that take, return or hold a `Disposer`:

[`RandomState.disposer`](/game-api/types/global-q-r/randomstate#m-disposer).
