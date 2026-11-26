---
title: "HealthValidation"
description: "Editor tool component with inspector buttons for saving, loading and fixing up health stat setups on network prefabs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthValidation

A **class** in `Root.Township`, `Alta.StatSystem`.

Editor tool component with inspector buttons for saving, loading and fixing up health stat setups on network prefabs. Not used at runtime.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthValidation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnapplyref" /><code>{"private bool btnApplyRef"}</code> | Inspector button for `ApplyRefs`. |
| <Link id="m-btnload" /><code>{"private bool btnLoad"}</code> | Inspector button for `LoadData`. |
| <Link id="m-btnsave" /><code>{"private bool btnSave"}</code> | Inspector button for `SaveData`. |
| <Link id="m-btnvalidatechildren" /><code>{"private bool btnValidateChildren"}</code> | Inspector button for `ValidateChildren`. |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/healthdata">{"HealthData"}</Link>{" data"}</code> | The `HealthData` asset used by the buttons. |
| <Link id="m-healthstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat"}</code> | The health stat definition used when loading. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyrefs" /><code>{"void ApplyRefs()"}</code> | Applies stored stat manager references from the data to children, through the private `statManager` field. |
| <Link id="m-loaddata" /><code>{"void LoadData()"}</code> | Applies the stored health data to children using `healthStat`. |
| <Link id="m-savedata" /><code>{"void SaveData()"}</code> | Fills the data with the health of every network prefab in Resources. Creates the data asset if missing, without filling it. |
| <Link id="m-validatechildren" /><code>{"void ValidateChildren()"}</code> | Makes sure each child `HealthObject` has a stat manager with a definition, copying it from a same named child. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getrelatedapplication" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" GetRelatedApplication(string objectName)"}</code> | Finds a child with the given name and returns the first definition application on its stat manager. |

</details>
