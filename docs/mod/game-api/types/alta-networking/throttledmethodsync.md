---
title: "ThrottledMethodSync"
description: "Wraps an entity message so it is sent at most once per set interval; extra sends inside the interval are dropped, not delayed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrottledMethodSync

A **class** in `Root.Township`, `Alta.Networking`.

Wraps an entity message so it is sent at most once per set interval; extra sends inside the interval are dropped, not delayed.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThrottledMethodSync("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, float throttleFrequencyInSeconds)"}</code> | Creates a `ThrottledMethodSync` from `entity`, `type`, `handler` and `throttleFrequencyInSeconds`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity the message belongs to. |
| <Link id="m-handler" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler"}</code> | Method that writes and reads the message; registered as the entity's handler for `type`. |
| <Link id="m-nextavailablemessage" /><code>{"private float nextAvailableMessage"}</code> | Real time after which the next send is allowed. |
| <Link id="m-throttlefrequencyinseconds" /><code>{"private readonly float throttleFrequencyInSeconds"}</code> | Minimum seconds between sends. |
| <Link id="m-type" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | The entity message type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"[] except)"}</code> | Sends the message to players in the entity's chunks (minus `except`), unless throttled. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the message to one player, unless throttled. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shouldthrottlemessage" /><code>{"private bool ShouldThrottleMessage()"}</code> | True if the interval has not passed yet; otherwise starts a new interval. |

</details>

## Used in

Members of other types that take, return or hold a `ThrottledMethodSync`:

[`ClimbingHand.syncImmediateGrabFail`](/mod/game-api/types/game-other-namespaces/climbinghand#m-syncimmediategrabfail).
