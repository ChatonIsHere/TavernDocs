---
title: "AmplifyImpostorBakePreset"
description: "Amplify Impostors bake preset asset: the shaders used to bake and draw an impostor and the textures it outputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmplifyImpostorBakePreset

A **class** in `Root.Township`, no namespace.

Amplify Impostors bake preset asset: the shaders used to bake and draw an impostor and the textures it outputs. Referenced by `AmplifyImpostorAsset`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmplifyImpostorBakePreset()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alphaindex" /><code>{"int AlphaIndex"}</code> | Index of the output texture that holds alpha. |
| <Link id="m-bakeshader" /><code>{"Shader BakeShader"}</code> | Shader used when baking the impostor textures. |
| <Link id="m-output" /><code>{"List<"}<Link to="/game-api/types/global-t-x/textureoutput">{"TextureOutput"}</Link>{"> Output"}</code> | The textures the bake produces. |
| <Link id="m-runtimeshader" /><code>{"Shader RuntimeShader"}</code> | Shader used to draw the impostor in game. |

## Used in

Members of other types that take, return or hold a `AmplifyImpostorBakePreset`:

[`AmplifyImpostorAsset.Preset`](/game-api/types/global-a-b/amplifyimpostorasset#m-preset).
