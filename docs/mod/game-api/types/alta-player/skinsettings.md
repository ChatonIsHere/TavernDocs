---
title: "SkinSettings"
description: "The character dummy's skin colours and skin blit materials, held on CharacterDummy.Skin and read by SkinMeshPart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinSettings

A **class** in `Root.Township`, `Alta.Character`.

The character dummy's skin colours and skin blit materials, held on `CharacterDummy.Skin` and read by `SkinMeshPart`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkinSettings()"}</code> | <span className="api-desc">Creates a `SkinSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-skinadditionalblit" /><code>{"private Material skinAdditionalBlit"}</code> | <span className="api-desc">Backing field for `SkinAdditionalBlit`.</span> |
| <Link id="m-skinblit" /><code>{"private Material skinBlit"}</code> | <span className="api-desc">Backing field for `SkinBlit`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{" Arguments { get; }"}</code> | <span className="api-desc">The skin's primary and secondary colours used when blitting skin textures.</span> |
| <Link id="m-skinadditionalblit-2" /><code>{"Material SkinAdditionalBlit { get; }"}</code> | <span className="api-desc">Material copied to blit the skin normal map.</span> |
| <Link id="m-skinblit-2" /><code>{"Material SkinBlit { get; }"}</code> | <span className="api-desc">Material copied to blit the skin diffuse texture.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set("}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color)"}</code> | <span className="api-desc">Sets the primary skin colour. Called by `CosmeticSkinColor`.</span> |

## Used in

Members of other types that take, return or hold a `SkinSettings`:

<div className="api-used-in">

[`CharacterDummy.skin`](/mod/game-api/types/alta-player/characterdummy#m-skin), [`CharacterDummy.Skin`](/mod/game-api/types/alta-player/characterdummy#m-skin-2).

</div>
