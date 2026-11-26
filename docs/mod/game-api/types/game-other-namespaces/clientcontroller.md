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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientController("}<Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController)"}</code> | <span className="api-desc">Creates a `ClientController` from `syncController`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | <span className="api-desc">Micro tutorial logger.</span> |
| <Link id="m-stepmap" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/clientstepinstancemap">{"ClientStepInstanceMap"}</Link>{" stepMap"}</code> | <span className="api-desc">Step instances per player id.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onserverclearedtutorialsteps" /><code>{"private void OnServerClearedTutorialSteps(int playerId)"}</code> | <span className="api-desc">Despawns all of a player's step content and removes their steps.</span> |
| <Link id="m-onserverdespawnedtutorialstepcontent" /><code>{"private void OnServerDespawnedTutorialStepContent(int playerId, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> | <span className="api-desc">Despawns the static content of one step.</span> |
| <Link id="m-onserverspawnedadditionalstepcontent" /><code>{"private void OnServerSpawnedAdditionalStepContent(int playerId, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> | <span className="api-desc">Spawns the extra static content of an existing step.</span> |
| <Link id="m-onserverspawnedstep" /><code>{"private void OnServerSpawnedStep(int playerId, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, Transform parent)"}</code> | <span className="api-desc">Creates a step instance under the given parent for the player, unless one already exists.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClientController`:

<div className="api-used-in">

[`IMicroTutorialSystem.ClientController`](/mod/game-api/types/game-other-namespaces/imicrotutorialsystem#m-clientcontroller), [`MicroTutorialSystem.ClientController`](/mod/game-api/types/game-other-namespaces/microtutorialsystem#m-clientcontroller).

</div>
