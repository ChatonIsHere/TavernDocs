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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`SettingsCommandModules`](/mod/game-api/types/alta-console/settingscommandmodules)
- **Attributes** `Module`, `ServerOnly`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"static string CheckPopulationTime("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">`settings population check-time`: returns the population's current respawn interval in seconds.</span> |
| <Link id="m-resetpopulationtime" /><code>{"static string ResetPopulationTime("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">`settings population reset-time`: resets the population's respawn interval to its default and returns it.</span> |
| <Link id="m-setpopulationtime" /><code>{"static string SetPopulationTime("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population, float timeInSeconds)"}</code> | <span className="api-desc">`settings population set-time`: sets how many seconds between respawns of the population.</span> |
