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
| <Link id="m-ctor" /><code>{"PendingRepairBoxCompletionCondition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | <span className="api-desc">Whether `Setup` has run.</span> |
| <Link id="m-onconditionchanged" /><code>{"private Action onConditionChanged"}</code> | <span className="api-desc">Backing field for `OnConditionChanged`.</span> |
| <Link id="m-repairbox" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/repairbox">{"RepairBox"}</Link>{" repairBox"}</code> | <span className="api-desc">The repair box this condition watches.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged-2" /><code>{"Action OnConditionChanged { get; set; }"}</code> | <span className="api-desc">Change callback. The first read hooks the repair box's `OnRepaired` event.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | <span className="api-desc">True while the repair box is not done.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-repairboxcompleted" /><code>{"private void RepairBoxCompleted()"}</code> | <span className="api-desc">Runs the change callback when the box is repaired.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Hooks the box's `OnRepaired` event, done lazily on the first `OnConditionChanged` read.</span> |

</details>
