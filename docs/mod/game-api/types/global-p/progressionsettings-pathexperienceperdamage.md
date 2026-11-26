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
| <Link id="m-ctor" /><code>{"PathExperiencePerDamage()"}</code> | <span className="api-desc">Creates a `ProgressionSettings.PathExperiencePerDamage` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-experienceperdamage" /><code>{"private float experiencePerDamage"}</code> | <span className="api-desc">Backing field for `ExperiencePerDamage`. Defaults to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-experienceperdamage-2" /><code>{"float ExperiencePerDamage { get; }"}</code> | <span className="api-desc">Experience given per point of damage on this entry's path.</span> |

## Used in

Members of other types that take, return or hold a `PathExperiencePerDamage`:

<div className="api-used-in">

[`ProgressionSettings.experiencePerDamage`](/mod/game-api/types/global-p/progressionsettings#m-experienceperdamage).

</div>
