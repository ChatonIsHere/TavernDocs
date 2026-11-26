---
title: "SyncController"
description: "Network messages between server and client for micro tutorials: spawn, despawn and clear step content, and the client's load acknowledgement."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SyncController

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Network messages between server and client for micro tutorials: spawn, despawn and clear step content, and the client's load acknowledgement. Built on a sync entity.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ISyncController`](/mod/game-api/types/game-other-namespaces/isynccontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SyncController("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" syncEntity)"}</code> | Creates a `SyncController` from `syncEntity`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | Micro tutorial logger for this class. |
| <Link id="m-notifyclienttocleartutorialsteps" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" notifyClientToClearTutorialSteps"}</code> | Method sync for clearing steps (SyncA). |
| <Link id="m-notifyclienttodespawntutorial" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{"> notifyClientToDespawnTutorial"}</code> | Struct method sync for despawning step content. |
| <Link id="m-notifyclienttospawnadditionaltutorialcontentstruct" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{"> notifyClientToSpawnAdditionalTutorialContentStruct"}</code> | Struct method sync for spawning additional static content. |
| <Link id="m-notifyclienttospawntutorialstruct" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{"> notifyClientToSpawnTutorialStruct"}</code> | Struct method sync for spawning static step content. |
| <Link id="m-notifyserverclientloadtutorialcomplete" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" notifyServerClientLoadTutorialComplete"}</code> | Method sync the client uses to tell the server it has loaded (PlayerMessage). |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> ClientLoadCompleted"}</code> | Server: raised when a client reports it has spawned the step content. |
| <Link id="m-serverclearedtutorialsteps" /><code>{"event Action<int> ServerClearedTutorialSteps"}</code> | Client: raised with the player ID when the server says to clear tutorial steps. |
| <Link id="m-serverdespawnedtutorialstepcontent" /><code>{"event Action<int, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"> ServerDespawnedTutorialStepContent"}</code> | Client: raised with the player ID and step when the server despawns a step's content. |
| <Link id="m-serverspawnedadditionalstepcontent" /><code>{"event Action<int, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"> ServerSpawnedAdditionalStepContent"}</code> | Client: raised with the player ID and step when the server asks for additional content. |
| <Link id="m-serverspawnedstep" /><code>{"event Action<int, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{", Transform> ServerSpawnedStep"}</code> | Client: raised with the player ID, step and parent transform when the server spawns a step. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-notifyclienttocleartutorialsteps-2" /><code>{"void NotifyClientToClearTutorialSteps("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: tells the player to clear their runtime tutorial steps. |
| <Link id="m-notifyclienttodespawnstep" /><code>{"void NotifyClientToDespawnStep("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{" content)"}</code> | Server: tells the player to despawn a step's content. |
| <Link id="m-notifyclienttospawnadditionalstepcontent" /><code>{"void NotifyClientToSpawnAdditionalStepContent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> | Server: tells the player to spawn a step's additional static content. |
| <Link id="m-notifyclienttospawnstep" /><code>{"void NotifyClientToSpawnStep("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> | Server: tells the player to spawn a step's static content under the tutorial entity. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncclientloadtutorialcomplete" /><code>{"private void SyncClientLoadTutorialComplete("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server, when reading: raises `ClientLoadCompleted` for the sender (the current player in local test). |
| <Link id="m-syncnotifyclienttoclearruntimesteps" /><code>{"private void SyncNotifyClientToClearRuntimeSteps("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync body for the clear message; raises `ServerClearedTutorialSteps` on the client. |
| <Link id="m-syncnotifyplayertodespawntutorial" /><code>{"private void SyncNotifyPlayerToDespawnTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{" content)"}</code> | Sync body for the despawn message; raises `ServerDespawnedTutorialStepContent` on the client. |
| <Link id="m-syncnotifyplayertospawnadditionaltutorialcontent" /><code>{"private void SyncNotifyPlayerToSpawnAdditionalTutorialContent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> | Sync body for the additional content message; raises `ServerSpawnedAdditionalStepContent` on the client. |
| <Link id="m-syncnotifyplayertospawntutorial" /><code>{"private void SyncNotifyPlayerToSpawnTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> | Sync body for the spawn message; the client raises `ServerSpawnedStep` and then sends the load-complete message back. |

</details>
