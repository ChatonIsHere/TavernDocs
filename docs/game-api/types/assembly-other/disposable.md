---
title: "Disposable"
description: "Helpers for making IDisposable objects from actions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Disposable

A **static class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

Helpers for making `IDisposable` objects from actions.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`AnonymousDisposable`](/game-api/types/assembly-other/disposable-anonymousdisposable), [`AnonymousDisposable<T>`](/game-api/types/assembly-other/disposable-anonymousdisposable-t), [`EmptyDisposable`](/game-api/types/assembly-other/disposable-emptydisposable)
- **Attributes** `Preserve`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"static readonly IDisposable Empty"}</code> | A disposable that does nothing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static IDisposable Create(Action disposeAction)"}</code> | Returns a disposable that runs the action once when disposed. |
| <Link id="m-createwithstate" /><code>{"static IDisposable CreateWithState<TState>(TState state, Action<TState> disposeAction)"}</code> | Returns a disposable that runs the action with the given state once when disposed. |
