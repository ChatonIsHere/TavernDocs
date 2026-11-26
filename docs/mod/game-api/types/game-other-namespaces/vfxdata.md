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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`HashedGeneralValue<VfxData>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`VfxData`](/mod/game-api/types/game-other-namespaces/vfxdata)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VfxData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particleacceleration" /><code>{"private float particleAcceleration"}</code> | <span className="api-desc">Backing field for `ParticleAcceleration`, extra speed per second (0.1 by default).</span> |
| <Link id="m-particledestination" /><code>{"private "}<Link to="/mod/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" particleDestination"}</code> | <span className="api-desc">Backing field for `ParticleDestination`, where the particles fly to. Custom is for internal use.</span> |
| <Link id="m-particlesonarrival" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesOnArrival"}</code> | <span className="api-desc">Backing field for `ParticlesOnArrival`, the pooled effect spawned when the particles reach the player.</span> |
| <Link id="m-particlespeed" /><code>{"private float particleSpeed"}</code> | <span className="api-desc">Backing field for `ParticleSpeed`, in metres per second (1 by default).</span> |
| <Link id="m-particlestotransform" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesToTransform"}</code> | <span className="api-desc">Backing field for `ParticlesToTransform`, the pooled effect spawned when the player unlocks something.</span> |
| <Link id="m-shouldplayvfx" /><code>{"private bool shouldPlayVFX"}</code> | <span className="api-desc">Backing field for `ShouldPlayVFX`. Turn off to disable the effect without changing references.</span> |
| <Link id="m-timetostartmoving" /><code>{"private float timeToStartMoving"}</code> | <span className="api-desc">Backing field for `TimeToStartMoving`, the delay before the script moves the particles (1.1 seconds by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-particleacceleration-2" /><code>{"float ParticleAcceleration { get; }"}</code> | <span className="api-desc">Extra speed the travelling particles gain, in metres per second.</span> |
| <Link id="m-particledestination-2" /><code><Link to="/mod/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" "}<Link to="/mod/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" { get; }"}</code> | <span className="api-desc">Where the particles fly to.</span> |
| <Link id="m-particlesonarrival-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticlesOnArrival { get; }"}</code> | <span className="api-desc">Pooled effect spawned when the particles arrive.</span> |
| <Link id="m-particlespeed-2" /><code>{"float ParticleSpeed { get; }"}</code> | <span className="api-desc">Starting speed of the travelling particles, in metres per second.</span> |
| <Link id="m-particlestotransform-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticlesToTransform { get; }"}</code> | <span className="api-desc">Pooled effect whose particles fly to the destination.</span> |
| <Link id="m-shouldplayvfx-2" /><code>{"bool ShouldPlayVFX { get; }"}</code> | <span className="api-desc">Switch to turn the effect off without removing references to it.</span> |
| <Link id="m-timetostartmoving-2" /><code>{"float TimeToStartMoving { get; }"}</code> | <span className="api-desc">Delay before the particles start flying, in seconds.</span> |

## Used in

Members of other types that take, return or hold a `VfxData`:

<div className="api-used-in">

[`OrbBasinVfxController.GetVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-getvfxdata), [`OrbBasinVfxController.IsValid`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-isvalid), [`OrbBasinVfxController.orbObtainedVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-orbobtainedvfxdata), [`OrbBasinVfxController.permanentUnlockVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-permanentunlockvfxdata), [`OrbBasinVfxController.PlayParticle`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-playparticle), [`OrbBasinVfxController.towerCompletionVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-towercompletionvfxdata), [`OrbBasinVfxControllerSaveData.OrbObtainedVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata#m-orbobtainedvfxdata), [`OrbBasinVfxControllerSaveData.PermanentUnlockVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata#m-permanentunlockvfxdata), [`OrbBasinVfxControllerSaveData.TowerCompletionVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata#m-towercompletionvfxdata), [`OrbBasinVfxControllerSaveData1.ClimbingUnlockVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-climbingunlockvfxdata), [`OrbBasinVfxControllerSaveData1.OrbObtainedVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-orbobtainedvfxdata), [`OrbBasinVfxControllerSaveData1.StaminaUnlockVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-staminaunlockvfxdata), [`OrbBasinVfxControllerSaveData1.TowerCompletionVfxData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1#m-towercompletionvfxdata), [`ParticlesToPlayer.vfxData`](/mod/game-api/types/game-other-namespaces/particlestoplayer#m-vfxdata), [`ParticlesToPlayerSaveData.VfxData`](/mod/game-api/types/game-other-namespaces/particlestoplayersavedata#m-vfxdata).

</div>
