---
title: "StatDefinitionApplication"
description: "A stat definition paired with its default value and range, as set up on a StatManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDefinitionApplication

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat definition paired with its default value and range, as set up on a `StatManager`. Each `Stat` keeps the one it was made from.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/mod/game-api/game-systems/stats#statdefinitionapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDefinitionApplication("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, float baseValue)"}</code> | Creates a `StatDefinitionApplication` from `definition`. |
| <Link id="m-ctor-2" /><code>{"StatDefinitionApplication("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition)"}</code> | Creates a `StatDefinitionApplication` from `definition`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmaximumvalue" /><code>{"private float defaultMaximumValue"}</code> | Backing field for `DefaultMaximum`. |
| <Link id="m-defaultminimumvalue" /><code>{"private float defaultMinimumValue"}</code> | Backing field for `DefaultMinimum`. |
| <Link id="m-defaultvalue" /><code>{"private float defaultValue"}</code> | Backing field for `Default`. |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | Backing field for `Definition`. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`; defaults to the definition's asset name. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"float Default { get; }"}</code> | Starting value. |
| <Link id="m-defaultmaximum" /><code>{"float DefaultMaximum { get; }"}</code> | Starting maximum. |
| <Link id="m-defaultminimum" /><code>{"float DefaultMinimum { get; }"}</code> | Starting minimum. |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" Definition { get; }"}</code> | The stat definition. |
| <Link id="m-name-2" /><code>{"string Name { get; set; }"}</code> | Display name. Defaults to the definition's asset name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setbase" /><code>{"void SetBase(float baseValue)"}</code> | Sets the default and maximum to the value and the minimum to 0. |

## Used in

Members of other types that take, return or hold a `StatDefinitionApplication`:

[`HealthValidation.GetRelatedApplication`](/mod/game-api/types/alta-stats-effects/healthvalidation#m-getrelatedapplication), [`Stat.Application`](/mod/game-api/types/alta-stats-effects/stat#m-application), [`Stat.Stat`](/mod/game-api/types/alta-stats-effects/stat#m-ctor-2), [`StatManager.Add`](/mod/game-api/types/alta-stats-effects/statmanager#m-add), [`StatManager.definitionApplications`](/mod/game-api/types/alta-stats-effects/statmanager#m-definitionapplications), [`StatManager.DefinitionApplications`](/mod/game-api/types/alta-stats-effects/statmanager#m-definitionapplications-2).
