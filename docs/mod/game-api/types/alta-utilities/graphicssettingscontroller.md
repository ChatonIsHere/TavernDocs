---
title: "GraphicsSettingsController"
description: "Switches Unity's built-in shader settings between PC and Android."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GraphicsSettingsController

A **static class** in `Root.Township`, `Alta.Utility.Graphics`.

Switches Unity's built-in shader settings between PC and Android. Called from `UnityQualitySettingsController`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customdeferred" /><code>{"private const string CustomDeferred"}</code> | <span className="api-desc">Name of the custom deferred shader used on PC, "Hidden/Light Bouncing Model Deferred".</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setshaderstoandroidvariants" /><code>{"static void SetShadersToAndroidVariants()"}</code> | <span className="api-desc">Disables every built-in shader type from deferred shading to lens flare.</span> |
| <Link id="m-setshaderstowindowsvariants" /><code>{"static void SetShadersToWindowsVariants()"}</code> | <span className="api-desc">Sets the built-in shaders to Unity's own, then sets deferred shading to the custom light bouncing shader.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setshadermode" /><code>{"private static void SetShaderMode(BuiltinShaderType shaderType, BuiltinShaderMode mode)"}</code> | <span className="api-desc">Sets the mode for one built-in shader type, only if it differs.</span> |

</details>
