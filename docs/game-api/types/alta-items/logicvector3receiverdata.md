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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicVector3Receiver, LogicVector3ReceiverData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicVector3Receiver`](/game-api/types/alta-items/logicvector3receiver), [`LogicVector3ReceiverData`](/game-api/types/alta-items/logicvector3receiverdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicVector3ReceiverData()"}</code> | Creates a `LogicVector3ReceiverData` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-items/logicvector3savedata">{"LogicVector3SaveData"}</Link>{" Data { get; set; }"}</code> | The linked Vector3 sender's logic data. On load the receiver relinks to it through the logic manager. |
