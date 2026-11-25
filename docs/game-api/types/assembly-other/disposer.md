---
title: "Disposer"
description: "class Disposer in Alta.LifecycleManagement.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Disposer

A **class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IDisposer`](/game-api/types/assembly-other/idisposer), `IDisposable`
- **Attributes** `Preserve`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Disposer()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> |
| <Link id="m-trackeddisposables" /><code>{"private readonly HashSet<IDisposable> trackedDisposables"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-preventstripping" /><code>{"static void __PreventStripping()"}</code> |
| <Link id="m-add" /><code>{"void Add(IDisposable disposable)"}</code> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-dispose-2" /><code>{"private void Dispose(bool dispose)"}</code> |
| <Link id="m-releaseunmanagedresources" /><code>{"private void ReleaseUnmanagedResources()"}</code> |

</details>
