---
title: "LogicVector3ReceiverData"
description: "Save data for LogicVector3Receiver: which Vector3 sender it listens to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicVector3ReceiverData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicVector3Receiver`: which Vector3 sender it listens to.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicVector3Receiver, LogicVector3ReceiverData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicVector3Receiver`](/mod/game-api/types/alta-items/logicvector3receiver), [`LogicVector3ReceiverData`](/mod/game-api/types/alta-items/logicvector3receiverdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicVector3ReceiverData()"}</code> | <span className="api-desc">Creates a `LogicVector3ReceiverData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicvector3savedata">{"LogicVector3SaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked Vector3 sender's logic data. On load the receiver relinks to it through the logic manager.</span> |
