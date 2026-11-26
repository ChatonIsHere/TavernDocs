---
title: "PlatformMaterial"
description: "Asset holding a material with Windows and Android version strings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformMaterial

A **class** in `Root.Township`, the global namespace.

Asset holding a material with Windows and Android version strings. Nothing reads its fields in this build.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformMaterial()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidversion" /><code>{"private string androidVersion"}</code> | <span className="api-desc">Android version string.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The material.</span> |
| <Link id="m-windowsversion" /><code>{"private string windowsVersion"}</code> | <span className="api-desc">Windows version string.</span> |

</details>
