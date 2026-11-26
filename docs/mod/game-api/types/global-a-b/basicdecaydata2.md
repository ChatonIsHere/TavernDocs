---
title: "BasicDecayData2"
description: "Old BasicDecay save data (version 2) without the disabled flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecayData2

A **class** in `Root.Township`, the global namespace.

Old `BasicDecay` save data (version 2) without the disabled flag. Migrates to `BasicDecayData`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecayData2()"}</code> | Creates a `BasicDecayData2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-timelineentry" /><code>{"TimeSpan timelineEntry"}</code> | Timer due time. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `BasicDecayData`, keeping the timer. |
