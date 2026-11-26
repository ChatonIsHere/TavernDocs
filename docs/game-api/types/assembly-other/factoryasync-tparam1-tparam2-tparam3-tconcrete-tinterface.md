---
title: "FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>"
description: "Async prefab factory taking three parameters, passed to the component's FactoryConstruct."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsync&lt;TParam1, TParam2, TParam3, TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

Async prefab factory taking three parameters, passed to the component's `FactoryConstruct`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsync`](/game-api/types/assembly-other/factoryasync), [`IFactoryAsync<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-intparam3-tinterface), [`IFactory`](/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsync()"}</code> | Creates a `FactoryAsync` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"async Task<TInterface> Create(TParam1 param1, TParam2 param2, TParam3 param3)"}</code> | Loads and instantiates the prefab with injection, calls `FactoryConstruct` with the three parameters, tracks it for disposal and returns it. |
