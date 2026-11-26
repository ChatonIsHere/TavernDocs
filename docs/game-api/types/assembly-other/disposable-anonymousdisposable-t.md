---
title: "Disposable.AnonymousDisposable<T>"
description: "Disposable returned by Disposable.CreateWithState: runs an action with a state value the first time it's disposed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Disposable.AnonymousDisposable&lt;T&gt;

A **private class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Disposable returned by `Disposable.CreateWithState`: runs an action with a state value the first time it's disposed.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Disposable`](/game-api/types/assembly-other/disposable)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnonymousDisposable(T state, Action<T> dispose)"}</code> | Creates a `Disposable.AnonymousDisposable` from `state` and `dispose`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private readonly Action<T> dispose"}</code> | The action to run. |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | Whether it has already run. |
| <Link id="m-state" /><code>{"private readonly T state"}</code> | Value passed to the action. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"void Dispose()"}</code> | Runs the action with the state, only the first time. |
