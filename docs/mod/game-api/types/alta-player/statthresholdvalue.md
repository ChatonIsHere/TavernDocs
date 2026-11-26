---
title: "StatThresholdValue"
description: "A stat change applied when a player dies, listed in DeadStateSettings.StatsToModifyOnDeath and run by StatManager.DeathReset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatThresholdValue

A **struct** in `Root.Township`, `Alta.PlayerStates`.

A stat change applied when a player dies, listed in `DeadStateSettings.StatsToModifyOnDeath` and run by `StatManager.DeathReset`. It can set the stat always, or only when it's past a threshold.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-keepunlessabovevalue" /><code>{"bool keepUnlessAboveValue"}</code> | If set, the stat is only changed when it's above `value`. |
| <Link id="m-keepunlessbelowvalue" /><code>{"bool keepUnlessBelowValue"}</code> | If set, the stat is only changed when it's below `value`. |
| <Link id="m-secondarystatdefinition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" secondaryStatDefinition"}</code> | Second stat set when the threshold triggers. |
| <Link id="m-secondaryvalue" /><code>{"float secondaryValue"}</code> | Base value given to the second stat. |
| <Link id="m-settingsecondary" /><code>{"bool settingSecondary"}</code> | If set, a threshold trigger also sets `secondaryStatDefinition` to `secondaryValue`. Only works with one of the keep options on. |
| <Link id="m-statdefinition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | The stat to change. |
| <Link id="m-value" /><code>{"float value"}</code> | Base value the stat is set to, and the threshold when a keep option is on. |

## Used in

Members of other types that take, return or hold a `StatThresholdValue`:

[`DeadStateSettings.statsToModifyOnDeath`](/mod/game-api/types/alta-player/deadstatesettings#m-statstomodifyondeath), [`DeadStateSettings.StatsToModifyOnDeath`](/mod/game-api/types/alta-player/deadstatesettings#m-statstomodifyondeath-2), [`StatManager.DeathReset`](/mod/game-api/types/alta-stats-effects/statmanager#m-deathreset).
