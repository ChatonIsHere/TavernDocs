---
title: "DrawBridgeRangeLogicSaveData1"
description: "Old save format for DrawBridgeRangeLogic with full up and down angle vectors, migrated to the current save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeRangeLogicSaveData1

A **class** in `Root.Township`, no namespace.

Old save format for `DrawBridgeRangeLogic` with full up and down angle vectors, migrated to the current save data.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DrawBridgeRangeLogicSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downanglessaved" /><code>{"Vector3 downAnglesSaved"}</code> | Down angles as Euler angles; only Z survives migration. |
| <Link id="m-upanglessaved" /><code>{"Vector3 upAnglesSaved"}</code> | Up angles as Euler angles; only Z survives migration. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the new save data, keeping only the Z of each angle (down becomes `angle0`, up becomes `angle1`). |
