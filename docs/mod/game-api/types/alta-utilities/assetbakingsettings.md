---
title: "AssetBakingSettings"
description: "Folder names for the asset baking step, which probably moves these assets into temporary folders during a build."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AssetBakingSettings

A **static class** in `Root.Township`, `Alta.AssetBaking`.

Folder names for the asset baking step, which probably moves these assets into temporary folders during a build.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-atlasmeshcachename" /><code>{"const string AtlasMeshCacheName"}</code> | <span className="api-desc">Name of the atlas bake cache folder.</span> |
| <Link id="m-atlasmeshcachenamefullpath" /><code>{"const string AtlasMeshCacheNameFullPath"}</code> | <span className="api-desc">Project path of the atlas bake cache, under `Assets/Temporary`.</span> |
| <Link id="m-unbakedbakeablefolder" /><code>{"const string UnbakedBakeableFolder"}</code> | <span className="api-desc">Temporary folder for bakeable prefabs.</span> |
| <Link id="m-unbakedresourcesfolder" /><code>{"const string UnbakedResourcesFolder"}</code> | <span className="api-desc">Temporary folder for network prefab resources.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-projecttounbakeddirectoriesmap" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/cacheddirectory">{"CachedDirectory"}</Link>{"[] ProjectToUnbakedDirectoriesMap { get; }"}</code> | <span className="api-desc">Pairs of project folders and the temporary folders their assets are moved to during baking.</span> |
