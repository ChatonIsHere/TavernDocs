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
| <Link id="m-ctor" /><code>{"ShopItemImage()"}</code> | Creates a `ShopItemImage` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-formats" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemimage">{"ShopItemImage"}</Link>{"> Formats { get; set; }"}</code> | Other versions of the same image, left out when empty. |
| <Link id="m-formattype" /><code>{"string FormatType { get; set; }"}</code> | Name of this image's format, left out of the JSON when empty. |
| <Link id="m-height" /><code>{"int Height { get; set; }"}</code> | Height in pixels. |
| <Link id="m-imagetype" /><code>{"string ImageType { get; set; }"}</code> | What the image is used for, left out when empty. |
| <Link id="m-url" /><code>{"string Url { get; set; }"}</code> | Address of the image. |
| <Link id="m-width" /><code>{"int Width { get; set; }"}</code> | Width in pixels. |

## Used in

Members of other types that take, return or hold a `ShopItemImage`:

[`ShopItemDetailed.Images`](/mod/game-api/types/assembly-api-models/shopitemdetailed#m-images).
