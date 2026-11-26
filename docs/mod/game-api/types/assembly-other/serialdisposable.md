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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ICancelable`](/mod/game-api/types/assembly-other/icancelable), `IDisposable`
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerialDisposable()"}</code> | <span className="api-desc">Creates a `SerialDisposable` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private IDisposable current"}</code> | <span className="api-desc">Backing field for `Disposable`.</span> |
| <Link id="m-disposed" /><code>{"private bool disposed"}</code> | <span className="api-desc">Backing field for `IsDisposed`.</span> |
| <Link id="m-gate" /><code>{"private readonly object gate"}</code> | <span className="api-desc">Lock object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-disposable" /><code>{"IDisposable Disposable { get; set; }"}</code> | <span className="api-desc">The current disposable. Setting it disposes the previous one, or disposes the new one if this is already disposed.</span> |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | <span className="api-desc">Whether `Dispose` has been called.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes the current disposable and marks this disposed.</span> |
