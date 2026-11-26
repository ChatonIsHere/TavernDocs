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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`BuildUpconcoctionEffect`](/mod/game-api/types/alta-stats-effects/buildupconcoctioneffect)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildupTeleportEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-landingtarget" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" landingTarget"}</code> | <span className="api-desc">Spawn area to teleport to.</span> |
| <Link id="m-minstrengthtoapply" /><code>{"private float minStrengthToApply"}</code> | <span className="api-desc">Built-up strength needed before the teleport happens. Defaults to 0.8.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Teleports the target to a random spawn position in `landingTarget` when strength is above `minStrengthToApply`.</span> |
