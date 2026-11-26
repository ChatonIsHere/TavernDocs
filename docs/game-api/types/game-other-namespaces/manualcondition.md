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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition), [`ISavable<ManualConditionSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ManualConditionSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ManualConditionSaveData`](/game-api/types/game-other-namespaces/manualconditionsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ManualCondition()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"private bool isConditionMet"}</code> | The flag itself, saved with the entity. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | Callback run after the flag is loaded from save data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet-2" /><code>{"bool IsConditionMet()"}</code> | Returns the saved flag. |
