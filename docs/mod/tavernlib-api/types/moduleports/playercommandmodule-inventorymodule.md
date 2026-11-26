---
title: "PlayerCommandModule.InventoryModule"
description: "The player inventory submodule: view an online player's inventory, and save or load it."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule.InventoryModule

A **static class** in `TavernLib`, `TavernLib.ModulePorts`.

The `player inventory` submodule: view an online player's inventory, and save or load it. Server only; its commands are private.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule)
- **Attributes** `ServerOnly`, `Module`
- **Documented in** [PlayerCommandModule.InventoryModule](/mod/tavernlib-api/types/moduleports/playercommandmodule-inventorymodule)

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inventory" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/inventory">{"Inventory"}</Link>{"> "}<Link to="/mod/game-api/types/alta-console/inventory">{"Inventory"}</Link>{"("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players) (iterator)"}</code> | `player inventory`: server only, shows online players' inventories. |
| <Link id="m-load" /><code>{"private static async Task Load("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, string save)"}</code> | `player inventory load`: server only, writes inventory data into an offline player's save. |
| <Link id="m-save" /><code>{"private static async Task<string> Save("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | `player inventory save`: server only, returns a player's inventory data as text, from the live player or from their save file. |

</details>
