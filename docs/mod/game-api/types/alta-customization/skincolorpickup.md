---
title: "SkinColorPickup"
description: "Customization pickup for a skin colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinColorPickup

A **class** in `Root.Township`, `Alta.Customization`.

Customization pickup for a skin colour. Shows the colour on an untextured copy of its material.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationPickup`](/mod/game-api/types/alta-customization/customizationpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkinColorPickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static readonly int bumpMap"}</code> | Shader property ID for `_BumpMap`. |
| <Link id="m-maintex" /><code>{"private static readonly int mainTex"}</code> | Shader property ID for `_MainTex`. |
| <Link id="m-meshrenderer" /><code>{"private MeshRenderer meshRenderer"}</code> | Renderer that shows the colour. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns the pickup, then gives it its own material with no textures, tinted with the item's skin colour. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the material made in `Spawn`. |

</details>
