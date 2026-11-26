---
title: "SpawnStepContentCommand"
description: "Server-to-client order to spawn a micro tutorial step's content, sent through the tutorial sync controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnStepContentCommand

A **struct** in `Root.Township`, `ATT.MicroTutorial`.

Server-to-client order to spawn a micro tutorial step's content, sent through the tutorial sync controller.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inparent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" InParent"}</code> | The entity to spawn the step content under. |
| <Link id="m-microtutorialstep" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link></code> | The step whose content to spawn. |

## Used in

Members of other types that take, return or hold a `SpawnStepContentCommand`:

[`ISyncController.NotifyClientToSpawnAdditionalStepContent`](/game-api/types/game-other-namespaces/isynccontroller#m-notifyclienttospawnadditionalstepcontent), [`ISyncController.NotifyClientToSpawnStep`](/game-api/types/game-other-namespaces/isynccontroller#m-notifyclienttospawnstep), [`SyncController.NotifyClientToSpawnAdditionalStepContent`](/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawnadditionalstepcontent), [`SyncController.notifyClientToSpawnAdditionalTutorialContentStruct`](/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawnadditionaltutorialcontentstruct), [`SyncController.NotifyClientToSpawnStep`](/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawnstep), [`SyncController.notifyClientToSpawnTutorialStruct`](/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawntutorialstruct), [`SyncController.SyncNotifyPlayerToSpawnAdditionalTutorialContent`](/game-api/types/game-other-namespaces/synccontroller#m-syncnotifyplayertospawnadditionaltutorialcontent), [`SyncController.SyncNotifyPlayerToSpawnTutorial`](/game-api/types/game-other-namespaces/synccontroller#m-syncnotifyplayertospawntutorial).
