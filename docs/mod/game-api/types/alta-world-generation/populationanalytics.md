---
title: "PopulationAnalytics"
description: "Logs population changes at trace level, and raises the PopulationModified console event for spawns and losses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationAnalytics

A **static class** in `Root.Township`, `Alta.Populations`.

Logs population changes at trace level, and raises the `PopulationModified` console event for spawns and losses.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendrecord" /><code>{"static void SendRecord(string populationName, string chunkIdentifier, int currentPopulation, int maxPopulation, "}<Link to="/mod/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action)"}</code> | Logs a population's name, chunk, current and max size and the action. The sample overload also raises `PopulationModified` for `Spawned` and `Lost`. |
| <Link id="m-sendrecord-2" /><code>{"static void SendRecord("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/mod/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action, "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" killer = null)"}</code> | Logs a population's name, chunk, current and max size and the action. The sample overload also raises `PopulationModified` for `Spawned` and `Lost`. |
