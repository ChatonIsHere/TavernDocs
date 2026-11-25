---
title: "PooledParticleSystemManipulator"
description: "class PooledParticleSystemManipulator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledParticleSystemManipulator

A **class** in `Root.Township`, `Features.Visual_Effects.General_Scripts`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystemManipulator()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedparticleacceleration" /><code>{"private float cachedParticleAcceleration"}</code> |
| <Link id="m-cachedparticlespeed" /><code>{"private float cachedParticleSpeed"}</code> |
| <Link id="m-cachedtimetostartmoving" /><code>{"private float cachedTimeToStartMoving"}</code> |
| <Link id="m-hasplayeddestinationeffect" /><code>{"private bool hasPlayedDestinationEffect"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-movingparticles" /><code>{"private ParticleSystem.Particle[] movingParticles"}</code> |
| <Link id="m-particlesystemsatdestination" /><code>{"private HashSet<ParticleSystem> particleSystemsAtDestination"}</code> |
| <Link id="m-particlesystemstomove" /><code>{"private ParticleSystem[] particleSystemsToMove"}</code> |
| <Link id="m-sqrdistancetobeconsideredatdestination" /><code>{"private const float SqrDistanceToBeConsideredAtDestination"}</code> |
| <Link id="m-waitforparticlesystembeforerelease" /><code>{"private ParticleSystem[] waitForParticleSystemBeforeRelease"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-isstillwaitingforparticlestocomplete" /><code>{"private bool IsStillWaitingForParticlesToComplete { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-movetocustom" /><code>{"void MoveToCustom("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, float particleSpeed, float particleAcceleration, float timeToStartMoving, Transform[] targets)"}</code> |
| <Link id="m-movetoplayer" /><code>{"void MoveToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, "}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, float particleSpeed, float particleAcceleration, float timeToStartMoving)"}</code> |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addtargetsforcustomdestination" /><code>{"private void AddTargetsForCustomDestination(Transform[] customTargets, ref List<Transform> targets)"}</code> |
| <Link id="m-addtargetsforplayerbody" /><code>{"private void AddTargetsForPlayerBody("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, ref List<Transform> targets)"}</code> |
| <Link id="m-addtargetsforplayerhands" /><code>{"private void AddTargetsForPlayerHands("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, ref List<Transform> targets)"}</code> |
| <Link id="m-cacheparticlemovementsettings" /><code>{"private void CacheParticleMovementSettings(float particleSpeed, float particleAcceleration, float timeToStartMoving)"}</code> |
| <Link id="m-getparticletargets" /><code>{"private List<Transform> GetParticleTargets("}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Transform[] customTargets)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-particlemovementroutine" /><code>{"private IEnumerator ParticleMovementRoutine("}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController = null, Transform[] customTargets = null) (iterator)"}</code> |
| <Link id="m-setupmovingparticles" /><code>{"private void SetupMovingParticles()"}</code> |
| <Link id="m-tryplaydestinationeffect" /><code>{"private void TryPlayDestinationEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, List<Transform> targets)"}</code> |
| <Link id="m-updateparticlesforsystem" /><code>{"private void UpdateParticlesForSystem(ParticleSystem particleSystemToMove, List<Vector3> targets, float maxDistanceDelta, int particleCount)"}</code> |

</details>
