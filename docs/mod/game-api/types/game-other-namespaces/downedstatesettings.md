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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownedStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatepersecond" /><code>{"private float angleToRotatePerSecond"}</code> | <span className="api-desc">Spin speed of the ring of revive orbs.</span> |
| <Link id="m-distancebeforeorbisforcereleased" /><code>{"private float distanceBeforeOrbIsForceReleased"}</code> | <span className="api-desc">How far a revive orb can be pulled from its spot before it is forced out of the hand.</span> |
| <Link id="m-enterdownedstatesfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" enterDownedStateSfx"}</code> | <span className="api-desc">Sound played when a player goes down.</span> |
| <Link id="m-enterdownedstatevfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" enterDownedStateVfx"}</code> | <span className="api-desc">Effect spawned when a player goes down.</span> |
| <Link id="m-exitdownedstatesfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" exitDownedStateSfx"}</code> | <span className="api-desc">Sound played when a player leaves the downed state.</span> |
| <Link id="m-exitdownedstatevfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" exitDownedStateVfx"}</code> | <span className="api-desc">Effect spawned when a player leaves the downed state.</span> |
| <Link id="m-gravestone" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" gravestone"}</code> | <span className="api-desc">Prefab spawned at the spot where the player went down.</span> |
| <Link id="m-healthpercentageforrevivedplayers" /><code>{"private float healthPercentageForRevivedPlayers"}</code> | <span className="api-desc">Share of maximum health (0 to 1) a revived player gets back.</span> |
| <Link id="m-healthstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat"}</code> | <span className="api-desc">The player's health stat.</span> |
| <Link id="m-heightofrespawnorb" /><code>{"private float heightOfRespawnOrb"}</code> | <span className="api-desc">Height of the respawn orb above its spawn point.</span> |
| <Link id="m-heightofreviveorbs" /><code>{"private float heightOfReviveOrbs"}</code> | <span className="api-desc">Height of the revive orb ring above the downed spot.</span> |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" hungerStat"}</code> | <span className="api-desc">Stat that is disabled while downed to stop natural health regeneration.</span> |
| <Link id="m-numberofrevivalorbstospawn" /><code>{"private int numberOfRevivalOrbsToSpawn"}</code> | <span className="api-desc">How many revive orbs spawn around a downed player; each adds an equal share of revive progress.</span> |
| <Link id="m-orbmovementrange" /><code>{"private Vector3 orbMovementRange"}</code> | <span className="api-desc">Range of the idle bobbing movement of each revive orb.</span> |
| <Link id="m-orbmovementspeed" /><code>{"private float orbMovementSpeed"}</code> | <span className="api-desc">Speed of the idle bobbing movement of each revive orb.</span> |
| <Link id="m-respawndebuffdurationinseconds" /><code>{"private float respawnDebuffDurationInSeconds"}</code> | <span className="api-desc">How long the respawn debuffs last.</span> |
| <Link id="m-respawndebuffs" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmodifierconstructor">{"StatModifierConstructor"}</Link>{"[] respawnDebuffs"}</code> | <span className="api-desc">Stat modifiers applied to the player after respawning.</span> |
| <Link id="m-respawnorbdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" respawnOrbDefinition"}</code> | <span className="api-desc">Pooled object used for the respawn orb the downed player can grab.</span> |
| <Link id="m-respawnorbdistancefromplayer" /><code>{"private float respawnOrbDistanceFromPlayer"}</code> | <span className="api-desc">How far from the player the respawn orb appears.</span> |
| <Link id="m-revivalorbdistancefromdownedplayer" /><code>{"private float revivalOrbDistanceFromDownedPlayer"}</code> | <span className="api-desc">Ring radius an orb moves to when it is made reachable for the downed player.</span> |
| <Link id="m-revivalorbdistancefromgrave" /><code>{"private float revivalOrbDistanceFromGrave"}</code> | <span className="api-desc">Radius of the revive orb ring around the grave.</span> |
| <Link id="m-reviveorb" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" reviveOrb"}</code> | <span className="api-desc">Prefab of the orbs other players use to revive.</span> |
| <Link id="m-rotatingobject" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" rotatingObject"}</code> | <span className="api-desc">Prefab spawned as the spinning parent of the revive orbs.</span> |
| <Link id="m-secondsaddedtorevivaltimerperorb" /><code>{"private float secondsAddedToRevivalTimerPerOrb"}</code> | <span className="api-desc">Seconds added to the revive timer for each orb used.</span> |
| <Link id="m-spawnablelayers" /><code>{"private LayerMask spawnableLayers"}</code> | <span className="api-desc">Layers the gravestone placement raycast can land on.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotatepersecond-2" /><code>{"float AngleToRotatePerSecond { get; }"}</code> | <span className="api-desc">Spin speed of the object the revive orbs circle on.</span> |
| <Link id="m-distancebeforeorbisforcereleased-2" /><code>{"float DistanceBeforeOrbIsForceReleased { get; }"}</code> | <span className="api-desc">How far a revive orb can be pulled from its spot before it is dropped.</span> |
| <Link id="m-enterdownedstatesfx-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" EnterDownedStateSfx { get; }"}</code> | <span className="api-desc">Sound when a player goes down.</span> |
| <Link id="m-enterdownedstatevfx-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EnterDownedStateVfx { get; }"}</code> | <span className="api-desc">Effect when a player goes down.</span> |
| <Link id="m-exitdownedstatesfx-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ExitDownedStateSfx { get; }"}</code> | <span className="api-desc">Sound when a player leaves the downed state.</span> |
| <Link id="m-exitdownedstatevfx-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ExitDownedStateVfx { get; }"}</code> | <span className="api-desc">Effect when a player leaves the downed state.</span> |
| <Link id="m-gravestone-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Gravestone { get; }"}</code> | <span className="api-desc">Prefab spawned as the downed player's gravestone.</span> |
| <Link id="m-healthstat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" HealthStat { get; }"}</code> | <span className="api-desc">The health stat set on revive.</span> |
| <Link id="m-heightofrespawnorb-2" /><code>{"float HeightOfRespawnOrb { get; }"}</code> | <span className="api-desc">Height of the respawn orb above where the player went down.</span> |
| <Link id="m-heightofreviveorbs-2" /><code>{"float HeightOfReviveOrbs { get; }"}</code> | <span className="api-desc">Height above the spawn point of the spinning object the revive orbs sit on.</span> |
| <Link id="m-hungerstat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" HungerStat { get; }"}</code> | <span className="api-desc">The hunger stat, turned off while downed (it drives natural health regen).</span> |
| <Link id="m-numberofrevivalorbstospawn-2" /><code>{"int NumberOfRevivalOrbsToSpawn { get; }"}</code> | <span className="api-desc">How many revive orbs spawn around the grave; each one is that share of the revive.</span> |
| <Link id="m-orbmovementrange-2" /><code>{"Vector3 OrbMovementRange { get; }"}</code> | <span className="api-desc">Movement range passed to each revive orb's movement modifier (probably how far it drifts).</span> |
| <Link id="m-orbmovementspeed-2" /><code>{"float OrbMovementSpeed { get; }"}</code> | <span className="api-desc">Movement speed passed to each revive orb's movement modifier.</span> |
| <Link id="m-percentageofhealthtoreturntorevivedplayers" /><code>{"float PercentageOfHealthToReturnToRevivedPlayers { get; }"}</code> | <span className="api-desc">Share of max health (0 to 1) a revived player gets.</span> |
| <Link id="m-respawndebuffdurationinseconds-2" /><code>{"float RespawnDebuffDurationInSeconds { get; }"}</code> | <span className="api-desc">How long the respawn debuffs last on a revived player.</span> |
| <Link id="m-respawnorbdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RespawnOrbDefinition { get; }"}</code> | <span className="api-desc">Pooled object for the respawn orb shown to the downed player.</span> |
| <Link id="m-respawnorbdistancefromplayer-2" /><code>{"float RespawnOrbDistanceFromPlayer { get; }"}</code> | <span className="api-desc">How far in front of the player the respawn orb is placed.</span> |
| <Link id="m-revivalorbdistancefromdownedplayer-2" /><code>{"float RevivalOrbDistanceFromDownedPlayer { get; }"}</code> | <span className="api-desc">Distance from the downed player an orb moves to when made reachable for them.</span> |
| <Link id="m-revivalorbdistancefromgrave-2" /><code>{"float RevivalOrbDistanceFromGrave { get; }"}</code> | <span className="api-desc">Radius of the ring of revive orbs around the grave.</span> |
| <Link id="m-reviveorb-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" ReviveOrb { get; }"}</code> | <span className="api-desc">Prefab for each revive orb.</span> |
| <Link id="m-rotatingobject-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" RotatingObject { get; }"}</code> | <span className="api-desc">Prefab the revive orbs are placed on, which spins.</span> |
| <Link id="m-secondsaddedtorevivaltimerperorb-2" /><code>{"float SecondsAddedToRevivalTimerPerOrb { get; }"}</code> | <span className="api-desc">Seconds added to the downed timer for each revive orb collected.</span> |
| <Link id="m-spawnablelayers-2" /><code>{"LayerMask SpawnableLayers { get; }"}</code> | <span className="api-desc">Layers the gravestone can be placed on (raycast down from the player).</span> |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | <span className="api-desc">The state class these settings are for: `DownedState`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawndebuffs" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{"> GetRespawnDebuffs()"}</code> | <span className="api-desc">Builds new stat modifiers from the respawn debuff list. Applied to revived players.</span> |

## Used in

Members of other types that take, return or hold a `DownedStateSettings`:

<div className="api-used-in">

[`DownedState.Settings`](/mod/game-api/types/alta-player/downedstate#m-settings), [`ReviveCompletableActivity.ReviveCompletableActivity`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-ctor), [`ReviveCompletableActivity.settings`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-settings), [`ReviveOrb.LinkReviveActionToActivity`](/mod/game-api/types/game-other-namespaces/reviveorb#m-linkreviveactiontoactivity), [`ReviveOrb.settings`](/mod/game-api/types/game-other-namespaces/reviveorb#m-settings).

</div>
