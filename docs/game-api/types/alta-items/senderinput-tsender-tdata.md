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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`SenderInput`](/game-api/types/alta-items/senderinput)
- **Derived types** [`BoolSenderInput`](/game-api/types/alta-items/boolsenderinput), [`FloatSenderInput`](/game-api/types/alta-items/floatsenderinput), [`IntSenderInput`](/game-api/types/alta-items/intsenderinput), [`Vector3SenderInput`](/game-api/types/alta-items/vector3senderinput)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SenderInput()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private TSender a"}</code> | The sender component set in the inspector. Not read anywhere in this class; linking goes through `Load` or `AttemptLink`. |
| <Link id="m-b" /><code>{"private uint b"}</code> | Serialized uint, probably the sender identifier. Not read anywhere in this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"TData Data { get; private set; }"}</code> | The linked sender's data. Null until linked. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"event Action ValueUpdated"}</code> | Raised when the linked sender's value changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"override bool AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> | Links to the sender if it's the right type and in the same logic manager. Returns whether it linked. |
| <Link id="m-destroy" /><code>{"override void Destroy()"}</code> | Meant to stop listening to the sender. It removes the wrong handler, so the subscription probably stays. |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Component receiver)"}</code> | Does nothing here. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager, TData data)"}</code> | Links to sender data directly, if that data has a logic identifier. |
| <Link id="m-subscribe" /><code>{"override void Subscribe(Action listener, bool isCalling = true)"}</code> | Adds a listener for value changes and calls it straight away if already linked, unless told not to. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalueupdated" /><code>{"private void OnValueUpdated()"}</code> | Forwards the data's `UpdatedValue` event to this input's `ValueUpdated` listeners. |

</details>
