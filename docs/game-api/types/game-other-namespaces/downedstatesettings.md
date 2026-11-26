---
title: "DownedStateSettings"
description: "Asset with the tuning for the downed state: gravestone, revive orbs other players collect, respawn orb, effects, and the health and debuffs a revived player..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedStateSettings

A **class** in `Root.Township`, `ATT.PlayerStates`.

Asset with the tuning for the downed state: gravestone, revive orbs other players collect, respawn orb, effects, and the health and debuffs a revived player gets back. Read by `DownedState` and the revive activity.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownedStateSettings()"}</code> |

## Fields

<details>
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatepersecond" /><code>{"private float angleToRotatePerSecond"}</code> | Spin speed of the ring of revive orbs. |
| <Link id="m-distancebeforeorbisforcereleased" /><code>{"private float distanceBeforeOrbIsForceReleased"}</code> | How far a revive orb can be pulled from its spot before it is forced out of the hand. |
| <Link id="m-enterdownedstatesfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" enterDownedStateSfx"}</code> | Sound played when a player goes down. |
| <Link id="m-enterdownedstatevfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" enterDownedStateVfx"}</code> | Effect spawned when a player goes down. |
| <Link id="m-exitdownedstatesfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" exitDownedStateSfx"}</code> | Sound played when a player leaves the downed state. |
| <Link id="m-exitdownedstatevfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" exitDownedStateVfx"}</code> | Effect spawned when a player leaves the downed state. |
| <Link id="m-gravestone" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" gravestone"}</code> | Prefab spawned at the spot where the player went down. |
| <Link id="m-healthpercentageforrevivedplayers" /><code>{"private float healthPercentageForRevivedPlayers"}</code> | Share of maximum health (0 to 1) a revived player gets back. |
| <Link id="m-healthstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat"}</code> | The player's health stat. |
| <Link id="m-heightofrespawnorb" /><code>{"private float heightOfRespawnOrb"}</code> | Height of the respawn orb above its spawn point. |
| <Link id="m-heightofreviveorbs" /><code>{"private float heightOfReviveOrbs"}</code> | Height of the revive orb ring above the downed spot. |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" hungerStat"}</code> | Stat that is disabled while downed to stop natural health regeneration. |
| <Link id="m-numberofrevivalorbstospawn" /><code>{"private int numberOfRevivalOrbsToSpawn"}</code> | How many revive orbs spawn around a downed player; each adds an equal share of revive progress. |
| <Link id="m-orbmovementrange" /><code>{"private Vector3 orbMovementRange"}</code> | Range of the idle bobbing movement of each revive orb. |
| <Link id="m-orbmovementspeed" /><code>{"private float orbMovementSpeed"}</code> | Speed of the idle bobbing movement of each revive orb. |
| <Link id="m-respawndebuffdurationinseconds" /><code>{"private float respawnDebuffDurationInSeconds"}</code> | How long the respawn debuffs last. |
| <Link id="m-respawndebuffs" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmodifierconstructor">{"StatModifierConstructor"}</Link>{"[] respawnDebuffs"}</code> | Stat modifiers applied to the player after respawning. |
| <Link id="m-respawnorbdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" respawnOrbDefinition"}</code> | Pooled object used for the respawn orb the downed player can grab. |
| <Link id="m-respawnorbdistancefromplayer" /><code>{"private float respawnOrbDistanceFromPlayer"}</code> | How far from the player the respawn orb appears. |
| <Link id="m-revivalorbdistancefromdownedplayer" /><code>{"private float revivalOrbDistanceFromDownedPlayer"}</code> | Ring radius an orb moves to when it is made reachable for the downed player. |
| <Link id="m-revivalorbdistancefromgrave" /><code>{"private float revivalOrbDistanceFromGrave"}</code> | Radius of the revive orb ring around the grave. |
| <Link id="m-reviveorb" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" reviveOrb"}</code> | Prefab of the orbs other players use to revive. |
| <Link id="m-rotatingobject" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" rotatingObject"}</code> | Prefab spawned as the spinning parent of the revive orbs. |
| <Link id="m-secondsaddedtorevivaltimerperorb" /><code>{"private float secondsAddedToRevivalTimerPerOrb"}</code> | Seconds added to the revive timer for each orb used. |
| <Link id="m-spawnablelayers" /><code>{"private LayerMask spawnableLayers"}</code> | Layers the gravestone placement raycast can land on. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatepersecond-2" /><code>{"float AngleToRotatePerSecond { get; }"}</code> | Spin speed of the object the revive orbs circle on. |
| <Link id="m-distancebeforeorbisforcereleased-2" /><code>{"float DistanceBeforeOrbIsForceReleased { get; }"}</code> | How far a revive orb can be pulled from its spot before it is dropped. |
| <Link id="m-enterdownedstatesfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" EnterDownedStateSfx { get; }"}</code> | Sound when a player goes down. |
| <Link id="m-enterdownedstatevfx-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EnterDownedStateVfx { get; }"}</code> | Effect when a player goes down. |
| <Link id="m-exitdownedstatesfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ExitDownedStateSfx { get; }"}</code> | Sound when a player leaves the downed state. |
| <Link id="m-exitdownedstatevfx-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ExitDownedStateVfx { get; }"}</code> | Effect when a player leaves the downed state. |
| <Link id="m-gravestone-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Gravestone { get; }"}</code> | Prefab spawned as the downed player's gravestone. |
| <Link id="m-healthstat-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" HealthStat { get; }"}</code> | The health stat set on revive. |
| <Link id="m-heightofrespawnorb-2" /><code>{"float HeightOfRespawnOrb { get; }"}</code> | Height of the respawn orb above where the player went down. |
| <Link id="m-heightofreviveorbs-2" /><code>{"float HeightOfReviveOrbs { get; }"}</code> | Height above the spawn point of the spinning object the revive orbs sit on. |
| <Link id="m-hungerstat-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" HungerStat { get; }"}</code> | The hunger stat, turned off while downed (it drives natural health regen). |
| <Link id="m-numberofrevivalorbstospawn-2" /><code>{"int NumberOfRevivalOrbsToSpawn { get; }"}</code> | How many revive orbs spawn around the grave; each one is that share of the revive. |
| <Link id="m-orbmovementrange-2" /><code>{"Vector3 OrbMovementRange { get; }"}</code> | Movement range passed to each revive orb's movement modifier (probably how far it drifts). |
| <Link id="m-orbmovementspeed-2" /><code>{"float OrbMovementSpeed { get; }"}</code> | Movement speed passed to each revive orb's movement modifier. |
| <Link id="m-percentageofhealthtoreturntorevivedplayers" /><code>{"float PercentageOfHealthToReturnToRevivedPlayers { get; }"}</code> | Share of max health (0 to 1) a revived player gets. |
| <Link id="m-respawndebuffdurationinseconds-2" /><code>{"float RespawnDebuffDurationInSeconds { get; }"}</code> | How long the respawn debuffs last on a revived player. |
| <Link id="m-respawnorbdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RespawnOrbDefinition { get; }"}</code> | Pooled object for the respawn orb shown to the downed player. |
| <Link id="m-respawnorbdistancefromplayer-2" /><code>{"float RespawnOrbDistanceFromPlayer { get; }"}</code> | How far in front of the player the respawn orb is placed. |
| <Link id="m-revivalorbdistancefromdownedplayer-2" /><code>{"float RevivalOrbDistanceFromDownedPlayer { get; }"}</code> | Distance from the downed player an orb moves to when made reachable for them. |
| <Link id="m-revivalorbdistancefromgrave-2" /><code>{"float RevivalOrbDistanceFromGrave { get; }"}</code> | Radius of the ring of revive orbs around the grave. |
| <Link id="m-reviveorb-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" ReviveOrb { get; }"}</code> | Prefab for each revive orb. |
| <Link id="m-rotatingobject-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" RotatingObject { get; }"}</code> | Prefab the revive orbs are placed on, which spins. |
| <Link id="m-secondsaddedtorevivaltimerperorb-2" /><code>{"float SecondsAddedToRevivalTimerPerOrb { get; }"}</code> | Seconds added to the downed timer for each revive orb collected. |
| <Link id="m-spawnablelayers-2" /><code>{"LayerMask SpawnableLayers { get; }"}</code> | Layers the gravestone can be placed on (raycast down from the player). |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | The state class these settings are for: `DownedState`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawndebuffs" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{"> GetRespawnDebuffs()"}</code> | Builds new stat modifiers from the respawn debuff list. Applied to revived players. |

## Used in

Members of other types that take, return or hold a `DownedStateSettings`:

[`DownedState.Settings`](/game-api/types/alta-player/downedstate#m-settings), [`ReviveCompletableActivity.ReviveCompletableActivity`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-ctor), [`ReviveCompletableActivity.settings`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-settings), [`ReviveOrb.LinkReviveActionToActivity`](/game-api/types/game-other-namespaces/reviveorb#m-linkreviveactiontoactivity), [`ReviveOrb.settings`](/game-api/types/game-other-namespaces/reviveorb#m-settings).
