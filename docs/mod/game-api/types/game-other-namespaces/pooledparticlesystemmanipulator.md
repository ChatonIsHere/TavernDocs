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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystemManipulator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedparticleacceleration" /><code>{"private float cachedParticleAcceleration"}</code> | <span className="api-desc">Acceleration added to the move speed each frame.</span> |
| <Link id="m-cachedparticlespeed" /><code>{"private float cachedParticleSpeed"}</code> | <span className="api-desc">Base move distance per frame.</span> |
| <Link id="m-cachedtimetostartmoving" /><code>{"private float cachedTimeToStartMoving"}</code> | <span className="api-desc">Seconds to wait before the particles start moving.</span> |
| <Link id="m-hasplayeddestinationeffect" /><code>{"private bool hasPlayedDestinationEffect"}</code> | <span className="api-desc">Whether the arrival effect has played this use.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-movingparticles" /><code>{"private ParticleSystem.Particle[] movingParticles"}</code> | <span className="api-desc">Buffer for reading and writing particles.</span> |
| <Link id="m-particlesystemsatdestination" /><code>{"private HashSet<ParticleSystem> particleSystemsAtDestination"}</code> | <span className="api-desc">Systems that have had at least one particle arrive.</span> |
| <Link id="m-particlesystemstomove" /><code>{"private ParticleSystem[] particleSystemsToMove"}</code> | <span className="api-desc">Particle systems whose particles are pulled to the targets.</span> |
| <Link id="m-sqrdistancetobeconsideredatdestination" /><code>{"private const float SqrDistanceToBeConsideredAtDestination"}</code> | <span className="api-desc">Squared distance (0.02) at which a particle counts as arrived and is killed.</span> |
| <Link id="m-waitforparticlesystembeforerelease" /><code>{"private ParticleSystem[] waitForParticleSystemBeforeRelease"}</code> | <span className="api-desc">Optional systems that must finish before the object goes back to the pool.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isstillwaitingforparticlestocomplete" /><code>{"private bool IsStillWaitingForParticlesToComplete { get; }"}</code> | <span className="api-desc">True while any of the wait-for systems still has particles.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-movetocustom" /><code>{"void MoveToCustom("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, float particleSpeed, float particleAcceleration, float timeToStartMoving, Transform[] targets)"}</code> | <span className="api-desc">Starts moving the particles to the given transforms.</span> |
| <Link id="m-movetoplayer" /><code>{"void MoveToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, "}<Link to="/mod/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, float particleSpeed, float particleAcceleration, float timeToStartMoving)"}</code> | <span className="api-desc">Starts moving the particles to the player's hands or body. Logs an error if the player or controller is null.</span> |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> | <span className="api-desc">Build step that removes missing particle systems from both lists.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtargetsforcustomdestination" /><code>{"private void AddTargetsForCustomDestination(Transform[] customTargets, ref List<Transform> targets)"}</code> | <span className="api-desc">Adds the custom targets, logging an error if there are none.</span> |
| <Link id="m-addtargetsforplayerbody" /><code>{"private void AddTargetsForPlayerBody("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, ref List<Transform> targets)"}</code> | <span className="api-desc">Adds the player's body transform, using the local player if none is given.</span> |
| <Link id="m-addtargetsforplayerhands" /><code>{"private void AddTargetsForPlayerHands("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, ref List<Transform> targets)"}</code> | <span className="api-desc">Adds both of the player's grip points, using the local player if none is given.</span> |
| <Link id="m-cacheparticlemovementsettings" /><code>{"private void CacheParticleMovementSettings(float particleSpeed, float particleAcceleration, float timeToStartMoving)"}</code> | <span className="api-desc">Stores the speed, acceleration and start delay for the movement routine.</span> |
| <Link id="m-getparticletargets" /><code>{"private List<Transform> GetParticleTargets("}<Link to="/mod/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Transform[] customTargets)"}</code> | <span className="api-desc">Builds the target transform list for the destination type.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Resets the arrival effect flag for the next use.</span> |
| <Link id="m-particlemovementroutine" /><code>{"private IEnumerator ParticleMovementRoutine("}<Link to="/mod/game-api/types/global-p/particledestination">{"ParticleDestination"}</Link>{" destination, "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController = null, Transform[] customTargets = null) (iterator)"}</code> | <span className="api-desc">Waits, then moves particles to the targets each frame until none are left, then waits for the wait-for systems and releases to the pool.</span> |
| <Link id="m-setupmovingparticles" /><code>{"private void SetupMovingParticles()"}</code> | <span className="api-desc">Allocates the particle buffer sized to the largest system's max particles.</span> |
| <Link id="m-tryplaydestinationeffect" /><code>{"private void TryPlayDestinationEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" onTransformEffect, List<Transform> targets)"}</code> | <span className="api-desc">Once every system has had a particle arrive, spawns the arrival effect on each target, once per use.</span> |
| <Link id="m-updateparticlesforsystem" /><code>{"private void UpdateParticlesForSystem(ParticleSystem particleSystemToMove, List<Vector3> targets, float maxDistanceDelta, int particleCount)"}</code> | <span className="api-desc">Moves each particle towards its target (spread round-robin over targets), killing those that arrive.</span> |

</details>
