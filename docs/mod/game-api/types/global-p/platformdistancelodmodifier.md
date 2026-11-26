---
title: "PlatformDistanceLODModifier"
description: "Build-time bake step that sets a DistanceLODGroup's switch distances per platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDistanceLODModifier

A **class** in `Root.Township`, the global namespace.

Build-time bake step that sets a `DistanceLODGroup`'s switch distances per platform.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/mod/game-api/types/global-p/platformdistancelodmodifier-platformdetails)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDistanceLODModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroup" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" lodGroup"}</code> | <span className="api-desc">The distance LOD group being changed.</span> |
| <Link id="m-platformdetails" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformdistancelodmodifier-platformdetails">{"PlatformDistanceLODModifier.PlatformDetails"}</Link>{"[] platformDetails"}</code> | <span className="api-desc">Distances per platform, one per LOD.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">Applies the distances of the first matching platform entry to the LOD group.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Finds the LOD group, sizes each distance list to the LOD count and keeps distances increasing.</span> |

</details>
