---
title: "ConsumableLock"
description: "class ConsumableLock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsumableLock

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Lock`](/game-api/types/alta-items/lock)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsumableLock()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> |  |
| <Link id="m-lockbreakevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" lockBreakEvent"}</code> |  |
| <Link id="m-requesteffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" requestEffect"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lockbreakevent-2" /><code><Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" LockBreakEvent { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-networkbreak" /><code>{"private void NetworkBreak("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unlocked" /><code>{"protected override void Unlocked()"}</code> |  |
