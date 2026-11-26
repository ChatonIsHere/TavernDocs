---
title: "CompositeDisposable"
description: "class CompositeDisposable in Alta.LifecycleManagement.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompositeDisposable

A **class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `ICollection<IDisposable>`, `IEnumerable<IDisposable>`, `IEnumerable`, `IDisposable`, [`ICancelable`](/game-api/types/assembly-other/icancelable)
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CompositeDisposable()"}</code> |
| <Link id="m-ctor-2" /><code>{"CompositeDisposable(int capacity)"}</code> |
| <Link id="m-ctor-3" /><code>{"CompositeDisposable(params IDisposable[] disposables)"}</code> |
| <Link id="m-ctor-4" /><code>{"CompositeDisposable(IEnumerable<IDisposable> disposables)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-count" /><code>{"private int _count"}</code> |
| <Link id="m-disposables" /><code>{"private List<IDisposable> _disposables"}</code> |
| <Link id="m-disposed" /><code>{"private bool _disposed"}</code> |
| <Link id="m-gate" /><code>{"private readonly object _gate"}</code> |
| <Link id="m-shrink-threshold" /><code>{"private const int SHRINK_THRESHOLD"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"void Add(IDisposable item)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-contains" /><code>{"bool Contains(IDisposable item)"}</code> |
| <Link id="m-copyto" /><code>{"void CopyTo(IDisposable[] array, int arrayIndex)"}</code> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<IDisposable> GetEnumerator()"}</code> |
| <Link id="m-remove" /><code>{"bool Remove(IDisposable item)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>
