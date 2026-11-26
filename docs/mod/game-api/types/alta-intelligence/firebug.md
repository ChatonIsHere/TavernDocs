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
| <Link id="m-ctor" /><code>{"FireBug()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androideffects" /><code>{"private ParticleSystem androidEffects"}</code> | Particle system for Android set in the inspector. Not used in this build. |
| <Link id="m-dragtrackingobject" /><code>{"private GameObject dragTrackingObject"}</code> | Object turned on while drag tracking is enabled. |
| <Link id="m-effects" /><code>{"private ParticleSystem effects"}</code> | Particles that play while the bug is shaken hard enough. |
| <Link id="m-emergeaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> emergeAction"}</code> | Static action set the bug starts in, built from the first bug's `emergeActionSet`. |
| <Link id="m-emergeactionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" emergeActionSet"}</code> | Action set asset for emerging, used for every bug via the static `emergeAction`. |
| <Link id="m-flailingangulardrag" /><code>{"private float flailingAngularDrag"}</code> | Angular drag set by `IncreaseDrag`. Default 1. |
| <Link id="m-flailingdrag" /><code>{"private float flailingDrag"}</code> | Drag set by `IncreaseDrag`. Default 1. |
| <Link id="m-losecontrolaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> loseControlAction"}</code> | Static action set used after a collision knocks the bug about. |
| <Link id="m-losecontrolactionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" loseControlActionSet"}</code> | Action set asset for losing control. |
| <Link id="m-minimumshaketoactivateeffects" /><code>{"private float minimumShakeToActivateEffects"}</code> | Shake strength above which the particles and trail turn on. Default 0.7. |
| <Link id="m-pickupagent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/pickupagent">{"PickupAgent"}</Link>{" pickupAgent"}</code> | The `PickupAgent` that lets the bug be caught and released. |
| <Link id="m-regaincontrolaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> regainControlAction"}</code> | Static action set used after the bug is released. |
| <Link id="m-regaincontrolactionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" regainControlActionSet"}</code> | Action set asset for regaining control. |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" shakeDetector"}</code> | Helper measuring how hard the bug's rigidbody is shaken. Not created on a headless server. |
| <Link id="m-shakedetectorsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetectorfactory">{"ShakeDetectorFactory"}</Link>{" shakeDetectorSettings"}</code> | Factory settings for the shake detector. |
| <Link id="m-shakelight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" shakeLight"}</code> | Light whose intensity and range follow the shake strength. |
| <Link id="m-shakestrenghttolightintensity" /><code>{"private AnimationCurve shakeStrenghtToLightIntensity"}</code> | Curve from shake strength to light intensity. |
| <Link id="m-shakestrenghttolightrange" /><code>{"private AnimationCurve shakeStrenghtToLightRange"}</code> | Curve from shake strength to light range. |
| <Link id="m-shakeupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" shakeUpdate"}</code> | The registered `UpdateShake` or `FadeLight` update. |
| <Link id="m-sparkeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sparkEffect"}</code> | Spark effect played where the bug dies. |
| <Link id="m-sparkradius" /><code>{"private float sparkRadius"}</code> | Radius of the fire-lighting sparks the server makes on death. Default 0.5. |
| <Link id="m-syncdrag" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDrag"}</code> | Network sync for the drag tracking flag. |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> | Trail turned on while the bug is shaken hard enough. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared "Firebug shake" fixed update module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreasedrag" /><code>{"void DecreaseDrag()"}</code> | Sets the rigidbody to zero drag and low angular drag. |
| <Link id="m-enabledragtracking" /><code>{"void EnableDragTracking(bool hasDrag)"}</code> | Turns the drag tracking object on or off. The server syncs it to clients. |
| <Link id="m-endshakeupdate" /><code>{"void EndShakeUpdate()"}</code> | Stops the shake or light-fade update. |
| <Link id="m-increasedrag" /><code>{"void IncreaseDrag()"}</code> | Sets the rigidbody to the flailing drag values. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the drag sync message. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Stops effects and hooks the `PickupAgent` caught and released events. Sets up the shake detector when not headless. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Starts on the emerge action set and makes the pickup not save. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Builds the shared emerge, regain and lose control action sets. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Plays the death spark. On the server, simulates fire sparks within `sparkRadius` and sets the animator's IsAlive to false. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Stops the shake update. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: rebuilds the shake detector. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caught" /><code>{"private void Caught()"}</code> | When the bug is grabbed, off headless, starts the shake update that drives its light and effects. |
| <Link id="m-fadelight" /><code>{"private void FadeLight()"}</code> | Update after release: keeps updating the shake effects until the shake strength reaches 0, then stops. |
| <Link id="m-receivedimpulse" /><code>{"private void Alta.Intelligence.IReceiveImpulseFromCollision.ReceivedImpulse(float strength)"}</code> | When hit by a collision while enabled, the server switches to the lose control set and decides again; a client makes the rigidbody non-kinematic. |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, the server switches to the regain control set; the releasing client turns drag tracking on. Off headless, starts `FadeLight`. |
| <Link id="m-syncdrag-2" /><code>{"private void SyncDrag("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasDrag)"}</code> | Network handler (`SyncA`) that sends the drag tracking flag and applies it on clients. |
| <Link id="m-updateshake" /><code>{"private void UpdateShake()"}</code> | Measures the shake, sets the light's intensity and range from it, and turns particles and trail on or off around `minimumShakeToActivateEffects`. |

</details>
