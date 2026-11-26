---
title: "CentralGoldCoinBank"
description: "Server-side per-player store of gold bank accounts (PlayerGoldBankAccount)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CentralGoldCoinBank

A **class** in `Root.Township`, the global namespace.

Server-side per-player store of gold bank accounts (`PlayerGoldBankAccount`). Reach it through `PerPlayerManager`'s `Instance` and `GetContentAsync`, as the ATM and trade commands do.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`PerPlayerManager<CentralGoldCoinBank, PlayerGoldBankAccount, PlayerGoldBankAccountData>`](/mod/game-api/types/global-p/perplayermanager-tthis-tcontent-tsaveformat)
- **Derived types** [`CentralGoldCoinBank`](/mod/game-api/types/global-c-d/centralgoldcoinbank)
- **Documented in** [Trading](/mod/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CentralGoldCoinBank()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |
