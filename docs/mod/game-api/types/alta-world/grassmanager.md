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
| <Link id="m-ctor" /><code>{"GrassManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/grassmanager">{"GrassManager"}</Link>{" instance"}</code> | <span className="api-desc">The last `GrassManager` to wake.</span> |

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> availablePatterns"}</code> | <span className="api-desc">Backing field for `AvailablePatterns`.</span> |
| <Link id="m-cloudsrotation" /><code>{"private float cloudsRotation"}</code> | <span className="api-desc">Cloud rotation as a fraction of a turn, wrapping at 1.</span> |
| <Link id="m-cloudsspeedmultiplier" /><code>{"private float cloudsSpeedMultiplier"}</code> | <span className="api-desc">Scales how fast clouds turn with the wind.</span> |
| <Link id="m-directionchangelerpspeed" /><code>{"private float directionChangeLerpSpeed"}</code> | <span className="api-desc">Lerp amount per frame when turning; 1 snaps at once.</span> |
| <Link id="m-iscatchingup" /><code>{"private bool isCatchingUp"}</code> | <span className="api-desc">Client: true while moving toward the server's offset.</span> |
| <Link id="m-islerpingdirection" /><code>{"private bool isLerpingDirection"}</code> | <span className="api-desc">True while turning toward `newDirection`.</span> |
| <Link id="m-maxvaluetolerp" /><code>{"private float maxValueToLerp"}</code> | <span className="api-desc">Squared offset gap above which clients snap instead of catching up.</span> |
| <Link id="m-networkcloudrotation" /><code>{"private float networkCloudRotation"}</code> | <span className="api-desc">Cloud rotation from the last sync.</span> |
| <Link id="m-newdirection" /><code>{"private Vector2 newDirection"}</code> | <span className="api-desc">Direction being turned toward.</span> |
| <Link id="m-sendinterval" /><code>{"private const float SendInterval"}</code> | <span className="api-desc">Seconds between syncs, 90.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | <span className="api-desc">Sync message for the wind state.</span> |
| <Link id="m-winddirection" /><code>{"private Vector2 windDirection"}</code> | <span className="api-desc">Backing field for `WindDirection`.</span> |
| <Link id="m-windmap" /><code>{"private Texture2D windMap"}</code> | <span className="api-desc">Wind noise texture given to shaders as `_WindMap`.</span> |
| <Link id="m-windmapoffset" /><code>{"private Vector2 windMapOffset"}</code> | <span className="api-desc">Current scroll offset of the wind map.</span> |
| <Link id="m-windmapoffsetnetwork" /><code>{"private Vector2 windMapOffsetNetwork"}</code> | <span className="api-desc">Wind map offset from the last sync.</span> |
| <Link id="m-windmapscale" /><code>{"private float windMapScale"}</code> | <span className="api-desc">World size of one wind map tile; shaders get its inverse.</span> |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> | <span className="api-desc">Backing field for `WindSpeed`.</span> |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> | <span className="api-desc">Backing field for `WindStrength`.</span> |
| <Link id="m-worldposition" /><code>{"private float worldPosition"}</code> | <span className="api-desc">Serialized world origin. Not read in this build.</span> |
| <Link id="m-worldsize" /><code>{"private float worldSize"}</code> | <span className="api-desc">World size used to turn wind movement into cloud rotation.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> AvailablePatterns { get; }"}</code> | <span className="api-desc">Wind patterns that can be applied with `ReadPattern`.</span> |
| <Link id="m-winddirection-2" /><code>{"Vector2 WindDirection { get; set; }"}</code> | <span className="api-desc">Wind direction on the ground plane. Setting it updates the shader off headless.</span> |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> | <span className="api-desc">How fast the wind map scrolls.</span> |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> | <span className="api-desc">How strongly grass bends.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts the 90-second sync loop.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the wind state to a joining player with snapping on.</span> |
| <Link id="m-readpattern" /><code>{"void ReadPattern("}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{" pattern)"}</code> | <span className="api-desc">Applies a pattern's speed and strength (not direction) and syncs it to clients.</span> |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | <span className="api-desc">Sets `instance` and the global wind map shader values; on headless drops the wind map.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changewinddirection" /><code>{"private void ChangeWindDirection(Vector2 direction)"}</code> | <span className="api-desc">Starts turning toward a new (normalized) direction. Private, no callers here.</span> |
| <Link id="m-changewindspeed" /><code>{"private void ChangeWindSpeed(float speed)"}</code> | <span className="api-desc">Sets the wind speed, not below 0.</span> |
| <Link id="m-changewindstrength" /><code>{"private void ChangeWindStrength(float strength)"}</code> | <span className="api-desc">Sets the wind strength, not below 0, and updates the shader.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: normalizes the direction and updates the shader.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> | <span className="api-desc">Writes or reads the wind state. Clients snap if told to or if far off, otherwise catch up smoothly.</span> |
| <Link id="m-synctoclients" /><code>{"private IEnumerator SyncToClients() (iterator)"}</code> | <span className="api-desc">Server coroutine that syncs to all chunks every 90 seconds.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Lerps the direction, scrolls the wind map and cloud rotation by speed, catches up to the server value, and updates shaders.</span> |
| <Link id="m-updateshader" /><code>{"private void UpdateShader()"}</code> | <span className="api-desc">Sets the global cloud rotation values from `cloudsRotation`, then the wind parameters.</span> |
| <Link id="m-updatewindparameters" /><code>{"private void UpdateWindParameters()"}</code> | <span className="api-desc">Sets the global `_WindParameters`: wind map offset and direction times strength.</span> |

</details>
