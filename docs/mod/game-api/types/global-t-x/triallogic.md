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
| <Link id="m-ctor" /><code>{"TrialLogic()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completegracetimer" /><code>{"private float completeGraceTimer"}</code> | Seconds to wait before resetting an empty, completed trial. |
| <Link id="m-currentphase" /><code>{"private int currentPhase"}</code> | Index of the current phase, or -1 when inactive. |
| <Link id="m-details" /><code>{"private string details"}</code> | Free text notes for designers. |
| <Link id="m-incompletegracetimer" /><code>{"private float incompleteGraceTimer"}</code> | Seconds to wait before resetting an empty trial that was not finished (default 300). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for trial events. |
| <Link id="m-phases" /><code>{"private "}<Link to="/mod/game-api/types/global-p/phase">{"Phase"}</Link>{"[] phases"}</code> | The trial's phases, run in order. |
| <Link id="m-playerdetector" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerdetect">{"PlayerDetect"}</Link>{" playerDetector"}</code> | Area detector that adds and removes participants. |
| <Link id="m-playerresetposition" /><code>{"private Transform playerResetPosition"}</code> | Where disconnecting players are teleported to. |
| <Link id="m-reset" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" reset"}</code> | Pending grace timer entry, or null. |
| <Link id="m-resetsender" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" resetSender"}</code> | Logic bool sender pulsed true then false to reset the trial's logic. |
| <Link id="m-resetsenderresetdelay" /><code>{"private float resetSenderResetDelay"}</code> | Seconds the reset sender stays true. |
| <Link id="m-toreset" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itrialreset">{"ITrialReset"}</Link>{"[] toReset"}</code> | `ITrialReset` components found under this object when the trial began. |
| <Link id="m-trialkey" /><code>{"private string trialKey"}</code> | This trial's key in the active list (its chunk identifier), or null. |
| <Link id="m-trialparticipants" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> trialParticipants"}</code> | Backing set for `Participants`. |
| <Link id="m-trials" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/triallogic">{"TrialLogic"}</Link>{"> trials"}</code> | Static lookup of active trials by key. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | True once a phase has started and until the trial is reset. |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; }"}</code> | Meant to be true after the last phase, but it checks `currentPhase` greater than the phase count, which `Progress` never reaches. |
| <Link id="m-participants" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Participants { get; }"}</code> | Players currently registered in the trial. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> | Starts the trial: force-loads the chunk, registers players in the area, records it under the chunk identifier, fires `TrialStarted` and enters the first phase. |
| <Link id="m-forceprogress" /><code>{"void ForceProgress()"}</code> | Skips to the next phase if the trial is active. |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/triallogic">{"TrialLogic"}</Link>{" Get(string key)"}</code> | Returns the active trial with the given key (chunk identifier), or null. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: pulses the reset sender so the trial starts from a clean state. |
| <Link id="m-list" /><code>{"static IEnumerable<string> List()"}</code> | Keys (chunk identifiers) of all active trials. |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> | Resets every phase and every `ITrialReset` child, drops all participants and pulses the reset sender. Only acts while active. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkreset" /><code>{"private void CheckReset()"}</code> | Runs after the grace timer and resets the trial if nobody has come back. |
| <Link id="m-clearresetsender" /><code>{"private void ClearResetSender()"}</code> | Sets the reset sender back to false and stops force-loading the chunk. |
| <Link id="m-deregisterplayer" /><code>{"private void DeregisterPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Removes a participant and unhooks their events; starts the reset grace timer if the trial is active and now empty. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the trial from the active list if destroyed while active, logging an error. |
| <Link id="m-playerdisconnect" /><code>{"private void PlayerDisconnect("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Removes a disconnecting player and teleports them to `playerResetPosition`. |
| <Link id="m-progress" /><code>{"private void Progress()"}</code> | Completes the current phase and begins the next; fires `TrialFinished` after the last. Resets instead if there are no participants. |
| <Link id="m-registerplayer" /><code>{"private void RegisterPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Adds a participant, cancels any pending reset and watches for their death and disconnect. |
| <Link id="m-runresetlogic" /><code>{"private void RunResetLogic()"}</code> | Sets the reset sender to true, then clears it after `resetSenderResetDelay` seconds. |
| <Link id="m-startreset" /><code>{"private void StartReset()"}</code> | Starts the grace timer (`completeGraceTimer` or `incompleteGraceTimer`) before `CheckReset` runs. |
| <Link id="m-statechange" /><code>{"private void StateChange("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Removes a participant when they die. |
| <Link id="m-teleportplayeroutside" /><code>{"private void TeleportPlayerOutside("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Moves a player to `playerResetPosition`, logging an error if it is not set. |

</details>
