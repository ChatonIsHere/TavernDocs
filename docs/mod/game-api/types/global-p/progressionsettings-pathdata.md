---
title: "ProgressionSettings.PathData"
description: "Private base for per-path entries in ProgressionSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings.PathData

An **private abstract class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private base for per-path entries in `ProgressionSettings`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProgressionSettings`](/mod/game-api/types/global-p/progressionsettings)
- **Derived types** [`ProgressionSettings.PathExperiencePerDamage`](/mod/game-api/types/global-p/progressionsettings-pathexperienceperdamage), [`ProgressionSettings.PathExperienceShare`](/mod/game-api/types/global-p/progressionsettings-pathexperienceshare), [`ProgressionSettings.PathImpactChannel`](/mod/game-api/types/global-p/progressionsettings-pathimpactchannel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PathData()"}</code> | Creates a `ProgressionSettings.PathData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Label set to the path name, for the inspector. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | Backing field for `Path`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path-2" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | The progression path the entry is for. |
