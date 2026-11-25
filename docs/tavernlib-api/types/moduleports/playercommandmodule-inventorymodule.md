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

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule)
- **Attributes** `ServerOnly`, `Module`
- **Documented in** [PlayerCommandModule.InventoryModule](/tavernlib-api/types/moduleports/playercommandmodule-inventorymodule)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inventory" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/inventory">{"Inventory"}</Link>{"> "}<Link to="/game-api/types/alta-console/inventory">{"Inventory"}</Link>{"("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players) (iterator)"}</code> |  |
| <Link id="m-load" /><code>{"private static async Task Load("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, string save)"}</code> |  |
| <Link id="m-save" /><code>{"private static async Task<string> Save("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> |  |
