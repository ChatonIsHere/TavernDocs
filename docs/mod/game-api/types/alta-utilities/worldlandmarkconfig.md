---
title: "WorldLandmarkConfig"
description: "Serialized settings for a world landmark: how many chunks away it stays loaded, with a separate Android value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldLandmarkConfig

A **class** in `Root.Township`, `Alta.Utilities`.

Serialized settings for a world landmark: how many chunks away it stays loaded, with a separate Android value.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldLandmarkConfig()"}</code> | <span className="api-desc">Creates a `WorldLandmarkConfig` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidchunkloaddistance" /><code>{"private int androidChunkLoadDistance"}</code> | <span className="api-desc">Chunk load distance for Android builds. Default 5.</span> |
| <Link id="m-chunkloaddistance" /><code>{"private int chunkLoadDistance"}</code> | <span className="api-desc">Chunk load distance for other platforms. Default 5.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkloaddistance-2" /><code>{"int ChunkLoadDistance { get; }"}</code> | <span className="api-desc">Chunk load distance for this landmark. Returns the non-Android value.</span> |
