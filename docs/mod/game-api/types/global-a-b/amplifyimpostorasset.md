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
| <Link id="m-ctor" /><code>{"AmplifyImpostorAsset()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-decoupleaxisframes" /><code>{"bool DecoupleAxisFrames"}</code> | <span className="api-desc">Whether horizontal and vertical frame counts are set separately.</span> |
| <Link id="m-horizontalframes" /><code>{"int HorizontalFrames"}</code> | <span className="api-desc">How many views are baked around the horizontal axis (1 to 32).</span> |
| <Link id="m-impostortype" /><code><Link to="/mod/game-api/types/global-i-l/impostortype">{"ImpostorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/impostortype">{"ImpostorType"}</Link></code> | <span className="api-desc">The impostor layout, such as octahedron (the default).</span> |
| <Link id="m-lockedsizes" /><code>{"bool LockedSizes"}</code> | <span className="api-desc">Whether the texture width and height are locked to the same size.</span> |
| <Link id="m-material" /><code>{"Material Material"}</code> | <span className="api-desc">The baked impostor material.</span> |
| <Link id="m-maxvertices" /><code>{"int MaxVertices"}</code> | <span className="api-desc">Most vertices the impostor's outline mesh may use (4 to 16).</span> |
| <Link id="m-mesh" /><code>{"Mesh Mesh"}</code> | <span className="api-desc">The baked impostor mesh.</span> |
| <Link id="m-normalscale" /><code>{"float NormalScale"}</code> | <span className="api-desc">Scale applied to the baked normals.</span> |
| <Link id="m-overrideoutput" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/textureoutput">{"TextureOutput"}</Link>{"> OverrideOutput"}</code> | <span className="api-desc">Texture outputs that replace the preset's.</span> |
| <Link id="m-pixelpadding" /><code>{"int PixelPadding"}</code> | <span className="api-desc">Padding in pixels around each baked frame.</span> |
| <Link id="m-preset" /><code><Link to="/mod/game-api/types/global-a-b/amplifyimpostorbakepreset">{"AmplifyImpostorBakePreset"}</Link>{" Preset"}</code> | <span className="api-desc">The bake preset that sets which textures are produced.</span> |
| <Link id="m-selectedsize" /><code>{"int SelectedSize"}</code> | <span className="api-desc">The chosen texture size, 2048 by default.</span> |
| <Link id="m-shapepoints" /><code>{"Vector2[] ShapePoints"}</code> | <span className="api-desc">The outline of the impostor mesh in 0 to 1 space, an octagon by default.</span> |
| <Link id="m-texsize" /><code>{"Vector2 TexSize"}</code> | <span className="api-desc">The baked texture's width and height.</span> |
| <Link id="m-tolerance" /><code>{"float Tolerance"}</code> | <span className="api-desc">How closely the outline mesh follows the model's shape.</span> |
| <Link id="m-version" /><code>{"int Version"}</code> | <span className="api-desc">Format version of the asset.</span> |
| <Link id="m-verticalframes" /><code>{"int VerticalFrames"}</code> | <span className="api-desc">How many views are baked around the vertical axis (1 to 33).</span> |
