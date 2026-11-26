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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClothesSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-headopaqueclothes" /><code>{"private SkinnedMeshRenderer[] headOpaqueClothes"}</code> | Opaque renderers on the head. |
| <Link id="m-headtransparentclothes" /><code>{"private SkinnedMeshRenderer[] headTransparentClothes"}</code> | Transparent renderers on the head. |
| <Link id="m-lod0" /><code>{"private Renderer[] lod0"}</code> | Backing field for `Lod0`. |
| <Link id="m-opaqueclothes" /><code>{"private SkinnedMeshRenderer[] opaqueClothes"}</code> | Opaque renderers on the body. |
| <Link id="m-transparentclothes" /><code>{"private SkinnedMeshRenderer[] transparentClothes"}</code> | Transparent renderers on the body. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lod0-2" /><code>{"Renderer[] Lod0 { get; }"}</code> | The LOD 0 renderers. |
| <Link id="m-renderers" /><code>{"IEnumerable<Renderer> Renderers { get; }"}</code> | Every clothing renderer: head and body, opaque and transparent. |
| <Link id="m-specialeffects" /><code><Link to="/game-api/types/global-i-l/icharacterdummyspecialeffects">{"ICharacterDummySpecialEffects"}</Link>{" SpecialEffects { get; set; }"}</code> | Optional special effects handler initialised whenever clothing meshes are set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakemeshes" /><code>{"void BakeMeshes(Mesh[] meshes, Mesh[] headMeshes, Mesh[] transparentMeshes, Mesh[] transparentHeadMeshes)"}</code> | Bakes each skinned clothing renderer's current pose into the matching passed mesh (vertices and normals). |
| <Link id="m-setmaterialinstance" /><code>{"void SetMaterialInstance(Material material)"}</code> | Sets the shared material on all opaque body and head clothes. |
| <Link id="m-setopaque" /><code>{"void SetOpaque(Mesh[] meshes, Mesh[] headMeshes)"}</code> | Assigns meshes to the opaque body and head renderers, disabling any with an empty mesh, then initialises special effects. |
| <Link id="m-settransparent" /><code>{"void SetTransparent(Mesh[] meshes, Mesh[] headMeshes)"}</code> | Assigns meshes to the transparent body and head renderers, disabling any with an empty mesh, then initialises special effects. |
| <Link id="m-settransparentmaterialinstance" /><code>{"void SetTransparentMaterialInstance(Material material)"}</code> | Sets the shared material on all transparent body and head clothes. |
| <Link id="m-togglebodyrenderers" /><code>{"void ToggleBodyRenderers(bool isEnabled)"}</code> | Shows body clothes normally or switches them to shadows only. |
| <Link id="m-toggleheadrenderers" /><code>{"void ToggleHeadRenderers(bool isEnabled)"}</code> | Shows head clothes normally or switches them to shadows only (used to hide your own head from yourself). |

## Used in

Members of other types that take, return or hold a `ClothesSettings`:

[`CharacterDummy.clothes`](/game-api/types/alta-player/characterdummy#m-clothes), [`CharacterDummy.Clothes`](/game-api/types/alta-player/characterdummy#m-clothes-2).
