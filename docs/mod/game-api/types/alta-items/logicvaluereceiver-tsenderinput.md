---
title: "LogicValueReceiver<TSenderInput>"
description: "Base for a logic component that listens to one logic value sender and reacts when the value changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicValueReceiver&lt;TSenderInput&gt;

An **abstract class** in `Root.Township`, `Alta.Logic`.

Base for a logic component that listens to one logic value sender and reacts when the value changes. Server side; subclasses implement `ValueUpdated`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ILogicValueLinkReceiver`](/mod/game-api/types/alta-items/ilogicvaluelinkreceiver), [`ILogicComponent`](/mod/game-api/types/alta-items/ilogiccomponent)
- **Derived types** [`LogicBoolReceiver`](/mod/game-api/types/alta-items/logicboolreceiver), [`LogicFloatRangeReceiver`](/mod/game-api/types/alta-items/logicfloatrangereceiver), [`LogicFloatReceiver`](/mod/game-api/types/alta-items/logicfloatreceiver), [`LogicFloatThresholdReceiver`](/mod/game-api/types/alta-items/logicfloatthresholdreceiver), [`LogicIntRangeReceiver`](/mod/game-api/types/alta-items/logicintrangereceiver), [`LogicIntReceiver`](/mod/game-api/types/alta-items/logicintreceiver), [`LogicIntThresholdReceiver`](/mod/game-api/types/alta-items/logicintthresholdreceiver), [`LogicVector3Receiver`](/mod/game-api/types/alta-items/logicvector3receiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LogicValueReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sender" /><code>{"protected TSenderInput sender"}</code> | <span className="api-desc">Backing field for `Sender`, set in the inspector.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicmanager" /><code><Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; private set; }"}</code> | <span className="api-desc">The logic manager this receiver belongs to: one in a parent, or the global one.</span> |
| <Link id="m-sender-2" /><code>{"TSenderInput Sender { get; }"}</code> | <span className="api-desc">The sender input this receiver reads from.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorpresave" /><code>{"void EditorPreSave("}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | <span className="api-desc">Editor: sets the logic manager and points the sender input at it before saving.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: subscribes to the sender, finds the logic manager (parent or global) and calls `ValueUpdated` once.</span> |
| <Link id="m-loadcontext" /><code>{"protected void LoadContext()"}</code> | <span className="api-desc">Sets `LogicManager` to `GlobalLogicManager.Current`.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Cleans up the sender input subscription.</span> |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the link to the sender in the editor.</span> |
| <Link id="m-valueupdated" /><code>{"protected abstract void ValueUpdated()"}</code> | <span className="api-desc">Called when the sender's value changes, and once at server start. Implement the reaction here.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"private bool Alta.Logic.ILogicValueLinkReceiver.AttemptLink("}<Link to="/mod/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> | <span className="api-desc">Explicit `ILogicValueLinkReceiver` method; passes the sender to `Sender.AttemptLink` and returns whether it linked.</span> |
| <Link id="m-findlogicmanager" /><code>{"private void FindLogicManager()"}</code> | <span className="api-desc">Sets `LogicManager` to the nearest `GlobalLogicManager` in the parents, or the global one, if not already set. Called from `InitializeAsServer`.</span> |

</details>
