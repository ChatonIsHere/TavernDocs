---
title: "FactoryAsync<TConcrete, TInterface>"
description: "Async prefab factory with no parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsync&lt;TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async prefab factory with no parameters. Loads the prefab, instantiates it through the container and calls `FactoryConstruct` on its `TConcrete` component.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`FactoryAsync`](/mod/game-api/types/assembly-other/factoryasync), [`IFactoryAsync<TInterface>`](/mod/game-api/types/assembly-other/ifactoryasync-tinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsync()"}</code> | <span className="api-desc">Creates a `FactoryAsync` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"async Task<TInterface> Create()"}</code> | <span className="api-desc">Loads the prefab, instantiates it with injection, calls `FactoryConstruct` on the component, tracks it for disposal and returns it.</span> |
