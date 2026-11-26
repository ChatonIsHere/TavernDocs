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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<RepairableObjectComparisonCondition, RepairableObjectComparisonConditionSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RepairableObjectComparisonCondition`](/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition), [`RepairableObjectComparisonConditionSaveData`](/game-api/types/game-other-namespaces/repairableobjectcomparisonconditionsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RepairableObjectComparisonConditionSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbuilt" /><code>{"uint[] IsBuilt"}</code> | Hashes of objects that must be built. |
| <Link id="m-isnotbuilt" /><code>{"uint[] IsNotBuilt"}</code> | Hashes of objects that must not be built. |
