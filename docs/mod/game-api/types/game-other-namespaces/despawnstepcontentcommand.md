---
title: "DespawnStepContentCommand"
description: "Message the server sends to one player through the micro tutorial SyncController to remove a tutorial step's content on their client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DespawnStepContentCommand

A **struct** in `Root.Township`, `ATT.MicroTutorial`.

Message the server sends to one player through the micro tutorial `SyncController` to remove a tutorial step's content on their client.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-microtutorialstep" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link></code> | The step whose content should be despawned. |

## Used in

Members of other types that take, return or hold a `DespawnStepContentCommand`:

[`ISyncController.NotifyClientToDespawnStep`](/mod/game-api/types/game-other-namespaces/isynccontroller#m-notifyclienttodespawnstep), [`SyncController.NotifyClientToDespawnStep`](/mod/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttodespawnstep), [`SyncController.notifyClientToDespawnTutorial`](/mod/game-api/types/game-other-namespaces/synccontroller#m-notifyclienttodespawntutorial), [`SyncController.SyncNotifyPlayerToDespawnTutorial`](/mod/game-api/types/game-other-namespaces/synccontroller#m-syncnotifyplayertodespawntutorial).
