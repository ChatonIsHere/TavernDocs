---
title: "PopulationEventData"
description: "Payload of the ConsoleEvents.PopulationModified console event, raised by PopulationAnalytics when a chunk's population changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationEventData

A **class** in `Root.Township`, `Alta.Populations`.

Payload of the `ConsoleEvents.PopulationModified` console event, raised by `PopulationAnalytics` when a chunk's population changes.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationEventData("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/mod/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action)"}</code> | <span className="api-desc">Creates a `PopulationEventData` from `sample` and `action`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/mod/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action"}</code> | <span className="api-desc">What happened to the population.</span> |
| <Link id="m-chunkidentifier" /><code>{"string chunkIdentifier"}</code> | <span className="api-desc">Identifier of the chunk the population is in.</span> |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | <span className="api-desc">How many are alive now.</span> |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | <span className="api-desc">The population's maximum size.</span> |
| <Link id="m-populationname" /><code>{"string populationName"}</code> | <span className="api-desc">Name of the population definition asset.</span> |

## Used in

Members of other types that take, return or hold a `PopulationEventData`:

<div className="api-used-in">

[`ConsoleEvents.PopulationModified`](/mod/game-api/types/alta-console/consoleevents#m-populationmodified).

</div>
