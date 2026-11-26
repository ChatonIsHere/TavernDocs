---
title: "PlayerGoldBankAccountData"
description: "Server: the saved contents of a player's gold bank account (one coin count), stored per player as a small binary file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerGoldBankAccountData

A **class** in `Root.Township`, the global namespace.

Server: the saved contents of a player's gold bank account (one coin count), stored per player as a small binary file. While an ATM is open for the player it reads through to the ATM.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`CentralGoldCoinBank`](/mod/game-api/types/global-c-d/centralgoldcoinbank), [`PlayerGoldBankAccount`](/mod/game-api/types/global-p/playergoldbankaccount)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerGoldBankAccountData()"}</code> | <span className="api-desc">Creates a `PlayerGoldBankAccountData` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-quantity" /><code>{"private int quantity"}</code> | <span className="api-desc">Backing field for `Quantity` when no ATM is open.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentatm" /><code><Link to="/mod/game-api/types/global-a-b/atmmachine">{"ATMMachine"}</Link>{" CurrentAtm { get; set; }"}</code> | <span className="api-desc">The `ATMMachine` the player is using right now, or null. While set, `Quantity` reads and writes go through it.</span> |
| <Link id="m-quantity-2" /><code>{"int Quantity { get; set; }"}</code> | <span className="api-desc">Coins in the account. Reads the ATM teller amount while an ATM is open, and setting it updates that ATM.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns a copy with the same quantity.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the quantity as one 32-bit integer.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the quantity as one 32-bit integer.</span> |
