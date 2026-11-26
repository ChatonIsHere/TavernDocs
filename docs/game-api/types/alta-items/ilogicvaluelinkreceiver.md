---
title: "ILogicValueLinkReceiver"
description: "A logic receiver (or receiver array) that a LogicValueSender can be linked to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILogicValueLinkReceiver

An **interface** in `Root.Township`, `Alta.Logic`.

A logic receiver (or receiver array) that a `LogicValueSender` can be linked to.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`LogicValueReceiver<TSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`LogicValueReceiverArray<TSenderInput>`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`SenderInput`](/game-api/types/alta-items/senderinput)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlink" /><code>{"bool AttemptLink("}<Link to="/game-api/types/alta-items/logicvaluesender">{"LogicValueSender"}</Link>{" sender)"}</code> | Tries to link the sender to this receiver. Returns whether it worked. |
