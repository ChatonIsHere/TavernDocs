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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`AtlasSettings`](/mod/game-api/types/alta-utilities/atlassettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShaderBlits()"}</code> | <span className="api-desc">Creates an `AtlasSettings.ShaderBlits` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">Display name. Filled from the last part of the shader's name if left empty.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit" /><code>{"private Shader diffuseBlit"}</code> | <span className="api-desc">Backing field for `DiffuseBlit`.</span> |
| <Link id="m-emissionblit" /><code>{"private Shader emissionBlit"}</code> | <span className="api-desc">Backing field for `EmissionBlit`.</span> |
| <Link id="m-normalblit" /><code>{"private Shader normalBlit"}</code> | <span className="api-desc">Backing field for `NormalBlit`.</span> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | <span className="api-desc">Backing field for `Shader`.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit-2" /><code>{"Shader DiffuseBlit { get; }"}</code> | <span className="api-desc">Shader used to blit the diffuse map. `GetBlitMaterials` makes a new material from it.</span> |
| <Link id="m-emissionblit-2" /><code>{"Shader EmissionBlit { get; }"}</code> | <span className="api-desc">Shader used to blit the emission map.</span> |
| <Link id="m-normalblit-2" /><code>{"Shader NormalBlit { get; }"}</code> | <span className="api-desc">Shader used to blit the normal map.</span> |
| <Link id="m-shader-2" /><code>{"Shader Shader { get; }"}</code> | <span className="api-desc">The material shader this entry supports.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">Atlas type returned for this shader by `IsShaderSupported`.</span> |

## Used in

Members of other types that take, return or hold a `ShaderBlits`:

<div className="api-used-in">

[`AtlasSettings.supportedShaders`](/mod/game-api/types/alta-utilities/atlassettings#m-supportedshaders).

</div>
