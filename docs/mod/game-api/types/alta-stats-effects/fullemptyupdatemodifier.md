---
title: "FullEmptyUpdateModifier"
description: "Internal modifier made by OnFullAffectTargetStatDefinition: when the tracked stat fills up it changes another stat, and it drains the tracked stat back down..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullEmptyUpdateModifier

A **internal class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal modifier made by `OnFullAffectTargetStatDefinition`: when the tracked stat fills up it changes another stat, and it drains the tracked stat back down over time.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Modifier`](/mod/game-api/types/alta-stats-effects/modifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FullEmptyUpdateModifier("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat, float builddownCooldown, float tickBuilddown, float modifierValue, bool isMultiplier, bool isContinuous, bool isRevertingOnEnd)"}</code> | <span className="api-desc">Creates a `FullEmptyUpdateModifier` from `trackedStat`, `affectedStat`, `builddownCooldown`, `tickBuilddown`, `modifierValue`, `isMultiplier`, `isContinuous` and `isRevertingOnEnd`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat"}</code> | <span className="api-desc">The stat that gets changed while the tracked stat is full.</span> |
| <Link id="m-builddowncooldown" /><code>{"private float builddownCooldown"}</code> | <span className="api-desc">Seconds after the tracked stat last rose before it starts draining.</span> |
| <Link id="m-cooldowntimer" /><code>{"private float cooldownTimer"}</code> | <span className="api-desc">Real time after which draining may start.</span> |
| <Link id="m-iscontinuous" /><code>{"private bool isContinuous"}</code> | <span className="api-desc">If true, the change is applied every update while full instead of once.</span> |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | <span className="api-desc">If true, the affected stat's base is multiplied by the value instead of added to.</span> |
| <Link id="m-isrevertingonend" /><code>{"private bool isRevertingOnEnd"}</code> | <span className="api-desc">For one-off changes, undo the change when the tracked stat empties.</span> |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> | <span className="api-desc">The amount added to, or the factor applied to, the affected stat's base.</span> |
| <Link id="m-tickbuilddown" /><code>{"private float tickBuilddown"}</code> | <span className="api-desc">How much the tracked stat drains per update once the cooldown has passed.</span> |
| <Link id="m-trackedstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat"}</code> | <span className="api-desc">The stat being watched for full and empty.</span> |
| <Link id="m-wasfull" /><code>{"private bool wasFull"}</code> | <span className="api-desc">True between the tracked stat reaching full and reaching empty.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override bool Initialize("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Hooks `TickDown` to the manager's update and initializes the modifier.</span> |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> | <span className="api-desc">Marks the stat as full and, if not continuous, adds or multiplies the modifier into the affected stat once.</span> |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> | <span className="api-desc">Marks the stat as not full and, if not continuous and set to revert, undoes the one-off change.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"private void CheckApply("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Runs when the tracked stat changes. Restarts the drain cooldown on any rise, applies when the stat hits its maximum and removes when it hits its minimum.</span> |
| <Link id="m-tickdown" /><code>{"private void TickDown("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Each manager update: applies the continuous change while full, and drains the tracked stat once the cooldown has passed.</span> |

</details>
