---
title: "IFactoryAsync<TParam, TInterface>"
description: "Async factory that takes one parameter, for the VContainer layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsync&lt;TParam, TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, no namespace.

Async factory that takes one parameter, for the VContainer layer.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`FactoryAsync<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam-tconcrete-tinterface)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"Task<TInterface> Create(TParam param)"}</code> | Makes a new instance from the parameter and returns it when ready. |
