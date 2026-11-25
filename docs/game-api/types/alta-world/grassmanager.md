---
title: "GrassManager"
description: "class GrassManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassManager

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `ExecuteAlways`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world/grassmanager">{"GrassManager"}</Link>{" instance"}</code> |  |
| <Link id="m-availablepatterns" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> availablePatterns"}</code> |  |
| <Link id="m-cloudsrotation" /><code>{"private float cloudsRotation"}</code> |  |
| <Link id="m-cloudsspeedmultiplier" /><code>{"private float cloudsSpeedMultiplier"}</code> |  |
| <Link id="m-directionchangelerpspeed" /><code>{"private float directionChangeLerpSpeed"}</code> |  |
| <Link id="m-iscatchingup" /><code>{"private bool isCatchingUp"}</code> |  |
| <Link id="m-islerpingdirection" /><code>{"private bool isLerpingDirection"}</code> |  |
| <Link id="m-maxvaluetolerp" /><code>{"private float maxValueToLerp"}</code> |  |
| <Link id="m-networkcloudrotation" /><code>{"private float networkCloudRotation"}</code> |  |
| <Link id="m-newdirection" /><code>{"private Vector2 newDirection"}</code> |  |
| <Link id="m-sendinterval" /><code>{"private const float SendInterval"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> |  |
| <Link id="m-winddirection" /><code>{"private Vector2 windDirection"}</code> |  |
| <Link id="m-windmap" /><code>{"private Texture2D windMap"}</code> |  |
| <Link id="m-windmapoffset" /><code>{"private Vector2 windMapOffset"}</code> |  |
| <Link id="m-windmapoffsetnetwork" /><code>{"private Vector2 windMapOffsetNetwork"}</code> |  |
| <Link id="m-windmapscale" /><code>{"private float windMapScale"}</code> |  |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> |  |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> |  |
| <Link id="m-worldposition" /><code>{"private float worldPosition"}</code> |  |
| <Link id="m-worldsize" /><code>{"private float worldSize"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns-2" /><code>{"List<"}<Link to="/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> AvailablePatterns { get; }"}</code> |  |
| <Link id="m-winddirection-2" /><code>{"Vector2 WindDirection { get; set; }"}</code> |  |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> |  |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-readpattern" /><code>{"void ReadPattern("}<Link to="/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{" pattern)"}</code> |  |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> |  |
| <Link id="m-changewinddirection" /><code>{"private void ChangeWindDirection(Vector2 direction)"}</code> |  |
| <Link id="m-changewindspeed" /><code>{"private void ChangeWindSpeed(float speed)"}</code> |  |
| <Link id="m-changewindstrength" /><code>{"private void ChangeWindStrength(float strength)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> |  |
| <Link id="m-synctoclients" /><code>{"private IEnumerator SyncToClients() (iterator)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updateshader" /><code>{"private void UpdateShader()"}</code> |  |
| <Link id="m-updatewindparameters" /><code>{"private void UpdateWindParameters()"}</code> |  |
