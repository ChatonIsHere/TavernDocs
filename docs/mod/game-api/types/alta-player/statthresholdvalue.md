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
| <Link id="m-keepunlessabovevalue" /><code>{"bool keepUnlessAboveValue"}</code> | <span className="api-desc">If set, the stat is only changed when it's above `value`.</span> |
| <Link id="m-keepunlessbelowvalue" /><code>{"bool keepUnlessBelowValue"}</code> | <span className="api-desc">If set, the stat is only changed when it's below `value`.</span> |
| <Link id="m-secondarystatdefinition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" secondaryStatDefinition"}</code> | <span className="api-desc">Second stat set when the threshold triggers.</span> |
| <Link id="m-secondaryvalue" /><code>{"float secondaryValue"}</code> | <span className="api-desc">Base value given to the second stat.</span> |
| <Link id="m-settingsecondary" /><code>{"bool settingSecondary"}</code> | <span className="api-desc">If set, a threshold trigger also sets `secondaryStatDefinition` to `secondaryValue`. Only works with one of the keep options on.</span> |
| <Link id="m-statdefinition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | <span className="api-desc">The stat to change.</span> |
| <Link id="m-value" /><code>{"float value"}</code> | <span className="api-desc">Base value the stat is set to, and the threshold when a keep option is on.</span> |

## Used in

Members of other types that take, return or hold a `StatThresholdValue`:

<div className="api-used-in">

[`DeadStateSettings.statsToModifyOnDeath`](/mod/game-api/types/alta-player/deadstatesettings#m-statstomodifyondeath), [`DeadStateSettings.StatsToModifyOnDeath`](/mod/game-api/types/alta-player/deadstatesettings#m-statstomodifyondeath-2), [`StatManager.DeathReset`](/mod/game-api/types/alta-stats-effects/statmanager#m-deathreset).

</div>
