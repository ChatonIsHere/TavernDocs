---
title: "TossRandom"
description: "Makes a held object (such as a coin or die) spin randomly when tossed upward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TossRandom

A **class** in `Root.Township`, the global namespace.

Makes a held object (such as a coin or die) spin randomly when tossed upward. The server detects a toss on release and picks a spin, then syncs it to clients in the chunk.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TossRandom()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidparticles" /><code>{"private ParticleSystem androidParticles"}</code> | <span className="api-desc">Particle system for Android. Not used in this code.</span> |
| <Link id="m-horizontalmaximum" /><code>{"private float horizontalMaximum"}</code> | <span className="api-desc">Most horizontal speed a release can have and still count as a toss.</span> |
| <Link id="m-localbasevelocity" /><code>{"private Vector3 localBaseVelocity"}</code> | <span className="api-desc">Serialized vector that is not used in this code.</span> |
| <Link id="m-oldmaxangularvelocity" /><code>{"private float oldMaxAngularVelocity"}</code> | <span className="api-desc">The rigidbody's original angular velocity cap, restored after a spin.</span> |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> | <span className="api-desc">Particle system played when the spin starts.</span> |
| <Link id="m-peakmaximum" /><code>{"private float peakMaximum"}</code> | <span className="api-desc">Upward speed below which the toss is near its peak and the spin is applied.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on this object, used to hear grabs and releases.</span> |
| <Link id="m-randomvelocity" /><code>{"private float randomVelocity"}</code> | <span className="api-desc">Multiplier on the random unit spin direction, giving the angular speed.</span> |
| <Link id="m-spindelay" /><code>{"private float spinDelay"}</code> | <span className="api-desc">Seconds between the spin starting (particles) and the angular velocity being applied.</span> |
| <Link id="m-spinupboost" /><code>{"private float spinUpBoost"}</code> | <span className="api-desc">Extra upward speed added when the spin is applied.</span> |
| <Link id="m-syncspin" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncSpin"}</code> | <span className="api-desc">Sync message (`SyncA`) that sends the chosen spin direction to clients.</span> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | <span className="api-desc">The rigidbody that is spun.</span> |
| <Link id="m-tossminimum" /><code>{"private float tossMinimum"}</code> | <span className="api-desc">Upward speed a release needs to count as a toss.</span> |
| <Link id="m-updatetoss" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateToss"}</code> | <span className="api-desc">Handle for the registered `UpdateToss` per-frame callback, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the spin sync message and remembers the rigidbody's max angular velocity.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: subscribes to the pickup's grab and release events.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: on release, starts watching the toss if it is moving up fast enough and not too far sideways.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: stops watching for a toss when the object is grabbed.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Stops watching for a toss when the object hits something.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unsubscribes from the pickup events.</span> |
| <Link id="m-spin" /><code>{"private IEnumerator Spin(Vector3 angularVelocity) (iterator)"}</code> | <span className="api-desc">Coroutine: plays particles, waits `spinDelay`, applies the spin and an upward boost, then restores the angular velocity cap after 5 seconds.</span> |
| <Link id="m-toss" /><code>{"private void Toss("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 angularVelocity)"}</code> | <span className="api-desc">Sync handler: serializes the spin direction and starts `Spin` on the receiving side.</span> |
| <Link id="m-updatetoss-2" /><code>{"private void UpdateToss()"}</code> | <span className="api-desc">Server, each frame: once upward speed drops below `peakMaximum`, picks a random spin, sends it to chunks and spins.</span> |

</details>
