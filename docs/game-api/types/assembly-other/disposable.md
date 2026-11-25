---
title: "Disposable"
description: "static class Disposable in Alta.LifecycleManagement.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Disposable

A **static class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`AnonymousDisposable`](/game-api/types/assembly-other/disposable-anonymousdisposable), [`AnonymousDisposable<T>`](/game-api/types/assembly-other/disposable-anonymousdisposable-t), [`EmptyDisposable`](/game-api/types/assembly-other/disposable-emptydisposable)
- **Attributes** `Preserve`

## Fields

| Member |
| --- |
| <Link id="m-empty" /><code>{"static readonly IDisposable Empty"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-create" /><code>{"static IDisposable Create(Action disposeAction)"}</code> |
| <Link id="m-createwithstate" /><code>{"static IDisposable CreateWithState<TState>(TState state, Action<TState> disposeAction)"}</code> |
