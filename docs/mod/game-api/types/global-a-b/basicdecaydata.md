---
title: "BasicDecayData"
description: "Current save data for BasicDecay (version 3): the decay timer and whether decay is turned off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecayData

A **class** in `Root.Township`, the global namespace.

Current save data for `BasicDecay` (version 3): the decay timer and whether decay is turned off.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<BasicDecay, BasicDecayData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BasicDecay`](/mod/game-api/types/global-a-b/basicdecay), [`BasicDecayData`](/mod/game-api/types/global-a-b/basicdecaydata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecayData()"}</code> | <span className="api-desc">Creates a `BasicDecayData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"bool isDisabled"}</code> | <span className="api-desc">Whether decay was disabled on this entity.</span> |
| <Link id="m-timelineentry" /><code>{"TimeSpan timelineEntry"}</code> | <span className="api-desc">When the decay timer is due, as a timeline time.</span> |
