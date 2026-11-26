---
title: "SenderInput<TSender, TData>"
description: "A logic input that listens to one logic sender's value (for wired logic like levers and doors) and raises ValueUpdated when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenderInput&lt;TSender, TData&gt;

A **class** in `Root.Township`, `Alta.Logic`.

A logic input that listens to one logic sender's value (for wired logic like levers and doors) and raises `ValueUpdated` when it changes.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`SenderInput`](/mod/game-api/types/alta-items/senderinput)
- **Derived types** [`BoolSenderInput`](/mod/game-api/types/alta-items/boolsenderinput), [`FloatSenderInput`](/mod/game-api/types/alta-items/floatsenderinput), [`IntSenderInput`](/mod/game-api/types/alta-items/intsenderinput), [`Vector3SenderInput`](/mod/game-api/types/alta-items/vector3senderinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SenderInput()"}</code> | <span className="api-desc">Creates a `SenderInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private TSender a"}</code> | <span className="api-desc">The sender component set in the inspector. Not read anywhere in this class; linking goes through `Load` or `AttemptLink`.</span> |
| <Link id="m-b" /><code>{"private uint b"}</code> | <span className="api-desc">Serialized uint, probably the sender identifier. Not read anywhere in this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"TData Data { get; private set; }"}</code> | <span className="api-desc">The linked sender's data. Null until linked.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"event Action ValueUpdated"}</code> | <span className="api-desc">Raised when the linked sender's value changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"override bool AttemptLink("}<Link to="/mod/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> | <span className="api-desc">Links to the sender if it's the right type and in the same logic manager. Returns whether it linked.</span> |
| <Link id="m-destroy" /><code>{"override void Destroy()"}</code> | <span className="api-desc">Meant to stop listening to the sender. It removes the wrong handler, so the subscription probably stays.</span> |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Component receiver)"}</code> | <span className="api-desc">Does nothing here.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager, TData data)"}</code> | <span className="api-desc">Links to sender data directly, if that data has a logic identifier.</span> |
| <Link id="m-subscribe" /><code>{"override void Subscribe(Action listener, bool isCalling = true)"}</code> | <span className="api-desc">Adds a listener for value changes and calls it straight away if already linked, unless told not to.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalueupdated" /><code>{"private void OnValueUpdated()"}</code> | <span className="api-desc">Forwards the data's `UpdatedValue` event to this input's `ValueUpdated` listeners.</span> |

</details>
