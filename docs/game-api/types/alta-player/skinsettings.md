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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkinSettings()"}</code> | Creates a `SkinSettings` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-skinadditionalblit" /><code>{"private Material skinAdditionalBlit"}</code> | Backing field for `SkinAdditionalBlit`. |
| <Link id="m-skinblit" /><code>{"private Material skinBlit"}</code> | Backing field for `SkinBlit`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{" Arguments { get; }"}</code> | The skin's primary and secondary colours used when blitting skin textures. |
| <Link id="m-skinadditionalblit-2" /><code>{"Material SkinAdditionalBlit { get; }"}</code> | Material copied to blit the skin normal map. |
| <Link id="m-skinblit-2" /><code>{"Material SkinBlit { get; }"}</code> | Material copied to blit the skin diffuse texture. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set("}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color)"}</code> | Sets the primary skin colour. Called by `CosmeticSkinColor`. |

## Used in

Members of other types that take, return or hold a `SkinSettings`:

[`CharacterDummy.skin`](/game-api/types/alta-player/characterdummy#m-skin), [`CharacterDummy.Skin`](/game-api/types/alta-player/characterdummy#m-skin-2).
