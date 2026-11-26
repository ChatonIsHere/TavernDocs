---
title: "CheckPointData"
description: "Save data for a CheckPoint: the leaderboards it begins and ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CheckPointData

A **class** in `Root.Township`, no namespace.

Save data for a `CheckPoint`: the leaderboards it begins and ends.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<CheckPoint, CheckPointData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CheckPoint`](/game-api/types/global-c-d/checkpoint), [`CheckPointData`](/game-api/types/global-c-d/checkpointdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CheckPointData()"}</code> | Creates a `CheckPointData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beginningdatas" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] beginningDatas"}</code> | Leaderboards that start timing at the checkpoint. |
| <Link id="m-endingdatas" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] endingDatas"}</code> | Leaderboards that stop timing at the checkpoint. |
