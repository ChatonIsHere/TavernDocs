---
title: "TrialLogic"
description: "Server: runs a trial (a challenge area) as a list of phases, tracking the players inside and resetting everything after they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrialLogic

A **class** in `Root.Township`, the global namespace.

Server: runs a trial (a challenge area) as a list of phases, tracking the players inside and resetting everything after they leave. Active trials are listed by chunk identifier through `Get` and `List`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrialLogic()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completegracetimer" /><code>{"private float completeGraceTimer"}</code> | <span className="api-desc">Seconds to wait before resetting an empty, completed trial.</span> |
| <Link id="m-currentphase" /><code>{"private int currentPhase"}</code> | <span className="api-desc">Index of the current phase, or -1 when inactive.</span> |
| <Link id="m-details" /><code>{"private string details"}</code> | <span className="api-desc">Free text notes for designers.</span> |
| <Link id="m-incompletegracetimer" /><code>{"private float incompleteGraceTimer"}</code> | <span className="api-desc">Seconds to wait before resetting an empty trial that was not finished (default 300).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for trial events.</span> |
| <Link id="m-phases" /><code>{"private "}<Link to="/mod/game-api/types/global-p/phase">{"Phase"}</Link>{"[] phases"}</code> | <span className="api-desc">The trial's phases, run in order.</span> |
| <Link id="m-playerdetector" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerdetect">{"PlayerDetect"}</Link>{" playerDetector"}</code> | <span className="api-desc">Area detector that adds and removes participants.</span> |
| <Link id="m-playerresetposition" /><code>{"private Transform playerResetPosition"}</code> | <span className="api-desc">Where disconnecting players are teleported to.</span> |
| <Link id="m-reset" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" reset"}</code> | <span className="api-desc">Pending grace timer entry, or null.</span> |
| <Link id="m-resetsender" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" resetSender"}</code> | <span className="api-desc">Logic bool sender pulsed true then false to reset the trial's logic.</span> |
| <Link id="m-resetsenderresetdelay" /><code>{"private float resetSenderResetDelay"}</code> | <span className="api-desc">Seconds the reset sender stays true.</span> |
| <Link id="m-toreset" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itrialreset">{"ITrialReset"}</Link>{"[] toReset"}</code> | <span className="api-desc">`ITrialReset` components found under this object when the trial began.</span> |
| <Link id="m-trialkey" /><code>{"private string trialKey"}</code> | <span className="api-desc">This trial's key in the active list (its chunk identifier), or null.</span> |
| <Link id="m-trialparticipants" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> trialParticipants"}</code> | <span className="api-desc">Backing set for `Participants`.</span> |
| <Link id="m-trials" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/triallogic">{"TrialLogic"}</Link>{"> trials"}</code> | <span className="api-desc">Static lookup of active trials by key.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">True once a phase has started and until the trial is reset.</span> |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; }"}</code> | <span className="api-desc">Meant to be true after the last phase, but it checks `currentPhase` greater than the phase count, which `Progress` never reaches.</span> |
| <Link id="m-participants" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Participants { get; }"}</code> | <span className="api-desc">Players currently registered in the trial.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> | <span className="api-desc">Starts the trial: force-loads the chunk, registers players in the area, records it under the chunk identifier, fires `TrialStarted` and enters the first phase.</span> |
| <Link id="m-forceprogress" /><code>{"void ForceProgress()"}</code> | <span className="api-desc">Skips to the next phase if the trial is active.</span> |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/triallogic">{"TrialLogic"}</Link>{" Get(string key)"}</code> | <span className="api-desc">Returns the active trial with the given key (chunk identifier), or null.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: pulses the reset sender so the trial starts from a clean state.</span> |
| <Link id="m-list" /><code>{"static IEnumerable<string> List()"}</code> | <span className="api-desc">Keys (chunk identifiers) of all active trials.</span> |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> | <span className="api-desc">Resets every phase and every `ITrialReset` child, drops all participants and pulses the reset sender. Only acts while active.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkreset" /><code>{"private void CheckReset()"}</code> | <span className="api-desc">Runs after the grace timer and resets the trial if nobody has come back.</span> |
| <Link id="m-clearresetsender" /><code>{"private void ClearResetSender()"}</code> | <span className="api-desc">Sets the reset sender back to false and stops force-loading the chunk.</span> |
| <Link id="m-deregisterplayer" /><code>{"private void DeregisterPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Removes a participant and unhooks their events; starts the reset grace timer if the trial is active and now empty.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the trial from the active list if destroyed while active, logging an error.</span> |
| <Link id="m-playerdisconnect" /><code>{"private void PlayerDisconnect("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Removes a disconnecting player and teleports them to `playerResetPosition`.</span> |
| <Link id="m-progress" /><code>{"private void Progress()"}</code> | <span className="api-desc">Completes the current phase and begins the next; fires `TrialFinished` after the last. Resets instead if there are no participants.</span> |
| <Link id="m-registerplayer" /><code>{"private void RegisterPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Adds a participant, cancels any pending reset and watches for their death and disconnect.</span> |
| <Link id="m-runresetlogic" /><code>{"private void RunResetLogic()"}</code> | <span className="api-desc">Sets the reset sender to true, then clears it after `resetSenderResetDelay` seconds.</span> |
| <Link id="m-startreset" /><code>{"private void StartReset()"}</code> | <span className="api-desc">Starts the grace timer (`completeGraceTimer` or `incompleteGraceTimer`) before `CheckReset` runs.</span> |
| <Link id="m-statechange" /><code>{"private void StateChange("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Removes a participant when they die.</span> |
| <Link id="m-teleportplayeroutside" /><code>{"private void TeleportPlayerOutside("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Moves a player to `playerResetPosition`, logging an error if it is not set.</span> |

</details>
