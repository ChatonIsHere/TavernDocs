---
title: "ShaderVariantWarmer.PlatformCollection"
description: "class ShaderVariantWarmer.PlatformCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderVariantWarmer.PlatformCollection

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`ShaderVariantWarmer`](/game-api/types/global-s/shadervariantwarmer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collections" /><code>{"private ShaderVariantCollection[] collections"}</code> |  |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> |  |
| <Link id="m-runtimecollections" /><code>{"private List<ShaderVariantCollection> runtimeCollections"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakeruntime" /><code>{"void BakeRuntime()"}</code> |  |
| <Link id="m-warm" /><code>{"async Task Warm()"}</code> |  |
| <Link id="m-splitcollection" /><code>{"private void SplitCollection(ShaderVariantCollection collection)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlatformCollection`:

[`ShaderVariantWarmer.collectionsToWarm`](/game-api/types/global-s/shadervariantwarmer#m-collectionstowarm).
