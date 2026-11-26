---
title: "CosmeticPickup"
description: "Grabbable preview of a cosmetic in the customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPickup

A **class** in `Root.Township`, `Alta.Customization`.

Grabbable preview of a cosmetic in the customization room. Builds a small coloured model from the item's mesh parts when spawned. Client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationPickup`](/game-api/types/alta-customization/customizationpickup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPickup()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material copied for each mesh in the preview. |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | Combined bounds of the preview meshes, used to centre them. |
| <Link id="m-bumpmap" /><code>{"private static readonly int bumpMap"}</code> | Shader property ID for `_BumpMap`. |
| <Link id="m-createdmaterials" /><code>{"private readonly List<Material> createdMaterials"}</code> | Materials made by `CreateMaterial`, cleaned up on disable. |
| <Link id="m-dstblend" /><code>{"private static readonly int dstBlend"}</code> | Shader property ID for `_DstBlend`. |
| <Link id="m-maintex" /><code>{"private static readonly int mainTex"}</code> | Shader property ID for `_MainTex`. |
| <Link id="m-maxbounds" /><code>{"private Vector3 maxBounds"}</code> | Serialized maximum preview size. Not read in this file. |
| <Link id="m-srcblend" /><code>{"private static readonly int srcBlend"}</code> | Shader property ID for `_SrcBlend`. |
| <Link id="m-zwrite" /><code>{"private static readonly int zWrite"}</code> | Shader property ID for `_ZWrite`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns the pickup through the base class, then runs `Setup` on the new copy. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"private Material CreateMaterial("}<Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{" meshPart, int argumentIndex)"}</code> | Makes a material from `baseMaterial` with the part's colours, texture and normal map, set up for alpha blending if the part needs it. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Destroys the materials this pickup created. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Builds child mesh objects from LOD 0 of each mesh part, then centres and scales them by the category's pickup scale. |

</details>
