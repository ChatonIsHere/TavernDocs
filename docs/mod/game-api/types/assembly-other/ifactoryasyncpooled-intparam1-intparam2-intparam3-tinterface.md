---
title: "IFactoryAsyncPooled<TParam1, TParam2, TParam3, TInterface>"
description: "Async pooled factory that passes three parameters to each spawned instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsyncPooled&lt;TParam1, TParam2, TParam3, TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async pooled factory that passes three parameters to each spawned instance.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"void Despawn(TInterface instance)"}</code> | Returns the instance to the pool. |
| <Link id="m-spawn" /><code>{"Task<TInterface> Spawn(TParam1 param1, TParam2 param2, TParam3 param3)"}</code> | Gets or makes an instance, passing it the parameters, and returns it when ready. |
