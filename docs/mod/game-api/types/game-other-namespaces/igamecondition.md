---
title: "IGameCondition"
description: "A condition in the game that can be checked and tells listeners when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGameCondition

An **interface** in `Root.Township`, `Features.Gameplay.GameConditions`.

A condition in the game that can be checked and tells listeners when it changes.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`ManualCondition`](/mod/game-api/types/game-other-namespaces/manualcondition), [`NetworkedGameConditionEvaluator`](/mod/game-api/types/game-other-namespaces/networkedgameconditionevaluator), [`PendingRepairBoxCompletionCondition`](/mod/game-api/types/game-other-namespaces/pendingrepairboxcompletioncondition), [`RepairableObjectComparisonCondition`](/mod/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition), [`HandHoverPoint`](/mod/game-api/types/global-e-h/handhoverpoint)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | <span className="api-desc">Callback run when the condition changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | <span className="api-desc">True if the condition holds right now.</span> |
