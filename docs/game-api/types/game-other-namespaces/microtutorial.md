---
title: "MicroTutorial"
description: "class MicroTutorial in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorial

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IMicroTutorial`](/game-api/types/game-other-namespaces/imicrotutorial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorial("}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem, "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadstatus" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/loadingstatus">{"LoadingStatus"}</Link>{" clientLoadStatus"}</code> |  |
| <Link id="m-domain" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> |  |
| <Link id="m-domaincontroller" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |  |
| <Link id="m-staticlock" /><code>{"private static readonly object staticLock"}</code> |  |
| <Link id="m-steps" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> steps"}</code> |  |
| <Link id="m-tutorialinstancecount" /><code>{"private static long tutorialInstanceCount"}</code> |  |
| <Link id="m-tutorialsystem" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-isreplay" /><code>{"bool IsReplay { get; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> |  |
| <Link id="m-sessionid" /><code>{"string SessionId { get; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-state" /><code><Link to="/game-api/types/game-other-namespaces/tutorialstate">{"TutorialState"}</Link>{" State { get; private set; }"}</code> |  |
| <Link id="m-stepindex" /><code>{"int StepIndex { get; private set; }"}</code> |  |
| <Link id="m-steps-2" /><code>{"IReadOnlyList<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> Steps { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |
| <Link id="m-currentstep" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" CurrentStep { get; }"}</code> |  |
| <Link id="m-isfinalstep" /><code>{"private bool IsFinalStep { get; }"}</code> |  |
| <Link id="m-stepcount" /><code>{"private int StepCount { get; }"}</code> |  |

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
| <Link id="m-despawn" /><code>{"async Task Despawn()"}</code> |  |
| <Link id="m-spawn" /><code>{"async Task Spawn()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-cleanuptutorialcontent" /><code>{"private async Task CleanUpTutorialContent()"}</code> |  |
| <Link id="m-createdomain" /><code>{"private async Task CreateDomain()"}</code> |  |
| <Link id="m-createstepinstances" /><code>{"private void CreateStepInstances()"}</code> |  |
| <Link id="m-getstepinfo" /><code>{"private string GetStepInfo()"}</code> |  |
| <Link id="m-nextstep" /><code>{"private void NextStep()"}</code> |  |
| <Link id="m-onclientloadcompleted" /><code>{"private void OnClientLoadCompleted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-onplayerdisconnected" /><code>{"private void OnPlayerDisconnected("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> |  |
| <Link id="m-ontutorialplayerdamaged" /><code>{"private void OnTutorialPlayerDamaged("}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> |  |
| <Link id="m-prepareplayerfortutorialstart" /><code>{"private void PreparePlayerForTutorialStart()"}</code> |  |
| <Link id="m-returnplayertogame" /><code>{"private async Task ReturnPlayerToGame()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-waitforclientload" /><code>{"private async Task WaitForClientLoad()"}</code> |  |
