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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`TexturePacker`](/mod/game-api/types/alta-customization/texturepacker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExistingBlit(int workingIndex, Texture2D texture, "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorA, "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorB)"}</code> | <span className="api-desc">Creates a `TexturePacker.ExistingBlit` from `workingIndex`, `texture`, `colorA` and `colorB`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorA"}</code> | <span className="api-desc">Primary colour applied.</span> |
| <Link id="m-colorb" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" colorB"}</code> | <span className="api-desc">Secondary colour applied.</span> |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> | <span className="api-desc">The source texture.</span> |
| <Link id="m-workingindex" /><code>{"private int workingIndex"}</code> | <span className="api-desc">The part's working index, or 0 when sharing is allowed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal when index, texture and both colours are the same objects.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from the index, texture and both colours.</span> |

## Used in

Members of other types that take, return or hold a `ExistingBlit`:

<div className="api-used-in">

[`TexturePacker.existing`](/mod/game-api/types/alta-customization/texturepacker#m-existing).

</div>
