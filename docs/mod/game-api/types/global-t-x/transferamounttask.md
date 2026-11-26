---
title: "TransferAmountTask"
description: "A game task asset (TransferAmount channel) that counts when a matching prefab is transferred."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransferAmountTask

A **class** in `Root.Township`, the global namespace.

A game task asset (`TransferAmount` channel) that counts when a matching prefab is transferred. Created from the Township Tale / Game Tasks menu.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`CustomArgumentGameAction<TransferAmountArgument>`](/mod/game-api/types/global-c-d/customargumentgameaction-t)
- **Derived types** [`EatAmountTask`](/mod/game-api/types/global-e-h/eatamounttask)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransferAmountTask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ignorehashes" /><code>{"private List<uint> ignoreHashes"}</code> | Prefab hashes that never count. |
| <Link id="m-isanyprefab" /><code>{"private bool isAnyPrefab"}</code> | When true, every transfer counts. |
| <Link id="m-targethashes" /><code>{"private List<uint> targetHashes"}</code> | Prefab hashes that count. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.TransferAmount`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-t-x/transferamountargument">{"TransferAmountArgument"}</Link>{" argument)"}</code> | True if any prefab is allowed, or the transferred item's hash is in `targetHashes` and not in `ignoreHashes`. |
