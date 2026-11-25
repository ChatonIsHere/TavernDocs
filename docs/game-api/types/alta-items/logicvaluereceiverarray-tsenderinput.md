---
title: "LogicValueReceiverArray<TSenderInput>"
description: "Base for logic receivers that listen to a list of senders and react when any of them changes, such as gates and sums."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueReceiverArray&lt;TSenderInput&gt;

An **abstract class** in `Root.Township`, `Alta.Logic`.

Base for logic receivers that listen to a list of senders and react when any of them changes, such as gates and sums. Server side.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ILogicValueLinkReceiver`](/game-api/types/alta-items/ilogicvaluelinkreceiver), [`ILogicComponent`](/game-api/types/alta-items/ilogiccomponent)
- **Derived types** [`LogicGateReceiver`](/game-api/types/alta-items/logicgatereceiver), [`LogicSumFloatReceiver`](/game-api/types/alta-items/logicsumfloatreceiver), [`LogicSumIntReceiver`](/game-api/types/alta-items/logicsumintreceiver)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected LogicValueReceiverArray()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-senders" /><code>{"private List<TSenderInput> senders"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicmanager" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; private set; }"}</code> | The `GlobalLogicManager` holding the sender values. |
| <Link id="m-senders-2" /><code>{"List<TSenderInput> Senders { get; protected set; }"}</code> | The sender inputs this receiver listens to. New links are added here. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorpresave" /><code>{"void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | Editor: sets the logic manager and points every sender input at it. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: subscribes to every sender, finds the logic manager (a parent one or the global one), then calls `ValueUpdated` once. |
| <Link id="m-loadcontext" /><code>{"protected void LoadContext()"}</code> | Sets the logic manager to `GlobalLogicManager.Current`. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Destroys every sender input. |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | Editor: draws each sender link. |
| <Link id="m-valueupdated" /><code>{"protected abstract void ValueUpdated()"}</code> | Called when any sender's value changes. Subclasses work out their result here. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-attemptlink" /><code>{"private bool Alta.Logic.ILogicValueLinkReceiver.AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> |
| <Link id="m-findlogicmanager" /><code>{"private void FindLogicManager()"}</code> |

</details>
