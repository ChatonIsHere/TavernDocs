---
title: "ServerController"
description: "class ServerController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerController

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerController("}<Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialfactory">{"IMicroTutorialFactory"}</Link>{" tutorialFactory, "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activetutorialmap" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> activeTutorialMap"}</code> |  |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |  |
| <Link id="m-synccontroller" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" syncController"}</code> |  |
| <Link id="m-tutorialfactory" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialfactory">{"IMicroTutorialFactory"}</Link>{" tutorialFactory"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetutorials" /><code>{"IReadOnlyDictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> ActiveTutorials { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawntutorial" /><code>{"async Task DespawnTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-spawntutorial" /><code>{"async Task SpawnTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> |  |
| <Link id="m-ontutorialcompleted" /><code>{"private void OnTutorialCompleted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> |  |
| <Link id="m-ontutorialdespawned" /><code>{"private void OnTutorialDespawned("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> |  |
| <Link id="m-ontutorialspawned" /><code>{"private void OnTutorialSpawned("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> |  |
| <Link id="m-sendanalyticsevent" /><code>{"private void SendAnalyticsEvent(string eventName, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-validateplayercanstartnewtutorial" /><code>{"private IResult ValidatePlayerCanStartNewTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerController`:

[`IMicroTutorialSystem.ServerController`](/game-api/types/game-other-namespaces/imicrotutorialsystem#m-servercontroller), [`MicroTutorialSystem.ServerController`](/game-api/types/game-other-namespaces/microtutorialsystem#m-servercontroller).
