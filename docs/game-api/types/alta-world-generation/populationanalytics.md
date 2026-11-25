---
title: "PopulationAnalytics"
description: "Sends population records to analytics (Alta's API is gone)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationAnalytics

A **static class** in `Root.Township`, `Alta.Populations`.

Sends population records to analytics (Alta's API is gone).

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-sendrecord" /><code>{"static void SendRecord(string populationName, string chunkIdentifier, int currentPopulation, int maxPopulation, "}<Link to="/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action)"}</code> |
| <Link id="m-sendrecord-2" /><code>{"static void SendRecord("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/game-api/types/alta-world-generation/populationaction">{"PopulationAction"}</Link>{" action, "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" killer = null)"}</code> |
