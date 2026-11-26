---
title: "ICancelable"
description: "A disposable that can report whether it has been disposed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICancelable

An **interface** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

A disposable that can report whether it has been disposed.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`
- **Derived types** [`CompositeDisposable`](/mod/game-api/types/assembly-other/compositedisposable), [`SerialDisposable`](/mod/game-api/types/assembly-other/serialdisposable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | Whether it has been disposed. |
