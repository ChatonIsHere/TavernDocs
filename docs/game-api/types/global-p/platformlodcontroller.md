---
title: "PlatformLODController"
description: "class PlatformLODController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLODController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/game-api/types/global-p/platformlodcontroller-platformdetails)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLODController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroyemptyobjects" /><code>{"private bool destroyEmptyObjects"}</code> |  |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-platformdetails" /><code>{"private "}<Link to="/game-api/types/global-p/platformlodcontroller-platformdetails">{"PlatformLODController.PlatformDetails"}</Link>{"[] platformDetails"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> |  |
| <Link id="m-baketolevel" /><code>{"private void BakeToLevel(LOD[] lods, "}<Link to="/game-api/types/global-p/platformlodcontroller-platformdetails">{"PlatformLODController.PlatformDetails"}</Link>{" level)"}</code> |  |
| <Link id="m-removerenderers" /><code>{"private void RemoveRenderers(IEnumerable<Renderer> renderers)"}</code> |  |
