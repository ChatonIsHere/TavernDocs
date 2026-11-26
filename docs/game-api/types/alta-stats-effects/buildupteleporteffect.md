---
title: "BuildupTeleportEffect"
description: "Build-up effect that teleports the target to a random point in a spawn area once enough strength has built up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupTeleportEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Build-up effect that teleports the target to a random point in a spawn area once enough strength has built up.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`BuildUpconcoctionEffect`](/game-api/types/alta-stats-effects/buildupconcoctioneffect)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuildupTeleportEffect()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-landingtarget" /><code>{"private "}<Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" landingTarget"}</code> | Spawn area to teleport to. |
| <Link id="m-minstrengthtoapply" /><code>{"private float minStrengthToApply"}</code> | Built-up strength needed before the teleport happens. Defaults to 0.8. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Teleports the target to a random spawn position in `landingTarget` when strength is above `minStrengthToApply`. |
