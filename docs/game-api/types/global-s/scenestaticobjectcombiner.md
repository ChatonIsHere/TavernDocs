---
title: "SceneStaticObjectCombiner"
description: "A StaticObjectCombiner for scene objects that can swap itself for a pre-baked cache prefab, with a separate cache for Android."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneStaticObjectCombiner

A **class** in `Root.Township`, no namespace.

A `StaticObjectCombiner` for scene objects that can swap itself for a pre-baked cache prefab, with a separate cache for Android.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`StaticObjectCombiner`](/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneStaticObjectCombiner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidbakedcache" /><code>{"private GameObject androidBakedCache"}</code> | Pre-baked prefab used on Android. |
| <Link id="m-bakedcache" /><code>{"private GameObject bakedCache"}</code> | Pre-baked prefab used on other platforms. |
| <Link id="m-issettingtoterrainlayer" /><code>{"private bool isSettingToTerrainLayer"}</code> | Backing field for `IsSettingToTerrainLayer`. Default true. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bakedcache-2" /><code>{"GameObject BakedCache { get; set; }"}</code> | The pre-baked prefab for the current platform: `androidBakedCache` on Android, `bakedCache` elsewhere. |
| <Link id="m-issettingtoterrainlayer-2" /><code>{"protected override bool IsSettingToTerrainLayer { get; }"}</code> | Whether combined objects go on the terrain layer. Returns `isSettingToTerrainLayer`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake()"}</code> | If a baked cache exists, spawns it in place and destroys this object. Otherwise removes child combiners and bakes normally. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiateprebakedobject" /><code>{"private void InstantiatePreBakedObject()"}</code> | Spawns the baked cache under the same parent with this object's local transform, then destroys this object. |
| <Link id="m-removechildrenstaticcombiners" /><code>{"private void RemoveChildrenStaticCombiners()"}</code> | Destroys any other `StaticObjectCombiner` in the children so only this one bakes. |

</details>
