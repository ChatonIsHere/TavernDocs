---
title: "AtlasSettings"
description: "class AtlasSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasSettings

A **class** in `Root.Township`, `Alta.Utilities.Atlas`.

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

| Member |
| --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/atlassettings">{"AtlasSettings"}</Link>{" instance"}</code> |
| <Link id="m-settingspath" /><code>{"private const string settingsPath"}</code> |
| <Link id="m-supportedshaders" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlassettings-shaderblits">{"AtlasSettings.ShaderBlits"}</Link>{"[] supportedShaders"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/alta-utilities/atlassettings">{"AtlasSettings"}</Link>{" Instance { get; }"}</code> |
| <Link id="m-supportedshaders-2" /><code>{"IEnumerable<Shader> SupportedShaders { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getblitmaterials" /><code>{"bool GetBlitMaterials(Shader shader, out Material diffuseBlit, out Material normalBlit, out Material emissionBlit)"}</code> |
| <Link id="m-isshadersupported" /><code>{"bool IsShaderSupported(Shader shader, out "}<Link to="/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" type)"}</code> |
