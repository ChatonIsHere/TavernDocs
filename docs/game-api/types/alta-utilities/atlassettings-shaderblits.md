---
title: "AtlasSettings.ShaderBlits"
description: "One shader the texture atlas tool supports, with the blit shaders it uses to copy diffuse, normal and emission maps into an atlas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasSettings.ShaderBlits

A **private class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One shader the texture atlas tool supports, with the blit shaders it uses to copy diffuse, normal and emission maps into an atlas. Listed in `AtlasSettings`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`AtlasSettings`](/game-api/types/alta-utilities/atlassettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShaderBlits()"}</code> | Creates an `AtlasSettings.ShaderBlits` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Display name. Filled from the last part of the shader's name if left empty. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit" /><code>{"private Shader diffuseBlit"}</code> | Backing field for `DiffuseBlit`. |
| <Link id="m-emissionblit" /><code>{"private Shader emissionBlit"}</code> | Backing field for `EmissionBlit`. |
| <Link id="m-normalblit" /><code>{"private Shader normalBlit"}</code> | Backing field for `NormalBlit`. |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | Backing field for `Shader`. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" type"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit-2" /><code>{"Shader DiffuseBlit { get; }"}</code> | Shader used to blit the diffuse map. `GetBlitMaterials` makes a new material from it. |
| <Link id="m-emissionblit-2" /><code>{"Shader EmissionBlit { get; }"}</code> | Shader used to blit the emission map. |
| <Link id="m-normalblit-2" /><code>{"Shader NormalBlit { get; }"}</code> | Shader used to blit the normal map. |
| <Link id="m-shader-2" /><code>{"Shader Shader { get; }"}</code> | The material shader this entry supports. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" Type { get; }"}</code> | Atlas type returned for this shader by `IsShaderSupported`. |

## Used in

Members of other types that take, return or hold a `ShaderBlits`:

[`AtlasSettings.supportedShaders`](/game-api/types/alta-utilities/atlassettings#m-supportedshaders).
