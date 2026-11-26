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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ILogicValueLinkReceiver`](/mod/game-api/types/alta-items/ilogicvaluelinkreceiver), [`ILogicComponent`](/mod/game-api/types/alta-items/ilogiccomponent)
- **Derived types** [`LogicGateReceiver`](/mod/game-api/types/alta-items/logicgatereceiver), [`LogicSumFloatReceiver`](/mod/game-api/types/alta-items/logicsumfloatreceiver), [`LogicSumIntReceiver`](/mod/game-api/types/alta-items/logicsumintreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueReceiverArray()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-senders" /><code>{"private List<TSenderInput> senders"}</code> | <span className="api-desc">Backing field for `Senders`, the list of linked inputs set in the inspector.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicmanager" /><code><Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; private set; }"}</code> | <span className="api-desc">The `GlobalLogicManager` holding the sender values.</span> |
| <Link id="m-senders-2" /><code>{"List<TSenderInput> Senders { get; protected set; }"}</code> | <span className="api-desc">The sender inputs this receiver listens to. New links are added here.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorpresave" /><code>{"void EditorPreSave("}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | <span className="api-desc">Editor: sets the logic manager and points every sender input at it.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: subscribes to every sender, finds the logic manager (a parent one or the global one), then calls `ValueUpdated` once.</span> |
| <Link id="m-loadcontext" /><code>{"protected void LoadContext()"}</code> | <span className="api-desc">Sets the logic manager to `GlobalLogicManager.Current`.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Destroys every sender input.</span> |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws each sender link.</span> |
| <Link id="m-valueupdated" /><code>{"protected abstract void ValueUpdated()"}</code> | <span className="api-desc">Called when any sender's value changes. Subclasses work out their result here.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"private bool Alta.Logic.ILogicValueLinkReceiver.AttemptLink("}<Link to="/mod/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> | <span className="api-desc">Explicit `ILogicValueLinkReceiver` method; makes a new input and adds it to `Senders` if it links to the given sender.</span> |
| <Link id="m-findlogicmanager" /><code>{"private void FindLogicManager()"}</code> | <span className="api-desc">Sets `LogicManager` to the nearest `GlobalLogicManager` in the parents, or the global one, if not already set. Called from `InitializeAsServer`.</span> |

</details>
