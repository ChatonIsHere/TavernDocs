---
title: "IFactoryAsync<TParam1, TParam2, TInterface>"
description: "Async factory that takes two parameters, for the VContainer layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsync&lt;TParam1, TParam2, TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async factory that takes two parameters, for the VContainer layer.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`FactoryAsync<TParam1, TParam2, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tconcrete-tinterface)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"Task<TInterface> Create(TParam1 param1, TParam2 param2)"}</code> | <span className="api-desc">Makes a new instance from the parameters and returns it when ready.</span> |
