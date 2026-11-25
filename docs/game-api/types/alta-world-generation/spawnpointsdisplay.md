---
title: "SpawnPointsDisplay"
description: "class SpawnPointsDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPointsDisplay

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPointsDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> |  |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> |  |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> |  |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> |  |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> |  |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> |  |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> |  |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> |  |
| <Link id="m-offset" /><code>{"private float offset"}</code> |  |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> |  |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> |  |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> |  |
| <Link id="m-spawnpointindex" /><code>{"private int spawnPointIndex"}</code> |  |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> |  |
| <Link id="m-spawnrotation" /><code>{"private Quaternion spawnRotation"}</code> |  |
| <Link id="m-spawnseed" /><code>{"private int spawnSeed"}</code> |  |
| <Link id="m-targetpopulation" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" targetPopulation"}</code> |  |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> |  |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> |  |
| <Link id="m-spawn" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Spawn("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int renderIndex, int x, int z, float value, ref int index)"}</code> |  |
