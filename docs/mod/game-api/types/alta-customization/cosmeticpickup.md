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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationPickup`](/mod/game-api/types/alta-customization/customizationpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material copied for each mesh in the preview.</span> |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | <span className="api-desc">Combined bounds of the preview meshes, used to centre them.</span> |
| <Link id="m-bumpmap" /><code>{"private static readonly int bumpMap"}</code> | <span className="api-desc">Shader property ID for `_BumpMap`.</span> |
| <Link id="m-createdmaterials" /><code>{"private readonly List<Material> createdMaterials"}</code> | <span className="api-desc">Materials made by `CreateMaterial`, cleaned up on disable.</span> |
| <Link id="m-dstblend" /><code>{"private static readonly int dstBlend"}</code> | <span className="api-desc">Shader property ID for `_DstBlend`.</span> |
| <Link id="m-maintex" /><code>{"private static readonly int mainTex"}</code> | <span className="api-desc">Shader property ID for `_MainTex`.</span> |
| <Link id="m-maxbounds" /><code>{"private Vector3 maxBounds"}</code> | <span className="api-desc">Serialized maximum preview size. Not read in this file.</span> |
| <Link id="m-srcblend" /><code>{"private static readonly int srcBlend"}</code> | <span className="api-desc">Shader property ID for `_SrcBlend`.</span> |
| <Link id="m-zwrite" /><code>{"private static readonly int zWrite"}</code> | <span className="api-desc">Shader property ID for `_ZWrite`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | <span className="api-desc">Spawns the pickup through the base class, then runs `Setup` on the new copy.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"private Material CreateMaterial("}<Link to="/mod/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{" meshPart, int argumentIndex)"}</code> | <span className="api-desc">Makes a material from `baseMaterial` with the part's colours, texture and normal map, set up for alpha blending if the part needs it.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Destroys the materials this pickup created.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Builds child mesh objects from LOD 0 of each mesh part, then centres and scales them by the category's pickup scale.</span> |

</details>
