---
title: "FullEmptyUpdateModifier"
description: "class FullEmptyUpdateModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullEmptyUpdateModifier

A **internal class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Modifier`](/game-api/types/alta-stats-effects/modifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FullEmptyUpdateModifier("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat, float builddownCooldown, float tickBuilddown, float modifierValue, bool isMultiplier, bool isContinuous, bool isRevertingOnEnd)"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-affectedstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat"}</code> |
| <Link id="m-builddowncooldown" /><code>{"private float builddownCooldown"}</code> |
| <Link id="m-cooldowntimer" /><code>{"private float cooldownTimer"}</code> |
| <Link id="m-iscontinuous" /><code>{"private bool isContinuous"}</code> |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> |
| <Link id="m-isrevertingonend" /><code>{"private bool isRevertingOnEnd"}</code> |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> |
| <Link id="m-tickbuilddown" /><code>{"private float tickBuilddown"}</code> |
| <Link id="m-trackedstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat"}</code> |
| <Link id="m-wasfull" /><code>{"private bool wasFull"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override bool Initialize("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkapply" /><code>{"private void CheckApply("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |
| <Link id="m-tickdown" /><code>{"private void TickDown("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |

</details>
