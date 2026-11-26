---
title: "IMicroTutorial"
description: "Server: one run of a micro tutorial for one player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMicroTutorial

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

Server: one run of a micro tutorial for one player. It moves the player into a tutorial domain, runs the steps in order and brings them back afterwards. `MicroTutorial` is the implementation.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`MicroTutorial`](/mod/game-api/types/game-other-namespaces/microtutorial)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | Location chunk the tutorial content is in. |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The tutorial's network entity, which step content loads into. |
| <Link id="m-isreplay" /><code>{"bool IsReplay { get; }"}</code> | True if the player had already completed this tutorial when the run was created. |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | The player doing the tutorial. |
| <Link id="m-sessionid" /><code>{"string SessionId { get; }"}</code> | Hash identifying this run, from the server id, tutorial name and a counter. Used in analytics. |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" Settings { get; }"}</code> | The tutorial's settings, including its steps. |
| <Link id="m-state" /><code><Link to="/mod/game-api/types/game-other-namespaces/tutorialstate">{"TutorialState"}</Link>{" State { get; }"}</code> | Inactive, started or completed. |
| <Link id="m-stepindex" /><code>{"int StepIndex { get; }"}</code> | Index of the current step. |
| <Link id="m-steps" /><code>{"IReadOnlyList<"}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> Steps { get; }"}</code> | The step instances, one per step in the settings. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | Transform of the tutorial content. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-despawned" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Despawned"}</code> | Raised after `Despawn` finishes. |
| <Link id="m-spawned" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Spawned"}</code> | Raised once the tutorial has spawned and the client has loaded. |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> StepCompleted"}</code> | Raised after each step completes. |
| <Link id="m-tutorialcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> TutorialCompleted"}</code> | Raised when the final step completes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"Task Despawn()"}</code> | Respawns the player back in the overworld and cleans up the tutorial content. |
| <Link id="m-spawn" /><code>{"Task Spawn()"}</code> | Docks or drops held items, moves the player into the tutorial domain, starts the first step and waits for the client to load. |

## Used in

Members of other types that take, return or hold a `IMicroTutorial`:

[`IMicroTutorialFactory.CreateTutorial`](/mod/game-api/types/game-other-namespaces/imicrotutorialfactory#m-createtutorial), [`IServerStepInstance.Tutorial`](/mod/game-api/types/game-other-namespaces/iserverstepinstance#m-tutorial), [`MicroTutorial.Despawned`](/mod/game-api/types/game-other-namespaces/microtutorial#m-despawned), [`MicroTutorial.Spawned`](/mod/game-api/types/game-other-namespaces/microtutorial#m-spawned), [`MicroTutorial.StepCompleted`](/mod/game-api/types/game-other-namespaces/microtutorial#m-stepcompleted), [`MicroTutorial.TutorialCompleted`](/mod/game-api/types/game-other-namespaces/microtutorial#m-tutorialcompleted), [`MicroTutorialAnalyticsEvent.GetCurrentStepData`](/mod/game-api/types/game-other-namespaces/microtutorialanalyticsevent#m-getcurrentstepdata), [`MicroTutorialAnalyticsEvent.MicroTutorialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/microtutorialanalyticsevent#m-ctor), [`MicroTutorialFactory.CreateTutorial`](/mod/game-api/types/game-other-namespaces/microtutorialfactory#m-createtutorial), [`MicroTutorialModule.GetActiveTutorialForPlayer`](/mod/game-api/types/game-other-namespaces/microtutorialmodule#m-getactivetutorialforplayer), [`ServerController.activeTutorialMap`](/mod/game-api/types/game-other-namespaces/servercontroller#m-activetutorialmap), [`ServerController.ActiveTutorials`](/mod/game-api/types/game-other-namespaces/servercontroller#m-activetutorials), [`ServerController.OnStepCompleted`](/mod/game-api/types/game-other-namespaces/servercontroller#m-onstepcompleted), [`ServerController.OnTutorialCompleted`](/mod/game-api/types/game-other-namespaces/servercontroller#m-ontutorialcompleted), [`ServerController.OnTutorialDespawned`](/mod/game-api/types/game-other-namespaces/servercontroller#m-ontutorialdespawned), [`ServerController.OnTutorialSpawned`](/mod/game-api/types/game-other-namespaces/servercontroller#m-ontutorialspawned), [`ServerController.SendAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/servercontroller#m-sendanalyticsevent), [`ServerStepInstance.ServerStepInstance`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`ServerStepInstance.Tutorial`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-tutorial).
