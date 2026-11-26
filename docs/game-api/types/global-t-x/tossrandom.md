---
title: "TossRandom"
description: "Makes a held object (such as a coin or die) spin randomly when tossed upward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TossRandom

A **class** in `Root.Township`, no namespace.

Makes a held object (such as a coin or die) spin randomly when tossed upward. The server detects a toss on release and picks a spin, then syncs it to clients in the chunk.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TossRandom()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidparticles" /><code>{"private ParticleSystem androidParticles"}</code> | Particle system for Android. Not used in this code. |
| <Link id="m-horizontalmaximum" /><code>{"private float horizontalMaximum"}</code> | Most horizontal speed a release can have and still count as a toss. |
| <Link id="m-localbasevelocity" /><code>{"private Vector3 localBaseVelocity"}</code> | Serialized vector that is not used in this code. |
| <Link id="m-oldmaxangularvelocity" /><code>{"private float oldMaxAngularVelocity"}</code> | The rigidbody's original angular velocity cap, restored after a spin. |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> | Particle system played when the spin starts. |
| <Link id="m-peakmaximum" /><code>{"private float peakMaximum"}</code> | Upward speed below which the toss is near its peak and the spin is applied. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object, used to hear grabs and releases. |
| <Link id="m-randomvelocity" /><code>{"private float randomVelocity"}</code> | Multiplier on the random unit spin direction, giving the angular speed. |
| <Link id="m-spindelay" /><code>{"private float spinDelay"}</code> | Seconds between the spin starting (particles) and the angular velocity being applied. |
| <Link id="m-spinupboost" /><code>{"private float spinUpBoost"}</code> | Extra upward speed added when the spin is applied. |
| <Link id="m-syncspin" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncSpin"}</code> | Sync message (`SyncA`) that sends the chosen spin direction to clients. |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | The rigidbody that is spun. |
| <Link id="m-tossminimum" /><code>{"private float tossMinimum"}</code> | Upward speed a release needs to count as a toss. |
| <Link id="m-updatetoss" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateToss"}</code> | Handle for the registered `UpdateToss` per-frame callback, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the spin sync message and remembers the rigidbody's max angular velocity. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: subscribes to the pickup's grab and release events. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: on release, starts watching the toss if it is moving up fast enough and not too far sideways. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: stops watching for a toss when the object is grabbed. |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | Stops watching for a toss when the object hits something. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unsubscribes from the pickup events. |
| <Link id="m-spin" /><code>{"private IEnumerator Spin(Vector3 angularVelocity) (iterator)"}</code> | Coroutine: plays particles, waits `spinDelay`, applies the spin and an upward boost, then restores the angular velocity cap after 5 seconds. |
| <Link id="m-toss" /><code>{"private void Toss("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 angularVelocity)"}</code> | Sync handler: serializes the spin direction and starts `Spin` on the receiving side. |
| <Link id="m-updatetoss-2" /><code>{"private void UpdateToss()"}</code> | Server, each frame: once upward speed drops below `peakMaximum`, picks a random spin, sends it to chunks and spins. |

</details>
