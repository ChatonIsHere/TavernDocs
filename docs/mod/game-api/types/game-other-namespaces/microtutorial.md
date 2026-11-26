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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IMicroTutorial`](/mod/game-api/types/game-other-namespaces/imicrotutorial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorial("}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem, "}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController)"}</code> | <span className="api-desc">Creates a `MicroTutorial` from `settings`, `player`, `tutorialSystem` and `domainController`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadstatus" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/loadingstatus">{"LoadingStatus"}</Link>{" clientLoadStatus"}</code> | <span className="api-desc">Whether the client has acknowledged spawning the tutorial content.</span> |
| <Link id="m-domain" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> | <span className="api-desc">The player's private tutorial domain, created in `CreateDomain`.</span> |
| <Link id="m-domaincontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> | <span className="api-desc">Domain controller used to create the tutorial domain.</span> |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | <span className="api-desc">Micro tutorial logger for this class.</span> |
| <Link id="m-staticlock" /><code>{"private static readonly object staticLock"}</code> | <span className="api-desc">Lock around the instance counter when building `SessionId`.</span> |
| <Link id="m-steps" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> steps"}</code> | <span className="api-desc">The server step instances, one per settings step.</span> |
| <Link id="m-tutorialinstancecount" /><code>{"private static long tutorialInstanceCount"}</code> | <span className="api-desc">Count of tutorials made since start, hashed with the server ID and tutorial name into `SessionId`.</span> |
| <Link id="m-tutorialsystem" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem"}</code> | <span className="api-desc">The micro tutorial system, used for settings and the sync controller.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | <span className="api-desc">The chunk of the tutorial's domain.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity of the tutorial's domain.</span> |
| <Link id="m-isreplay" /><code>{"bool IsReplay { get; }"}</code> | <span className="api-desc">True if the player had already completed this tutorial when it was created.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The player taking the tutorial.</span> |
| <Link id="m-sessionid" /><code>{"string SessionId { get; }"}</code> | <span className="api-desc">A hash of the server ID, tutorial name and an instance counter, unique per tutorial run.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The tutorial's settings, including its list of steps.</span> |
| <Link id="m-state" /><code><Link to="/mod/game-api/types/game-other-namespaces/tutorialstate">{"TutorialState"}</Link>{" State { get; private set; }"}</code> | <span className="api-desc">Inactive, Started or Completed.</span> |
| <Link id="m-stepindex" /><code>{"int StepIndex { get; private set; }"}</code> | <span className="api-desc">Index of the current step.</span> |
| <Link id="m-steps-2" /><code>{"IReadOnlyList<"}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> Steps { get; }"}</code> | <span className="api-desc">The server step instances, one per step in the settings.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The transform of the tutorial's domain.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentstep" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" CurrentStep { get; }"}</code> | <span className="api-desc">The step instance at `StepIndex`.</span> |
| <Link id="m-isfinalstep" /><code>{"private bool IsFinalStep { get; }"}</code> | <span className="api-desc">True when `StepIndex` is the last step.</span> |
| <Link id="m-stepcount" /><code>{"private int StepCount { get; }"}</code> | <span className="api-desc">Number of steps in the settings.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-despawned" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Despawned"}</code> | <span className="api-desc">Raised after the tutorial has been cleaned up.</span> |
| <Link id="m-spawned" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> Spawned"}</code> | <span className="api-desc">Raised once the domain is up and the client has finished loading.</span> |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> StepCompleted"}</code> | <span className="api-desc">Raised every time a step finishes, including the last.</span> |
| <Link id="m-tutorialcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{"> TutorialCompleted"}</code> | <span className="api-desc">Raised when the final step finishes. Despawning is left to the caller.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"async Task Despawn()"}</code> | <span className="api-desc">Respawns the player at the domain's entry point in the overworld, then despawns step content and destroys the domain. Also runs if the player disconnects.</span> |
| <Link id="m-spawn" /><code>{"async Task Spawn()"}</code> | <span className="api-desc">Docks or drops held items, creates the domain, starts step one and waits for the client to load. Damage to the player is then ignored.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Tutorial name and step progress, for logs.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleanuptutorialcontent" /><code>{"private async Task CleanUpTutorialContent()"}</code> | <span className="api-desc">Despawns and stops every step in reverse order, clears the list and destroys the domain. Called from `Despawn`.</span> |
| <Link id="m-createdomain" /><code>{"private async Task CreateDomain()"}</code> | <span className="api-desc">Asks the domain controller for a private domain for the player and spawns them into it.</span> |
| <Link id="m-createstepinstances" /><code>{"private void CreateStepInstances()"}</code> | <span className="api-desc">Makes a `ServerStepInstance` for each step in the settings and hooks its `StepCompleted`. Called from the constructor.</span> |
| <Link id="m-getstepinfo" /><code>{"private string GetStepInfo()"}</code> | <span className="api-desc">Short state text used by `ToString`, such as how many steps are done.</span> |
| <Link id="m-nextstep" /><code>{"private void NextStep()"}</code> | <span className="api-desc">Increments `StepIndex` and starts that step.</span> |
| <Link id="m-onclientloadcompleted" /><code>{"private void OnClientLoadCompleted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Marks the client load as done when the tutorial's own player reports it; ignores other players.</span> |
| <Link id="m-onplayerdisconnected" /><code>{"private void OnPlayerDisconnected("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Despawns the tutorial when its player disconnects.</span> |
| <Link id="m-onstepcompleted" /><code>{"private void OnStepCompleted("}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | <span className="api-desc">Raises `TutorialCompleted` on the last step, then `StepCompleted`, then starts the next step if there is one.</span> |
| <Link id="m-ontutorialplayerdamaged" /><code>{"private void OnTutorialPlayerDamaged("}<Link to="/mod/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> | <span className="api-desc">Marks all damage to the player as handled, so they can't be hurt during the tutorial.</span> |
| <Link id="m-prepareplayerfortutorialstart" /><code>{"private void PreparePlayerForTutorialStart()"}</code> | <span className="api-desc">Docks held items to the player's back and drops held items matching the system's drop tags.</span> |
| <Link id="m-returnplayertogame" /><code>{"private async Task ReturnPlayerToGame()"}</code> | <span className="api-desc">Destroys the tutorial controller, removes the save blocker and respawns the player at their entry point in the overworld.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets the state to started and starts the first step.</span> |
| <Link id="m-waitforclientload" /><code>{"private async Task WaitForClientLoad()"}</code> | <span className="api-desc">Polls every 100 ms until the client says it has spawned the first step's content.</span> |

</details>
