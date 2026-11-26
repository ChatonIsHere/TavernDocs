---
title: "HandyCameraManager"
description: "Spawns and despawns each player's hand camera (the summoned screenshot camera), despawns it when the player walks too far away, and runs the streaming output."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandyCameraManager

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Spawns and despawns each player's hand camera (the summoned screenshot camera), despawns it when the player walks too far away, and runs the streaming output. One scene instance, used through static methods; the server owns the cameras.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CameraArguments`](/mod/game-api/types/alta-customization/handycameramanager-cameraarguments), [`EffectArguments`](/mod/game-api/types/alta-customization/handycameramanager-effectarguments), [`PlayerCameraHandler`](/mod/game-api/types/alta-customization/handycameramanager-playercamerahandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandyCameraManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameraprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" cameraPrefab"}</code> | <span className="api-desc">The hand camera prefab that gets spawned.</span> |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> | <span className="api-desc">How far in front of the player's head the camera spawns, in metres.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-customization/handycameramanager">{"HandyCameraManager"}</Link>{" instance"}</code> | <span className="api-desc">The scene's manager, set in `Awake`.</span> |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> | <span className="api-desc">Squared distance from the head beyond which the camera counts as out of range (default 9, so 3 m).</span> |
| <Link id="m-oncameradisappeareffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onCameraDisappearEffects"}</code> | <span className="api-desc">Effects played where a camera disappears.</span> |
| <Link id="m-oncameraspawneffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onCameraSpawnEffects"}</code> | <span className="api-desc">Effects played where a camera spawns.</span> |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> | <span className="api-desc">Haptic strength used to warn the player that the camera is out of range.</span> |
| <Link id="m-playerscameras" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/handycameramanager-playercamerahandler">{"HandyCameraManager.PlayerCameraHandler"}</Link>{"> playersCameras"}</code> | <span className="api-desc">Server: each player's live camera handler.</span> |
| <Link id="m-remotedistancecheck" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" remoteDistanceCheck"}</code> | <span className="api-desc">Client: the registered range check update for the local player's camera, or null.</span> |
| <Link id="m-requestsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> requestSync"}</code> | <span className="api-desc">Message a client sends to ask the server to spawn or remove its camera.</span> |
| <Link id="m-streamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamerastreamer">{"HandCameraStreamer"}</Link>{" streamer"}</code> | <span className="api-desc">The streamer instance, created on first `StartStreaming`.</span> |
| <Link id="m-streamerprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamerastreamer">{"HandCameraStreamer"}</Link>{" streamerPrefab"}</code> | <span className="api-desc">Prefab for the `HandCameraStreamer`.</span> |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-customization/handycameramanager-effectarguments">{"HandyCameraManager.EffectArguments"}</Link>{"> syncEffects"}</code> | <span className="api-desc">Message the server sends to play spawn and disappear effects.</span> |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> | <span className="api-desc">Seconds a camera may stay out of range before the server removes it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the spawn request and effect messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: creates the player to camera table.</span> |
| <Link id="m-startstreaming" /><code>{"static void StartStreaming(RenderTexture renderTexture)"}</code> | <span className="api-desc">Creates the streamer from its prefab if needed and starts streaming the given render texture.</span> |
| <Link id="m-stopstreaming" /><code>{"static void StopStreaming()"}</code> | <span className="api-desc">Stops the streamer if one exists.</span> |
| <Link id="m-updatecamerastatusforlocalplayer" /><code>{"static void UpdateCameraStatusForLocalPlayer()"}</code> | <span className="api-desc">Toggles the local player's camera: spawns it if they have none, otherwise removes it. Asks the server when called on a client.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores this as the static instance.</span> |
| <Link id="m-destroyplayerscamera" /><code>{"private void DestroyPlayersCamera("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: removes the player's camera handler, plays the disappear effect on clients and fades the camera out.</span> |
| <Link id="m-remotedistancecheck-2" /><code>{"private void RemoteDistanceCheck()"}</code> | <span className="api-desc">Client (non-host): buzzes both controllers each frame while the local player's camera is out of range.</span> |
| <Link id="m-requestsync-2" /><code>{"private void RequestSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSpawnRequest)"}</code> | <span className="api-desc">Message handler. On the server, spawns or destroys the sending player's camera depending on the received flag.</span> |
| <Link id="m-spawncameraforplayer" /><code>{"private void SpawnCameraForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: spawns a camera in front of the player's head (unsaved, owned by the player), fades it in and plays the spawn effect.</span> |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-customization/handycameramanager-effectarguments">{"HandyCameraManager.EffectArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Message handler. Client: plays the spawn or disappear effect at a position, and starts or stops the range check for the local player's camera.</span> |

</details>
