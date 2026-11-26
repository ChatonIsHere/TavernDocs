---
title: "FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>"
description: "Pooled async prefab factory whose instances take three parameters on spawn through IPooledInstance.OnSpawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsyncPooled&lt;TParam1, TParam2, TParam3, TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Pooled async prefab factory whose instances take three parameters on spawn through `IPooledInstance.OnSpawn`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsyncPooled<TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface), [`IFactoryAsyncPooled<TParam1, TParam2, TParam3, TInterface>`](/mod/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-intparam3-tinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsyncPooled()"}</code> | Creates a `FactoryAsyncPooled` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"async Task<TInterface> Spawn(TParam1 param1, TParam2 param2, TParam3 param3)"}</code> | Gets a pooled or new instance, calls `OnSpawn` with the three parameters and returns it. |
