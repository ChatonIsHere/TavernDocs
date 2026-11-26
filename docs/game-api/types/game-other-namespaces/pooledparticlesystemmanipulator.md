---
title: "PooledParticleSystemManipulator"
description: "Pooled particle effect that, after a delay, pulls its live particles towards targets (a player's hands, body or custom transforms), plays an arrival effect,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledParticleSystemManipulator

A **class** in `Root.Township`, `Features.Visual_Effects.General_Scripts`.

Pooled particle effect that, after a delay, pulls its live particles towards targets (a player's hands, body or custom transforms), plays an arrival effect, then returns itself to the pool. Client side.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystemManipulator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedparticleacceleration" /><code>{"private float cachedParticleAcceleration"}</code> | Acceleration added to the move speed each frame. |
| <Link id="m-cachedparticlespeed" /><code>{"private float cachedParticleSpeed"}</code> | Base move distance per frame. |
| <Link id="m-cachedtimetostartmoving" /><code>{"private float cachedTimeToStartMoving"}</code> | Seconds to wait before the particles start moving. |
| <Link id="m-hasplayeddestinationeffect" /><code>{"private bool hasPlayedDestinationEffect"}</code> | Whether the arrival effect has played this use. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-movingparticles" /><code>{"private ParticleSystem.Particle[] movingParticles"}</code> | Buffer for reading and writing particles. |
| <Link id="m-particlesystemsatdestination" /><code>{"private HashSet<ParticleSystem> particleSystemsAtDestination"}</code> | Systems that have had at least one particle arrive. |
| <Link id="m-particlesystemstomove" /><code>{"private ParticleSystem[] particleSystemsToMove"}</code> | Particle systems whose particles are pulled to the targets. |
| <Link id="m-sqrdistancetobeconsideredatdestination" /><code>{"private const float SqrDistanceToBeConsideredAtDestination"}</code> | Squared distance (0.02) at which a particle counts as arrived and is killed. |
| <Link id="m-waitforparticlesystembeforerelease" /><code>{"private ParticleSystem[] waitForParticleSystemBeforeRelease"}</code> | Optional systems that must finish before the object goes back to the pool. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isstillwaitingforparticlestocomplete" /><code>{"private bool IsStillWaitingForParticlesToComplete { get; }"}</code> | True while any of the wait-for systems still has particles. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-movetocustom" /><code>{"void MoveToCustom("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, float particleSpeed, float particleAcceleration, float timeToStartMoving, Transform[] targets)"}</code> | Starts moving the particles to the given transforms. |
| <Link id="m-movetoplayer" /><code>{"void MoveToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, "}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, float particleSpeed, float particleAcceleration, float timeToStartMoving)"}</code> | Starts moving the particles to the player's hands or body. Logs an error if the player or controller is null. |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> | Build step that removes missing particle systems from both lists. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtargetsforcustomdestination" /><code>{"private void AddTargetsForCustomDestination(Transform[] customTargets, ref List<Transform> targets)"}</code> | Adds the custom targets, logging an error if there are none. |
| <Link id="m-addtargetsforplayerbody" /><code>{"private void AddTargetsForPlayerBody("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, ref List<Transform> targets)"}</code> | Adds the player's body transform, using the local player if none is given. |
| <Link id="m-addtargetsforplayerhands" /><code>{"private void AddTargetsForPlayerHands("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, ref List<Transform> targets)"}</code> | Adds both of the player's grip points, using the local player if none is given. |
| <Link id="m-cacheparticlemovementsettings" /><code>{"private void CacheParticleMovementSettings(float particleSpeed, float particleAcceleration, float timeToStartMoving)"}</code> | Stores the speed, acceleration and start delay for the movement routine. |
| <Link id="m-getparticletargets" /><code>{"private List<Transform> GetParticleTargets("}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Transform[] customTargets)"}</code> | Builds the target transform list for the destination type. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Resets the arrival effect flag for the next use. |
| <Link id="m-particlemovementroutine" /><code>{"private IEnumerator ParticleMovementRoutine("}<Link to="/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController = null, Transform[] customTargets = null) (iterator)"}</code> | Waits, then moves particles to the targets each frame until none are left, then waits for the wait-for systems and releases to the pool. |
| <Link id="m-setupmovingparticles" /><code>{"private void SetupMovingParticles()"}</code> | Allocates the particle buffer sized to the largest system's max particles. |
| <Link id="m-tryplaydestinationeffect" /><code>{"private void TryPlayDestinationEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, List<Transform> targets)"}</code> | Once every system has had a particle arrive, spawns the arrival effect on each target, once per use. |
| <Link id="m-updateparticlesforsystem" /><code>{"private void UpdateParticlesForSystem(ParticleSystem particleSystemToMove, List<Vector3> targets, float maxDistanceDelta, int particleCount)"}</code> | Moves each particle towards its target (spread round-robin over targets), killing those that arrive. |

</details>
