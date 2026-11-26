---
title: "Binder"
description: "Non-generic base of Binder<TContract>, the fluent binding helper used with builder.Bind<T>()."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Binder

An **abstract class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Non-generic base of `Binder<TContract>`, the fluent binding helper used with `builder.Bind<T>()`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`Binder<TContract>`](/mod/game-api/types/assembly-other/binder-tcontract)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Binder()"}</code> | Creates a `Binder` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-validentrypoints" /><code>{"protected static readonly HashSet<Type> ValidEntryPoints"}</code> | VContainer entry point interfaces (initializable, startable, tickable and so on) a bound type is registered for if it implements them. |
