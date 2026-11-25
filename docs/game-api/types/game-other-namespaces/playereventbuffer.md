---
title: "PlayerEventBuffer"
description: "class PlayerEventBuffer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEventBuffer

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerEventBuffer("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" step, IEventBus eventBus)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-eventbuffer" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{">[] eventBuffer"}</code> |
| <Link id="m-eventbus" /><code>{"private readonly IEventBus eventBus"}</code> |
| <Link id="m-passthroughhandler" /><code>{"private Action<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{"> passthroughHandler"}</code> |
| <Link id="m-step" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" step"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-switchtopassthrough" /><code>{"IEnumerable<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{"> SwitchToPassthrough(Action<"}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{"> passthroughHandler)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onplayerevent" /><code>{"private void OnPlayerEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" playerEvent)"}</code> |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" _)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEventBuffer`:

[`ServerStepInstance.eventBuffer`](/game-api/types/game-other-namespaces/serverstepinstance#m-eventbuffer).
