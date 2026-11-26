---
title: "SceneCubeMaps"
description: "List of addressable cubemaps for one scene, used by ServerCubeMaps for the main menu server previews."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneCubeMaps

A **class** in `Root.Township`, the global namespace.

List of addressable cubemaps for one scene, used by `ServerCubeMaps` for the main menu server previews.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneCubeMaps()"}</code> | <span className="api-desc">Creates a `SceneCubeMaps` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cubemaps" /><code>{"private AssetReference[] cubemaps"}</code> | <span className="api-desc">Backing field for `Cubemaps`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cubemaps-2" /><code>{"AssetReference[] Cubemaps { get; }"}</code> | <span className="api-desc">Addressable references to this scene's cubemaps.</span> |

## Used in

Members of other types that take, return or hold a `SceneCubeMaps`:

<div className="api-used-in">

[`ServerCubeMaps.sceneBasedcubemaps`](/mod/game-api/types/global-s/servercubemaps#m-scenebasedcubemaps).

</div>
