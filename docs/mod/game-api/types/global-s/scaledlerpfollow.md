---
title: "ScaledLerpFollow"
description: "Footstep effect that trails a player's feet and plays step sounds and size-scaled particles as they move on the ground."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaledLerpFollow

A **class** in `Root.Township`, the global namespace.

Footstep effect that trails a player's feet and plays step sounds and size-scaled particles as they move on the ground. Client only by default (from `LerpFollowBase`).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`LerpFollowBase<PlayerController>`](/mod/game-api/types/global-i-l/lerpfollowbase-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaledLerpFollow()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activelerps" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/global-s/scaledlerpfollow">{"ScaledLerpFollow"}</Link>{"> activeLerps"}</code> | <span className="api-desc">Every live follower, so `SetVolume` can reach them.</span> |
| <Link id="m-currenttimedelay" /><code>{"private float currentTimeDelay"}</code> | <span className="api-desc">Time left before another step can play.</span> |
| <Link id="m-haseffect" /><code>{"private bool hasEffect"}</code> | <span className="api-desc">Whether a particle is set.</span> |
| <Link id="m-hassound" /><code>{"private bool hasSound"}</code> | <span className="api-desc">Whether a step sound is set.</span> |
| <Link id="m-intervalbetweenparticlessquared" /><code>{"private float intervalBetweenParticlesSquared"}</code> | <span className="api-desc">Squared distance between steps, scaled by the ground's speed modifier.</span> |
| <Link id="m-localsoundvolume" /><code>{"private float localSoundVolume"}</code> | <span className="api-desc">Step volume for your own player. Worked out but not passed to the sound in this build.</span> |
| <Link id="m-maximumdistancesquared" /><code>{"private float maximumDistanceSquared"}</code> | <span className="api-desc">Squared per-frame distance that maps to the top of `sizeCurve`.</span> |
| <Link id="m-minimumdistancesquared" /><code>{"private float minimumDistanceSquared"}</code> | <span className="api-desc">Squared per-frame distance below which no step plays.</span> |
| <Link id="m-mintimedelay" /><code>{"private float minTimeDelay"}</code> | <span className="api-desc">Shortest time between two steps.</span> |
| <Link id="m-particlesystem" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particleSystem"}</code> | <span className="api-desc">Pooled particle spawned at each step.</span> |
| <Link id="m-remotesoundvolume" /><code>{"private float remoteSoundVolume"}</code> | <span className="api-desc">Step volume for other players. Like the local one, not actually applied.</span> |
| <Link id="m-rotationoffset" /><code>{"private Vector3 rotationOffset"}</code> | <span className="api-desc">Extra rotation applied to each spawned particle.</span> |
| <Link id="m-sizecurve" /><code>{"private AnimationCurve sizeCurve"}</code> | <span className="api-desc">Curve from movement speed to particle scale.</span> |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> | <span className="api-desc">Step sound, unless the ground overrides it with its own.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |
| <Link id="m-travaleddistance" /><code>{"private float travaledDistance"}</code> | <span className="api-desc">Squared distance left before the next step.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playstatus" /><code><Link to="/mod/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" PlayStatus { get; set; }"}</code> | <span className="api-desc">Flags that can turn off the sound or the particle part of the effect.</span> |
| <Link id="m-target-2" /><code>{"override "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Target { get; }"}</code> | <span className="api-desc">The player being followed.</span> |
| <Link id="m-targetposition" /><code>{"protected override Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">The followed player's feet position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"override void SetTarget("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target)"}</code> | <span className="api-desc">Sets the player to follow.</span> |
| <Link id="m-setvolume" /><code>{"static void SetVolume(float local, float remote)"}</code> | <span className="api-desc">Sets local and remote step volume on every active follower. The `setvolume` console command calls it.</span> |
| <Link id="m-start" /><code>{"override void Start()"}</code> | <span className="api-desc">Checks which effects are set, joins the active list and reads the self step volume setting.</span> |
| <Link id="m-moving" /><code>{"protected override void Moving(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Each frame while grounded: after enough distance and time, plays a step sound and spawns a particle scaled by speed.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Leaves the active list and stops listening for settings.</span> |
| <Link id="m-updatevolumebasedonsettings" /><code>{"private void UpdateVolumeBasedOnSettings(Settings obj)"}</code> | <span className="api-desc">Reads the self step volume from game settings.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ScaledLerpFollow`:

<div className="api-used-in">

[`TeleporterTrailLerper.lerper`](/mod/game-api/types/global-t-x/teleportertraillerper#m-lerper).

</div>
