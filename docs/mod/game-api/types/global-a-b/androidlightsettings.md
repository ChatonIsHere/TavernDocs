---
title: "AndroidLightSettings"
description: "Global settings asset with a mesh and material used to fake point lights on Android (Quest) builds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AndroidLightSettings

A **class** in `Root.Township`, the global namespace.

Global settings asset with a mesh and material used to fake point lights on Android (Quest) builds. Get it with `GlobalSettings<AndroidLightSettings>.Instance`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`GlobalSettings<AndroidLightSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`AndroidLightSettings`](/mod/game-api/types/global-a-b/androidlightsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AndroidLightSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lightmaterial" /><code>{"private Material lightMaterial"}</code> | <span className="api-desc">Material put on the fake point light renderer.</span> |
| <Link id="m-pointlightmesh" /><code>{"private Mesh pointLightMesh"}</code> | <span className="api-desc">Mesh used for the fake point light.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializepointlight" /><code>{"static MeshRenderer InitializePointLight(GameObject target)"}</code> | <span className="api-desc">Adds a `MeshFilter` and `MeshRenderer` with the configured mesh and material to the target and returns the renderer.</span> |
