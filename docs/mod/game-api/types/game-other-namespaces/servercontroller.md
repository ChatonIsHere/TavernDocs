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
| <Link id="m-ctor" /><code>{"ServerController("}<Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialfactory">{"IMicroTutorialFactory"}</Link>{" tutorialFactory, "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetutorialmap" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> activeTutorialMap"}</code> | <span className="api-desc">Backing map for `ActiveTutorials`.</span> |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service events are sent to.</span> |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | <span className="api-desc">Micro tutorial logger.</span> |
| <Link id="m-synccontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController"}</code> | <span className="api-desc">Sync controller used to tell clients to clear steps.</span> |
| <Link id="m-tutorialfactory" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialfactory">{"IMicroTutorialFactory"}</Link>{" tutorialFactory"}</code> | <span className="api-desc">Factory that creates tutorial instances.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetutorials" /><code>{"IReadOnlyDictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> ActiveTutorials { get; }"}</code> | <span className="api-desc">The tutorial each player is in now.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawntutorial" /><code>{"async Task DespawnTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Ends the player's current tutorial. Logs an error if they are not in one.</span> |
| <Link id="m-spawntutorial" /><code>{"async Task SpawnTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Validates the player, creates the tutorial from settings, hooks its events and spawns it.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | <span className="api-desc">Sends the step completed analytics event.</span> |
| <Link id="m-ontutorialcompleted" /><code>{"private void OnTutorialCompleted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | <span className="api-desc">Records that the player completed this tutorial.</span> |
| <Link id="m-ontutorialdespawned" /><code>{"private void OnTutorialDespawned("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | <span className="api-desc">Removes the player's active tutorial, tells their client to clear steps and sends the exit event.</span> |
| <Link id="m-ontutorialspawned" /><code>{"private void OnTutorialSpawned("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | <span className="api-desc">Stores the tutorial as the player's active one and sends the enter event.</span> |
| <Link id="m-sendanalyticsevent" /><code>{"private void SendAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sends a micro tutorial analytics event with the given name.</span> |
| <Link id="m-validateplayercanstartnewtutorial" /><code>{"private IResult ValidatePlayerCanStartNewTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Fails if the player is already in a tutorial, not in a savable state, or not in the Playing or Spirit state.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerController`:

<div className="api-used-in">

[`IMicroTutorialSystem.ServerController`](/mod/game-api/types/game-other-namespaces/imicrotutorialsystem#m-servercontroller), [`MicroTutorialSystem.ServerController`](/mod/game-api/types/game-other-namespaces/microtutorialsystem#m-servercontroller).

</div>
