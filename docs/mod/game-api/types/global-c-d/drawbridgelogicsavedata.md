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
| <Link id="m-ctor" /><code>{"DrawBridgeLogicSaveData()"}</code> | <span className="api-desc">Creates a `DrawBridgeLogicSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatesaved" /><code>{"float angleToRotateSaved"}</code> | <span className="api-desc">Saved `angleToRotate`, including its current sign.</span> |
| <Link id="m-isupsaved" /><code>{"bool isUpSaved"}</code> | <span className="api-desc">Saved `isUp`.</span> |
| <Link id="m-rotationtimesaved" /><code>{"float rotationTimeSaved"}</code> | <span className="api-desc">Saved `rotationTime`.</span> |
