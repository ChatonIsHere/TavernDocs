---
title: "MicroTutorialSettings"
description: "One micro tutorial asset: a name, a list of steps and a completion message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialSettings

A **class** in `Root.Township`, `ATT.MicroTutorial`.

One micro tutorial asset: a name, a list of steps and a completion message. It is a `PlayerProgressFlag`, so completion is stored per player.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerProgressFlag`](/mod/game-api/types/global-p/playerprogressflag), [`IMicroTutorialSettings`](/mod/game-api/types/game-other-namespaces/imicrotutorialsettings)
- **Attributes** `CreateAssetMenu`, `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-steps" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] steps"}</code> | Backing field for `Steps`. |
| <Link id="m-tutorialname" /><code>{"private string tutorialName"}</code> | Backing field for `TutorialName`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> All { get; }"}</code> | Every micro tutorial asset loaded. |
| <Link id="m-completedmessage" /><code><Link to="/mod/game-api/types/game-other-namespaces/tutorialcompletedmessage">{"TutorialCompletedMessage"}</Link>{" CompletedMessage { get; private set; }"}</code> | Message shown when the tutorial is completed. |
| <Link id="m-steps-2" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] Steps { get; set; }"}</code> | The tutorial steps in order. |
| <Link id="m-tutorialname-2" /><code>{"string TutorialName { get; set; }"}</code> | Display name of the tutorial. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completedbyplayer" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> CompletedByPlayer"}</code> | Raised when a player completes the tutorial. Achievements and boards listen to it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordcompletedbyplayer" /><code>{"void RecordCompletedByPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: raises `CompletedByPlayer` for the player. Called by the tutorial `ServerController`. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Short text with the tutorial name and step count. |

## Used in

Members of other types that take, return or hold a `MicroTutorialSettings`:

[`MicroTutorialFaceOrb.microTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-microtutorialsettings), [`MicroTutorialFaceOrb.SetTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-settutorialsettings), [`MicroTutorialFaceOrbSaveData.MicroTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata#m-microtutorialsettings), [`MicroTutorialModule.StartTutorial`](/mod/game-api/types/game-other-namespaces/microtutorialmodule#m-starttutorial), [`MicroTutorialOrbSpawner.microTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialorbspawner#m-microtutorialsettings), [`OrbSpawnData.Tutorial`](/mod/game-api/types/game-other-namespaces/orbspawndata#m-tutorial), [`GameTaskManager.OnPlayerCompletedTutorial`](/mod/game-api/types/global-e-h/gametaskmanager#m-onplayercompletedtutorial), [`PlayerTracker.CompletedTutorials`](/mod/game-api/types/global-p/playertracker#m-completedtutorials).
