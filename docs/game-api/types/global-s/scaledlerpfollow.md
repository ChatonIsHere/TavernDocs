---
title: "ScaledLerpFollow"
description: "class ScaledLerpFollow in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaledLerpFollow

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`LerpFollowBase<PlayerController>`](/game-api/types/global-i-l/lerpfollowbase-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScaledLerpFollow()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activelerps" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-s/scaledlerpfollow">{"ScaledLerpFollow"}</Link>{"> activeLerps"}</code> |
| <Link id="m-currenttimedelay" /><code>{"private float currentTimeDelay"}</code> |
| <Link id="m-haseffect" /><code>{"private bool hasEffect"}</code> |
| <Link id="m-hassound" /><code>{"private bool hasSound"}</code> |
| <Link id="m-intervalbetweenparticlessquared" /><code>{"private float intervalBetweenParticlesSquared"}</code> |
| <Link id="m-localsoundvolume" /><code>{"private float localSoundVolume"}</code> |
| <Link id="m-maximumdistancesquared" /><code>{"private float maximumDistanceSquared"}</code> |
| <Link id="m-minimumdistancesquared" /><code>{"private float minimumDistanceSquared"}</code> |
| <Link id="m-mintimedelay" /><code>{"private float minTimeDelay"}</code> |
| <Link id="m-particlesystem" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particleSystem"}</code> |
| <Link id="m-remotesoundvolume" /><code>{"private float remoteSoundVolume"}</code> |
| <Link id="m-rotationoffset" /><code>{"private Vector3 rotationOffset"}</code> |
| <Link id="m-sizecurve" /><code>{"private AnimationCurve sizeCurve"}</code> |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target"}</code> |
| <Link id="m-travaleddistance" /><code>{"private float travaledDistance"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-playstatus" /><code><Link to="/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" PlayStatus { get; set; }"}</code> |
| <Link id="m-target-2" /><code>{"override "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Target { get; }"}</code> |
| <Link id="m-targetposition" /><code>{"protected override Vector3 TargetPosition { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-settarget" /><code>{"override void SetTarget("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" target)"}</code> |
| <Link id="m-setvolume" /><code>{"static void SetVolume(float local, float remote)"}</code> |
| <Link id="m-start" /><code>{"override void Start()"}</code> |
| <Link id="m-moving" /><code>{"protected override void Moving(Vector3 from, Vector3 to)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-updatevolumebasedonsettings" /><code>{"private void UpdateVolumeBasedOnSettings(Settings obj)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ScaledLerpFollow`:

[`TeleporterTrailLerper.lerper`](/game-api/types/global-t-x/teleportertraillerper#m-lerper).
