---
title: "CompositeDisposable"
description: "Thread-safe group of disposables that are disposed together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompositeDisposable

A **class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

Thread-safe group of disposables that are disposed together. Anything added after it's disposed is disposed at once.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `ICollection<IDisposable>`, `IEnumerable<IDisposable>`, `IEnumerable`, `IDisposable`, [`ICancelable`](/mod/game-api/types/assembly-other/icancelable)
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CompositeDisposable()"}</code> | Creates a `CompositeDisposable` from `disposables`. |
| <Link id="m-ctor-2" /><code>{"CompositeDisposable(int capacity)"}</code> | Creates a `CompositeDisposable` from `disposables`. |
| <Link id="m-ctor-3" /><code>{"CompositeDisposable(params IDisposable[] disposables)"}</code> | Creates a `CompositeDisposable` from `disposables`. |
| <Link id="m-ctor-4" /><code>{"CompositeDisposable(IEnumerable<IDisposable> disposables)"}</code> | Creates a `CompositeDisposable` from `disposables`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int _count"}</code> | Number of held disposables. |
| <Link id="m-disposables" /><code>{"private List<IDisposable> _disposables"}</code> | The held disposables; removed slots are null until the list shrinks. |
| <Link id="m-disposed" /><code>{"private bool _disposed"}</code> | Backing field for `IsDisposed`. |
| <Link id="m-gate" /><code>{"private readonly object _gate"}</code> | Lock object. |
| <Link id="m-shrink-threshold" /><code>{"private const int SHRINK_THRESHOLD"}</code> | List capacity above which removing items shrinks the list. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | How many disposables are held. |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | Whether `Dispose` has been called. |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> | Always false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(IDisposable item)"}</code> | Adds a disposable, or disposes it straight away if the group is already disposed. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Disposes and removes everything, but the group stays usable. |
| <Link id="m-contains" /><code>{"bool Contains(IDisposable item)"}</code> | Whether the group holds the disposable. |
| <Link id="m-copyto" /><code>{"void CopyTo(IDisposable[] array, int arrayIndex)"}</code> | Copies the held disposables into an array. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes everything and marks the group disposed. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<IDisposable> GetEnumerator()"}</code> | Enumerates a snapshot of the held disposables. |
| <Link id="m-remove" /><code>{"bool Remove(IDisposable item)"}</code> | Removes and disposes a disposable. Returns false if it wasn't in the group. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates a snapshot of the held disposables. |

</details>
