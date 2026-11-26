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
| <Link id="m-ctor" /><code>{"FullEmptyUpdateModifier("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat, float builddownCooldown, float tickBuilddown, float modifierValue, bool isMultiplier, bool isContinuous, bool isRevertingOnEnd)"}</code> | Creates a `FullEmptyUpdateModifier` from `trackedStat`, `affectedStat`, `builddownCooldown`, `tickBuilddown`, `modifierValue`, `isMultiplier`, `isContinuous` and `isRevertingOnEnd`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat"}</code> | The stat that gets changed while the tracked stat is full. |
| <Link id="m-builddowncooldown" /><code>{"private float builddownCooldown"}</code> | Seconds after the tracked stat last rose before it starts draining. |
| <Link id="m-cooldowntimer" /><code>{"private float cooldownTimer"}</code> | Real time after which draining may start. |
| <Link id="m-iscontinuous" /><code>{"private bool isContinuous"}</code> | If true, the change is applied every update while full instead of once. |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | If true, the affected stat's base is multiplied by the value instead of added to. |
| <Link id="m-isrevertingonend" /><code>{"private bool isRevertingOnEnd"}</code> | For one-off changes, undo the change when the tracked stat empties. |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> | The amount added to, or the factor applied to, the affected stat's base. |
| <Link id="m-tickbuilddown" /><code>{"private float tickBuilddown"}</code> | How much the tracked stat drains per update once the cooldown has passed. |
| <Link id="m-trackedstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat"}</code> | The stat being watched for full and empty. |
| <Link id="m-wasfull" /><code>{"private bool wasFull"}</code> | True between the tracked stat reaching full and reaching empty. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override bool Initialize("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Hooks `TickDown` to the manager's update and initializes the modifier. |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> | Marks the stat as full and, if not continuous, adds or multiplies the modifier into the affected stat once. |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> | Marks the stat as not full and, if not continuous and set to revert, undoes the one-off change. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"private void CheckApply("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Runs when the tracked stat changes. Restarts the drain cooldown on any rise, applies when the stat hits its maximum and removes when it hits its minimum. |
| <Link id="m-tickdown" /><code>{"private void TickDown("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Each manager update: applies the continuous change while full, and drains the tracked stat once the cooldown has passed. |

</details>
