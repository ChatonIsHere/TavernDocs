---
title: "IOperateOnWipe"
description: "Server: an entity that does extra work when ServerWipeManager wipes the server, such as CommunalStorage and TradeVendor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOperateOnWipe

An **interface** in `Root.Township`, no namespace.

Server: an entity that does extra work when `ServerWipeManager` wipes the server, such as `CommunalStorage` and `TradeVendor`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`CommunalStorage`](/game-api/types/alta-items/communalstorage), [`TradeVendor`](/game-api/types/alta-crafting/tradevendor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-wipeoperation" /><code>{"void WipeOperation()"}</code> | Server: runs the entity's wipe step. |
