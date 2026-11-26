---
title: "PopulationAction"
description: "What happened in a population event (initialize, update, spawned, lost)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationAction

An **enum** in `Root.Township`, `Alta.Populations`.

What happened in a population event (initialize, update, spawned, lost). Sent with population analytics records and `PopulationEventData`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Values

| Member |
| --- |
| <Link id="m-initialize" /><code>{"Initialize = 0"}</code> |
| <Link id="m-lost" /><code>{"Lost = 3"}</code> |
| <Link id="m-spawned" /><code>{"Spawned = 2"}</code> |
| <Link id="m-update" /><code>{"Update = 1"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationAction`:

[`PopulationAnalytics.SendRecord`](/mod/game-api/types/alta-world-generation/populationanalytics#m-sendrecord), [`PopulationEventData.action`](/mod/game-api/types/alta-world-generation/populationeventdata#m-action), [`PopulationEventData.PopulationEventData`](/mod/game-api/types/alta-world-generation/populationeventdata#m-ctor).
