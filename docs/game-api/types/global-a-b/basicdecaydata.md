---
title: "BasicDecayData"
description: "Current save data for BasicDecay (version 3): the decay timer and whether decay is turned off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecayData

A **class** in `Root.Township`, no namespace.

Current save data for `BasicDecay` (version 3): the decay timer and whether decay is turned off.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<BasicDecay, BasicDecayData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BasicDecay`](/game-api/types/global-a-b/basicdecay), [`BasicDecayData`](/game-api/types/global-a-b/basicdecaydata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecayData()"}</code> | Creates a `BasicDecayData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"bool isDisabled"}</code> | Whether decay was disabled on this entity. |
| <Link id="m-timelineentry" /><code>{"TimeSpan timelineEntry"}</code> | When the decay timer is due, as a timeline time. |
