---
title: "FactoryAsync"
description: "abstract class FactoryAsync in Alta.VContainerLayer.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsync

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/game-api/types/assembly-other/factory)
- **Derived types** [`FactoryAsync<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tconcrete-tinterface), [`FactoryAsync<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam-tconcrete-tinterface), [`FactoryAsync<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tparam3-tconcrete-tinterface)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsync()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-assethandles" /><code>{"private readonly List<AsyncOperationHandle> assetHandles"}</code> |  |
| <Link id="m-prefabreference" /><code>{"private AssetReference prefabReference"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-construct" /><code>{"protected void Construct(AssetReference prefabReference)"}</code> |  |
| <Link id="m-loadasset" /><code>{"protected Task<GameObject> LoadAsset()"}</code> |  |
