---
title: "DarknessSpawnerSettings"
description: "Global settings for spawning creatures in the dark around players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessSpawnerSettings

A **class** in `Root.Township`, the global namespace.

Global settings for spawning creatures in the dark around players. The local client measures screen darkness and asks the server, which spawns near the player.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<DarknessSpawnerSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`DarknessSpawnerSettings`](/mod/game-api/types/global-c-d/darknessspawnersettings)
- **Nested types** [`SpawnInstructure`](/mod/game-api/types/global-c-d/darknessspawnersettings-spawninstructure)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessSpawnerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorfilter" /><code>{"private Vector3 colorFilter"}</code> | <span className="api-desc">Colour weights used when measuring darkness.</span> |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> | <span className="api-desc">Compute shader that measures how dark the view is.</span> |
| <Link id="m-darkdefinition" /><code>{"private float darkDefinition"}</code> | <span className="api-desc">Brightness below which a pixel counts as dark.</span> |
| <Link id="m-directionmagnitude" /><code>{"private float directionMagnitude"}</code> | <span className="api-desc">Length of the raw spawn ray direction, used to normalise it.</span> |
| <Link id="m-downsamplescale" /><code>{"private float downSampleScale"}</code> | <span className="api-desc">Scale of the downsampled image used to measure darkness.</span> |
| <Link id="m-forwardweight" /><code>{"private float forwardWeight"}</code> | <span className="api-desc">How strongly spawn rays point forward from the head. Higher means a narrower cone.</span> |
| <Link id="m-maxangletospawn" /><code>{"private float maxAngleToSpawn"}</code> | <span className="api-desc">Minimum surface normal Y for a spawn, set from an angle in the inspector.</span> |
| <Link id="m-maximumspawninterval" /><code>{"private float maximumSpawnInterval"}</code> | <span className="api-desc">Longest wait between spawns in one batch.</span> |
| <Link id="m-maxtotaldarkness" /><code>{"private float maxTotalDarkness"}</code> | <span className="api-desc">Darkness reading above which the compute shader reader triggers a spawn, 0 to 1.</span> |
| <Link id="m-minimumspawninterval" /><code>{"private float minimumSpawnInterval"}</code> | <span className="api-desc">Shortest wait between spawns in one batch.</span> |
| <Link id="m-platformlightrangeratio" /><code>{"private float platformLightRangeRatio"}</code> | <span className="api-desc">Multiplier on light ranges used by `PlatformLightDarknessReader`.</span> |
| <Link id="m-playerspawncount" /><code>{"private Dictionary<uint, int> playerSpawnCount"}</code> | <span className="api-desc">Live spawned count per player ID.</span> |
| <Link id="m-prefabtospawn" /><code>{"private uint prefabToSpawn"}</code> | <span className="api-desc">Hash of the prefab spawned in the dark.</span> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | <span className="api-desc">How far from the head spawn rays reach.</span> |
| <Link id="m-readdarknessfrequency" /><code>{"private float readDarknessFrequency"}</code> | <span className="api-desc">Seconds between darkness readings. Defaults to 60.</span> |
| <Link id="m-spawncooldown" /><code>{"private float spawnCooldown"}</code> | <span className="api-desc">Obsolete cooldown field. Not read here.</span> |
| <Link id="m-spawncount" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triangulardistributionint">{"TriangularDistributionInt"}</Link>{" spawnCount"}</code> | <span className="api-desc">Random number of spawns tried per batch.</span> |
| <Link id="m-spawnedtoplayer" /><code>{"private Dictionary<uint, uint> spawnedToPlayer"}</code> | <span className="api-desc">Which player each spawned entity belongs to.</span> |
| <Link id="m-spawnlimitperplayer" /><code>{"private int spawnLimitPerPlayer"}</code> | <span className="api-desc">Most live spawns one player can have. Defaults to 10.</span> |
| <Link id="m-targetmask" /><code>{"private LayerMask targetMask"}</code> | <span className="api-desc">Layers spawn rays can land on.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colorfilter-2" /><code>{"Vector3 ColorFilter { get; }"}</code> | <span className="api-desc">Weights for the colour channels when the compute shader measures darkness.</span> |
| <Link id="m-computeshader-2" /><code>{"ComputeShader ComputeShader { get; }"}</code> | <span className="api-desc">The compute shader that reads screen darkness.</span> |
| <Link id="m-darkdefinition-2" /><code>{"float DarkDefinition { get; }"}</code> | <span className="api-desc">Brightness below which a pixel counts as dark.</span> |
| <Link id="m-downsamplescale-2" /><code>{"float DownSampleScale { get; }"}</code> | <span className="api-desc">Fraction of screen resolution the darkness is read at.</span> |
| <Link id="m-maxtotaldarkness-2" /><code>{"float MaxTotalDarkness { get; }"}</code> | <span className="api-desc">When the measured darkness is above this, the client asks the server to spawn.</span> |
| <Link id="m-platformlightrangeratio-2" /><code>{"float PlatformLightRangeRatio { get; }"}</code> | <span className="api-desc">Scales light ranges in the platform light darkness reader.</span> |
| <Link id="m-readdarknessfrequency-2" /><code>{"float ReadDarknessFrequency { get; }"}</code> | <span className="api-desc">Seconds between darkness reads.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnforplayer" /><code>{"bool SpawnForPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter)"}</code> | <span className="api-desc">Server: raycasts ahead of the player's view and spawns the prefab on suitable surfaces, up to the per-player limit. Returns whether any spawned.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearforplayer" /><code>{"private void ClearForPlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">When a spawned entity is destroyed, lowers the count for the player it was spawned for.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Recomputes `directionMagnitude` from `forwardWeight`.</span> |
| <Link id="m-spawnforplayer-2" /><code>{"private IEnumerator SpawnForPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter, List<"}<Link to="/mod/game-api/types/global-c-d/darknessspawnersettings-spawninstructure">{"DarknessSpawnerSettings.SpawnInstructure"}</Link>{"> spawnPositions) (iterator)"}</code> | <span className="api-desc">Server: raycasts ahead of the player's view and spawns the prefab on suitable surfaces, up to the per-player limit. Returns whether any spawned.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DarknessSpawnerSettings`:

<div className="api-used-in">

[`DarknessReaderMethod.settings`](/mod/game-api/types/global-c-d/darknessreadermethod#m-settings).

</div>
