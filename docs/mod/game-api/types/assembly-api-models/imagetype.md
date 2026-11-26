---
title: "ImageType"
description: "Which slot a shop item image fills (primary, hover, carousel, detailed or gallery)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImageType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

Which slot a shop item image fills (primary, hover, carousel, detailed or gallery). Used by `LowLevelApiClient.AddImageToItemAsync`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-carousel" /><code>{"Carousel = 3"}</code> |
| <Link id="m-detailed" /><code>{"Detailed = 4"}</code> |
| <Link id="m-gallery" /><code>{"Gallery = 5"}</code> |
| <Link id="m-hover" /><code>{"Hover = 2"}</code> |
| <Link id="m-primary" /><code>{"Primary = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ImageType`:

<div className="api-used-in">

[`IShopEditor.AddImageToItemAsync`](/mod/game-api/types/assembly-api-client/ishopeditor#m-addimagetoitemasync), [`OfflineShopEditor.AddImageToItemAsync`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-addimagetoitemasync), [`ShopEditor.AddImageToItemAsync`](/mod/game-api/types/assembly-api-client/shopeditor#m-addimagetoitemasync), [`LowLevelApiClient.AddImageToItemAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-addimagetoitemasync).

</div>
