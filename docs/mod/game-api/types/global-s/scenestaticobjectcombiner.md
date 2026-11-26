---
title: "SceneStaticObjectCombiner"
description: "A StaticObjectCombiner for scene objects that can swap itself for a pre-baked cache prefab, with a separate cache for Android."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneStaticObjectCombiner

A **class** in `Root.Township`, the global namespace.

A `StaticObjectCombiner` for scene objects that can swap itself for a pre-baked cache prefab, with a separate cache for Android.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`StaticObjectCombiner`](/mod/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneStaticObjectCombiner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidbakedcache" /><code>{"private GameObject androidBakedCache"}</code> | <span className="api-desc">Pre-baked prefab used on Android.</span> |
| <Link id="m-bakedcache" /><code>{"private GameObject bakedCache"}</code> | <span className="api-desc">Pre-baked prefab used on other platforms.</span> |
| <Link id="m-issettingtoterrainlayer" /><code>{"private bool isSettingToTerrainLayer"}</code> | <span className="api-desc">Backing field for `IsSettingToTerrainLayer`. Default true.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bakedcache-2" /><code>{"GameObject BakedCache { get; set; }"}</code> | <span className="api-desc">The pre-baked prefab for the current platform: `androidBakedCache` on Android, `bakedCache` elsewhere.</span> |
| <Link id="m-issettingtoterrainlayer-2" /><code>{"protected override bool IsSettingToTerrainLayer { get; }"}</code> | <span className="api-desc">Whether combined objects go on the terrain layer. Returns `isSettingToTerrainLayer`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake()"}</code> | <span className="api-desc">If a baked cache exists, spawns it in place and destroys this object. Otherwise removes child combiners and bakes normally.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiateprebakedobject" /><code>{"private void InstantiatePreBakedObject()"}</code> | <span className="api-desc">Spawns the baked cache under the same parent with this object's local transform, then destroys this object.</span> |
| <Link id="m-removechildrenstaticcombiners" /><code>{"private void RemoveChildrenStaticCombiners()"}</code> | <span className="api-desc">Destroys any other `StaticObjectCombiner` in the children so only this one bakes.</span> |

</details>
