---
title: "ShopConfigUtility"
description: "Fetches the shop layout from the Alta shop API, or for shop_admin users from a local file named in the Alta Launcher settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopConfigUtility

A **static class** in `Root.Township`, `Alta.Customization`.

Fetches the shop layout from the Alta shop API, or for `shop_admin` users from a local file named in the Alta Launcher settings.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested types** [`ShopItemConfigurations`](/mod/game-api/types/alta-customization/shopconfigutility-shopitemconfigurations)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfiguration()"}</code> | <span className="api-desc">Returns the shop page config, from the local override file if there is one, else from the API. Null when logged out.</span> |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"static async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> | <span className="api-desc">Returns shop items with ownership for the user. With a local override, builds them from the file with price 1. Null when logged out.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcustomfolderpath" /><code>{"private static string GetCustomFolderPath()"}</code> | <span className="api-desc">For `shop_admin` users, reads `layout` from `%AppData%\Alta Launcher\Settings.json` and returns it if that file exists; else null.</span> |

</details>
