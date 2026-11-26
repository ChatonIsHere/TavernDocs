---
title: "PlatformTexture"
description: "Asset holding Windows and Android versions of a texture."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformTexture

A **class** in `Root.Township`, the global namespace.

Asset holding Windows and Android versions of a texture. Nothing reads its fields in this build.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformTexture()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidversion" /><code>{"private Texture2D androidVersion"}</code> | <span className="api-desc">Texture for Android.</span> |
| <Link id="m-windowsversion" /><code>{"private Texture2D windowsVersion"}</code> | <span className="api-desc">Texture for Windows.</span> |

</details>
