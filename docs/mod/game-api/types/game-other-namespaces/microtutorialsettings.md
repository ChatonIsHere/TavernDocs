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
| <Link id="m-ctor" /><code>{"MicroTutorialSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-steps" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] steps"}</code> | <span className="api-desc">Backing field for `Steps`.</span> |
| <Link id="m-tutorialname" /><code>{"private string tutorialName"}</code> | <span className="api-desc">Backing field for `TutorialName`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> All { get; }"}</code> | <span className="api-desc">Every micro tutorial asset loaded.</span> |
| <Link id="m-completedmessage" /><code><Link to="/mod/game-api/types/game-other-namespaces/tutorialcompletedmessage">{"TutorialCompletedMessage"}</Link>{" CompletedMessage { get; private set; }"}</code> | <span className="api-desc">Message shown when the tutorial is completed.</span> |
| <Link id="m-steps-2" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{"[] Steps { get; set; }"}</code> | <span className="api-desc">The tutorial steps in order.</span> |
| <Link id="m-tutorialname-2" /><code>{"string TutorialName { get; set; }"}</code> | <span className="api-desc">Display name of the tutorial.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completedbyplayer" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> CompletedByPlayer"}</code> | <span className="api-desc">Raised when a player completes the tutorial. Achievements and boards listen to it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordcompletedbyplayer" /><code>{"void RecordCompletedByPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: raises `CompletedByPlayer` for the player. Called by the tutorial `ServerController`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Short text with the tutorial name and step count.</span> |

## Used in

Members of other types that take, return or hold a `MicroTutorialSettings`:

<div className="api-used-in">

[`MicroTutorialFaceOrb.microTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-microtutorialsettings), [`MicroTutorialFaceOrb.SetTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-settutorialsettings), [`MicroTutorialFaceOrbSaveData.MicroTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata#m-microtutorialsettings), [`MicroTutorialModule.StartTutorial`](/mod/game-api/types/game-other-namespaces/microtutorialmodule#m-starttutorial), [`MicroTutorialOrbSpawner.microTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialorbspawner#m-microtutorialsettings), [`OrbSpawnData.Tutorial`](/mod/game-api/types/game-other-namespaces/orbspawndata#m-tutorial), [`GameTaskManager.OnPlayerCompletedTutorial`](/mod/game-api/types/global-e-h/gametaskmanager#m-onplayercompletedtutorial), [`PlayerTracker.CompletedTutorials`](/mod/game-api/types/global-p/playertracker#m-completedtutorials).

</div>
