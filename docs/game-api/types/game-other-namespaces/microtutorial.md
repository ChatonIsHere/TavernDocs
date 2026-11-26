---
title: "MicroTutorial"
description: "Server: one run of a micro tutorial for one player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorial

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Server: one run of a micro tutorial for one player. It moves the player into a private domain, runs the steps in order, and returns them to the overworld when despawned.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IMicroTutorial`](/game-api/types/game-other-namespaces/imicrotutorial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorial("}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem, "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController)"}</code> | Creates a `MicroTutorial` from `settings`, `player`, `tutorialSystem` and `domainController`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadstatus" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/loadingstatus">{"LoadingStatus"}</Link>{" clientLoadStatus"}</code> | Whether the client has acknowledged spawning the tutorial content. |
| <Link id="m-domain" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> | The player's private tutorial domain, created in `CreateDomain`. |
| <Link id="m-domaincontroller" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> | Domain controller used to create the tutorial domain. |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | Micro tutorial logger for this class. |
| <Link id="m-staticlock" /><code>{"private static readonly object staticLock"}</code> | Lock around the instance counter when building `SessionId`. |
| <Link id="m-steps" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> steps"}</code> | The server step instances, one per settings step. |
| <Link id="m-tutorialinstancecount" /><code>{"private static long tutorialInstanceCount"}</code> | Count of tutorials made since start, hashed with the server ID and tutorial name into `SessionId`. |
| <Link id="m-tutorialsystem" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem"}</code> | The micro tutorial system, used for settings and the sync controller. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | The chunk of the tutorial's domain. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity of the tutorial's domain. |
| <Link id="m-isreplay" /><code>{"bool IsReplay { get; }"}</code> | True if the player had already completed this tutorial when it was created. |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | The player taking the tutorial. |
| <Link id="m-sessionid" /><code>{"string SessionId { get; }"}</code> | A hash of the server ID, tutorial name and an instance counter, unique per tutorial run. |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" Settings { get; }"}</code> | The tutorial's settings, including its list of steps. |
| <Link id="m-state" /><code><Link to="/game-api/types/game-other-namespaces/tutorialstate">{"TutorialState"}</Link>{" State { get; private set; }"}</code> | Inactive, Started or Completed. |
| <Link id="m-stepindex" /><code>{"int StepIndex { get; private set; }"}</code> | Index of the current step. |
| <Link id="m-steps-2" /><code>{"IReadOnlyList<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> Steps { get; }"}</code> | The server step instances, one per step in the settings. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The transform of the tutorial's domain. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentstep" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" CurrentStep { get; }"}</code> | The step instance at `StepIndex`. |
| <Link id="m-isfinalstep" /><code>{"private bool IsFinalStep { get; }"}</code> | True when `StepIndex` is the last step. |
| <Link id="m-stepcount" /><code>{"private int StepCount { get; }"}</code> | Number of steps in the settings. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-despawned" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Despawned"}</code> | Raised after the tutorial has been cleaned up. |
| <Link id="m-spawned" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Spawned"}</code> | Raised once the domain is up and the client has finished loading. |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> StepCompleted"}</code> | Raised every time a step finishes, including the last. |
| <Link id="m-tutorialcompleted" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> TutorialCompleted"}</code> | Raised when the final step finishes. Despawning is left to the caller. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"async Task Despawn()"}</code> | Respawns the player at the domain's entry point in the overworld, then despawns step content and destroys the domain. Also runs if the player disconnects. |
| <Link id="m-spawn" /><code>{"async Task Spawn()"}</code> | Docks or drops held items, creates the domain, starts step one and waits for the client to load. Damage to the player is then ignored. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Tutorial name and step progress, for logs. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleanuptutorialcontent" /><code>{"private async Task CleanUpTutorialContent()"}</code> | Despawns and stops every step in reverse order, clears the list and destroys the domain. Called from `Despawn`. |
| <Link id="m-createdomain" /><code>{"private async Task CreateDomain()"}</code> | Asks the domain controller for a private domain for the player and spawns them into it. |
| <Link id="m-createstepinstances" /><code>{"private void CreateStepInstances()"}</code> | Makes a `ServerStepInstance` for each step in the settings and hooks its `StepCompleted`. Called from the constructor. |
| <Link id="m-getstepinfo" /><code>{"private string GetStepInfo()"}</code> | Short state text used by `ToString`, such as how many steps are done. |
| <Link id="m-nextstep" /><code>{"private void NextStep()"}</code> | Increments `StepIndex` and starts that step. |
| <Link id="m-onclientloadcompleted" /><code>{"private void OnClientLoadCompleted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Marks the client load as done when the tutorial's own player reports it; ignores other players. |
| <Link id="m-onplayerdisconnected" /><code>{"private void OnPlayerDisconnected("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Despawns the tutorial when its player disconnects. |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | Raises `TutorialCompleted` on the last step, then `StepCompleted`, then starts the next step if there is one. |
| <Link id="m-ontutorialplayerdamaged" /><code>{"private void OnTutorialPlayerDamaged("}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> | Marks all damage to the player as handled, so they can't be hurt during the tutorial. |
| <Link id="m-prepareplayerfortutorialstart" /><code>{"private void PreparePlayerForTutorialStart()"}</code> | Docks held items to the player's back and drops held items matching the system's drop tags. |
| <Link id="m-returnplayertogame" /><code>{"private async Task ReturnPlayerToGame()"}</code> | Destroys the tutorial controller, removes the save blocker and respawns the player at their entry point in the overworld. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets the state to started and starts the first step. |
| <Link id="m-waitforclientload" /><code>{"private async Task WaitForClientLoad()"}</code> | Polls every 100 ms until the client says it has spawned the first step's content. |

</details>
