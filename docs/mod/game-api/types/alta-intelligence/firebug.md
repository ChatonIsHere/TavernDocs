---
title: "FireBug"
description: "The firebug creature: a catchable bug that glows and trails when shaken and throws sparks when killed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireBug

A **class** in `Root.Township`, `Alta.Intelligence`.

The firebug creature: a catchable bug that glows and trails when shaken and throws sparks when killed. Its AI switches between emerge, regain-control and lose-control action sets.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<FireBug>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`IReceiveImpulseFromCollision`](/mod/game-api/types/alta-intelligence/ireceiveimpulsefromcollision)
- **Derived types** [`FireBug`](/mod/game-api/types/alta-intelligence/firebug)
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures#firebug), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireBug()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androideffects" /><code>{"private ParticleSystem androidEffects"}</code> | <span className="api-desc">Particle system for Android set in the inspector. Not used in this build.</span> |
| <Link id="m-dragtrackingobject" /><code>{"private GameObject dragTrackingObject"}</code> | <span className="api-desc">Object turned on while drag tracking is enabled.</span> |
| <Link id="m-effects" /><code>{"private ParticleSystem effects"}</code> | <span className="api-desc">Particles that play while the bug is shaken hard enough.</span> |
| <Link id="m-emergeaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> emergeAction"}</code> | <span className="api-desc">Static action set the bug starts in, built from the first bug's `emergeActionSet`.</span> |
| <Link id="m-emergeactionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" emergeActionSet"}</code> | <span className="api-desc">Action set asset for emerging, used for every bug via the static `emergeAction`.</span> |
| <Link id="m-flailingangulardrag" /><code>{"private float flailingAngularDrag"}</code> | <span className="api-desc">Angular drag set by `IncreaseDrag`. Default 1.</span> |
| <Link id="m-flailingdrag" /><code>{"private float flailingDrag"}</code> | <span className="api-desc">Drag set by `IncreaseDrag`. Default 1.</span> |
| <Link id="m-losecontrolaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> loseControlAction"}</code> | <span className="api-desc">Static action set used after a collision knocks the bug about.</span> |
| <Link id="m-losecontrolactionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" loseControlActionSet"}</code> | <span className="api-desc">Action set asset for losing control.</span> |
| <Link id="m-minimumshaketoactivateeffects" /><code>{"private float minimumShakeToActivateEffects"}</code> | <span className="api-desc">Shake strength above which the particles and trail turn on. Default 0.7.</span> |
| <Link id="m-pickupagent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/pickupagent">{"PickupAgent"}</Link>{" pickupAgent"}</code> | <span className="api-desc">The `PickupAgent` that lets the bug be caught and released.</span> |
| <Link id="m-regaincontrolaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> regainControlAction"}</code> | <span className="api-desc">Static action set used after the bug is released.</span> |
| <Link id="m-regaincontrolactionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" regainControlActionSet"}</code> | <span className="api-desc">Action set asset for regaining control.</span> |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" shakeDetector"}</code> | <span className="api-desc">Helper measuring how hard the bug's rigidbody is shaken. Not created on a headless server.</span> |
| <Link id="m-shakedetectorsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetectorfactory">{"ShakeDetectorFactory"}</Link>{" shakeDetectorSettings"}</code> | <span className="api-desc">Factory settings for the shake detector.</span> |
| <Link id="m-shakelight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" shakeLight"}</code> | <span className="api-desc">Light whose intensity and range follow the shake strength.</span> |
| <Link id="m-shakestrenghttolightintensity" /><code>{"private AnimationCurve shakeStrenghtToLightIntensity"}</code> | <span className="api-desc">Curve from shake strength to light intensity.</span> |
| <Link id="m-shakestrenghttolightrange" /><code>{"private AnimationCurve shakeStrenghtToLightRange"}</code> | <span className="api-desc">Curve from shake strength to light range.</span> |
| <Link id="m-shakeupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" shakeUpdate"}</code> | <span className="api-desc">The registered `UpdateShake` or `FadeLight` update.</span> |
| <Link id="m-sparkeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sparkEffect"}</code> | <span className="api-desc">Spark effect played where the bug dies.</span> |
| <Link id="m-sparkradius" /><code>{"private float sparkRadius"}</code> | <span className="api-desc">Radius of the fire-lighting sparks the server makes on death. Default 0.5.</span> |
| <Link id="m-syncdrag" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDrag"}</code> | <span className="api-desc">Network sync for the drag tracking flag.</span> |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> | <span className="api-desc">Trail turned on while the bug is shaken hard enough.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared "Firebug shake" fixed update module.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreasedrag" /><code>{"void DecreaseDrag()"}</code> | <span className="api-desc">Sets the rigidbody to zero drag and low angular drag.</span> |
| <Link id="m-enabledragtracking" /><code>{"void EnableDragTracking(bool hasDrag)"}</code> | <span className="api-desc">Turns the drag tracking object on or off. The server syncs it to clients.</span> |
| <Link id="m-endshakeupdate" /><code>{"void EndShakeUpdate()"}</code> | <span className="api-desc">Stops the shake or light-fade update.</span> |
| <Link id="m-increasedrag" /><code>{"void IncreaseDrag()"}</code> | <span className="api-desc">Sets the rigidbody to the flailing drag values.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the drag sync message.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Stops effects and hooks the `PickupAgent` caught and released events. Sets up the shake detector when not headless.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Starts on the emerge action set and makes the pickup not save.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Builds the shared emerge, regain and lose control action sets.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Plays the death spark. On the server, simulates fire sparks within `sparkRadius` and sets the animator's IsAlive to false.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Stops the shake update.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: rebuilds the shake detector.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caught" /><code>{"private void Caught()"}</code> | <span className="api-desc">When the bug is grabbed, off headless, starts the shake update that drives its light and effects.</span> |
| <Link id="m-fadelight" /><code>{"private void FadeLight()"}</code> | <span className="api-desc">Update after release: keeps updating the shake effects until the shake strength reaches 0, then stops.</span> |
| <Link id="m-receivedimpulse" /><code>{"private void Alta.Intelligence.IReceiveImpulseFromCollision.ReceivedImpulse(float strength)"}</code> | <span className="api-desc">When hit by a collision while enabled, the server switches to the lose control set and decides again; a client makes the rigidbody non-kinematic.</span> |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, the server switches to the regain control set; the releasing client turns drag tracking on. Off headless, starts `FadeLight`.</span> |
| <Link id="m-syncdrag-2" /><code>{"private void SyncDrag("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasDrag)"}</code> | <span className="api-desc">Network handler (`SyncA`) that sends the drag tracking flag and applies it on clients.</span> |
| <Link id="m-updateshake" /><code>{"private void UpdateShake()"}</code> | <span className="api-desc">Measures the shake, sets the light's intensity and range from it, and turns particles and trail on or off around `minimumShakeToActivateEffects`.</span> |

</details>
