---
title: "SyncController"
description: "class SyncController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SyncController

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ISyncController`](/game-api/types/game-other-namespaces/isynccontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SyncController("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" syncEntity)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |  |
| <Link id="m-notifyclienttocleartutorialsteps" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" notifyClientToClearTutorialSteps"}</code> |  |
| <Link id="m-notifyclienttodespawntutorial" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{"> notifyClientToDespawnTutorial"}</code> |  |
| <Link id="m-notifyclienttospawnadditionaltutorialcontentstruct" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{"> notifyClientToSpawnAdditionalTutorialContentStruct"}</code> |  |
| <Link id="m-notifyclienttospawntutorialstruct" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{"> notifyClientToSpawnTutorialStruct"}</code> |  |
| <Link id="m-notifyserverclientloadtutorialcomplete" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" notifyServerClientLoadTutorialComplete"}</code> |  |

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
| <Link id="m-notifyclienttocleartutorialsteps-2" /><code>{"void NotifyClientToClearTutorialSteps("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-notifyclienttodespawnstep" /><code>{"void NotifyClientToDespawnStep("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-notifyclienttospawnadditionalstepcontent" /><code>{"void NotifyClientToSpawnAdditionalStepContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-notifyclienttospawnstep" /><code>{"void NotifyClientToSpawnStep("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-syncclientloadtutorialcomplete" /><code>{"private void SyncClientLoadTutorialComplete("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncnotifyclienttoclearruntimesteps" /><code>{"private void SyncNotifyClientToClearRuntimeSteps("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncnotifyplayertodespawntutorial" /><code>{"private void SyncNotifyPlayerToDespawnTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/despawnstepcontentcommand">{"DespawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-syncnotifyplayertospawnadditionaltutorialcontent" /><code>{"private void SyncNotifyPlayerToSpawnAdditionalTutorialContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> |  |
| <Link id="m-syncnotifyplayertospawntutorial" /><code>{"private void SyncNotifyPlayerToSpawnTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/spawnstepcontentcommand">{"SpawnStepContentCommand"}</Link>{" content)"}</code> |  |
