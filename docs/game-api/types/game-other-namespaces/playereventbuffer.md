---
title: "PlayerEventBuffer"
description: "Server: records the tutorial player's events for each step so a step can see events that happened before it started."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEventBuffer

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Server: records the tutorial player's events for each step so a step can see events that happened before it started. Created by `ServerStepInstance`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEventBuffer("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" step, IEventBus eventBus)"}</code> | Creates a `PlayerEventBuffer` from `step` and `eventBus`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventbuffer" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{">[] eventBuffer"}</code> | One list of buffered events per tutorial step. |
| <Link id="m-eventbus" /><code>{"private readonly IEventBus eventBus"}</code> | Event bus the buffer listens on. |
| <Link id="m-passthroughhandler" /><code>{"private Action<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{"> passthroughHandler"}</code> | Handler set by `SwitchToPassthrough`. When set, events skip the buffer. |
| <Link id="m-step" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" step"}</code> | The server step instance this buffer belongs to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-switchtopassthrough" /><code>{"IEnumerable<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{"> SwitchToPassthrough(Action<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{"> passthroughHandler)"}</code> | Sends future events straight to the handler and returns buffered events from the current step back `PlayerEventSearchDepth` steps (all steps if negative). |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onplayerevent" /><code>{"private void OnPlayerEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" playerEvent)"}</code> | Handles an event from the tutorial's player: passes it through if a handler is set, otherwise buffers it under the current step. |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" _)"}</code> | Stops listening for the step's required event types once the step completes. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEventBuffer`:

[`ServerStepInstance.eventBuffer`](/game-api/types/game-other-namespaces/serverstepinstance#m-eventbuffer).
