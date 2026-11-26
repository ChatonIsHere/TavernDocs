---
title: "ShaderVariantWarmer"
description: "class ShaderVariantWarmer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderVariantWarmer

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-collectionstowarm" /><code>{"private "}<Link to="/game-api/types/global-s/shadervariantwarmer-platformcollection">{"ShaderVariantWarmer.PlatformCollection"}</Link>{"[] collectionsToWarm"}</code> |
| <Link id="m-iswarm" /><code>{"private bool isWarm"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> |
| <Link id="m-warm" /><code>{"async Task Warm()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>
