---
title: "FactoryAsyncPooled<TConcrete, TInterface>"
description: "Async Addressables prefab factory that pools its instances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsyncPooled&lt;TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

Async Addressables prefab factory that pools its instances. `Spawn` reuses a despawned instance when there is one; `Dispose` destroys every instance it made.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/game-api/types/assembly-other/factory)
- **Derived types** [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsyncPooled()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allconcrete" /><code>{"private readonly HashSet<TConcrete> allConcrete"}</code> | Every instance this factory has created, pooled or not, destroyed in `Dispose`. |
| <Link id="m-assethandles" /><code>{"private readonly List<AsyncOperationHandle> assetHandles"}</code> | Addressables load handles taken so far, released in `Dispose`. |
| <Link id="m-pool" /><code>{"private readonly Stack<TInterface> pool"}</code> | Stack of despawned instances waiting to be reused. |
| <Link id="m-prefabreference" /><code>{"private AssetReference prefabReference"}</code> | The Addressables reference of the prefab this factory instantiates. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"void Despawn(TInterface instance)"}</code> | Calls `OnDespawn` on the instance and pushes it back onto the pool for reuse. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Destroys the GameObject of every instance still alive, releases the Addressables handles, then disposes tracked instances. |
| <Link id="m-construct" /><code>{"protected void Construct(AssetReference prefabReference)"}</code> | Injection method that stores the Addressables prefab reference to load. |
| <Link id="m-spawn" /><code>{"protected async Task<TInterface> Spawn()"}</code> | Returns a pooled instance if one is free, otherwise creates a new one. Does not call `OnSpawn`; the typed subclasses do. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"private async Task<TInterface> Create()"}</code> | Loads the prefab, instantiates it through the container, records it in `allConcrete` and tracks it for disposal. |
| <Link id="m-loadasset" /><code>{"private Task<GameObject> LoadAsset()"}</code> | Starts loading the prefab through Addressables, keeps the handle for release, and returns the load task. |
| <Link id="m-trygetfrompool" /><code>{"private bool TryGetFromPool(out TInterface instance)"}</code> | Pops a despawned instance from the pool if any are waiting. |

</details>
