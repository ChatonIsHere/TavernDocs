---
title: "AmplifyImpostorBakePreset"
description: "Amplify Impostors bake preset asset: the shaders used to bake and draw an impostor and the textures it outputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmplifyImpostorBakePreset

A **class** in `Root.Township`, the global namespace.

Amplify Impostors bake preset asset: the shaders used to bake and draw an impostor and the textures it outputs. Referenced by `AmplifyImpostorAsset`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmplifyImpostorBakePreset()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alphaindex" /><code>{"int AlphaIndex"}</code> | <span className="api-desc">Index of the output texture that holds alpha.</span> |
| <Link id="m-bakeshader" /><code>{"Shader BakeShader"}</code> | <span className="api-desc">Shader used when baking the impostor textures.</span> |
| <Link id="m-output" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/textureoutput">{"TextureOutput"}</Link>{"> Output"}</code> | <span className="api-desc">The textures the bake produces.</span> |
| <Link id="m-runtimeshader" /><code>{"Shader RuntimeShader"}</code> | <span className="api-desc">Shader used to draw the impostor in game.</span> |

## Used in

Members of other types that take, return or hold a `AmplifyImpostorBakePreset`:

<div className="api-used-in">

[`AmplifyImpostorAsset.Preset`](/mod/game-api/types/global-a-b/amplifyimpostorasset#m-preset).

</div>
