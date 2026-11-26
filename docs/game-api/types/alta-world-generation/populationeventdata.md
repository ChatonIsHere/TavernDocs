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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationEventData("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action)"}</code> | Creates a `PopulationEventData` from `sample` and `action`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action"}</code> | What happened to the population. |
| <Link id="m-chunkidentifier" /><code>{"string chunkIdentifier"}</code> | Identifier of the chunk the population is in. |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | How many are alive now. |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | The population's maximum size. |
| <Link id="m-populationname" /><code>{"string populationName"}</code> | Name of the population definition asset. |

## Used in

Members of other types that take, return or hold a `PopulationEventData`:

[`ConsoleEvents.PopulationModified`](/game-api/types/alta-console/consoleevents#m-populationmodified).
