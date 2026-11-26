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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`StatChangeHook`](/game-api/types/alta-intelligence/statchangehook)
- **Nested types** [`OperationTarget`](/game-api/types/alta-intelligence/fixedstatchangehook-operationtarget), [`OperationTime`](/game-api/types/alta-intelligence/fixedstatchangehook-operationtime), [`OperationType`](/game-api/types/alta-intelligence/fixedstatchangehook-operationtype)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FixedStatChangeHook()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedextras" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", float> addedExtras"}</code> | Per creature, the difference a set operation made, used to revert it. |
| <Link id="m-operationtarget" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/fixedstatchangehook-operationtarget">{"FixedStatChangeHook.OperationTarget"}</Link>{" operationTarget"}</code> | Which part of the stat to change: base, minimum or maximum. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/fixedstatchangehook-operationtype">{"FixedStatChangeHook.OperationType"}</Link>{" operationType"}</code> | Set, add or multiply. |
| <Link id="m-statoperation" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/fixedstatchangehook-operationtime">{"FixedStatChangeHook.OperationTime"}</Link>{" statOperation"}</code> | Flags for when to act: on start, on end, and revert on end. |
| <Link id="m-value" /><code>{"private float value"}</code> | The value to set, add or multiply by. Default 0.5. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectonend" /><code>{"protected override void AffectOnEnd("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | On end, applies the change again if set to affect on end, or else reverts it if set to revert on end. |
| <Link id="m-affectonstart" /><code>{"protected override void AffectOnStart("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | On start, applies the change if set to affect on start. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getaffectedstat" /><code>{"private float GetAffectedStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Reads the chosen part (base, min or max) of the creature's affected stat, or 0 if it has none. |
| <Link id="m-operateonstat" /><code>{"private void OperateOnStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Sets, adds or multiplies the chosen part by `value`. For a set, remembers the difference so it can be reverted. |
| <Link id="m-revertoperateonstat" /><code>{"private void RevertOperateOnStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Undoes the change: subtracts the remembered difference, subtracts the value, or divides by it. |
| <Link id="m-setaffectedstat" /><code>{"private void SetAffectedStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic, float value)"}</code> | Writes the chosen part of the creature's affected stat. |

</details>
