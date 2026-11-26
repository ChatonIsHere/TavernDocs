---
title: "PlayerUnlockStation"
description: "A station in a climbing challenge (PlayerUnlock): start, orb checkpoint, completion, or a permanent unlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStation

A **class** in `Root.Township`, no namespace.

A station in a climbing challenge (`PlayerUnlock`): start, orb checkpoint, completion, or a permanent unlock. Server side; touching it sets the player's checkpoint and adds its orb.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerUnlockStationSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerUnlockStationSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerUnlockStationSaveData`](/game-api/types/global-p/playerunlockstationsavedata)
- **Nested types** [`InteractionInfo`](/game-api/types/global-p/playerunlockstation-interactioninfo), [`NetworkEffect`](/game-api/types/global-p/playerunlockstation-networkeffect), [`UnlockStationType`](/game-api/types/global-p/playerunlockstation-unlockstationtype)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockStation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Injected analytics service. |
| <Link id="m-climbingunlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" climbingUnlock"}</code> | The `PlayerUnlock` (challenge) this station belongs to. |
| <Link id="m-cooldown" /><code>{"private float cooldown"}</code> | Seconds between interactions with the station. Defaults to 1. |
| <Link id="m-cooldownendtime" /><code>{"private float cooldownEndTime"}</code> | Time the cooldown ends. |
| <Link id="m-handhover" /><code>{"private "}<Link to="/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{" handHover"}</code> | Hand hover point the player charges to use the station; its activation calls `Interact` on the server. |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | Interactable whose filter decides who can use the station. |
| <Link id="m-interactiondelay" /><code>{"private float interactionDelay"}</code> | Seconds the server waits after activation before handling it. |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-orbindex" /><code>{"private int orbIndex"}</code> | Backing field for `OrbIndex`; -1 for no orb. |
| <Link id="m-orbparent" /><code>{"private Transform orbParent"}</code> | Where the orb model is placed. |
| <Link id="m-stationtype" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockstation-unlockstationtype">{"PlayerUnlockStation.UnlockStationType"}</Link>{" stationType"}</code> | Backing field for `StationType`. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-p/playerunlockstation-networkeffect">{"PlayerUnlockStation.NetworkEffect"}</Link>{"> syncEffect"}</code> | Method sync for station effects. |
| <Link id="m-syncinteractioninfotoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-p/playerunlockstation-interactioninfo">{"PlayerUnlockStation.InteractionInfo"}</Link>{"> syncInteractionInfoToClient"}</code> | Method sync for interaction results. |
| <Link id="m-syncsavedatatoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveDataToClient"}</code> | Method sync for the station setup. |
| <Link id="m-triggeredcancelled" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggeredCancelled"}</code> | Event played when a challenge is cancelled. |
| <Link id="m-triggeredcomplete" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggeredComplete"}</code> | Event played when a challenge is completed. |
| <Link id="m-triggeredunlock" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggeredUnlock"}</code> | Event played when an orb is collected. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orbindex-2" /><code>{"int OrbIndex { get; }"}</code> | Orb this station gives, or -1. Normal stations need the previous orb before you can use them. |
| <Link id="m-stationtype-2" /><code><Link to="/game-api/types/global-p/playerunlockstation-unlockstationtype">{"PlayerUnlockStation.UnlockStationType"}</Link>{" StationType { get; }"}</code> | Normal, Start, Completion or Unlock. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up sync messages and the interaction filter. Clients set up the hand hover hint. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: spawns the orb visual and handles the hand hover activation. |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" newAnalyticsService)"}</code> | Receives the analytics service. |
| <Link id="m-interact" /><code>{"async void Interact("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: with a cooldown and optional delay, runs the station for the player (start, checkpoint and orb, or completion) and sends the result to them. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the station's unlock, orb index and type to a joining player. |
| <Link id="m-playerhasallorbs" /><code>{"bool PlayerHasAllOrbs("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if the player has this station's orb. On a completion station that orb index stands for the last one. |

<details>
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addorb" /><code>{"private void AddOrb("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: gives the player this station's orb and plays the unlock effect for the chunk. |
| <Link id="m-cancelunlock" /><code>{"private void CancelUnlock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/playerunlockstation-networkeffect">{"PlayerUnlockStation.NetworkEffect"}</Link>{" effect)"}</code> | Server: ends the player's current challenge and plays an effect (complete or cancelled) for the chunk. |
| <Link id="m-caninteractwithunlockstation" /><code>{"private bool CanInteractWithUnlockStation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if the player has a challenge running and already holds the previous orb (index minus 1). |
| <Link id="m-filterstationinteraction" /><code>{"private void FilterStationInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks the hand hover on normal and unlock stations for players who can't use them yet. |
| <Link id="m-handhoverhascontent" /><code>{"private bool HandHoverHasContent()"}</code> | Client attracting check: start and completion stations always attract; others only when the local player can use them. |
| <Link id="m-initializehandhoverattractingstate" /><code>{"private void InitializeHandHoverAttractingState("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" _)"}</code> | Gives the hand hover point its attracting check. |
| <Link id="m-interactwithcompletionstation" /><code>{"private void InteractWithCompletionStation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | If the player holds the final orb, takes all orbs and completes the challenge. |
| <Link id="m-interactwithstartstation" /><code>{"private void InteractWithStartStation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Starts this station's challenge for the player and clears their orbs. |
| <Link id="m-interactwithstation" /><code>{"private void InteractWithStation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Runs the start or unlock behaviour for the station type; normal stations do nothing extra. |
| <Link id="m-interactwithunlockstation" /><code>{"private void InteractWithUnlockStation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Gives the player this station's unlock permanently. |
| <Link id="m-removeorbs" /><code>{"private void RemoveOrbs("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Takes every orb from the player. |
| <Link id="m-sendanalyticsevent" /><code>{"private void SendAnalyticsEvent("}<Link to="/game-api/types/global-p/playerunlockstation-interactioninfo">{"PlayerUnlockStation.InteractionInfo"}</Link>{" interactionInfo)"}</code> | Client: sends a challenge completed or checkpoint reached analytics event. |
| <Link id="m-setcheckpoint" /><code>{"private void SetCheckpoint("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sets the player's challenge checkpoint to their feet position. |
| <Link id="m-setuphandhoverattractingstate" /><code>{"private void SetupHandHoverAttractingState()"}</code> | Client: sets up the attracting check once the local player exists. |
| <Link id="m-spawnorb" /><code>{"private void SpawnOrb()"}</code> | Client: places this station's orb model under `orbParent`. |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerunlockstation-networkeffect">{"PlayerUnlockStation.NetworkEffect"}</Link>{" arguments)"}</code> | Plays the unlock, complete or cancelled event on remote clients. |
| <Link id="m-syncinteractioninfotoclient-2" /><code>{"private void SyncInteractionInfoToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerunlockstation-interactioninfo">{"PlayerUnlockStation.InteractionInfo"}</Link>{" interactionInfo)"}</code> | Sends the interaction result to the player, whose client turns it into an analytics event. |
| <Link id="m-syncsavedatatoclient-2" /><code>{"private void SyncSaveDataToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the unlock, orb index and station type to a client, which then spawns the orb. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerUnlockStation`:

[`ClimbingTowerTeleporterNode.unlockStation`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-unlockstation), [`OrbBasinVfxController.playerUnlockStation`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-playerunlockstation).
