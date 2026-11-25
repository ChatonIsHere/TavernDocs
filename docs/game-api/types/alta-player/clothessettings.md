---
title: "ClothesSettings"
description: "class ClothesSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClothesSettings

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClothesSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-headopaqueclothes" /><code>{"private SkinnedMeshRenderer[] headOpaqueClothes"}</code> |  |
| <Link id="m-headtransparentclothes" /><code>{"private SkinnedMeshRenderer[] headTransparentClothes"}</code> |  |
| <Link id="m-lod0" /><code>{"private Renderer[] lod0"}</code> |  |
| <Link id="m-opaqueclothes" /><code>{"private SkinnedMeshRenderer[] opaqueClothes"}</code> |  |
| <Link id="m-transparentclothes" /><code>{"private SkinnedMeshRenderer[] transparentClothes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lod0-2" /><code>{"Renderer[] Lod0 { get; }"}</code> |  |
| <Link id="m-renderers" /><code>{"IEnumerable<Renderer> Renderers { get; }"}</code> |  |
| <Link id="m-specialeffects" /><code><Link to="/game-api/types/global-i-l/icharacterdummyspecialeffects">{"ICharacterDummySpecialEffects"}</Link>{" SpecialEffects { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakemeshes" /><code>{"void BakeMeshes(Mesh[] meshes, Mesh[] headMeshes, Mesh[] transparentMeshes, Mesh[] transparentHeadMeshes)"}</code> |  |
| <Link id="m-setmaterialinstance" /><code>{"void SetMaterialInstance(Material material)"}</code> |  |
| <Link id="m-setopaque" /><code>{"void SetOpaque(Mesh[] meshes, Mesh[] headMeshes)"}</code> |  |
| <Link id="m-settransparent" /><code>{"void SetTransparent(Mesh[] meshes, Mesh[] headMeshes)"}</code> |  |
| <Link id="m-settransparentmaterialinstance" /><code>{"void SetTransparentMaterialInstance(Material material)"}</code> |  |
| <Link id="m-togglebodyrenderers" /><code>{"void ToggleBodyRenderers(bool isEnabled)"}</code> |  |
| <Link id="m-toggleheadrenderers" /><code>{"void ToggleHeadRenderers(bool isEnabled)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClothesSettings`:

[`CharacterDummy.clothes`](/game-api/types/alta-player/characterdummy#m-clothes), [`CharacterDummy.Clothes`](/game-api/types/alta-player/characterdummy#m-clothes-2).
