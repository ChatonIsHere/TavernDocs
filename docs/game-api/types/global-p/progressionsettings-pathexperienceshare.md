---
title: "ProgressionSettings.PathExperienceShare"
description: "Per-path multipliers for shared experience, read by GetExperienceSharedMultiplier when PlayerProgressionManager.GainSharedExperience runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings.PathExperienceShare

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Per-path multipliers for shared experience, read by `GetExperienceSharedMultiplier` when `PlayerProgressionManager.GainSharedExperience` runs.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProgressionSettings`](/game-api/types/global-p/progressionsettings)
- **Inherits or implements** [`ProgressionSettings.PathData`](/game-api/types/global-p/progressionsettings-pathdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathExperienceShare()"}</code> | Creates a `ProgressionSettings.PathExperienceShare` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-experienceshareselfhold" /><code>{"private float experienceShareSelfHold"}</code> | Backing field for `ExperienceShareSelfHold`. |
| <Link id="m-experiencesharesupporthold" /><code>{"private float experienceShareSupportHold"}</code> | Backing field for `ExperienceShareSupportHold`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-experienceshareselfhold-2" /><code>{"float ExperienceShareSelfHold { get; }"}</code> | Extra fraction of experience the main player gets when they are also the supporting player (default 0.2). |
| <Link id="m-experiencesharesupporthold-2" /><code>{"float ExperienceShareSupportHold { get; }"}</code> | Fraction of experience given to a different supporting player (default 0.6). |

## Used in

Members of other types that take, return or hold a `PathExperienceShare`:

[`ProgressionSettings.experienceShare`](/game-api/types/global-p/progressionsettings#m-experienceshare), [`ProgressionSettings.experienceShareMap`](/game-api/types/global-p/progressionsettings#m-experiencesharemap).
