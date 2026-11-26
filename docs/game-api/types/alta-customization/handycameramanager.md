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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CameraArguments`](/game-api/types/alta-customization/handycameramanager-cameraarguments), [`EffectArguments`](/game-api/types/alta-customization/handycameramanager-effectarguments), [`PlayerCameraHandler`](/game-api/types/alta-customization/handycameramanager-playercamerahandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandyCameraManager()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameraprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" cameraPrefab"}</code> | The hand camera prefab that gets spawned. |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> | How far in front of the player's head the camera spawns, in metres. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-customization/handycameramanager">{"HandyCameraManager"}</Link>{" instance"}</code> | The scene's manager, set in `Awake`. |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> | Squared distance from the head beyond which the camera counts as out of range (default 9, so 3 m). |
| <Link id="m-oncameradisappeareffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onCameraDisappearEffects"}</code> | Effects played where a camera disappears. |
| <Link id="m-oncameraspawneffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onCameraSpawnEffects"}</code> | Effects played where a camera spawns. |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> | Haptic strength used to warn the player that the camera is out of range. |
| <Link id="m-playerscameras" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-customization/handycameramanager-playercamerahandler">{"HandyCameraManager.PlayerCameraHandler"}</Link>{"> playersCameras"}</code> | Server: each player's live camera handler. |
| <Link id="m-remotedistancecheck" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" remoteDistanceCheck"}</code> | Client: the registered range check update for the local player's camera, or null. |
| <Link id="m-requestsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> requestSync"}</code> | Message a client sends to ask the server to spawn or remove its camera. |
| <Link id="m-streamer" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerastreamer">{"HandCameraStreamer"}</Link>{" streamer"}</code> | The streamer instance, created on first `StartStreaming`. |
| <Link id="m-streamerprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerastreamer">{"HandCameraStreamer"}</Link>{" streamerPrefab"}</code> | Prefab for the `HandCameraStreamer`. |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-customization/handycameramanager-effectarguments">{"HandyCameraManager.EffectArguments"}</Link>{"> syncEffects"}</code> | Message the server sends to play spawn and disappear effects. |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> | Seconds a camera may stay out of range before the server removes it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the spawn request and effect messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: creates the player to camera table. |
| <Link id="m-startstreaming" /><code>{"static void StartStreaming(RenderTexture renderTexture)"}</code> | Creates the streamer from its prefab if needed and starts streaming the given render texture. |
| <Link id="m-stopstreaming" /><code>{"static void StopStreaming()"}</code> | Stops the streamer if one exists. |
| <Link id="m-updatecamerastatusforlocalplayer" /><code>{"static void UpdateCameraStatusForLocalPlayer()"}</code> | Toggles the local player's camera: spawns it if they have none, otherwise removes it. Asks the server when called on a client. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores this as the static instance. |
| <Link id="m-destroyplayerscamera" /><code>{"private void DestroyPlayersCamera("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: removes the player's camera handler, plays the disappear effect on clients and fades the camera out. |
| <Link id="m-remotedistancecheck-2" /><code>{"private void RemoteDistanceCheck()"}</code> | Client (non-host): buzzes both controllers each frame while the local player's camera is out of range. |
| <Link id="m-requestsync-2" /><code>{"private void RequestSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSpawnRequest)"}</code> | Message handler. On the server, spawns or destroys the sending player's camera depending on the received flag. |
| <Link id="m-spawncameraforplayer" /><code>{"private void SpawnCameraForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: spawns a camera in front of the player's head (unsaved, owned by the player), fades it in and plays the spawn effect. |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-customization/handycameramanager-effectarguments">{"HandyCameraManager.EffectArguments"}</Link>{" arguments)"}</code> | Message handler. Client: plays the spawn or disappear effect at a position, and starts or stops the range check for the local player's camera. |

</details>
