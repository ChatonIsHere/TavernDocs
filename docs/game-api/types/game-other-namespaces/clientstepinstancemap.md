---
title: "ClientStepInstanceMap"
description: "class ClientStepInstanceMap in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientStepInstanceMap

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientStepInstanceMap()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-clientmap" /><code>{"private readonly IDictionary<int, IDictionary<"}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{">> clientMap"}</code> |
| <Link id="m-logger" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"void Add(int playerId, "}<Link to="/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{" stepInstance)"}</code> |
| <Link id="m-getsteps" /><code>{"IDictionary<"}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{"> GetSteps(int playerId)"}</code> |
| <Link id="m-instanceexists" /><code>{"bool InstanceExists(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> |
| <Link id="m-remove" /><code>{"bool Remove(int playerId)"}</code> |
| <Link id="m-tryget" /><code>{"bool TryGet(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, out "}<Link to="/game-api/types/game-other-namespaces/istepinstance">{"IStepInstance"}</Link>{" stepInstance)"}</code> |

## Used in

Members of other types that take, return or hold a `ClientStepInstanceMap`:

[`ClientController.stepMap`](/game-api/types/game-other-namespaces/clientcontroller#m-stepmap).
