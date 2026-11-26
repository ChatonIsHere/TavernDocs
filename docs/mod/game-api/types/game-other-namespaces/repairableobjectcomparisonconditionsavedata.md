---
title: "RepairableObjectComparisonConditionSaveData"
description: "Save data (version 1) for RepairableObjectComparisonCondition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairableObjectComparisonConditionSaveData

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

Save data (version 1) for `RepairableObjectComparisonCondition`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<RepairableObjectComparisonCondition, RepairableObjectComparisonConditionSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RepairableObjectComparisonCondition`](/mod/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition), [`RepairableObjectComparisonConditionSaveData`](/mod/game-api/types/game-other-namespaces/repairableobjectcomparisonconditionsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairableObjectComparisonConditionSaveData()"}</code> | <span className="api-desc">Creates a `RepairableObjectComparisonConditionSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbuilt" /><code>{"uint[] IsBuilt"}</code> | <span className="api-desc">Hashes of objects that must be built.</span> |
| <Link id="m-isnotbuilt" /><code>{"uint[] IsNotBuilt"}</code> | <span className="api-desc">Hashes of objects that must not be built.</span> |
