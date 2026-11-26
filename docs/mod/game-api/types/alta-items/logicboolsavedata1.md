---
title: "LogicBoolSaveData1"
description: "Version 1 save data for a LogicBoolSender, migrated to LogicBoolSaveData when loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolSaveData1

A **class** in `Root.Township`, `Alta.Logic`.

Version 1 save data for a `LogicBoolSender`, migrated to `LogicBoolSaveData` when loaded.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolSaveData1()"}</code> | <span className="api-desc">Creates a `LogicBoolSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint identifier"}</code> | <span className="api-desc">The logic identifier.</span> |
| <Link id="m-value" /><code>{"bool value"}</code> | <span className="api-desc">The saved bool value.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `LogicBoolSaveData`, moving the identifier into `LogicSaveData`.</span> |
