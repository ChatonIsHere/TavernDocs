---
title: "ThrottledMethodSync"
description: "class ThrottledMethodSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrottledMethodSync

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThrottledMethodSync("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, float throttleFrequencyInSeconds)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-handler" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler"}</code> |  |
| <Link id="m-nextavailablemessage" /><code>{"private float nextAvailableMessage"}</code> |  |
| <Link id="m-throttlefrequencyinseconds" /><code>{"private readonly float throttleFrequencyInSeconds"}</code> |  |
| <Link id="m-type" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"[] except)"}</code> |  |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-shouldthrottlemessage" /><code>{"private bool ShouldThrottleMessage()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ThrottledMethodSync`:

[`ClimbingHand.syncImmediateGrabFail`](/game-api/types/game-other-namespaces/climbinghand#m-syncimmediategrabfail).
