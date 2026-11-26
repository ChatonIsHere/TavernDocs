---
title: "FactoryAsyncPooled<TConcrete, TInterface>"
description: "Async Addressables prefab factory that pools its instances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FactoryAsyncPooled&lt;TConcrete, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Async Addressables prefab factory that pools its instances. `Spawn` reuses a despawned instance when there is one; `Dispose` destroys every instance it made.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/mod/game-api/types/assembly-other/factory)
- **Derived types** [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FactoryAsyncPooled()"}</code> | <span className="api-desc">Creates a `FactoryAsyncPooled` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allconcrete" /><code>{"private readonly HashSet<TConcrete> allConcrete"}</code> | <span className="api-desc">Every instance this factory has created, pooled or not, destroyed in `Dispose`.</span> |
| <Link id="m-assethandles" /><code>{"private readonly List<AsyncOperationHandle> assetHandles"}</code> | <span className="api-desc">Addressables load handles taken so far, released in `Dispose`.</span> |
| <Link id="m-pool" /><code>{"private readonly Stack<TInterface> pool"}</code> | <span className="api-desc">Stack of despawned instances waiting to be reused.</span> |
| <Link id="m-prefabreference" /><code>{"private AssetReference prefabReference"}</code> | <span className="api-desc">The Addressables reference of the prefab this factory instantiates.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"void Despawn(TInterface instance)"}</code> | <span className="api-desc">Calls `OnDespawn` on the instance and pushes it back onto the pool for reuse.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Destroys the GameObject of every instance still alive, releases the Addressables handles, then disposes tracked instances.</span> |
| <Link id="m-construct" /><code>{"protected void Construct(AssetReference prefabReference)"}</code> | <span className="api-desc">Injection method that stores the Addressables prefab reference to load.</span> |
| <Link id="m-spawn" /><code>{"protected async Task<TInterface> Spawn()"}</code> | <span className="api-desc">Returns a pooled instance if one is free, otherwise creates a new one. Does not call `OnSpawn`; the typed subclasses do.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"private async Task<TInterface> Create()"}</code> | <span className="api-desc">Loads the prefab, instantiates it through the container, records it in `allConcrete` and tracks it for disposal.</span> |
| <Link id="m-loadasset" /><code>{"private Task<GameObject> LoadAsset()"}</code> | <span className="api-desc">Starts loading the prefab through Addressables, keeps the handle for release, and returns the load task.</span> |
| <Link id="m-trygetfrompool" /><code>{"private bool TryGetFromPool(out TInterface instance)"}</code> | <span className="api-desc">Pops a despawned instance from the pool if any are waiting.</span> |

</details>
