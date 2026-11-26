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
| <Link id="m-ctor" /><code>{"ThrottledMethodSync("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, float throttleFrequencyInSeconds)"}</code> | <span className="api-desc">Creates a `ThrottledMethodSync` from `entity`, `type`, `handler` and `throttleFrequencyInSeconds`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity the message belongs to.</span> |
| <Link id="m-handler" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler"}</code> | <span className="api-desc">Method that writes and reads the message; registered as the entity's handler for `type`.</span> |
| <Link id="m-nextavailablemessage" /><code>{"private float nextAvailableMessage"}</code> | <span className="api-desc">Real time after which the next send is allowed.</span> |
| <Link id="m-throttlefrequencyinseconds" /><code>{"private readonly float throttleFrequencyInSeconds"}</code> | <span className="api-desc">Minimum seconds between sends.</span> |
| <Link id="m-type" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | <span className="api-desc">The entity message type.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"[] except)"}</code> | <span className="api-desc">Sends the message to players in the entity's chunks (minus `except`), unless throttled.</span> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the message to one player, unless throttled.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shouldthrottlemessage" /><code>{"private bool ShouldThrottleMessage()"}</code> | <span className="api-desc">True if the interval has not passed yet; otherwise starts a new interval.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ThrottledMethodSync`:

<div className="api-used-in">

[`ClimbingHand.syncImmediateGrabFail`](/mod/game-api/types/game-other-namespaces/climbinghand#m-syncimmediategrabfail).

</div>
