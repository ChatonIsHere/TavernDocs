---
title: "ButtonCounterSaveData"
description: "Save data for a ButtonCounter: its current amount."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounterSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `ButtonCounter`: its current amount.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<ButtonCounter, ButtonCounterSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ButtonCounter`](/mod/game-api/types/global-a-b/buttoncounter), [`ButtonCounterSaveData`](/mod/game-api/types/global-a-b/buttoncountersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonCounterSaveData()"}</code> | Creates a `ButtonCounterSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-savedamount" /><code>{"int savedAmount"}</code> | The counter's `Amount` when saved, restored on load. |

## Used in

Members of other types that take, return or hold a `ButtonCounterSaveData`:

[`ButtonCounter.Load`](/mod/game-api/types/global-a-b/buttoncounter#m-load), [`ButtonCounter.Save`](/mod/game-api/types/global-a-b/buttoncounter#m-save).
