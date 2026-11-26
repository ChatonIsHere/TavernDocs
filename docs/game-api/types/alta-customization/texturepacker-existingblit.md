---
title: "TexturePacker.ExistingBlit"
description: "Key for a texture already packed into the cosmetics atlas, so parts with the same texture and colours can share it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TexturePacker.ExistingBlit

A **private class** in `Root.Township`, `Alta.Customization`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Key for a texture already packed into the cosmetics atlas, so parts with the same texture and colours can share it.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`TexturePacker`](/game-api/types/alta-customization/texturepacker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ExistingBlit(int workingIndex, Texture2D texture, "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorA, "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorB)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorA"}</code> | Primary colour applied. |
| <Link id="m-colorb" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorB"}</code> | Secondary colour applied. |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> | The source texture. |
| <Link id="m-workingindex" /><code>{"private int workingIndex"}</code> | The part's working index, or 0 when sharing is allowed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Equal when index, texture and both colours are the same objects. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from the index, texture and both colours. |

## Used in

Members of other types that take, return or hold a `ExistingBlit`:

[`TexturePacker.existing`](/game-api/types/alta-customization/texturepacker#m-existing).
