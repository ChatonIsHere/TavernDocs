---
title: "IDisposer"
description: "A disposable that collects other disposables and disposes them together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDisposer

An **interface** in `Alta.LifecycleManagement.Runtime`, `System`.

A disposable that collects other disposables and disposes them together.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`
- **Derived types** [`Disposer`](/mod/game-api/types/assembly-other/disposer)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(IDisposable disposable)"}</code> | <span className="api-desc">Adds a disposable to be disposed with this one.</span> |

## Used in

Members of other types that take, return or hold a `IDisposer`:

<div className="api-used-in">

[`DisposerExtensions.AddToDisposer`](/mod/game-api/types/assembly-other/disposerextensions#m-addtodisposer), [`DisposerExtensions.OnDisposal`](/mod/game-api/types/assembly-other/disposerextensions#m-ondisposal), [`Factory.disposer`](/mod/game-api/types/assembly-other/factory#m-disposer).

</div>
