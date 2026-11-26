---
title: "RepairableObjectComparisonCondition"
description: "class RepairableObjectComparisonCondition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairableObjectComparisonCondition

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition), [`ISavable<RepairableObjectComparisonConditionSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RepairableObjectComparisonConditionSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RepairableObjectComparisonConditionSaveData`](/game-api/types/game-other-namespaces/repairableobjectcomparisonconditionsavedata)
- **Attributes** `SavingInfo`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RepairableObjectComparisonCondition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> |
| <Link id="m-repairableobjects" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/repairableobject">{"RepairableObject"}</Link>{"> repairableObjects"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-notifyeventlistenersofobjectchange" /><code>{"private void NotifyEventListenersOfObjectChange(uint objectHash, bool isModified)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |

</details>
