---
title: "PlatformLODModifier"
description: "Build-time bake step that sets a LODGroup's screen transition heights per platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLODModifier

A **class** in `Root.Township`, no namespace.

Build-time bake step that sets a `LODGroup`'s screen transition heights per platform.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/game-api/types/global-p/platformlodmodifier-platformdetails)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformLODModifier()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | The LOD group being changed. |
| <Link id="m-platformdetails" /><code>{"private "}<Link to="/game-api/types/global-p/platformlodmodifier-platformdetails">{"PlatformLODModifier.PlatformDetails"}</Link>{"[] platformDetails"}</code> | Transition heights per platform, one per LOD. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Applies the transition heights of the first matching platform entry to the LOD group. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Finds the LOD group, sizes each height list to the LOD count and keeps heights decreasing. |

</details>
