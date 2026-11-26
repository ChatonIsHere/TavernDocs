---
title: "ProgressionSettings.PathExperienceShare"
description: "Per-path multipliers for shared experience, read by GetExperienceSharedMultiplier when PlayerProgressionManager.GainSharedExperience runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings.PathExperienceShare

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Per-path multipliers for shared experience, read by `GetExperienceSharedMultiplier` when `PlayerProgressionManager.GainSharedExperience` runs.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProgressionSettings`](/mod/game-api/types/global-p/progressionsettings)
- **Inherits or implements** [`ProgressionSettings.PathData`](/mod/game-api/types/global-p/progressionsettings-pathdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathExperienceShare()"}</code> | <span className="api-desc">Creates a `ProgressionSettings.PathExperienceShare` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-experienceshareselfhold" /><code>{"private float experienceShareSelfHold"}</code> | <span className="api-desc">Backing field for `ExperienceShareSelfHold`.</span> |
| <Link id="m-experiencesharesupporthold" /><code>{"private float experienceShareSupportHold"}</code> | <span className="api-desc">Backing field for `ExperienceShareSupportHold`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-experienceshareselfhold-2" /><code>{"float ExperienceShareSelfHold { get; }"}</code> | <span className="api-desc">Extra fraction of experience the main player gets when they are also the supporting player (default 0.2).</span> |
| <Link id="m-experiencesharesupporthold-2" /><code>{"float ExperienceShareSupportHold { get; }"}</code> | <span className="api-desc">Fraction of experience given to a different supporting player (default 0.6).</span> |

## Used in

Members of other types that take, return or hold a `PathExperienceShare`:

<div className="api-used-in">

[`ProgressionSettings.experienceShare`](/mod/game-api/types/global-p/progressionsettings#m-experienceshare), [`ProgressionSettings.experienceShareMap`](/mod/game-api/types/global-p/progressionsettings#m-experiencesharemap).

</div>
