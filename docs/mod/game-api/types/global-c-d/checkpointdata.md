---
title: "CheckPointData"
description: "Save data for a CheckPoint: the leaderboards it begins and ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CheckPointData

A **class** in `Root.Township`, the global namespace.

Save data for a `CheckPoint`: the leaderboards it begins and ends.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<CheckPoint, CheckPointData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CheckPoint`](/mod/game-api/types/global-c-d/checkpoint), [`CheckPointData`](/mod/game-api/types/global-c-d/checkpointdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CheckPointData()"}</code> | <span className="api-desc">Creates a `CheckPointData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beginningdatas" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] beginningDatas"}</code> | <span className="api-desc">Leaderboards that start timing at the checkpoint.</span> |
| <Link id="m-endingdatas" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] endingDatas"}</code> | <span className="api-desc">Leaderboards that stop timing at the checkpoint.</span> |
