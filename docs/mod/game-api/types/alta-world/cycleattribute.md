---
title: "CycleAttribute"
description: "Base inspector attribute marking how much of the day cycle a value covers (FullCycle, HalfCycle, QuarterCycle)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CycleAttribute

An **abstract class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Base inspector attribute marking how much of the day cycle a value covers (`FullCycle`, `HalfCycle`, `QuarterCycle`). Used on `DayTimeManager` fields.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`FullCycle`](/mod/game-api/types/alta-world/fullcycle), [`HalfCycle`](/mod/game-api/types/alta-world/halfcycle), [`QuarterCycle`](/mod/game-api/types/alta-world/quartercycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CycleAttribute()"}</code> | <span className="api-desc">Creates a `CycleAttribute` with default values.</span> |
