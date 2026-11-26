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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/mod/game-api/types/game-other-namespaces/igamecondition), [`ISavable<RepairableObjectComparisonConditionSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RepairableObjectComparisonConditionSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RepairableObjectComparisonConditionSaveData`](/mod/game-api/types/game-other-namespaces/repairableobjectcomparisonconditionsavedata)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairableObjectComparisonCondition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | <span className="api-desc">Set once save data has loaded.</span> |
| <Link id="m-repairableobjects" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/repairableobject">{"RepairableObject"}</Link>{"> repairableObjects"}</code> | <span className="api-desc">Object hashes with their required state. Loading appends the saved entries to this list rather than replacing it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | <span className="api-desc">Change callback, run on any static object change and after loading.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | <span className="api-desc">False before load; otherwise true only if every object's modified state matches its requirement.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-notifyeventlistenersofobjectchange" /><code>{"private void NotifyEventListenersOfObjectChange(uint objectHash, bool isModified)"}</code> | <span className="api-desc">Runs `OnConditionChanged` whenever any modifiable static object changes.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks `ModifiableStaticManager.ObjectChanged`.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks `ModifiableStaticManager.ObjectChanged`.</span> |

</details>
