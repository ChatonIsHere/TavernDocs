---
title: "ShopPageConfigurationWithBanner"
description: "A shop page layout with a banner image taken from the game home configuration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopPageConfigurationWithBanner

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A shop page layout with a banner image taken from the game home configuration.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`ShopPageConfiguration`](/game-api/types/assembly-api-models/shoppageconfiguration)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopPageConfigurationWithBanner()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | The banner image. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{" Create("}<Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{" shop, "}<Link to="/game-api/types/assembly-api-models/gamehomeconfiguration">{"GameHomeConfiguration"}</Link>{" gameHome)"}</code> | Copies the shop's primary and secondary items and takes the image of the first home element that has pages. |

## Used in

Members of other types that take, return or hold a `ShopPageConfigurationWithBanner`:

[`IShopApiClient.GetCurrentShopConfigurationWithBanner`](/game-api/types/assembly-api-client/ishopapiclient#m-getcurrentshopconfigurationwithbanner), [`OfflineShopApiClient.GetCurrentShopConfigurationWithBanner`](/game-api/types/assembly-api-client/offlineshopapiclient#m-getcurrentshopconfigurationwithbanner), [`ShopApiClient.GetCurrentShopConfigurationWithBanner`](/game-api/types/assembly-api-client/shopapiclient#m-getcurrentshopconfigurationwithbanner), [`LowLevelApiClient.GetCurrentShopConfigurationWithBanner`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getcurrentshopconfigurationwithbanner), [`ShopConfigUtility.GetCurrentShopConfiguration`](/game-api/types/alta-customization/shopconfigutility#m-getcurrentshopconfiguration).
