---
title: "GrassManager"
description: "Networked wind for grass and clouds: scrolls a wind map and sets global shader values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassManager

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Networked wind for grass and clouds: scrolls a wind map and sets global shader values. The server syncs speed, strength, direction and offset to clients every 90 seconds. Use the static `instance`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `ExecuteAlways`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/grassmanager">{"GrassManager"}</Link>{" instance"}</code> | The last `GrassManager` to wake. |

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> availablePatterns"}</code> | Backing field for `AvailablePatterns`. |
| <Link id="m-cloudsrotation" /><code>{"private float cloudsRotation"}</code> | Cloud rotation as a fraction of a turn, wrapping at 1. |
| <Link id="m-cloudsspeedmultiplier" /><code>{"private float cloudsSpeedMultiplier"}</code> | Scales how fast clouds turn with the wind. |
| <Link id="m-directionchangelerpspeed" /><code>{"private float directionChangeLerpSpeed"}</code> | Lerp amount per frame when turning; 1 snaps at once. |
| <Link id="m-iscatchingup" /><code>{"private bool isCatchingUp"}</code> | Client: true while moving toward the server's offset. |
| <Link id="m-islerpingdirection" /><code>{"private bool isLerpingDirection"}</code> | True while turning toward `newDirection`. |
| <Link id="m-maxvaluetolerp" /><code>{"private float maxValueToLerp"}</code> | Squared offset gap above which clients snap instead of catching up. |
| <Link id="m-networkcloudrotation" /><code>{"private float networkCloudRotation"}</code> | Cloud rotation from the last sync. |
| <Link id="m-newdirection" /><code>{"private Vector2 newDirection"}</code> | Direction being turned toward. |
| <Link id="m-sendinterval" /><code>{"private const float SendInterval"}</code> | Seconds between syncs, 90. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | Sync message for the wind state. |
| <Link id="m-winddirection" /><code>{"private Vector2 windDirection"}</code> | Backing field for `WindDirection`. |
| <Link id="m-windmap" /><code>{"private Texture2D windMap"}</code> | Wind noise texture given to shaders as `_WindMap`. |
| <Link id="m-windmapoffset" /><code>{"private Vector2 windMapOffset"}</code> | Current scroll offset of the wind map. |
| <Link id="m-windmapoffsetnetwork" /><code>{"private Vector2 windMapOffsetNetwork"}</code> | Wind map offset from the last sync. |
| <Link id="m-windmapscale" /><code>{"private float windMapScale"}</code> | World size of one wind map tile; shaders get its inverse. |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> | Backing field for `WindSpeed`. |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> | Backing field for `WindStrength`. |
| <Link id="m-worldposition" /><code>{"private float worldPosition"}</code> | Serialized world origin. Not read in this build. |
| <Link id="m-worldsize" /><code>{"private float worldSize"}</code> | World size used to turn wind movement into cloud rotation. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> AvailablePatterns { get; }"}</code> | Wind patterns that can be applied with `ReadPattern`. |
| <Link id="m-winddirection-2" /><code>{"Vector2 WindDirection { get; set; }"}</code> | Wind direction on the ground plane. Setting it updates the shader off headless. |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> | How fast the wind map scrolls. |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> | How strongly grass bends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the 90-second sync loop. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the wind state to a joining player with snapping on. |
| <Link id="m-readpattern" /><code>{"void ReadPattern("}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{" pattern)"}</code> | Applies a pattern's speed and strength (not direction) and syncs it to clients. |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | Sets `instance` and the global wind map shader values; on headless drops the wind map. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changewinddirection" /><code>{"private void ChangeWindDirection(Vector2 direction)"}</code> | Starts turning toward a new (normalized) direction. Private, no callers here. |
| <Link id="m-changewindspeed" /><code>{"private void ChangeWindSpeed(float speed)"}</code> | Sets the wind speed, not below 0. |
| <Link id="m-changewindstrength" /><code>{"private void ChangeWindStrength(float strength)"}</code> | Sets the wind strength, not below 0, and updates the shader. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: normalizes the direction and updates the shader. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> | Writes or reads the wind state. Clients snap if told to or if far off, otherwise catch up smoothly. |
| <Link id="m-synctoclients" /><code>{"private IEnumerator SyncToClients() (iterator)"}</code> | Server coroutine that syncs to all chunks every 90 seconds. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Lerps the direction, scrolls the wind map and cloud rotation by speed, catches up to the server value, and updates shaders. |
| <Link id="m-updateshader" /><code>{"private void UpdateShader()"}</code> | Sets the global cloud rotation values from `cloudsRotation`, then the wind parameters. |
| <Link id="m-updatewindparameters" /><code>{"private void UpdateWindParameters()"}</code> | Sets the global `_WindParameters`: wind map offset and direction times strength. |

</details>
