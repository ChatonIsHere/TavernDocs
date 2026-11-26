---
title: "AmplifyImpostorAsset"
description: "Asset from the third-party Amplify Impostors tool: the bake settings and result (mesh and material) for a billboard impostor of a model."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmplifyImpostorAsset

A **class** in `Root.Township`, the global namespace.

Asset from the third-party Amplify Impostors tool: the bake settings and result (mesh and material) for a billboard impostor of a model.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmplifyImpostorAsset()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-decoupleaxisframes" /><code>{"bool DecoupleAxisFrames"}</code> | Whether horizontal and vertical frame counts are set separately. |
| <Link id="m-horizontalframes" /><code>{"int HorizontalFrames"}</code> | How many views are baked around the horizontal axis (1 to 32). |
| <Link id="m-impostortype" /><code><Link to="/mod/game-api/types/global-i-l/impostortype">{"ImpostorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/impostortype">{"ImpostorType"}</Link></code> | The impostor layout, such as octahedron (the default). |
| <Link id="m-lockedsizes" /><code>{"bool LockedSizes"}</code> | Whether the texture width and height are locked to the same size. |
| <Link id="m-material" /><code>{"Material Material"}</code> | The baked impostor material. |
| <Link id="m-maxvertices" /><code>{"int MaxVertices"}</code> | Most vertices the impostor's outline mesh may use (4 to 16). |
| <Link id="m-mesh" /><code>{"Mesh Mesh"}</code> | The baked impostor mesh. |
| <Link id="m-normalscale" /><code>{"float NormalScale"}</code> | Scale applied to the baked normals. |
| <Link id="m-overrideoutput" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/textureoutput">{"TextureOutput"}</Link>{"> OverrideOutput"}</code> | Texture outputs that replace the preset's. |
| <Link id="m-pixelpadding" /><code>{"int PixelPadding"}</code> | Padding in pixels around each baked frame. |
| <Link id="m-preset" /><code><Link to="/mod/game-api/types/global-a-b/amplifyimpostorbakepreset">{"AmplifyImpostorBakePreset"}</Link>{" Preset"}</code> | The bake preset that sets which textures are produced. |
| <Link id="m-selectedsize" /><code>{"int SelectedSize"}</code> | The chosen texture size, 2048 by default. |
| <Link id="m-shapepoints" /><code>{"Vector2[] ShapePoints"}</code> | The outline of the impostor mesh in 0 to 1 space, an octagon by default. |
| <Link id="m-texsize" /><code>{"Vector2 TexSize"}</code> | The baked texture's width and height. |
| <Link id="m-tolerance" /><code>{"float Tolerance"}</code> | How closely the outline mesh follows the model's shape. |
| <Link id="m-version" /><code>{"int Version"}</code> | Format version of the asset. |
| <Link id="m-verticalframes" /><code>{"int VerticalFrames"}</code> | How many views are baked around the vertical axis (1 to 33). |
