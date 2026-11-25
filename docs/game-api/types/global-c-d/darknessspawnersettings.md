---
title: "DarknessSpawnerSettings"
description: "Global settings for spawning creatures in the dark around players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessSpawnerSettings

A **class** in `Root.Township`, no namespace.

Global settings for spawning creatures in the dark around players. The local client measures screen darkness and asks the server, which spawns near the player.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<DarknessSpawnerSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`DarknessSpawnerSettings`](/game-api/types/global-c-d/darknessspawnersettings)
- **Nested types** [`SpawnInstructure`](/game-api/types/global-c-d/darknessspawnersettings-spawninstructure)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DarknessSpawnerSettings()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-colorfilter" /><code>{"private Vector3 colorFilter"}</code> |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> |
| <Link id="m-darkdefinition" /><code>{"private float darkDefinition"}</code> |
| <Link id="m-directionmagnitude" /><code>{"private float directionMagnitude"}</code> |
| <Link id="m-downsamplescale" /><code>{"private float downSampleScale"}</code> |
| <Link id="m-forwardweight" /><code>{"private float forwardWeight"}</code> |
| <Link id="m-maxangletospawn" /><code>{"private float maxAngleToSpawn"}</code> |
| <Link id="m-maximumspawninterval" /><code>{"private float maximumSpawnInterval"}</code> |
| <Link id="m-maxtotaldarkness" /><code>{"private float maxTotalDarkness"}</code> |
| <Link id="m-minimumspawninterval" /><code>{"private float minimumSpawnInterval"}</code> |
| <Link id="m-platformlightrangeratio" /><code>{"private float platformLightRangeRatio"}</code> |
| <Link id="m-playerspawncount" /><code>{"private Dictionary<uint, int> playerSpawnCount"}</code> |
| <Link id="m-prefabtospawn" /><code>{"private uint prefabToSpawn"}</code> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> |
| <Link id="m-readdarknessfrequency" /><code>{"private float readDarknessFrequency"}</code> |
| <Link id="m-spawncooldown" /><code>{"private float spawnCooldown"}</code> |
| <Link id="m-spawncount" /><code>{"private "}<Link to="/game-api/types/global-t-x/triangulardistributionint">{"TriangularDistributionInt"}</Link>{" spawnCount"}</code> |
| <Link id="m-spawnedtoplayer" /><code>{"private Dictionary<uint, uint> spawnedToPlayer"}</code> |
| <Link id="m-spawnlimitperplayer" /><code>{"private int spawnLimitPerPlayer"}</code> |
| <Link id="m-targetmask" /><code>{"private LayerMask targetMask"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colorfilter-2" /><code>{"Vector3 ColorFilter { get; }"}</code> | Weights for the colour channels when the compute shader measures darkness. |
| <Link id="m-computeshader-2" /><code>{"ComputeShader ComputeShader { get; }"}</code> | The compute shader that reads screen darkness. |
| <Link id="m-darkdefinition-2" /><code>{"float DarkDefinition { get; }"}</code> | Brightness below which a pixel counts as dark. |
| <Link id="m-downsamplescale-2" /><code>{"float DownSampleScale { get; }"}</code> | Fraction of screen resolution the darkness is read at. |
| <Link id="m-maxtotaldarkness-2" /><code>{"float MaxTotalDarkness { get; }"}</code> | When the measured darkness is above this, the client asks the server to spawn. |
| <Link id="m-platformlightrangeratio-2" /><code>{"float PlatformLightRangeRatio { get; }"}</code> | Scales light ranges in the platform light darkness reader. |
| <Link id="m-readdarknessfrequency-2" /><code>{"float ReadDarknessFrequency { get; }"}</code> | Seconds between darkness reads. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnforplayer" /><code>{"bool SpawnForPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter)"}</code> | Server: raycasts ahead of the player's view and spawns the prefab on suitable surfaces, up to the per-player limit. Returns whether any spawned. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearforplayer" /><code>{"private void ClearForPlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-spawnforplayer-2" /><code>{"private IEnumerator SpawnForPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter, List<"}<Link to="/game-api/types/global-c-d/darknessspawnersettings-spawninstructure">{"DarknessSpawnerSettings.SpawnInstructure"}</Link>{"> spawnPositions) (iterator)"}</code> | Server: raycasts ahead of the player's view and spawns the prefab on suitable surfaces, up to the per-player limit. Returns whether any spawned. |

</details>

## Used in

Members of other types that take, return or hold a `DarknessSpawnerSettings`:

[`DarknessReaderMethod.settings`](/game-api/types/global-c-d/darknessreadermethod#m-settings).
