---
title: "OnFullAffectTargetStatDefinition"
description: "Stat definition asset: when this stat fills up it changes another stat on the same manager, and it drains back down over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnFullAffectTargetStatDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

Stat definition asset: when this stat fills up it changes another stat on the same manager, and it drains back down over time. The work is done by a `FullEmptyUpdateModifier`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnFullAffectTargetStatDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" affectedStatDefinition"}</code> | The stat that gets changed while this one is full. |
| <Link id="m-builddowncooldown" /><code>{"private float builddownCooldown"}</code> | Seconds after this stat last rose before it starts draining. |
| <Link id="m-iscontinuous" /><code>{"private bool isContinuous"}</code> | Apply the change every update while full instead of once. |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | Multiply the affected stat's base instead of adding to it. |
| <Link id="m-isrevertingonend" /><code>{"private bool isRevertingOnEnd"}</code> | For one-off changes, undo the change when this stat empties. |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> | The amount or factor applied to the affected stat. |
| <Link id="m-tickbuilddown" /><code>{"private float tickBuilddown"}</code> | How much this stat drains per update once the cooldown has passed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Creates and starts a `FullEmptyUpdateModifier` linking this stat to the affected stat, if the manager has it. |
