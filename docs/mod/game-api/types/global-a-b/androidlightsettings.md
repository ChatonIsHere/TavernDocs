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
| <Link id="m-ctor" /><code>{"AndroidLightSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lightmaterial" /><code>{"private Material lightMaterial"}</code> | Material put on the fake point light renderer. |
| <Link id="m-pointlightmesh" /><code>{"private Mesh pointLightMesh"}</code> | Mesh used for the fake point light. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializepointlight" /><code>{"static MeshRenderer InitializePointLight(GameObject target)"}</code> | Adds a `MeshFilter` and `MeshRenderer` with the configured mesh and material to the target and returns the renderer. |
