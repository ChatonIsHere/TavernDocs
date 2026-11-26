---
title: "PlatformDistanceLODModifier"
description: "Build-time bake step that sets a DistanceLODGroup's switch distances per platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDistanceLODModifier

A **class** in `Root.Township`, no namespace.

Build-time bake step that sets a `DistanceLODGroup`'s switch distances per platform.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/game-api/types/global-p/platformdistancelodmodifier-platformdetails)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDistanceLODModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" lodGroup"}</code> | The distance LOD group being changed. |
| <Link id="m-platformdetails" /><code>{"private "}<Link to="/game-api/types/global-p/platformdistancelodmodifier-platformdetails">{"PlatformDistanceLODModifier.PlatformDetails"}</Link>{"[] platformDetails"}</code> | Distances per platform, one per LOD. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Applies the distances of the first matching platform entry to the LOD group. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Finds the LOD group, sizes each distance list to the LOD count and keeps distances increasing. |

</details>
