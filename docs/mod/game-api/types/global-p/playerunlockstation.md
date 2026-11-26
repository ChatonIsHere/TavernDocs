---
title: "PlayerUnlockStation"
description: "A station in a climbing challenge (PlayerUnlock): start, orb checkpoint, completion, or a permanent unlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStation

A **class** in `Root.Township`, the global namespace.

A station in a climbing challenge (`PlayerUnlock`): start, orb checkpoint, completion, or a permanent unlock. Server side; touching it sets the player's checkpoint and adds its orb.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerUnlockStationSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerUnlockStationSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerUnlockStationSaveData`](/mod/game-api/types/global-p/playerunlockstationsavedata)
- **Nested types** [`InteractionInfo`](/mod/game-api/types/global-p/playerunlockstation-interactioninfo), [`NetworkEffect`](/mod/game-api/types/global-p/playerunlockstation-networkeffect), [`UnlockStationType`](/mod/game-api/types/global-p/playerunlockstation-unlockstationtype)
- **Documented in** [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockStation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Injected analytics service.</span> |
| <Link id="m-climbingunlock" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" climbingUnlock"}</code> | <span className="api-desc">The `PlayerUnlock` (challenge) this station belongs to.</span> |
| <Link id="m-cooldown" /><code>{"private float cooldown"}</code> | <span className="api-desc">Seconds between interactions with the station. Defaults to 1.</span> |
| <Link id="m-cooldownendtime" /><code>{"private float cooldownEndTime"}</code> | <span className="api-desc">Time the cooldown ends.</span> |
| <Link id="m-handhover" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{" handHover"}</code> | <span className="api-desc">Hand hover point the player charges to use the station; its activation calls `Interact` on the server.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">Interactable whose filter decides who can use the station.</span> |
| <Link id="m-interactiondelay" /><code>{"private float interactionDelay"}</code> | <span className="api-desc">Seconds the server waits after activation before handling it.</span> |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-orbindex" /><code>{"private int orbIndex"}</code> | <span className="api-desc">Backing field for `OrbIndex`; -1 for no orb.</span> |
| <Link id="m-orbparent" /><code>{"private Transform orbParent"}</code> | <span className="api-desc">Where the orb model is placed.</span> |
| <Link id="m-stationtype" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockstation-unlockstationtype">{"PlayerUnlockStation.UnlockStationType"}</Link>{" stationType"}</code> | <span className="api-desc">Backing field for `StationType`.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playerunlockstation-networkeffect">{"PlayerUnlockStation.NetworkEffect"}</Link>{"> syncEffect"}</code> | <span className="api-desc">Method sync for station effects.</span> |
| <Link id="m-syncinteractioninfotoclient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playerunlockstation-interactioninfo">{"PlayerUnlockStation.InteractionInfo"}</Link>{"> syncInteractionInfoToClient"}</code> | <span className="api-desc">Method sync for interaction results.</span> |
| <Link id="m-syncsavedatatoclient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveDataToClient"}</code> | <span className="api-desc">Method sync for the station setup.</span> |
| <Link id="m-triggeredcancelled" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggeredCancelled"}</code> | <span className="api-desc">Event played when a challenge is cancelled.</span> |
| <Link id="m-triggeredcomplete" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggeredComplete"}</code> | <span className="api-desc">Event played when a challenge is completed.</span> |
| <Link id="m-triggeredunlock" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggeredUnlock"}</code> | <span className="api-desc">Event played when an orb is collected.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orbindex-2" /><code>{"int OrbIndex { get; }"}</code> | <span className="api-desc">Orb this station gives, or -1. Normal stations need the previous orb before you can use them.</span> |
| <Link id="m-stationtype-2" /><code><Link to="/mod/game-api/types/global-p/playerunlockstation-unlockstationtype">{"PlayerUnlockStation.UnlockStationType"}</Link>{" StationType { get; }"}</code> | <span className="api-desc">Normal, Start, Completion or Unlock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up sync messages and the interaction filter. Clients set up the hand hover hint.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: spawns the orb visual and handles the hand hover activation.</span> |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" newAnalyticsService)"}</code> | <span className="api-desc">Receives the analytics service.</span> |
| <Link id="m-interact" /><code>{"async void Interact("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: with a cooldown and optional delay, runs the station for the player (start, checkpoint and orb, or completion) and sends the result to them.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the station's unlock, orb index and type to a joining player.</span> |
| <Link id="m-playerhasallorbs" /><code>{"bool PlayerHasAllOrbs("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">True if the player has this station's orb. On a completion station that orb index stands for the last one.</span> |

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addorb" /><code>{"private void AddOrb("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: gives the player this station's orb and plays the unlock effect for the chunk.</span> |
| <Link id="m-cancelunlock" /><code>{"private void CancelUnlock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playerunlockstation-networkeffect">{"PlayerUnlockStation.NetworkEffect"}</Link>{" effect)"}</code> | <span className="api-desc">Server: ends the player's current challenge and plays an effect (complete or cancelled) for the chunk.</span> |
| <Link id="m-caninteractwithunlockstation" /><code>{"private bool CanInteractWithUnlockStation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">True if the player has a challenge running and already holds the previous orb (index minus 1).</span> |
| <Link id="m-filterstationinteraction" /><code>{"private void FilterStationInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks the hand hover on normal and unlock stations for players who can't use them yet.</span> |
| <Link id="m-handhoverhascontent" /><code>{"private bool HandHoverHasContent()"}</code> | <span className="api-desc">Client attracting check: start and completion stations always attract; others only when the local player can use them.</span> |
| <Link id="m-initializehandhoverattractingstate" /><code>{"private void InitializeHandHoverAttractingState("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" _)"}</code> | <span className="api-desc">Gives the hand hover point its attracting check.</span> |
| <Link id="m-interactwithcompletionstation" /><code>{"private void InteractWithCompletionStation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">If the player holds the final orb, takes all orbs and completes the challenge.</span> |
| <Link id="m-interactwithstartstation" /><code>{"private void InteractWithStartStation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Starts this station's challenge for the player and clears their orbs.</span> |
| <Link id="m-interactwithstation" /><code>{"private void InteractWithStation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Runs the start or unlock behaviour for the station type; normal stations do nothing extra.</span> |
| <Link id="m-interactwithunlockstation" /><code>{"private void InteractWithUnlockStation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Gives the player this station's unlock permanently.</span> |
| <Link id="m-removeorbs" /><code>{"private void RemoveOrbs("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Takes every orb from the player.</span> |
| <Link id="m-sendanalyticsevent" /><code>{"private void SendAnalyticsEvent("}<Link to="/mod/game-api/types/global-p/playerunlockstation-interactioninfo">{"PlayerUnlockStation.InteractionInfo"}</Link>{" interactionInfo)"}</code> | <span className="api-desc">Client: sends a challenge completed or checkpoint reached analytics event.</span> |
| <Link id="m-setcheckpoint" /><code>{"private void SetCheckpoint("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sets the player's challenge checkpoint to their feet position.</span> |
| <Link id="m-setuphandhoverattractingstate" /><code>{"private void SetupHandHoverAttractingState()"}</code> | <span className="api-desc">Client: sets up the attracting check once the local player exists.</span> |
| <Link id="m-spawnorb" /><code>{"private void SpawnOrb()"}</code> | <span className="api-desc">Client: places this station's orb model under `orbParent`.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerunlockstation-networkeffect">{"PlayerUnlockStation.NetworkEffect"}</Link>{" arguments)"}</code> | <span className="api-desc">Plays the unlock, complete or cancelled event on remote clients.</span> |
| <Link id="m-syncinteractioninfotoclient-2" /><code>{"private void SyncInteractionInfoToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerunlockstation-interactioninfo">{"PlayerUnlockStation.InteractionInfo"}</Link>{" interactionInfo)"}</code> | <span className="api-desc">Sends the interaction result to the player, whose client turns it into an analytics event.</span> |
| <Link id="m-syncsavedatatoclient-2" /><code>{"private void SyncSaveDataToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the unlock, orb index and station type to a client, which then spawns the orb.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerUnlockStation`:

<div className="api-used-in">

[`ClimbingTowerTeleporterNode.unlockStation`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-unlockstation), [`OrbBasinVfxController.playerUnlockStation`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-playerunlockstation).

</div>
