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
| <Link id="m-ctor" /><code>{"OnFullAffectTargetStatDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" affectedStatDefinition"}</code> | <span className="api-desc">The stat that gets changed while this one is full.</span> |
| <Link id="m-builddowncooldown" /><code>{"private float builddownCooldown"}</code> | <span className="api-desc">Seconds after this stat last rose before it starts draining.</span> |
| <Link id="m-iscontinuous" /><code>{"private bool isContinuous"}</code> | <span className="api-desc">Apply the change every update while full instead of once.</span> |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | <span className="api-desc">Multiply the affected stat's base instead of adding to it.</span> |
| <Link id="m-isrevertingonend" /><code>{"private bool isRevertingOnEnd"}</code> | <span className="api-desc">For one-off changes, undo the change when this stat empties.</span> |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> | <span className="api-desc">The amount or factor applied to the affected stat.</span> |
| <Link id="m-tickbuilddown" /><code>{"private float tickBuilddown"}</code> | <span className="api-desc">How much this stat drains per update once the cooldown has passed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Creates and starts a `FullEmptyUpdateModifier` linking this stat to the affected stat, if the manager has it.</span> |
