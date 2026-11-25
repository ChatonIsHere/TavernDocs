---
title: "PlayerGoldBankAccountData"
description: "class PlayerGoldBankAccountData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerGoldBankAccountData

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`CentralGoldCoinBank`](/game-api/types/global-c-d/centralgoldcoinbank), [`PlayerGoldBankAccount`](/game-api/types/global-p/playergoldbankaccount)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerGoldBankAccountData()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-quantity" /><code>{"private int quantity"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentatm" /><code><Link to="/game-api/types/global-a-b/atmmachine">{"ATMMachine"}</Link>{" CurrentAtm { get; set; }"}</code> |
| <Link id="m-quantity-2" /><code>{"int Quantity { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |
