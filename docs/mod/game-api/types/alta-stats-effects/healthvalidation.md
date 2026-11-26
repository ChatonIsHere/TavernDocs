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
| <Link id="m-ctor" /><code>{"HealthValidation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnapplyref" /><code>{"private bool btnApplyRef"}</code> | <span className="api-desc">Inspector button for `ApplyRefs`.</span> |
| <Link id="m-btnload" /><code>{"private bool btnLoad"}</code> | <span className="api-desc">Inspector button for `LoadData`.</span> |
| <Link id="m-btnsave" /><code>{"private bool btnSave"}</code> | <span className="api-desc">Inspector button for `SaveData`.</span> |
| <Link id="m-btnvalidatechildren" /><code>{"private bool btnValidateChildren"}</code> | <span className="api-desc">Inspector button for `ValidateChildren`.</span> |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/healthdata">{"HealthData"}</Link>{" data"}</code> | <span className="api-desc">The `HealthData` asset used by the buttons.</span> |
| <Link id="m-healthstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat"}</code> | <span className="api-desc">The health stat definition used when loading.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyrefs" /><code>{"void ApplyRefs()"}</code> | <span className="api-desc">Applies stored stat manager references from the data to children, through the private `statManager` field.</span> |
| <Link id="m-loaddata" /><code>{"void LoadData()"}</code> | <span className="api-desc">Applies the stored health data to children using `healthStat`.</span> |
| <Link id="m-savedata" /><code>{"void SaveData()"}</code> | <span className="api-desc">Fills the data with the health of every network prefab in Resources. Creates the data asset if missing, without filling it.</span> |
| <Link id="m-validatechildren" /><code>{"void ValidateChildren()"}</code> | <span className="api-desc">Makes sure each child `HealthObject` has a stat manager with a definition, copying it from a same named child.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getrelatedapplication" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" GetRelatedApplication(string objectName)"}</code> | <span className="api-desc">Finds a child with the given name and returns the first definition application on its stat manager.</span> |

</details>
