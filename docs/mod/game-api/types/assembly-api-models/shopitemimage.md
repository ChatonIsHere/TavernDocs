---
title: "ShopItemImage"
description: "An image for a shop item, with optional alternative formats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemImage

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

An image for a shop item, with optional alternative formats.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemImage()"}</code> | <span className="api-desc">Creates a `ShopItemImage` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-formats" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemimage">{"ShopItemImage"}</Link>{"> Formats { get; set; }"}</code> | <span className="api-desc">Other versions of the same image, left out when empty.</span> |
| <Link id="m-formattype" /><code>{"string FormatType { get; set; }"}</code> | <span className="api-desc">Name of this image's format, left out of the JSON when empty.</span> |
| <Link id="m-height" /><code>{"int Height { get; set; }"}</code> | <span className="api-desc">Height in pixels.</span> |
| <Link id="m-imagetype" /><code>{"string ImageType { get; set; }"}</code> | <span className="api-desc">What the image is used for, left out when empty.</span> |
| <Link id="m-url" /><code>{"string Url { get; set; }"}</code> | <span className="api-desc">Address of the image.</span> |
| <Link id="m-width" /><code>{"int Width { get; set; }"}</code> | <span className="api-desc">Width in pixels.</span> |

## Used in

Members of other types that take, return or hold a `ShopItemImage`:

<div className="api-used-in">

[`ShopItemDetailed.Images`](/mod/game-api/types/assembly-api-models/shopitemdetailed#m-images).

</div>
