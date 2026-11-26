---
title: "EatAmountTask"
description: "Transfer amount game task on the Eat Amount channel, probably counting how much a player eats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EatAmountTask

A **class** in `Root.Township`, the global namespace.

Transfer amount game task on the Eat Amount channel, probably counting how much a player eats.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`TransferAmountTask`](/mod/game-api/types/global-t-x/transferamounttask)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EatAmountTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.EatAmount`.</span> |
