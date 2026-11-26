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
| <Link id="m-ctor" /><code>{"CompositeDisposable()"}</code> | <span className="api-desc">Creates a `CompositeDisposable` from `disposables`.</span> |
| <Link id="m-ctor-2" /><code>{"CompositeDisposable(int capacity)"}</code> | <span className="api-desc">Creates a `CompositeDisposable` from `disposables`.</span> |
| <Link id="m-ctor-3" /><code>{"CompositeDisposable(params IDisposable[] disposables)"}</code> | <span className="api-desc">Creates a `CompositeDisposable` from `disposables`.</span> |
| <Link id="m-ctor-4" /><code>{"CompositeDisposable(IEnumerable<IDisposable> disposables)"}</code> | <span className="api-desc">Creates a `CompositeDisposable` from `disposables`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int _count"}</code> | <span className="api-desc">Number of held disposables.</span> |
| <Link id="m-disposables" /><code>{"private List<IDisposable> _disposables"}</code> | <span className="api-desc">The held disposables; removed slots are null until the list shrinks.</span> |
| <Link id="m-disposed" /><code>{"private bool _disposed"}</code> | <span className="api-desc">Backing field for `IsDisposed`.</span> |
| <Link id="m-gate" /><code>{"private readonly object _gate"}</code> | <span className="api-desc">Lock object.</span> |
| <Link id="m-shrink-threshold" /><code>{"private const int SHRINK_THRESHOLD"}</code> | <span className="api-desc">List capacity above which removing items shrinks the list.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | <span className="api-desc">How many disposables are held.</span> |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | <span className="api-desc">Whether `Dispose` has been called.</span> |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> | <span className="api-desc">Always false.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(IDisposable item)"}</code> | <span className="api-desc">Adds a disposable, or disposes it straight away if the group is already disposed.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Disposes and removes everything, but the group stays usable.</span> |
| <Link id="m-contains" /><code>{"bool Contains(IDisposable item)"}</code> | <span className="api-desc">Whether the group holds the disposable.</span> |
| <Link id="m-copyto" /><code>{"void CopyTo(IDisposable[] array, int arrayIndex)"}</code> | <span className="api-desc">Copies the held disposables into an array.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes everything and marks the group disposed.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<IDisposable> GetEnumerator()"}</code> | <span className="api-desc">Enumerates a snapshot of the held disposables.</span> |
| <Link id="m-remove" /><code>{"bool Remove(IDisposable item)"}</code> | <span className="api-desc">Removes and disposes a disposable. Returns false if it wasn't in the group.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates a snapshot of the held disposables.</span> |

</details>
