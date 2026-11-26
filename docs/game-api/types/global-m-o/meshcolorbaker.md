---
title: "MeshColorBaker"
description: "class MeshColorBaker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshColorBaker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MeshColorBaker()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-color" /><code>{"private Color color"}</code> |
| <Link id="m-filters" /><code>{"private MeshFilter[] filters"}</code> |
| <Link id="m-isconvertingtolinear" /><code>{"private bool isConvertingToLinear"}</code> |
| <Link id="m-tempassetfolder" /><code>{"private const string TempAssetFolder"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> |
| <Link id="m-meshfilters" /><code>{"MeshFilter[] MeshFilters { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gettempassetpath" /><code>{"private static string GetTempAssetPath(Mesh mesh)"}</code> |
| <Link id="m-savemesh" /><code>{"private void SaveMesh(Mesh mesh)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-validatesavefolder" /><code>{"private static void ValidateSaveFolder()"}</code> |

</details>
