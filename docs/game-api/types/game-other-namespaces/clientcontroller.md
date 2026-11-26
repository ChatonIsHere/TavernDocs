---
title: "ClientController"
description: "Client side of micro tutorials: creates and removes step instances when the sync controller reports the server spawning or clearing steps."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientController

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Client side of micro tutorials: creates and removes step instances when the sync controller reports the server spawning or clearing steps. Created by `MicroTutorialSystem`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientController("}<Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController)"}</code> | Creates a `ClientController` from `syncController`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | Micro tutorial logger. |
| <Link id="m-stepmap" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/clientstepinstancemap">{"ClientStepInstanceMap"}</Link>{" stepMap"}</code> | Step instances per player id. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onserverclearedtutorialsteps" /><code>{"private void OnServerClearedTutorialSteps(int playerId)"}</code> | Despawns all of a player's step content and removes their steps. |
| <Link id="m-onserverdespawnedtutorialstepcontent" /><code>{"private void OnServerDespawnedTutorialStepContent(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> | Despawns the static content of one step. |
| <Link id="m-onserverspawnedadditionalstepcontent" /><code>{"private void OnServerSpawnedAdditionalStepContent(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> | Spawns the extra static content of an existing step. |
| <Link id="m-onserverspawnedstep" /><code>{"private void OnServerSpawnedStep(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, Transform parent)"}</code> | Creates a step instance under the given parent for the player, unless one already exists. |

</details>

## Used in

Members of other types that take, return or hold a `ClientController`:

[`IMicroTutorialSystem.ClientController`](/game-api/types/game-other-namespaces/imicrotutorialsystem#m-clientcontroller), [`MicroTutorialSystem.ClientController`](/game-api/types/game-other-namespaces/microtutorialsystem#m-clientcontroller).
