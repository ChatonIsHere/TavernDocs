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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inparent" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" InParent"}</code> | <span className="api-desc">The entity to spawn the step content under.</span> |
| <Link id="m-microtutorialstep" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link></code> | <span className="api-desc">The step whose content to spawn.</span> |

## Used in

Members of other types that take, return or hold a `SpawnStepContentCommand`:

<div className="api-used-in">

[`ISyncController.NotifyClientToSpawnAdditionalStepContent`](/mod/game-api/types/game-other-namespaces/isynccontroller#m-notifyclienttospawnadditionalstepcontent), [`ISyncController.NotifyClientToSpawnStep`](/mod/game-api/types/game-other-namespaces/isynccontroller#m-notifyclienttospawnstep), [`SyncController.NotifyClientToSpawnAdditionalStepContent`](/mod/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawnadditionalstepcontent), [`SyncController.notifyClientToSpawnAdditionalTutorialContentStruct`](/mod/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawnadditionaltutorialcontentstruct), [`SyncController.NotifyClientToSpawnStep`](/mod/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawnstep), [`SyncController.notifyClientToSpawnTutorialStruct`](/mod/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttospawntutorialstruct), [`SyncController.SyncNotifyPlayerToSpawnAdditionalTutorialContent`](/mod/game-api/types/game-other-namespaces/synccontroller#m-syncnotifyplayertospawnadditionaltutorialcontent), [`SyncController.SyncNotifyPlayerToSpawnTutorial`](/mod/game-api/types/game-other-namespaces/synccontroller#m-syncnotifyplayertospawntutorial).

</div>
