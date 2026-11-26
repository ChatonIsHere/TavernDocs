---
title: "ScaledLerpFollow"
description: "Footstep effect that trails a player's feet and plays step sounds and size-scaled particles as they move on the ground."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaledLerpFollow

A **class** in `Root.Township`, no namespace.

Footstep effect that trails a player's feet and plays step sounds and size-scaled particles as they move on the ground. Client only by default (from `LerpFollowBase`).

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`LerpFollowBase<PlayerController>`](/game-api/types/global-i-l/lerpfollowbase-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaledLerpFollow()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activelerps" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-s/scaledlerpfollow">{"ScaledLerpFollow"}</Link>{"> activeLerps"}</code> | Every live follower, so `SetVolume` can reach them. |
| <Link id="m-currenttimedelay" /><code>{"private float currentTimeDelay"}</code> | Time left before another step can play. |
| <Link id="m-haseffect" /><code>{"private bool hasEffect"}</code> | Whether a particle is set. |
| <Link id="m-hassound" /><code>{"private bool hasSound"}</code> | Whether a step sound is set. |
| <Link id="m-intervalbetweenparticlessquared" /><code>{"private float intervalBetweenParticlesSquared"}</code> | Squared distance between steps, scaled by the ground's speed modifier. |
| <Link id="m-localsoundvolume" /><code>{"private float localSoundVolume"}</code> | Step volume for your own player. Worked out but not passed to the sound in this build. |
| <Link id="m-maximumdistancesquared" /><code>{"private float maximumDistanceSquared"}</code> | Squared per-frame distance that maps to the top of `sizeCurve`. |
| <Link id="m-minimumdistancesquared" /><code>{"private float minimumDistanceSquared"}</code> | Squared per-frame distance below which no step plays. |
| <Link id="m-mintimedelay" /><code>{"private float minTimeDelay"}</code> | Shortest time between two steps. |
| <Link id="m-particlesystem" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particleSystem"}</code> | Pooled particle spawned at each step. |
| <Link id="m-remotesoundvolume" /><code>{"private float remoteSoundVolume"}</code> | Step volume for other players. Like the local one, not actually applied. |
| <Link id="m-rotationoffset" /><code>{"private Vector3 rotationOffset"}</code> | Extra rotation applied to each spawned particle. |
| <Link id="m-sizecurve" /><code>{"private AnimationCurve sizeCurve"}</code> | Curve from movement speed to particle scale. |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> | Step sound, unless the ground overrides it with its own. |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target"}</code> | Backing field for `Target`. |
| <Link id="m-travaleddistance" /><code>{"private float travaledDistance"}</code> | Squared distance left before the next step. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playstatus" /><code><Link to="/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" PlayStatus { get; set; }"}</code> | Flags that can turn off the sound or the particle part of the effect. |
| <Link id="m-target-2" /><code>{"override "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Target { get; }"}</code> | The player being followed. |
| <Link id="m-targetposition" /><code>{"protected override Vector3 TargetPosition { get; }"}</code> | The followed player's feet position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"override void SetTarget("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target)"}</code> | Sets the player to follow. |
| <Link id="m-setvolume" /><code>{"static void SetVolume(float local, float remote)"}</code> | Sets local and remote step volume on every active follower. The `setvolume` console command calls it. |
| <Link id="m-start" /><code>{"override void Start()"}</code> | Checks which effects are set, joins the active list and reads the self step volume setting. |
| <Link id="m-moving" /><code>{"protected override void Moving(Vector3 from, Vector3 to)"}</code> | Each frame while grounded: after enough distance and time, plays a step sound and spawns a particle scaled by speed. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Leaves the active list and stops listening for settings. |
| <Link id="m-updatevolumebasedonsettings" /><code>{"private void UpdateVolumeBasedOnSettings(Settings obj)"}</code> | Reads the self step volume from game settings. |

</details>

## Used in

Members of other types that take, return or hold a `ScaledLerpFollow`:

[`TeleporterTrailLerper.lerper`](/game-api/types/global-t-x/teleportertraillerper#m-lerper).
