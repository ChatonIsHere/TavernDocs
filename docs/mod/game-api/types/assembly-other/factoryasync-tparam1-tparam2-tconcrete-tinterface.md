---
title: "FactoryAsync<TParam1, TParam2, TConcrete, TInterface>"
description: "Async prefab factory taking two parameters, passed to the component's FactoryConstruct."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsync&lt;TParam1, TParam2, TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async prefab factory taking two parameters, passed to the component's `FactoryConstruct`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsync`](/mod/game-api/types/assembly-other/factoryasync), [`IFactoryAsync<TParam1, TParam2, TInterface>`](/mod/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-tinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsync()"}</code> | <span className="api-desc">Creates a `FactoryAsync` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"async Task<TInterface> Create(TParam1 param1, TParam2 param2)"}</code> | <span className="api-desc">Loads and instantiates the prefab with injection, calls `FactoryConstruct` with both parameters, tracks it for disposal and returns it.</span> |
