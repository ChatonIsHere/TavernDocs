---
title: "BasicDecayData1"
description: "Old BasicDecay save data (version 1) with the timer in float seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecayData1

A **class** in `Root.Township`, the global namespace.

Old `BasicDecay` save data (version 1) with the timer in float seconds. Migrates to `BasicDecayData`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecayData1()"}</code> | Creates a `BasicDecayData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-timelineentry" /><code>{"float timelineEntry"}</code> | Timer due time in seconds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `BasicDecayData`, turning the seconds into a `TimeSpan`. |
