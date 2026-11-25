---
title: "FactoryAsyncPooled<TConcrete, TInterface>"
description: "abstract class FactoryAsyncPooled<TConcrete, TInterface> in Alta.VContainerLayer.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsyncPooled&lt;TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/game-api/types/assembly-other/factory)
- **Derived types** [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsyncPooled()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allconcrete" /><code>{"private readonly HashSet<TConcrete> allConcrete"}</code> |  |
| <Link id="m-assethandles" /><code>{"private readonly List<AsyncOperationHandle> assetHandles"}</code> |  |
| <Link id="m-pool" /><code>{"private readonly Stack<TInterface> pool"}</code> |  |
| <Link id="m-prefabreference" /><code>{"private AssetReference prefabReference"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"void Despawn(TInterface instance)"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-construct" /><code>{"protected void Construct(AssetReference prefabReference)"}</code> |  |
| <Link id="m-create" /><code>{"private async Task<TInterface> Create()"}</code> |  |
| <Link id="m-loadasset" /><code>{"private Task<GameObject> LoadAsset()"}</code> |  |
| <Link id="m-spawn" /><code>{"protected async Task<TInterface> Spawn()"}</code> |  |
| <Link id="m-trygetfrompool" /><code>{"private bool TryGetFromPool(out TInterface instance)"}</code> |  |
