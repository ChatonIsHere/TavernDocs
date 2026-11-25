---
title: "ISyncController"
description: "interface ISyncController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISyncController

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`SyncController`](/game-api/types/game-other-namespaces/synccontroller)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadcompleted" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> ClientLoadCompleted"}</code> |  |
| <Link id="m-serverclearedtutorialsteps" /><code>{"event Action<int> ServerClearedTutorialSteps"}</code> |  |
| <Link id="m-serverdespawnedtutorialstepcontent" /><code>{"event Action<int, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"> ServerDespawnedTutorialStepContent"}</code> |  |
| <Link id="m-serverspawnedadditionalstepcontent" /><code>{"event Action<int, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"> ServerSpawnedAdditionalStepContent"}</code> |  |
| <Link id="m-serverspawnedstep" /><code>{"event Action<int, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", Transform> ServerSpawnedStep"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-notifyclienttocleartutorialsteps" /><code>{"void NotifyClientToClearTutorialSteps("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-notifyclienttodespawnstep" /><code>{"void NotifyClientToDespawnStep("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-notifyclienttospawnadditionalstepcontent" /><code>{"void NotifyClientToSpawnAdditionalStepContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-notifyclienttospawnstep" /><code>{"void NotifyClientToSpawnStep("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISyncController`:

[`ClientController.ClientController`](/game-api/types/game-other-namespaces/clientcontroller#m-ctor), [`IMicroTutorialSystem.SyncController`](/game-api/types/game-other-namespaces/imicrotutorialsystem#m-synccontroller), [`MicroTutorialSystem.SyncController`](/game-api/types/game-other-namespaces/microtutorialsystem#m-synccontroller), [`ServerController.ServerController`](/game-api/types/game-other-namespaces/servercontroller#m-ctor), [`ServerController.syncController`](/game-api/types/game-other-namespaces/servercontroller#m-synccontroller).
