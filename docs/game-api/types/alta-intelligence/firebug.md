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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<FireBug>`](/game-api/types/alta-intelligence/agent-tthis), [`IReceiveImpulseFromCollision`](/game-api/types/alta-intelligence/ireceiveimpulsefromcollision)
- **Derived types** [`FireBug`](/game-api/types/alta-intelligence/firebug)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#firebug), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FireBug()"}</code> |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androideffects" /><code>{"private ParticleSystem androidEffects"}</code> |
| <Link id="m-dragtrackingobject" /><code>{"private GameObject dragTrackingObject"}</code> |
| <Link id="m-effects" /><code>{"private ParticleSystem effects"}</code> |
| <Link id="m-emergeaction" /><code>{"private static "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> emergeAction"}</code> |
| <Link id="m-emergeactionset" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" emergeActionSet"}</code> |
| <Link id="m-flailingangulardrag" /><code>{"private float flailingAngularDrag"}</code> |
| <Link id="m-flailingdrag" /><code>{"private float flailingDrag"}</code> |
| <Link id="m-losecontrolaction" /><code>{"private static "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> loseControlAction"}</code> |
| <Link id="m-losecontrolactionset" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" loseControlActionSet"}</code> |
| <Link id="m-minimumshaketoactivateeffects" /><code>{"private float minimumShakeToActivateEffects"}</code> |
| <Link id="m-pickupagent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/pickupagent">{"PickupAgent"}</Link>{" pickupAgent"}</code> |
| <Link id="m-regaincontrolaction" /><code>{"private static "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/firebug">{"FireBug"}</Link>{"> regainControlAction"}</code> |
| <Link id="m-regaincontrolactionset" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" regainControlActionSet"}</code> |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" shakeDetector"}</code> |
| <Link id="m-shakedetectorsettings" /><code>{"private "}<Link to="/game-api/types/global-s/shakedetectorfactory">{"ShakeDetectorFactory"}</Link>{" shakeDetectorSettings"}</code> |
| <Link id="m-shakelight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" shakeLight"}</code> |
| <Link id="m-shakestrenghttolightintensity" /><code>{"private AnimationCurve shakeStrenghtToLightIntensity"}</code> |
| <Link id="m-shakestrenghttolightrange" /><code>{"private AnimationCurve shakeStrenghtToLightRange"}</code> |
| <Link id="m-shakeupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" shakeUpdate"}</code> |
| <Link id="m-sparkeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sparkEffect"}</code> |
| <Link id="m-sparkradius" /><code>{"private float sparkRadius"}</code> |
| <Link id="m-syncdrag" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDrag"}</code> |
| <Link id="m-trail" /><code>{"private TrailRenderer trail"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |

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
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Plays the death spark. On the server, simulates fire sparks within `sparkRadius` and sets the animator's IsAlive to false. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Stops the shake update. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: rebuilds the shake detector. |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-caught" /><code>{"private void Caught()"}</code> |
| <Link id="m-fadelight" /><code>{"private void FadeLight()"}</code> |
| <Link id="m-receivedimpulse" /><code>{"private void Alta.Intelligence.IReceiveImpulseFromCollision.ReceivedImpulse(float strength)"}</code> |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncdrag-2" /><code>{"private void SyncDrag("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasDrag)"}</code> |
| <Link id="m-updateshake" /><code>{"private void UpdateShake()"}</code> |

</details>
