---
title: "AtlasSettings"
description: "Settings asset listing which shaders can be atlased, their atlas type, and the blit shaders that bake each into diffuse, normal and emission atlases."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasSettings

A **class** in `Root.Township`, `Alta.Utilities.Atlas`.

Settings asset listing which shaders can be atlased, their atlas type, and the blit shaders that bake each into diffuse, normal and emission atlases.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`ShaderBlits`](/game-api/types/alta-utilities/atlassettings-shaderblits)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AtlasSettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/atlassettings">{"AtlasSettings"}</Link>{" instance"}</code> | Backing field for `Instance`. |
| <Link id="m-settingspath" /><code>{"private const string settingsPath"}</code> | Project path of the settings asset, `Assets/Atlases/Settings.asset`. |
| <Link id="m-supportedshaders" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlassettings-shaderblits">{"AtlasSettings.ShaderBlits"}</Link>{"[] supportedShaders"}</code> | The supported shaders with their blit shaders and atlas type. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/alta-utilities/atlassettings">{"AtlasSettings"}</Link>{" Instance { get; }"}</code> | The settings object. In this build it creates a new empty instance on first use rather than loading the asset. |
| <Link id="m-supportedshaders-2" /><code>{"IEnumerable<Shader> SupportedShaders { get; }"}</code> | Every listed shader. Fills in a missing entry name from the last part of the shader name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getblitmaterials" /><code>{"bool GetBlitMaterials(Shader shader, out Material diffuseBlit, out Material normalBlit, out Material emissionBlit)"}</code> | Creates new diffuse, normal and emission blit materials for a supported shader. Returns false if the shader is not listed. |
| <Link id="m-isshadersupported" /><code>{"bool IsShaderSupported(Shader shader, out "}<Link to="/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" type)"}</code> | Whether the shader is in the list, and its atlas type (`Common` if not). |
