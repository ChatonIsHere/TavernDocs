---
title: "DrawBridgeRangeLogicSaveData1"
description: "Old save format for DrawBridgeRangeLogic with full up and down angle vectors, migrated to the current save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeRangeLogicSaveData1

A **class** in `Root.Township`, the global namespace.

Old save format for `DrawBridgeRangeLogic` with full up and down angle vectors, migrated to the current save data.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DrawBridgeRangeLogicSaveData1()"}</code> | <span className="api-desc">Creates a `DrawBridgeRangeLogicSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downanglessaved" /><code>{"Vector3 downAnglesSaved"}</code> | <span className="api-desc">Down angles as Euler angles; only Z survives migration.</span> |
| <Link id="m-upanglessaved" /><code>{"Vector3 upAnglesSaved"}</code> | <span className="api-desc">Up angles as Euler angles; only Z survives migration.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the new save data, keeping only the Z of each angle (down becomes `angle0`, up becomes `angle1`).</span> |
