---
title: "ServerController"
description: "Server side of micro tutorials: starts and ends a tutorial per player, tracks the active ones and sends analytics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerController

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Server side of micro tutorials: starts and ends a tutorial per player, tracks the active ones and sends analytics. Created by `MicroTutorialSystem`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerController("}<Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialfactory">{"IMicroTutorialFactory"}</Link>{" tutorialFactory, "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Built by the game's dependency injection (VContainer), which passes the services in. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetutorialmap" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> activeTutorialMap"}</code> | Backing map for `ActiveTutorials`. |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service events are sent to. |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | Micro tutorial logger. |
| <Link id="m-synccontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController"}</code> | Sync controller used to tell clients to clear steps. |
| <Link id="m-tutorialfactory" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialfactory">{"IMicroTutorialFactory"}</Link>{" tutorialFactory"}</code> | Factory that creates tutorial instances. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetutorials" /><code>{"IReadOnlyDictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> ActiveTutorials { get; }"}</code> | The tutorial each player is in now. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawntutorial" /><code>{"async Task DespawnTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Ends the player's current tutorial. Logs an error if they are not in one. |
| <Link id="m-spawntutorial" /><code>{"async Task SpawnTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings)"}</code> | Validates the player, creates the tutorial from settings, hooks its events and spawns it. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | Sends the step completed analytics event. |
| <Link id="m-ontutorialcompleted" /><code>{"private void OnTutorialCompleted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | Records that the player completed this tutorial. |
| <Link id="m-ontutorialdespawned" /><code>{"private void OnTutorialDespawned("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | Removes the player's active tutorial, tells their client to clear steps and sends the exit event. |
| <Link id="m-ontutorialspawned" /><code>{"private void OnTutorialSpawned("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | Stores the tutorial as the player's active one and sends the enter event. |
| <Link id="m-sendanalyticsevent" /><code>{"private void SendAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sends a micro tutorial analytics event with the given name. |
| <Link id="m-validateplayercanstartnewtutorial" /><code>{"private IResult ValidatePlayerCanStartNewTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Fails if the player is already in a tutorial, not in a savable state, or not in the Playing or Spirit state. |

</details>

## Used in

Members of other types that take, return or hold a `ServerController`:

[`IMicroTutorialSystem.ServerController`](/mod/game-api/types/game-other-namespaces/imicrotutorialsystem#m-servercontroller), [`MicroTutorialSystem.ServerController`](/mod/game-api/types/game-other-namespaces/microtutorialsystem#m-servercontroller).
