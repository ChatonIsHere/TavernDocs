---
title: "ClientStepInstanceMap"
description: "Client-side lookup of micro tutorial step instances by player id and step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientStepInstanceMap

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Client-side lookup of micro tutorial step instances by player id and step. Owned by `ClientController`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientStepInstanceMap()"}</code> | <span className="api-desc">Creates a `ClientStepInstanceMap` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientmap" /><code>{"private readonly IDictionary<int, IDictionary<"}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{">> clientMap"}</code> | <span className="api-desc">Player id to a map of step settings to step instance.</span> |
| <Link id="m-logger" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | <span className="api-desc">Micro tutorial logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(int playerId, "}<Link to="/mod/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{" stepInstance)"}</code> | <span className="api-desc">Adds a step instance for a player, keyed by its step settings, creating the player's map if needed.</span> |
| <Link id="m-getsteps" /><code>{"IDictionary<"}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{"> GetSteps(int playerId)"}</code> | <span className="api-desc">Returns the player's step map, creating an empty one if none exists.</span> |
| <Link id="m-instanceexists" /><code>{"bool InstanceExists(int playerId, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> | <span className="api-desc">True if the player has an instance of the given step.</span> |
| <Link id="m-remove" /><code>{"bool Remove(int playerId)"}</code> | <span className="api-desc">Removes all step instances for a player.</span> |
| <Link id="m-tryget" /><code>{"bool TryGet(int playerId, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, out "}<Link to="/mod/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{" stepInstance)"}</code> | <span className="api-desc">Looks up the player's instance of a step.</span> |

## Used in

Members of other types that take, return or hold a `ClientStepInstanceMap`:

<div className="api-used-in">

[`ClientController.stepMap`](/mod/game-api/types/game-other-namespaces/clientcontroller#m-stepmap).

</div>
