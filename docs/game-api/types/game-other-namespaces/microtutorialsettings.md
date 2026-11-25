---
title: "MicroTutorialSettings"
description: "class MicroTutorialSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialSettings

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerProgressFlag`](/game-api/types/global-p/playerprogressflag), [`IMicroTutorialSettings`](/game-api/types/game-other-namespaces/imicrotutorialsettings)
- **Attributes** `CreateAssetMenu`, `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-steps" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] steps"}</code> |  |
| <Link id="m-tutorialname" /><code>{"private string tutorialName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> All { get; }"}</code> |  |
| <Link id="m-completedmessage" /><code><Link to="/game-api/types/game-other-namespaces/tutorialcompletedmessage">{"TutorialCompletedMessage"}</Link>{" CompletedMessage { get; private set; }"}</code> |  |
| <Link id="m-steps-2" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] Steps { get; set; }"}</code> |  |
| <Link id="m-tutorialname-2" /><code>{"string TutorialName { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completedbyplayer" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> CompletedByPlayer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordcompletedbyplayer" /><code>{"void RecordCompletedByPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MicroTutorialSettings`:

[`MicroTutorialFaceOrb.microTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialfaceorb#m-microtutorialsettings), [`MicroTutorialFaceOrb.SetTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialfaceorb#m-settutorialsettings), [`MicroTutorialFaceOrbSaveData.MicroTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata#m-microtutorialsettings), [`MicroTutorialModule.StartTutorial`](/game-api/types/game-other-namespaces/microtutorialmodule#m-starttutorial), [`MicroTutorialOrbSpawner.microTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialorbspawner#m-microtutorialsettings), [`OrbSpawnData.Tutorial`](/game-api/types/game-other-namespaces/orbspawndata#m-tutorial), [`GameTaskManager.OnPlayerCompletedTutorial`](/game-api/types/global-e-h/gametaskmanager#m-onplayercompletedtutorial), [`PlayerTracker.CompletedTutorials`](/game-api/types/global-p/playertracker#m-completedtutorials).
