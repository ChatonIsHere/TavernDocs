---
title: "ManualCondition"
description: "IGameCondition whose met state is a saved flag set in the Inspector or by save data, not computed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ManualCondition

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

`IGameCondition` whose met state is a saved flag set in the Inspector or by save data, not computed.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/mod/game-api/types/game-other-namespaces/igamecondition), [`ISavable<ManualConditionSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ManualConditionSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ManualConditionSaveData`](/mod/game-api/types/game-other-namespaces/manualconditionsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ManualCondition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"private bool isConditionMet"}</code> | <span className="api-desc">The flag itself, saved with the entity.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | <span className="api-desc">Callback run after the flag is loaded from save data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet-2" /><code>{"bool IsConditionMet()"}</code> | <span className="api-desc">Returns the saved flag.</span> |
