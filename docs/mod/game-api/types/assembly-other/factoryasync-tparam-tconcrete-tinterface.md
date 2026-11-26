---
title: "FactoryAsync<TParam, TConcrete, TInterface>"
description: "Async prefab factory taking one parameter, passed to the component's FactoryConstruct."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsync&lt;TParam, TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async prefab factory taking one parameter, passed to the component's `FactoryConstruct`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsync`](/mod/game-api/types/assembly-other/factoryasync), [`IFactoryAsync<TParam, TInterface>`](/mod/game-api/types/assembly-other/ifactoryasync-intparam-tinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsync()"}</code> | Creates a `FactoryAsync` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"async Task<TInterface> Create(TParam param)"}</code> | Loads and instantiates the prefab with injection, calls `FactoryConstruct(param)` on the component, tracks it for disposal and returns it. |
