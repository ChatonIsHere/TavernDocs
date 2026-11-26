---
title: "ShaderVariantWarmer"
description: "Scene root component that warms up shader variant collections for the active platform so shaders don't compile mid-game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderVariantWarmer

A **class** in `Root.Township`, no namespace.

Scene root component that warms up shader variant collections for the active platform so shaders don't compile mid-game. `AltaSceneManager` calls `Warm` on it when a scene loads.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`PlatformCollection`](/game-api/types/global-s/shadervariantwarmer-platformcollection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShaderVariantWarmer()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collectionstowarm" /><code>{"private "}<Link to="/game-api/types/global-s/shadervariantwarmer-platformcollection">{"ShaderVariantWarmer.PlatformCollection"}</Link>{"[] collectionsToWarm"}</code> | Per-platform sets of shader variant collections to warm. |
| <Link id="m-iswarm" /><code>{"private bool isWarm"}</code> | Set on the first `Warm` call so warming only runs once. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger used to log how long each collection took to warm. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | Bake order for the build pipeline. Always 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | Build step: on Linux (the server build) drops all collections; otherwise prepares each platform's runtime collection list. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Empty bake clean-up step. |
| <Link id="m-warm" /><code>{"async Task Warm()"}</code> | Warms each platform collection once, yielding between them. Later calls do nothing. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `Warm` when the object starts. |

</details>
