---
title: "RepairableObjectComparisonCondition"
description: "IGameCondition met when each listed modifiable static object is in its required built or not-built state, read from ModifiableStaticManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairableObjectComparisonCondition

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

`IGameCondition` met when each listed modifiable static object is in its required built or not-built state, read from `ModifiableStaticManager`. Not met until its save data has loaded.

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

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | Set once save data has loaded. |
| <Link id="m-repairableobjects" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/repairableobject">{"RepairableObject"}</Link>{"> repairableObjects"}</code> | Object hashes with their required state. Loading appends the saved entries to this list rather than replacing it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | Change callback, run on any static object change and after loading. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | False before load; otherwise true only if every object's modified state matches its requirement. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-notifyeventlistenersofobjectchange" /><code>{"private void NotifyEventListenersOfObjectChange(uint objectHash, bool isModified)"}</code> | Runs `OnConditionChanged` whenever any modifiable static object changes. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks `ModifiableStaticManager.ObjectChanged`. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks `ModifiableStaticManager.ObjectChanged`. |

</details>
