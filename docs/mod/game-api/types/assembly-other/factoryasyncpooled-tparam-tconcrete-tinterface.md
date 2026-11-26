---
title: "FactoryAsyncPooled<TParam, TConcrete, TInterface>"
description: "Pooled async prefab factory whose instances take one parameter on spawn through IPooledInstance.OnSpawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsyncPooled&lt;TParam, TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Pooled async prefab factory whose instances take one parameter on spawn through `IPooledInstance.OnSpawn`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsyncPooled<TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface), [`IFactoryAsyncPooled<TParam, TInterface>`](/mod/game-api/types/assembly-other/ifactoryasyncpooled-intparam-tinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsyncPooled()"}</code> | <span className="api-desc">Creates a `FactoryAsyncPooled` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"async Task<TInterface> Spawn(TParam param)"}</code> | <span className="api-desc">Gets a pooled or new instance, calls `OnSpawn(param)` on it and returns it.</span> |
