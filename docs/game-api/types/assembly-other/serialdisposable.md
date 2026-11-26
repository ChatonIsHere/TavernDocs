---
title: "SerialDisposable"
description: "Holds one disposable at a time: setting a new one disposes the old one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerialDisposable

A **class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

Holds one disposable at a time: setting a new one disposes the old one. Thread-safe.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ICancelable`](/game-api/types/assembly-other/icancelable), `IDisposable`
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerialDisposable()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private IDisposable current"}</code> | Backing field for `Disposable`. |
| <Link id="m-disposed" /><code>{"private bool disposed"}</code> | Backing field for `IsDisposed`. |
| <Link id="m-gate" /><code>{"private readonly object gate"}</code> | Lock object. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-disposable" /><code>{"IDisposable Disposable { get; set; }"}</code> | The current disposable. Setting it disposes the previous one, or disposes the new one if this is already disposed. |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | Whether `Dispose` has been called. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes the current disposable and marks this disposed. |
