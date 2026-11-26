---
title: "IFactoryAsync<TInterface>"
description: "Async factory with no parameters, for the VContainer layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsync&lt;TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, no namespace.

Async factory with no parameters, for the VContainer layer. `FactoryAsync` implements it by instantiating a MonoBehaviour.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`FactoryAsync<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tconcrete-tinterface)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"Task<TInterface> Create()"}</code> | Makes a new instance and returns it when ready. |
