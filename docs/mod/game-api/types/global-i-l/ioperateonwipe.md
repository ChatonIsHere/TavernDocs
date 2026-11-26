---
title: "IOperateOnWipe"
description: "Server: an entity that does extra work when ServerWipeManager wipes the server, such as CommunalStorage and TradeVendor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOperateOnWipe

An **interface** in `Root.Township`, the global namespace.

Server: an entity that does extra work when `ServerWipeManager` wipes the server, such as `CommunalStorage` and `TradeVendor`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`CommunalStorage`](/mod/game-api/types/alta-items/communalstorage), [`TradeVendor`](/mod/game-api/types/alta-crafting/tradevendor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-wipeoperation" /><code>{"void WipeOperation()"}</code> | <span className="api-desc">Server: runs the entity's wipe step.</span> |
