---
title: "IFactoryAsync<TInterface>"
description: "Async factory with no parameters, for the VContainer layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsync&lt;TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async factory with no parameters, for the VContainer layer. `FactoryAsync` implements it by instantiating a MonoBehaviour.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`FactoryAsync<TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasync-tconcrete-tinterface)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"Task<TInterface> Create()"}</code> | <span className="api-desc">Makes a new instance and returns it when ready.</span> |
