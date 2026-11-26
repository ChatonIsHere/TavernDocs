---
title: "PlatformLODModifier"
description: "Build-time bake step that sets a LODGroup's screen transition heights per platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLODModifier

A **class** in `Root.Township`, the global namespace.

Build-time bake step that sets a `LODGroup`'s screen transition heights per platform.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/mod/game-api/types/global-p/platformlodmodifier-platformdetails)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLODModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">The LOD group being changed.</span> |
| <Link id="m-platformdetails" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformlodmodifier-platformdetails">{"PlatformLODModifier.PlatformDetails"}</Link>{"[] platformDetails"}</code> | <span className="api-desc">Transition heights per platform, one per LOD.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">Applies the transition heights of the first matching platform entry to the LOD group.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Finds the LOD group, sizes each height list to the LOD count and keeps heights decreasing.</span> |

</details>
