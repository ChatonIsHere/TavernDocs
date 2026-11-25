---
title: "SenderInput<TSender, TData>"
description: "class SenderInput<TSender, TData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenderInput&lt;TSender, TData&gt;

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`SenderInput`](/game-api/types/alta-items/senderinput)
- **Derived types** [`BoolSenderInput`](/game-api/types/alta-items/boolsenderinput), [`FloatSenderInput`](/game-api/types/alta-items/floatsenderinput), [`IntSenderInput`](/game-api/types/alta-items/intsenderinput), [`Vector3SenderInput`](/game-api/types/alta-items/vector3senderinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SenderInput()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private TSender a"}</code> |  |
| <Link id="m-b" /><code>{"private uint b"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"TData Data { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valueupdated" /><code>{"event Action ValueUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"override bool AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> |  |
| <Link id="m-destroy" /><code>{"override void Destroy()"}</code> |  |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Component receiver)"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager, TData data)"}</code> |  |
| <Link id="m-subscribe" /><code>{"override void Subscribe(Action listener, bool isCalling = true)"}</code> |  |
| <Link id="m-onvalueupdated" /><code>{"private void OnValueUpdated()"}</code> |  |
