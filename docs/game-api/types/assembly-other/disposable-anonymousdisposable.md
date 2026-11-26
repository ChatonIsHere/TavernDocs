---
title: "Disposable.AnonymousDisposable"
description: "Disposable returned by Disposable.Create: runs an action the first time it's disposed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Disposable.AnonymousDisposable

A **private class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Disposable returned by `Disposable.Create`: runs an action the first time it's disposed.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Disposable`](/game-api/types/assembly-other/disposable)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnonymousDisposable(Action dispose)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private readonly Action dispose"}</code> | The action to run. |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | Whether it has already run. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"void Dispose()"}</code> | Runs the action, only the first time. |
