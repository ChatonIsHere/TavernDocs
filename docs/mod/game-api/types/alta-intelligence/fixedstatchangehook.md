---
title: "FixedStatChangeHook"
description: "AI hook that changes one of the creature's stats (its base, min or max) by a fixed value when the action starts or ends, and can undo it on end."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixedStatChangeHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that changes one of the creature's stats (its base, min or max) by a fixed value when the action starts or ends, and can undo it on end.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`StatChangeHook`](/mod/game-api/types/alta-intelligence/statchangehook)
- **Nested types** [`OperationTarget`](/mod/game-api/types/alta-intelligence/fixedstatchangehook-operationtarget), [`OperationTime`](/mod/game-api/types/alta-intelligence/fixedstatchangehook-operationtime), [`OperationType`](/mod/game-api/types/alta-intelligence/fixedstatchangehook-operationtype)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FixedStatChangeHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedextras" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", float> addedExtras"}</code> | <span className="api-desc">Per creature, the difference a set operation made, used to revert it.</span> |
| <Link id="m-operationtarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/fixedstatchangehook-operationtarget">{"FixedStatChangeHook.OperationTarget"}</Link>{" operationTarget"}</code> | <span className="api-desc">Which part of the stat to change: base, minimum or maximum.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/fixedstatchangehook-operationtype">{"FixedStatChangeHook.OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Set, add or multiply.</span> |
| <Link id="m-statoperation" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/fixedstatchangehook-operationtime">{"FixedStatChangeHook.OperationTime"}</Link>{" statOperation"}</code> | <span className="api-desc">Flags for when to act: on start, on end, and revert on end.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">The value to set, add or multiply by. Default 0.5.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectonend" /><code>{"protected override void AffectOnEnd("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">On end, applies the change again if set to affect on end, or else reverts it if set to revert on end.</span> |
| <Link id="m-affectonstart" /><code>{"protected override void AffectOnStart("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">On start, applies the change if set to affect on start.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getaffectedstat" /><code>{"private float GetAffectedStat("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Reads the chosen part (base, min or max) of the creature's affected stat, or 0 if it has none.</span> |
| <Link id="m-operateonstat" /><code>{"private void OperateOnStat("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Sets, adds or multiplies the chosen part by `value`. For a set, remembers the difference so it can be reverted.</span> |
| <Link id="m-revertoperateonstat" /><code>{"private void RevertOperateOnStat("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Undoes the change: subtracts the remembered difference, subtracts the value, or divides by it.</span> |
| <Link id="m-setaffectedstat" /><code>{"private void SetAffectedStat("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic, float value)"}</code> | <span className="api-desc">Writes the chosen part of the creature's affected stat.</span> |

</details>
