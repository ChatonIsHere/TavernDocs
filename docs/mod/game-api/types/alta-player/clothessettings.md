---
title: "ClothesSettings"
description: "The character dummy's clothing renderers (opaque and transparent, body and head) and helpers to swap their meshes and materials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClothesSettings

A **class** in `Root.Township`, `Alta.Character`.

The character dummy's clothing renderers (opaque and transparent, body and head) and helpers to swap their meshes and materials. Used by the cosmetic packer when building a character's look.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClothesSettings()"}</code> | <span className="api-desc">Creates a `ClothesSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-headopaqueclothes" /><code>{"private SkinnedMeshRenderer[] headOpaqueClothes"}</code> | <span className="api-desc">Opaque renderers on the head.</span> |
| <Link id="m-headtransparentclothes" /><code>{"private SkinnedMeshRenderer[] headTransparentClothes"}</code> | <span className="api-desc">Transparent renderers on the head.</span> |
| <Link id="m-lod0" /><code>{"private Renderer[] lod0"}</code> | <span className="api-desc">Backing field for `Lod0`.</span> |
| <Link id="m-opaqueclothes" /><code>{"private SkinnedMeshRenderer[] opaqueClothes"}</code> | <span className="api-desc">Opaque renderers on the body.</span> |
| <Link id="m-transparentclothes" /><code>{"private SkinnedMeshRenderer[] transparentClothes"}</code> | <span className="api-desc">Transparent renderers on the body.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lod0-2" /><code>{"Renderer[] Lod0 { get; }"}</code> | <span className="api-desc">The LOD 0 renderers.</span> |
| <Link id="m-renderers" /><code>{"IEnumerable<Renderer> Renderers { get; }"}</code> | <span className="api-desc">Every clothing renderer: head and body, opaque and transparent.</span> |
| <Link id="m-specialeffects" /><code><Link to="/mod/game-api/types/global-i-l/icharacterdummyspecialeffects">{"ICharacterDummySpecialEffects"}</Link>{" SpecialEffects { get; set; }"}</code> | <span className="api-desc">Optional special effects handler initialised whenever clothing meshes are set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakemeshes" /><code>{"void BakeMeshes(Mesh[] meshes, Mesh[] headMeshes, Mesh[] transparentMeshes, Mesh[] transparentHeadMeshes)"}</code> | <span className="api-desc">Bakes each skinned clothing renderer's current pose into the matching passed mesh (vertices and normals).</span> |
| <Link id="m-setmaterialinstance" /><code>{"void SetMaterialInstance(Material material)"}</code> | <span className="api-desc">Sets the shared material on all opaque body and head clothes.</span> |
| <Link id="m-setopaque" /><code>{"void SetOpaque(Mesh[] meshes, Mesh[] headMeshes)"}</code> | <span className="api-desc">Assigns meshes to the opaque body and head renderers, disabling any with an empty mesh, then initialises special effects.</span> |
| <Link id="m-settransparent" /><code>{"void SetTransparent(Mesh[] meshes, Mesh[] headMeshes)"}</code> | <span className="api-desc">Assigns meshes to the transparent body and head renderers, disabling any with an empty mesh, then initialises special effects.</span> |
| <Link id="m-settransparentmaterialinstance" /><code>{"void SetTransparentMaterialInstance(Material material)"}</code> | <span className="api-desc">Sets the shared material on all transparent body and head clothes.</span> |
| <Link id="m-togglebodyrenderers" /><code>{"void ToggleBodyRenderers(bool isEnabled)"}</code> | <span className="api-desc">Shows body clothes normally or switches them to shadows only.</span> |
| <Link id="m-toggleheadrenderers" /><code>{"void ToggleHeadRenderers(bool isEnabled)"}</code> | <span className="api-desc">Shows head clothes normally or switches them to shadows only (used to hide your own head from yourself).</span> |

## Used in

Members of other types that take, return or hold a `ClothesSettings`:

<div className="api-used-in">

[`CharacterDummy.clothes`](/mod/game-api/types/alta-player/characterdummy#m-clothes), [`CharacterDummy.Clothes`](/mod/game-api/types/alta-player/characterdummy#m-clothes-2).

</div>
