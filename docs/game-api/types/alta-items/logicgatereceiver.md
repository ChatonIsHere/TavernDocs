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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiverArray<BoolSenderInput>`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`ISavable<LogicGateSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicGateSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicGateSaveData`](/game-api/types/alta-items/logicgatesavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicGateReceiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | Last output value. |
| <Link id="m-isinversedoutput" /><code>{"private bool isInversedOutput"}</code> | Inverts the output. |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | Unity event fired with the new output. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-items/logicoperationtype">{"LogicOperationType"}</Link>{" operationType"}</code> | Which operation combines the inputs. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: works out the starting value and fires `onValueUpdated` with it. |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | When an input changes, fires `onValueUpdated` if the result changed. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | Combines the inputs. Xor is true for exactly one true input, Nand for none true, Toggle for an odd count. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: renames the object after its operation type, such as `And inverse`. |

</details>
