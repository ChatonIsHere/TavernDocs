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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`Disposable`](/mod/game-api/types/assembly-other/disposable)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnonymousDisposable(T state, Action<T> dispose)"}</code> | <span className="api-desc">Creates a `Disposable.AnonymousDisposable` from `state` and `dispose`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private readonly Action<T> dispose"}</code> | <span className="api-desc">The action to run.</span> |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | <span className="api-desc">Whether it has already run.</span> |
| <Link id="m-state" /><code>{"private readonly T state"}</code> | <span className="api-desc">Value passed to the action.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"void Dispose()"}</code> | <span className="api-desc">Runs the action with the state, only the first time.</span> |
