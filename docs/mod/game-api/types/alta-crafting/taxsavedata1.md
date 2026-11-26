---
title: "TaxSaveData1"
description: "Old version 1 save data for a TaxManager, with the time in float seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaxSaveData1

A **class** in `Root.Township`, `Alta.Trading`.

Old version 1 save data for a `TaxManager`, with the time in float seconds. Migrates to `TaxSaveData`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaxSaveData1()"}</code> | <span className="api-desc">Creates a `TaxSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"float currentTime"}</code> | <span className="api-desc">Saved tax timer, in seconds.</span> |
| <Link id="m-istaxing" /><code>{"bool isTaxing"}</code> | <span className="api-desc">Whether tax was being taken.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Returns a `TaxSaveData` with the time turned into a `TimeSpan`.</span> |
