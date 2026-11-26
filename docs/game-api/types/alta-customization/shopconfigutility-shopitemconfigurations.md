---
title: "ShopConfigUtility.ShopItemConfigurations"
description: "JSON shape of the local shop override file: the shop page and the game home page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopConfigUtility.ShopItemConfigurations

A **class** in `Root.Township`, `Alta.Customization`.

JSON shape of the local shop override file: the shop page and the game home page.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`ShopConfigUtility`](/game-api/types/alta-customization/shopconfigutility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemConfigurations()"}</code> | Creates a `ShopConfigUtility.ShopItemConfigurations` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gamehomeconfiguration" /><code><Link to="/game-api/types/assembly-api-models/gamehomeconfiguration">{"GameHomeConfiguration"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/gamehomeconfiguration">{"GameHomeConfiguration"}</Link>{" { get; set; }"}</code> | Game home config, from the `home` key. |
| <Link id="m-shopconfiguration" /><code><Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{" ShopConfiguration { get; set; }"}</code> | Shop page config, from the `shop` key. |
