---
title: "ShaderVariantWarmer"
description: "Scene root component that warms up shader variant collections for the active platform so shaders don't compile mid-game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderVariantWarmer

A **class** in `Root.Township`, the global namespace.

Scene root component that warms up shader variant collections for the active platform so shaders don't compile mid-game. `AltaSceneManager` calls `Warm` on it when a scene loads.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`PlatformCollection`](/mod/game-api/types/global-s/shadervariantwarmer-platformcollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShaderVariantWarmer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collectionstowarm" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shadervariantwarmer-platformcollection">{"ShaderVariantWarmer.PlatformCollection"}</Link>{"[] collectionsToWarm"}</code> | <span className="api-desc">Per-platform sets of shader variant collections to warm.</span> |
| <Link id="m-iswarm" /><code>{"private bool isWarm"}</code> | <span className="api-desc">Set on the first `Warm` call so warming only runs once.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger used to log how long each collection took to warm.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | <span className="api-desc">Bake order for the build pipeline. Always 0.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | <span className="api-desc">Build step: on Linux (the server build) drops all collections; otherwise prepares each platform's runtime collection list.</span> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Empty bake clean-up step.</span> |
| <Link id="m-warm" /><code>{"async Task Warm()"}</code> | <span className="api-desc">Warms each platform collection once, yielding between them. Later calls do nothing.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `Warm` when the object starts.</span> |

</details>
