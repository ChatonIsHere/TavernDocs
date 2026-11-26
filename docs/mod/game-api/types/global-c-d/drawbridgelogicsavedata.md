---
title: "DrawBridgeLogicSaveData"
description: "Save data for a DrawBridgeLogic: its angle, up state and rotation time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeLogicSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `DrawBridgeLogic`: its angle, up state and rotation time.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<DrawBridgeLogic, DrawBridgeLogicSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`DrawBridgeLogic`](/mod/game-api/types/global-c-d/drawbridgelogic), [`DrawBridgeLogicSaveData`](/mod/game-api/types/global-c-d/drawbridgelogicsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DrawBridgeLogicSaveData()"}</code> | Creates a `DrawBridgeLogicSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatesaved" /><code>{"float angleToRotateSaved"}</code> | Saved `angleToRotate`, including its current sign. |
| <Link id="m-isupsaved" /><code>{"bool isUpSaved"}</code> | Saved `isUp`. |
| <Link id="m-rotationtimesaved" /><code>{"float rotationTimeSaved"}</code> | Saved `rotationTime`. |
