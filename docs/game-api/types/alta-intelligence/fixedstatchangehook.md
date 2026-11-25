---
title: "FixedStatChangeHook"
description: "class FixedStatChangeHook in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixedStatChangeHook

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`StatChangeHook`](/game-api/types/alta-intelligence/statchangehook)
- **Nested types** [`OperationTarget`](/game-api/types/alta-intelligence/fixedstatchangehook-operationtarget), [`OperationTime`](/game-api/types/alta-intelligence/fixedstatchangehook-operationtime), [`OperationType`](/game-api/types/alta-intelligence/fixedstatchangehook-operationtype)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FixedStatChangeHook()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-addedextras" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", float> addedExtras"}</code> |  |
| <Link id="m-operationtarget" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/fixedstatchangehook-operationtarget">{"FixedStatChangeHook.OperationTarget"}</Link>{" operationTarget"}</code> |  |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/fixedstatchangehook-operationtype">{"FixedStatChangeHook.OperationType"}</Link>{" operationType"}</code> |  |
| <Link id="m-statoperation" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/fixedstatchangehook-operationtime">{"FixedStatChangeHook.OperationTime"}</Link>{" statOperation"}</code> |  |
| <Link id="m-value" /><code>{"private float value"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectonend" /><code>{"protected override void AffectOnEnd("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-affectonstart" /><code>{"protected override void AffectOnStart("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
| <Link id="m-getaffectedstat" /><code>{"private float GetAffectedStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |
| <Link id="m-operateonstat" /><code>{"private void OperateOnStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |
| <Link id="m-revertoperateonstat" /><code>{"private void RevertOperateOnStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |
| <Link id="m-setaffectedstat" /><code>{"private void SetAffectedStat("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic, float value)"}</code> |  |
