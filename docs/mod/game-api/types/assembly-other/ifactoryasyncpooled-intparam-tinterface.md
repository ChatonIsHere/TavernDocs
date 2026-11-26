---
title: "IFactoryAsyncPooled<TParam, TInterface>"
description: "Async pooled factory that passes one parameter to each spawned instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsyncPooled&lt;TParam, TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async pooled factory that passes one parameter to each spawned instance.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"void Despawn(TInterface instance)"}</code> | <span className="api-desc">Returns the instance to the pool.</span> |
| <Link id="m-spawn" /><code>{"Task<TInterface> Spawn(TParam param)"}</code> | <span className="api-desc">Gets or makes an instance, passing it the parameter, and returns it when ready.</span> |
