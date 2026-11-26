---
title: "PlatformLODController"
description: "Build-time bake step that trims a LODGroup to a range of levels on a given platform and deletes the renderers it no longer uses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLODController

A **class** in `Root.Township`, the global namespace.

Build-time bake step that trims a `LODGroup` to a range of levels on a given platform and deletes the renderers it no longer uses.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/mod/game-api/types/global-p/platformlodcontroller-platformdetails)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLODController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyemptyobjects" /><code>{"private bool destroyEmptyObjects"}</code> | <span className="api-desc">Whether to delete objects left with nothing on them.</span> |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">The LOD group being trimmed.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-platformdetails" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformlodcontroller-platformdetails">{"PlatformLODController.PlatformDetails"}</Link>{"[] platformDetails"}</code> | <span className="api-desc">Min and max LOD to keep per platform. A max of 100 means not set up.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">For the first matching platform, points reference renderers at the new first LOD and trims the group.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baketolevel" /><code>{"private void BakeToLevel(LOD[] lods, "}<Link to="/mod/game-api/types/global-p/platformlodcontroller-platformdetails">{"PlatformLODController.PlatformDetails"}</Link>{" level)"}</code> | <span className="api-desc">Keeps only LODs from min to max, keeps the last transition height, and removes unused renderers. Warns if max was never set.</span> |
| <Link id="m-removerenderers" /><code>{"private void RemoveRenderers(IEnumerable<Renderer> renderers)"}</code> | <span className="api-desc">Destroys the renderers with their mesh filters and vertex streams, and empty objects left behind if set to.</span> |

</details>
