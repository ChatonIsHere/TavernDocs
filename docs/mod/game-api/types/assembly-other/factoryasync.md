---
title: "FactoryAsync"
description: "Base for factories that spawn a prefab loaded through Addressables."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsync

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Base for factories that spawn a prefab loaded through Addressables. The prefab's `AssetReference` is injected, and loaded handles are released on dispose.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/mod/game-api/types/assembly-other/factory)
- **Derived types** [`FactoryAsync<TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasync-tconcrete-tinterface), [`FactoryAsync<TParam, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasync-tparam-tconcrete-tinterface), [`FactoryAsync<TParam1, TParam2, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tparam3-tconcrete-tinterface)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsync()"}</code> | Creates a `FactoryAsync` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assethandles" /><code>{"private readonly List<AsyncOperationHandle> assetHandles"}</code> | Addressables load handles taken so far, released in `Dispose`. |
| <Link id="m-prefabreference" /><code>{"private AssetReference prefabReference"}</code> | The Addressables reference of the prefab this factory instantiates. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Releases every Addressables handle this factory loaded, then disposes the created instances. |
| <Link id="m-construct" /><code>{"protected void Construct(AssetReference prefabReference)"}</code> | Injection method that stores the Addressables prefab reference to load. |
| <Link id="m-loadasset" /><code>{"protected Task<GameObject> LoadAsset()"}</code> | Starts loading the prefab through Addressables, keeps the handle for release, and returns the load task. |
