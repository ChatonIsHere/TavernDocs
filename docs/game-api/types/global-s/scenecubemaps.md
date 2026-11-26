---
title: "SceneCubeMaps"
description: "List of addressable cubemaps for one scene, used by ServerCubeMaps for the main menu server previews."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneCubeMaps

A **class** in `Root.Township`, no namespace.

List of addressable cubemaps for one scene, used by `ServerCubeMaps` for the main menu server previews.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SceneCubeMaps()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cubemaps" /><code>{"private AssetReference[] cubemaps"}</code> | Backing field for `Cubemaps`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cubemaps-2" /><code>{"AssetReference[] Cubemaps { get; }"}</code> | Addressable references to this scene's cubemaps. |

## Used in

Members of other types that take, return or hold a `SceneCubeMaps`:

[`ServerCubeMaps.sceneBasedcubemaps`](/game-api/types/global-s/servercubemaps#m-scenebasedcubemaps).
