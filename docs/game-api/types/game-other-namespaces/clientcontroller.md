---
title: "ClientController"
description: "class ClientController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientController

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientController("}<Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |
| <Link id="m-stepmap" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/clientstepinstancemap">{"ClientStepInstanceMap"}</Link>{" stepMap"}</code> |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onserverclearedtutorialsteps" /><code>{"private void OnServerClearedTutorialSteps(int playerId)"}</code> |
| <Link id="m-onserverdespawnedtutorialstepcontent" /><code>{"private void OnServerDespawnedTutorialStepContent(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> |
| <Link id="m-onserverspawnedadditionalstepcontent" /><code>{"private void OnServerSpawnedAdditionalStepContent(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> |
| <Link id="m-onserverspawnedstep" /><code>{"private void OnServerSpawnedStep(int playerId, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, Transform parent)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ClientController`:

[`IMicroTutorialSystem.ClientController`](/game-api/types/game-other-namespaces/imicrotutorialsystem#m-clientcontroller), [`MicroTutorialSystem.ClientController`](/game-api/types/game-other-namespaces/microtutorialsystem#m-clientcontroller).
