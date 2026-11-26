---
title: "ShaderVariantWarmer.PlatformCollection"
description: "Shader variant collections to warm up on one platform, part of ShaderVariantWarmer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderVariantWarmer.PlatformCollection

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Shader variant collections to warm up on one platform, part of `ShaderVariantWarmer`. Client only; Linux builds drop them at bake time.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`ShaderVariantWarmer`](/mod/game-api/types/global-s/shadervariantwarmer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformCollection()"}</code> | <span className="api-desc">Creates a `ShaderVariantWarmer.PlatformCollection` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collections" /><code>{"private ShaderVariantCollection[] collections"}</code> | <span className="api-desc">The collections set in the inspector. Cleared when the build is baked.</span> |
| <Link id="m-platform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | <span className="api-desc">Platforms this entry applies to.</span> |
| <Link id="m-runtimecollections" /><code>{"private List<ShaderVariantCollection> runtimeCollections"}</code> | <span className="api-desc">Collections left after baking, which `Warm` walks through.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakeruntime" /><code>{"void BakeRuntime()"}</code> | <span className="api-desc">Build step: makes an empty runtime list, runs `SplitCollection` on each collection, then clears `collections`.</span> |
| <Link id="m-warm" /><code>{"async Task Warm()"}</code> | <span className="api-desc">On the matching platform, warms each collection not yet warmed, one per frame, logging how long each took.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-splitcollection" /><code>{"private void SplitCollection(ShaderVariantCollection collection)"}</code> | <span className="api-desc">Empty in this build, so baking leaves `runtimeCollections` empty and `Warm` has nothing to do.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlatformCollection`:

<div className="api-used-in">

[`ShaderVariantWarmer.collectionsToWarm`](/mod/game-api/types/global-s/shadervariantwarmer#m-collectionstowarm).

</div>
