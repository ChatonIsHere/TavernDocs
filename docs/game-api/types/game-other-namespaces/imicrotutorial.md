---
title: "IMicroTutorial"
description: "interface IMicroTutorial in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMicroTutorial

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-isreplay" /><code>{"bool IsReplay { get; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> |  |
| <Link id="m-sessionid" /><code>{"string SessionId { get; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-state" /><code><Link to="/game-api/types/game-other-namespaces/tutorialstate">{"TutorialState"}</Link>{" State { get; }"}</code> |  |
| <Link id="m-stepindex" /><code>{"int StepIndex { get; }"}</code> |  |
| <Link id="m-steps" /><code>{"IReadOnlyList<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> Steps { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-despawned" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Despawned"}</code> |  |
| <Link id="m-spawned" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Spawned"}</code> |  |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> StepCompleted"}</code> |  |
| <Link id="m-tutorialcompleted" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> TutorialCompleted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"Task Despawn()"}</code> |  |
| <Link id="m-spawn" /><code>{"Task Spawn()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IMicroTutorial`:

[`IMicroTutorialFactory.CreateTutorial`](/game-api/types/game-other-namespaces/imicrotutorialfactory#m-createtutorial), [`IServerStepInstance.Tutorial`](/game-api/types/game-other-namespaces/iserverstepinstance#m-tutorial), [`MicroTutorial.Despawned`](/game-api/types/game-other-namespaces/microtutorial#m-despawned), [`MicroTutorial.Spawned`](/game-api/types/game-other-namespaces/microtutorial#m-spawned), [`MicroTutorial.StepCompleted`](/game-api/types/game-other-namespaces/microtutorial#m-stepcompleted), [`MicroTutorial.TutorialCompleted`](/game-api/types/game-other-namespaces/microtutorial#m-tutorialcompleted), [`MicroTutorialAnalyticsEvent.GetCurrentStepData`](/game-api/types/game-other-namespaces/microtutorialanalyticsevent#m-getcurrentstepdata), [`MicroTutorialAnalyticsEvent.MicroTutorialAnalyticsEvent`](/game-api/types/game-other-namespaces/microtutorialanalyticsevent#m-ctor), [`MicroTutorialFactory.CreateTutorial`](/game-api/types/game-other-namespaces/microtutorialfactory#m-createtutorial), [`MicroTutorialModule.GetActiveTutorialForPlayer`](/game-api/types/game-other-namespaces/microtutorialmodule#m-getactivetutorialforplayer), [`ServerController.activeTutorialMap`](/game-api/types/game-other-namespaces/servercontroller#m-activetutorialmap), [`ServerController.ActiveTutorials`](/game-api/types/game-other-namespaces/servercontroller#m-activetutorials), [`ServerController.OnStepCompleted`](/game-api/types/game-other-namespaces/servercontroller#m-onstepcompleted), [`ServerController.OnTutorialCompleted`](/game-api/types/game-other-namespaces/servercontroller#m-ontutorialcompleted), [`ServerController.OnTutorialDespawned`](/game-api/types/game-other-namespaces/servercontroller#m-ontutorialdespawned), [`ServerController.OnTutorialSpawned`](/game-api/types/game-other-namespaces/servercontroller#m-ontutorialspawned), [`ServerController.SendAnalyticsEvent`](/game-api/types/game-other-namespaces/servercontroller#m-sendanalyticsevent), [`ServerStepInstance.ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`ServerStepInstance.Tutorial`](/game-api/types/game-other-namespaces/serverstepinstance#m-tutorial).
