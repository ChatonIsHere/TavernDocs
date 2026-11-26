---
title: "ISyncController"
description: "Messages between server and client for micro tutorials: the server tells a player's client to spawn, add to or remove step content, and the client says when..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISyncController

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

Messages between server and client for micro tutorials: the server tells a player's client to spawn, add to or remove step content, and the client says when it has loaded. `SyncController` is the implementation.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`SyncController`](/game-api/types/game-other-namespaces/synccontroller)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadcompleted" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> ClientLoadCompleted"}</code> | Server: raised with the player when their client has finished spawning step content. |
| <Link id="m-serverclearedtutorialsteps" /><code>{"event Action<int> ServerClearedTutorialSteps"}</code> | Client: raised with the player ID when the server asks to clear all steps. |
| <Link id="m-serverdespawnedtutorialstepcontent" /><code>{"event Action<int, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"> ServerDespawnedTutorialStepContent"}</code> | Client: raised with the player ID and step when the server asks to despawn it. |
| <Link id="m-serverspawnedadditionalstepcontent" /><code>{"event Action<int, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"> ServerSpawnedAdditionalStepContent"}</code> | Client: raised with the player ID and step when the server asks for its additional content. |
| <Link id="m-serverspawnedstep" /><code>{"event Action<int, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", Transform> ServerSpawnedStep"}</code> | Client: raised with the player ID, step and parent transform when the server asks to spawn a step. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-notifyclienttocleartutorialsteps" /><code>{"void NotifyClientToClearTutorialSteps("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: tells the player's client to clear all tutorial steps. |
| <Link id="m-notifyclienttodespawnstep" /><code>{"void NotifyClientToDespawnStep("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{" content)"}</code> | Server: tells the player's client to despawn one step's content. |
| <Link id="m-notifyclienttospawnadditionalstepcontent" /><code>{"void NotifyClientToSpawnAdditionalStepContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> | Server: tells the player's client to spawn a step's additional content. |
| <Link id="m-notifyclienttospawnstep" /><code>{"void NotifyClientToSpawnStep("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> | Server: tells the player's client to spawn a step's content under a parent entity. The client answers with a load complete message. |

## Used in

Members of other types that take, return or hold a `ISyncController`:

[`ClientController.ClientController`](/game-api/types/game-other-namespaces/clientcontroller#m-ctor), [`IMicroTutorialSystem.SyncController`](/game-api/types/game-other-namespaces/imicrotutorialsystem#m-synccontroller), [`MicroTutorialSystem.SyncController`](/game-api/types/game-other-namespaces/microtutorialsystem#m-synccontroller), [`ServerController.ServerController`](/game-api/types/game-other-namespaces/servercontroller#m-ctor), [`ServerController.syncController`](/game-api/types/game-other-namespaces/servercontroller#m-synccontroller).
