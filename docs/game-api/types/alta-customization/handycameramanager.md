---
title: "HandyCameraManager"
description: "class HandyCameraManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandyCameraManager

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

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

| Member |
| --- |
| <Link id="m-cameraprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" cameraPrefab"}</code> |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-customization/handycameramanager">{"HandyCameraManager"}</Link>{" instance"}</code> |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> |
| <Link id="m-oncameradisappeareffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onCameraDisappearEffects"}</code> |
| <Link id="m-oncameraspawneffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onCameraSpawnEffects"}</code> |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> |
| <Link id="m-playerscameras" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-customization/handycameramanager-playercamerahandler">{"HandyCameraManager.PlayerCameraHandler"}</Link>{"> playersCameras"}</code> |
| <Link id="m-remotedistancecheck" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" remoteDistanceCheck"}</code> |
| <Link id="m-requestsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> requestSync"}</code> |
| <Link id="m-streamer" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerastreamer">{"HandCameraStreamer"}</Link>{" streamer"}</code> |
| <Link id="m-streamerprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerastreamer">{"HandCameraStreamer"}</Link>{" streamerPrefab"}</code> |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-customization/handycameramanager-effectarguments">{"HandyCameraManager.EffectArguments"}</Link>{"> syncEffects"}</code> |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-startstreaming" /><code>{"static void StartStreaming(RenderTexture renderTexture)"}</code> |
| <Link id="m-stopstreaming" /><code>{"static void StopStreaming()"}</code> |
| <Link id="m-updatecamerastatusforlocalplayer" /><code>{"static void UpdateCameraStatusForLocalPlayer()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-destroyplayerscamera" /><code>{"private void DestroyPlayersCamera("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-remotedistancecheck-2" /><code>{"private void RemoteDistanceCheck()"}</code> |
| <Link id="m-requestsync-2" /><code>{"private void RequestSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSpawnRequest)"}</code> |
| <Link id="m-spawncameraforplayer" /><code>{"private void SpawnCameraForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-customization/handycameramanager-effectarguments">{"HandyCameraManager.EffectArguments"}</Link>{" arguments)"}</code> |

</details>
