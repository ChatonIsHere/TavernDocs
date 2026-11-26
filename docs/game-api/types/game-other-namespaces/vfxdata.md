---
title: "VfxData"
description: "Settings asset for a two-part particle effect: particles that spawn, fly to a destination (usually the player) and trigger an arrival effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VfxData

A **class** in `Root.Township`, `Features.Visual_Effects.VFXData`.

Settings asset for a two-part particle effect: particles that spawn, fly to a destination (usually the player) and trigger an arrival effect. Used for effects like gaining a skill orb. Looked up by hash.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`HashedGeneralValue<VfxData>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`VfxData`](/game-api/types/game-other-namespaces/vfxdata)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VfxData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particleacceleration" /><code>{"private float particleAcceleration"}</code> | Backing field for `ParticleAcceleration`, extra speed per second (0.1 by default). |
| <Link id="m-particledestination" /><code>{"private "}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" particleDestination"}</code> | Backing field for `ParticleDestination`, where the particles fly to. Custom is for internal use. |
| <Link id="m-particlesonarrival" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesOnArrival"}</code> | Backing field for `ParticlesOnArrival`, the pooled effect spawned when the particles reach the player. |
| <Link id="m-particlespeed" /><code>{"private float particleSpeed"}</code> | Backing field for `ParticleSpeed`, in metres per second (1 by default). |
| <Link id="m-particlestotransform" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesToTransform"}</code> | Backing field for `ParticlesToTransform`, the pooled effect spawned when the player unlocks something. |
| <Link id="m-shouldplayvfx" /><code>{"private bool shouldPlayVFX"}</code> | Backing field for `ShouldPlayVFX`. Turn off to disable the effect without changing references. |
| <Link id="m-timetostartmoving" /><code>{"private float timeToStartMoving"}</code> | Backing field for `TimeToStartMoving`, the delay before the script moves the particles (1.1 seconds by default). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-particleacceleration-2" /><code>{"float ParticleAcceleration { get; }"}</code> | Extra speed the travelling particles gain, in metres per second. |
| <Link id="m-particledestination-2" /><code><Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" "}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" { get; }"}</code> | Where the particles fly to. |
| <Link id="m-particlesonarrival-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticlesOnArrival { get; }"}</code> | Pooled effect spawned when the particles arrive. |
| <Link id="m-particlespeed-2" /><code>{"float ParticleSpeed { get; }"}</code> | Starting speed of the travelling particles, in metres per second. |
| <Link id="m-particlestotransform-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticlesToTransform { get; }"}</code> | Pooled effect whose particles fly to the destination. |
| <Link id="m-shouldplayvfx-2" /><code>{"bool ShouldPlayVFX { get; }"}</code> | Switch to turn the effect off without removing references to it. |
| <Link id="m-timetostartmoving-2" /><code>{"float TimeToStartMoving { get; }"}</code> | Delay before the particles start flying, in seconds. |

## Used in

Members of other types that take, return or hold a `VfxData`:

[`OrbBasinVfxController.GetVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-getvfxdata), [`OrbBasinVfxController.IsValid`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-isvalid), [`OrbBasinVfxController.orbObtainedVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-orbobtainedvfxdata), [`OrbBasinVfxController.permanentUnlockVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-permanentunlockvfxdata), [`OrbBasinVfxController.PlayParticle`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-playparticle), [`OrbBasinVfxController.towerCompletionVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-towercompletionvfxdata), [`OrbBasinVfxControllerSaveData.OrbObtainedVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata#m-orbobtainedvfxdata), [`OrbBasinVfxControllerSaveData.PermanentUnlockVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata#m-permanentunlockvfxdata), [`OrbBasinVfxControllerSaveData.TowerCompletionVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata#m-towercompletionvfxdata), [`OrbBasinVfxControllerSaveData1.ClimbingUnlockVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-climbingunlockvfxdata), [`OrbBasinVfxControllerSaveData1.OrbObtainedVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-orbobtainedvfxdata), [`OrbBasinVfxControllerSaveData1.StaminaUnlockVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-staminaunlockvfxdata), [`OrbBasinVfxControllerSaveData1.TowerCompletionVfxData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-towercompletionvfxdata), [`ParticlesToPlayer.vfxData`](/game-api/types/game-other-namespaces/particlestoplayer#m-vfxdata), [`ParticlesToPlayerSaveData.VfxData`](/game-api/types/game-other-namespaces/particlestoplayersavedata#m-vfxdata).
