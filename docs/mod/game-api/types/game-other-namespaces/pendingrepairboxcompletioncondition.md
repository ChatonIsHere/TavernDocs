---
title: "PendingRepairBoxCompletionCondition"
description: "IGameCondition that is met while a RepairBox is still not repaired, and fires its change callback when the box is repaired."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PendingRepairBoxCompletionCondition

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

`IGameCondition` that is met while a `RepairBox` is still not repaired, and fires its change callback when the box is repaired.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IGameCondition`](/mod/game-api/types/game-other-namespaces/igamecondition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PendingRepairBoxCompletionCondition()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | Whether `Setup` has run. |
| <Link id="m-onconditionchanged" /><code>{"private Action onConditionChanged"}</code> | Backing field for `OnConditionChanged`. |
| <Link id="m-repairbox" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/repairbox">{"RepairBox"}</Link>{" repairBox"}</code> | The repair box this condition watches. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged-2" /><code>{"Action OnConditionChanged { get; set; }"}</code> | Change callback. The first read hooks the repair box's `OnRepaired` event. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | True while the repair box is not done. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-repairboxcompleted" /><code>{"private void RepairBoxCompleted()"}</code> | Runs the change callback when the box is repaired. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Hooks the box's `OnRepaired` event, done lazily on the first `OnConditionChanged` read. |

</details>
