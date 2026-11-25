---
title: "SenderInput"
description: "abstract class SenderInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenderInput

An **abstract class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ILogicValueLinkReceiver`](/game-api/types/alta-items/ilogicvaluelinkreceiver)
- **Derived types** [`SenderInput<TSender, TData>`](/game-api/types/alta-items/senderinput-tsender-tdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SenderInput()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" Manager { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-attemptlink" /><code>{"abstract bool AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> |
| <Link id="m-destroy" /><code>{"abstract void Destroy()"}</code> |
| <Link id="m-drawgizmos" /><code>{"abstract void DrawGizmos(Component receiver)"}</code> |
| <Link id="m-subscribe" /><code>{"abstract void Subscribe(Action listener, bool isCalling = true)"}</code> |
