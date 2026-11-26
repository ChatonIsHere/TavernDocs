---
title: "ShaderVariantWarmer.PlatformCollection"
description: "Shader variant collections to warm up on one platform, part of ShaderVariantWarmer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderVariantWarmer.PlatformCollection

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Shader variant collections to warm up on one platform, part of `ShaderVariantWarmer`. Client only; Linux builds drop them at bake time.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`ShaderVariantWarmer`](/game-api/types/global-s/shadervariantwarmer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformCollection()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collections" /><code>{"private ShaderVariantCollection[] collections"}</code> | The collections set in the inspector. Cleared when the build is baked. |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | Platforms this entry applies to. |
| <Link id="m-runtimecollections" /><code>{"private List<ShaderVariantCollection> runtimeCollections"}</code> | Collections left after baking, which `Warm` walks through. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakeruntime" /><code>{"void BakeRuntime()"}</code> | Build step: makes an empty runtime list, runs `SplitCollection` on each collection, then clears `collections`. |
| <Link id="m-warm" /><code>{"async Task Warm()"}</code> | On the matching platform, warms each collection not yet warmed, one per frame, logging how long each took. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-splitcollection" /><code>{"private void SplitCollection(ShaderVariantCollection collection)"}</code> | Empty in this build, so baking leaves `runtimeCollections` empty and `Warm` has nothing to do. |

</details>

## Used in

Members of other types that take, return or hold a `PlatformCollection`:

[`ShaderVariantWarmer.collectionsToWarm`](/game-api/types/global-s/shadervariantwarmer#m-collectionstowarm).
