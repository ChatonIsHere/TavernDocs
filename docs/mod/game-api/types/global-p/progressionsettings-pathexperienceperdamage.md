---
title: "ProgressionSettings.PathExperiencePerDamage"
description: "Per progression path entry in ProgressionSettings that sets how much experience one point of damage gives on that path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings.PathExperiencePerDamage

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Per progression path entry in `ProgressionSettings` that sets how much experience one point of damage gives on that path. Read into a path-to-value map when the settings load.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProgressionSettings`](/mod/game-api/types/global-p/progressionsettings)
- **Inherits or implements** [`ProgressionSettings.PathData`](/mod/game-api/types/global-p/progressionsettings-pathdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathExperiencePerDamage()"}</code> | Creates a `ProgressionSettings.PathExperiencePerDamage` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-experienceperdamage" /><code>{"private float experiencePerDamage"}</code> | Backing field for `ExperiencePerDamage`. Defaults to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-experienceperdamage-2" /><code>{"float ExperiencePerDamage { get; }"}</code> | Experience given per point of damage on this entry's path. |

## Used in

Members of other types that take, return or hold a `PathExperiencePerDamage`:

[`ProgressionSettings.experiencePerDamage`](/mod/game-api/types/global-p/progressionsettings#m-experienceperdamage).
