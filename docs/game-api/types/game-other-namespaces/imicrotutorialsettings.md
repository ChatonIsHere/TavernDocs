---
title: "IMicroTutorialSettings"
description: "Settings for a micro tutorial: a named set of steps and a message when finished."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMicroTutorialSettings

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

Settings for a micro tutorial: a named set of steps and a message when finished. Implemented by `MicroTutorialSettings`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`MicroTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialsettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completedmessage" /><code><Link to="/game-api/types/game-other-namespaces/tutorialcompletedmessage">{"TutorialCompletedMessage"}</Link>{" CompletedMessage { get; }"}</code> | Message shown when the tutorial is done. |
| <Link id="m-steps" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] Steps { get; }"}</code> | The tutorial's steps in order. |
| <Link id="m-tutorialname" /><code>{"string TutorialName { get; }"}</code> | Name of the tutorial. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordcompletedbyplayer" /><code>{"void RecordCompletedByPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Marks the tutorial done for the player and fires its completed event. |

## Used in

Members of other types that take, return or hold a `IMicroTutorialSettings`:

[`IMicroTutorial.Settings`](/game-api/types/game-other-namespaces/imicrotutorial#m-settings), [`IMicroTutorialFactory.CreateTutorial`](/game-api/types/game-other-namespaces/imicrotutorialfactory#m-createtutorial), [`MicroTutorial.MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial#m-ctor), [`MicroTutorial.Settings`](/game-api/types/game-other-namespaces/microtutorial#m-settings), [`MicroTutorialFactory.CreateTutorial`](/game-api/types/game-other-namespaces/microtutorialfactory#m-createtutorial), [`ServerController.SpawnTutorial`](/game-api/types/game-other-namespaces/servercontroller#m-spawntutorial), [`GameTaskManager.IsTutorialCompletedByPlayer`](/game-api/types/global-e-h/gametaskmanager#m-istutorialcompletedbyplayer).
