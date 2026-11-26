---
title: "LogicGateReceiver"
description: "Logic gate: combines any number of bool inputs with And, Or, Xor, Nand or Toggle, optionally inverted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicGateReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic gate: combines any number of bool inputs with And, Or, Xor, Nand or Toggle, optionally inverted. Runs on the server and saves its inputs and type.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiverArray<BoolSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`ISavable<LogicGateSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicGateSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicGateSaveData`](/mod/game-api/types/alta-items/logicgatesavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicGateReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | <span className="api-desc">Last output value.</span> |
| <Link id="m-isinversedoutput" /><code>{"private bool isInversedOutput"}</code> | <span className="api-desc">Inverts the output.</span> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | <span className="api-desc">Unity event fired with the new output.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicoperationtype">{"LogicOperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Which operation combines the inputs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: works out the starting value and fires `onValueUpdated` with it.</span> |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | <span className="api-desc">When an input changes, fires `onValueUpdated` if the result changed.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | <span className="api-desc">Combines the inputs. Xor is true for exactly one true input, Nand for none true, Toggle for an odd count.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: renames the object after its operation type, such as `And inverse`.</span> |

</details>
