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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IDisposer`](/game-api/types/assembly-other/idisposer), `IDisposable`
- **Attributes** `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Disposer()"}</code> | Creates a `Disposer` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | Whether it has been disposed. |
| <Link id="m-trackeddisposables" /><code>{"private readonly HashSet<IDisposable> trackedDisposables"}</code> | The tracked disposables. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-preventstripping" /><code>{"static void __PreventStripping()"}</code> | Creates an instance so the build doesn't strip the class. |
| <Link id="m-add" /><code>{"void Add(IDisposable disposable)"}</code> | Tracks a disposable, or disposes it at once if this is already disposed. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes every tracked disposable, once. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | If never disposed, the finalizer still disposes the tracked items, on the garbage collector's thread. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"private void Dispose(bool dispose)"}</code> | Disposes every tracked disposable, once. |
| <Link id="m-releaseunmanagedresources" /><code>{"private void ReleaseUnmanagedResources()"}</code> | Disposes and forgets every tracked disposable. |

</details>
