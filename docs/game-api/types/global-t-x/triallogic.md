---
title: "TrialLogic"
description: "class TrialLogic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrialLogic

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrialLogic()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-completegracetimer" /><code>{"private float completeGraceTimer"}</code> |  |
| <Link id="m-currentphase" /><code>{"private int currentPhase"}</code> |  |
| <Link id="m-details" /><code>{"private string details"}</code> |  |
| <Link id="m-incompletegracetimer" /><code>{"private float incompleteGraceTimer"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-phases" /><code>{"private "}<Link to="/game-api/types/global-p/phase">{"Phase"}</Link>{"[] phases"}</code> |  |
| <Link id="m-playerdetector" /><code>{"private "}<Link to="/game-api/types/global-p/playerdetect">{"PlayerDetect"}</Link>{" playerDetector"}</code> |  |
| <Link id="m-playerresetposition" /><code>{"private Transform playerResetPosition"}</code> |  |
| <Link id="m-reset" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" reset"}</code> |  |
| <Link id="m-resetsender" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" resetSender"}</code> |  |
| <Link id="m-resetsenderresetdelay" /><code>{"private float resetSenderResetDelay"}</code> |  |
| <Link id="m-toreset" /><code>{"private "}<Link to="/game-api/types/global-i-l/itrialreset">{"ITrialReset"}</Link>{"[] toReset"}</code> |  |
| <Link id="m-trialkey" /><code>{"private string trialKey"}</code> |  |
| <Link id="m-trialparticipants" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> trialParticipants"}</code> |  |
| <Link id="m-trials" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/global-t-x/triallogic">{"TrialLogic"}</Link>{"> trials"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> |  |
| <Link id="m-iscomplete" /><code>{"bool IsComplete { get; }"}</code> |  |
| <Link id="m-participants" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> Participants { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> |  |
| <Link id="m-forceprogress" /><code>{"void ForceProgress()"}</code> |  |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/global-t-x/triallogic">{"TrialLogic"}</Link>{" Get(string key)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-list" /><code>{"static IEnumerable<string> List()"}</code> |  |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> |  |
| <Link id="m-checkreset" /><code>{"private void CheckReset()"}</code> |  |
| <Link id="m-clearresetsender" /><code>{"private void ClearResetSender()"}</code> |  |
| <Link id="m-deregisterplayer" /><code>{"private void DeregisterPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-playerdisconnect" /><code>{"private void PlayerDisconnect("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-progress" /><code>{"private void Progress()"}</code> |  |
| <Link id="m-registerplayer" /><code>{"private void RegisterPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-runresetlogic" /><code>{"private void RunResetLogic()"}</code> |  |
| <Link id="m-startreset" /><code>{"private void StartReset()"}</code> |  |
| <Link id="m-statechange" /><code>{"private void StateChange("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-teleportplayeroutside" /><code>{"private void TeleportPlayerOutside("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
