---
title: "SerialDisposable"
description: "class SerialDisposable in Alta.LifecycleManagement.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerialDisposable

A **class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ICancelable`](/game-api/types/assembly-other/icancelable), `IDisposable`
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerialDisposable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private IDisposable current"}</code> |  |
| <Link id="m-disposed" /><code>{"private bool disposed"}</code> |  |
| <Link id="m-gate" /><code>{"private readonly object gate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-disposable" /><code>{"IDisposable Disposable { get; set; }"}</code> |  |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
