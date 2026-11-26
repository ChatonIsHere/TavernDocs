---
title: "Disposer"
description: "IDisposer that tracks disposables and disposes them all when it is disposed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Disposer

A **class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

`IDisposer` that tracks disposables and disposes them all when it is disposed. Not thread-safe.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IDisposer`](/mod/game-api/types/assembly-other/idisposer), `IDisposable`
- **Attributes** `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Disposer()"}</code> | <span className="api-desc">Creates a `Disposer` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | <span className="api-desc">Whether it has been disposed.</span> |
| <Link id="m-trackeddisposables" /><code>{"private readonly HashSet<IDisposable> trackedDisposables"}</code> | <span className="api-desc">The tracked disposables.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-preventstripping" /><code>{"static void __PreventStripping()"}</code> | <span className="api-desc">Creates an instance so the build doesn't strip the class.</span> |
| <Link id="m-add" /><code>{"void Add(IDisposable disposable)"}</code> | <span className="api-desc">Tracks a disposable, or disposes it at once if this is already disposed.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes every tracked disposable, once.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">If never disposed, the finalizer still disposes the tracked items, on the garbage collector's thread.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"private void Dispose(bool dispose)"}</code> | <span className="api-desc">Disposes every tracked disposable, once.</span> |
| <Link id="m-releaseunmanagedresources" /><code>{"private void ReleaseUnmanagedResources()"}</code> | <span className="api-desc">Disposes and forgets every tracked disposable.</span> |

</details>
