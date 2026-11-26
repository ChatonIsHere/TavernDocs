---
title: "SettingsCommandModules.PopulationSettings"
description: "Console submodule settings population: checks and overrides how often a population respawns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsCommandModules.PopulationSettings

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `settings population`: checks and overrides how often a population respawns. Server only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`SettingsCommandModules`](/game-api/types/alta-console/settingscommandmodules)
- **Attributes** `Module`, `ServerOnly`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"static string CheckPopulationTime("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population)"}</code> | `settings population check-time`: returns the population's current respawn interval in seconds. |
| <Link id="m-resetpopulationtime" /><code>{"static string ResetPopulationTime("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population)"}</code> | `settings population reset-time`: resets the population's respawn interval to its default and returns it. |
| <Link id="m-setpopulationtime" /><code>{"static string SetPopulationTime("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population, float timeInSeconds)"}</code> | `settings population set-time`: sets how many seconds between respawns of the population. |
