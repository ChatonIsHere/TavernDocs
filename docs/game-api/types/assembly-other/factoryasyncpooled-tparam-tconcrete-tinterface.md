---
title: "FactoryAsyncPooled<TParam, TConcrete, TInterface>"
description: "Pooled async prefab factory whose instances take one parameter on spawn through IPooledInstance.OnSpawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsyncPooled&lt;TParam, TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

Pooled async prefab factory whose instances take one parameter on spawn through `IPooledInstance.OnSpawn`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsyncPooled<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface), [`IFactoryAsyncPooled<TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam-tinterface), [`IFactory`](/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsyncPooled()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"async Task<TInterface> Spawn(TParam param)"}</code> | Gets a pooled or new instance, calls `OnSpawn(param)` on it and returns it. |
