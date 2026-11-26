---
title: "Interactor"
description: "The grabbing part of a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Interactor

A **class** in `Root.Township`, the global namespace.

The grabbing part of a hand. It finds `Interactable`s in its trigger, picks the best one, starts and stops interactions and syncs them. A `ControllerExtension` on each hand of a player body; the owning client drives it and the server checks and relays.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)
- **Derived types** [`HandStore`](/mod/game-api/types/alta-player/handstore), [`InteractableEvent`](/mod/game-api/types/global-i-l/interactableevent), [`InteractableUnityEvent`](/mod/game-api/types/global-i-l/interactableunityevent), [`PickupDockedEvent`](/mod/game-api/types/global-p/pickupdockedevent), [`PickupDockedUnityEvent`](/mod/game-api/types/global-p/pickupdockedunityevent)
- **Documented in** [Interactor and hands](/mod/game-api/items/interactor-and-hands)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Interactor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumscore" /><code>{"const float MaximumScore"}</code> | <span className="api-desc">`float.MaxValue`. A score at this value means the interactable can't be picked.</span> |

<details className="api-private">
<summary>31 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> | <span className="api-desc">Declared but never used.</span> |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | <span className="api-desc">Declared but never used.</span> |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" channels"}</code> | <span className="api-desc">The interaction channels this interactor works on, unless overridden.</span> |
| <Link id="m-collisionlayer" /><code>{"private int collisionLayer"}</code> | <span className="api-desc">Layer of the trigger object. Used to build `collisionMask`.</span> |
| <Link id="m-collisionmask" /><code>{"private int collisionMask"}</code> | <span className="api-desc">Layers the overlap check hits. Baked from `collisionLayer`.</span> |
| <Link id="m-grabassistcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" grabAssistController"}</code> | <span className="api-desc">The grab assist helper, present only for the local player when grab assist is on.</span> |
| <Link id="m-haptic" /><code>{"private AnimationCurve haptic"}</code> | <span className="api-desc">Haptic curve played on a successful grab and on the holder's hand when someone asks to take the item.</span> |
| <Link id="m-interactingwith" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactingWith"}</code> | <span className="api-desc">Backing field for `InteractingWith`.</span> |
| <Link id="m-interacttimeout" /><code>{"private float interactTimeout"}</code> | <span className="api-desc">Seconds an interaction attempt stays valid when timeouts are on. Default 2.</span> |
| <Link id="m-iscontrollerbased" /><code>{"private bool isControllerBased"}</code> | <span className="api-desc">Whether the trigger lives on a separate child object (hands) rather than a rigidbody on this object.</span> |
| <Link id="m-isduringinteractionstarted" /><code>{"private bool isDuringInteractionStarted"}</code> | <span className="api-desc">Set while `StartInteract` runs, so a release during start can cancel it.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Whether starts and ends are sent over the network and received ones applied. Default true.</span> |
| <Link id="m-istimingoutinteractionattempt" /><code>{"private bool isTimingOutInteractionAttempt"}</code> | <span className="api-desc">Whether interaction attempts expire after `interactTimeout`.</span> |
| <Link id="m-jointbreakdetector" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" jointBreakDetector"}</code> | <span className="api-desc">Detector whose joint break event ends the interaction.</span> |
| <Link id="m-lastphysicstriggerposition" /><code>{"private Vector3 lastPhysicsTriggerPosition"}</code> | <span className="api-desc">Trigger position from the last physics step, the start of the overlap capsule.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Trigger capsule length. Zero or less means a sphere.</span> |
| <Link id="m-localeuler" /><code>{"private Vector3 localEuler"}</code> | <span className="api-desc">Local rotation of the trigger object.</span> |
| <Link id="m-localoffset" /><code>{"private Vector3 localOffset"}</code> | <span className="api-desc">Local position of the trigger object. Mirrored for the right hand.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-overlap" /><code>{"private readonly Collider[] overlap"}</code> | <span className="api-desc">Reused buffer of up to 10 colliders for the overlap check.</span> |
| <Link id="m-overridechannels" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{"? overrideChannels"}</code> | <span className="api-desc">Channels set by `SetOverrideInteractionChannels`; null uses `channels`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Trigger radius, scaled by the object's scale.</span> |
| <Link id="m-requesteehaptic" /><code>{"private AnimationCurve requesteeHaptic"}</code> | <span className="api-desc">Haptic curve played on the requesting hand while waiting for another player to let go.</span> |
| <Link id="m-startofinteractattempt" /><code>{"private float startOfInteractAttempt"}</code> | <span className="api-desc">Time the current interaction attempt began, for the timeout.</span> |
| <Link id="m-syncconfirmationrequest" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncConfirmationRequest"}</code> | <span className="api-desc">Network sync for the confirmation request message.</span> |
| <Link id="m-syncend" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{"> syncEnd"}</code> | <span className="api-desc">Network sync for the interaction end message.</span> |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{"> syncStart"}</code> | <span className="api-desc">Network sync for the interaction start message.</span> |
| <Link id="m-syncstartgrabpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/grabpointarguments">{"GrabPointArguments"}</Link>{"> syncStartGrabPoint"}</code> | <span className="api-desc">Network sync for the pickup grab point start message.</span> |
| <Link id="m-toggleholddelay" /><code>{"private bool toggleHoldDelay"}</code> | <span className="api-desc">Blocks toggle hold for a moment after it was released.</span> |
| <Link id="m-trigger" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" trigger"}</code> | <span className="api-desc">The sphere or capsule trigger whose `Entered` event feeds `AddOverlap`.</span> |
| <Link id="m-triggerobjecttransform" /><code>{"private Transform triggerObjectTransform"}</code> | <span className="api-desc">Backing field for `TriggerObjectTransform`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/mod/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" Channels { get; }"}</code> | <span className="api-desc">The interaction channels this hand can use. An override, if set, replaces the prefab's channels.</span> |
| <Link id="m-folder" /><code>{"Transform Folder { get; }"}</code> | <span className="api-desc">The body's transform, or the interactor's own without a controller.</span> |
| <Link id="m-forwardsource" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" ForwardSource { get; private set; }"}</code> | <span className="api-desc">The interactable the last `StartInteract` was called on, before forwarding picked the real target.</span> |
| <Link id="m-gripanimator" /><code><Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" GripAnimator { get; }"}</code> | <span className="api-desc">The hand's grip animator, if it has one.</span> |
| <Link id="m-hasgripanimator" /><code>{"bool HasGripAnimator { get; private set; }"}</code> | <span className="api-desc">Whether the hand had a grip animator at setup.</span> |
| <Link id="m-interactingwith-2" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" InteractingWith { get; }"}</code> | <span className="api-desc">What this hand is holding or using now, or null.</span> |
| <Link id="m-interactionpoint" /><code>{"Transform InteractionPoint { get; }"}</code> | <span className="api-desc">The point used for distance scoring: the hand's grip point.</span> |
| <Link id="m-isduringphysicsoverlap" /><code>{"static int IsDuringPhysicsOverlap { get; set; }"}</code> | <span className="api-desc">Static counter, above zero while an interaction is starting from a trigger overlap or being stopped.</span> |
| <Link id="m-isinteracting" /><code>{"bool IsInteracting { get; }"}</code> | <span className="api-desc">True while `InteractingWith` is set.</span> |
| <Link id="m-istoggleholding" /><code>{"bool IsToggleHolding { get; private set; }"}</code> | <span className="api-desc">True while the hand holds something with toggle grab, so letting go of the button doesn't drop it.</span> |
| <Link id="m-overlapinteractables" /><code>{"List<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> OverlapInteractables { get; }"}</code> | <span className="api-desc">The interactables found in the last overlap check.</span> |
| <Link id="m-triggerobjecttransform-2" /><code>{"Transform TriggerObjectTransform { get; }"}</code> | <span className="api-desc">The transform of the hand's trigger sphere or capsule.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hastimedout" /><code>{"private bool HasTimedOut { get; }"}</code> | <span className="api-desc">True when `isTimingOutInteractionAttempt` is set and more than `interactTimeout` seconds have passed since the attempt began.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-getgrabassistblock" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/generaldelegates-boolupdater">{"GeneralDelegates.BoolUpdater"}</Link>{" GetGrabAssistBlock"}</code> | <span className="api-desc">Handlers can set the value to true to turn off grab assist for this hand.</span> |
| <Link id="m-interactionended" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionEnded"}</code> | <span className="api-desc">Raised after an interaction stops.</span> |
| <Link id="m-interactionstarted" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionStarted"}</code> | <span className="api-desc">Raised after an interaction has started and been sent.</span> |
| <Link id="m-preinteractionstarted" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" PreInteractionStarted"}</code> | <span className="api-desc">Raised just before the interactable's `Interact` runs.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkhold" /><code>{"void CheckHold("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Run when the grab button is pressed: tries grab assist, or picks the best overlapping interactable and starts on it.</span> |
| <Link id="m-checkrelease" /><code>{"void CheckRelease("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | <span className="api-desc">Run when the grab button is let go: stops the interaction unless toggle-holding (or the hand is being disabled).</span> |
| <Link id="m-getcollideroverlap" /><code>{"int GetColliderOverlap(out Collider[] colliders)"}</code> | <span className="api-desc">Sweeps the hand's trigger since the last physics step and returns how many colliders it hit, with the shared buffer.</span> |
| <Link id="m-getconfirmationoninteractable" /><code>{"void GetConfirmationOnInteractable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetInteractable)"}</code> | <span className="api-desc">Starts on the interactable, or if another player holds it, buzzes both and waits for them to let go while you keep holding.</span> |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | <span className="api-desc">Sets up the interact sync messages, the trigger offset (mirrored for the right hand) and grab assist on the local player.</span> |
| <Link id="m-isgrabassistblocked" /><code>{"bool IsGrabAssistBlocked()"}</code> | <span className="api-desc">Whether any `GetGrabAssistBlock` handler is blocking grab assist.</span> |
| <Link id="m-onconnectedtoplayer" /><code>{"override void OnConnectedToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: tells a newly arrived player what this hand is holding, as a forced hold.</span> |
| <Link id="m-resetoverrideinteractionchannels" /><code>{"void ResetOverrideInteractionChannels()"}</code> | <span className="api-desc">Clears a channel override so `Channels` goes back to the prefab's.</span> |
| <Link id="m-resettimeout" /><code>{"void ResetTimeout()"}</code> | <span className="api-desc">Restarts the interact attempt timer, so a timed-out hand can grab again.</span> |
| <Link id="m-selectbestfromcurrent" /><code>{"bool SelectBestFromCurrent(out "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" bestInteractable)"}</code> | <span className="api-desc">Overlaps the trigger now and returns the lowest-scoring interactable that accepts this hand.</span> |
| <Link id="m-setoverrideinteractionchannels" /><code>{"void SetOverrideInteractionChannels("}<Link to="/mod/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" newChannels)"}</code> | <span className="api-desc">Replaces this hand's interaction channels until reset.</span> |
| <Link id="m-startinteract" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" StartInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isFromNetwork = false, bool isForced = false, bool isForcingHold = false)"}</code> | <span className="api-desc">Starts interacting after following forwards and checking the target allows it. Sends the grab and keeps a held item out of chunk saves.</span> |
| <Link id="m-stopinteract" /><code>{"void StopInteract(bool isFromServer = false, bool isForced = false)"}</code> | <span className="api-desc">Ends the current interaction, sends it unless it came from the server, and restores the item's save mode.</span> |
| <Link id="m-swapinteract" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" SwapInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isForced = false)"}</code> | <span className="api-desc">Stops the current interaction and starts on another interactable.</span> |

<details className="api-private">
<summary>28 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addoverlap" /><code>{"private void AddOverlap(Collider collider)"}</code> | <span className="api-desc">Handler for the trigger's `Entered` event: while the local player holds Interact, assesses the new interactable and grabs it if it scores.</span> |
| <Link id="m-checkgrabassist" /><code>{"private bool CheckGrabAssist()"}</code> | <span className="api-desc">Runs the grab assist check when grab assist is on and not blocked; true if it handled the grab.</span> |
| <Link id="m-clearassist" /><code>{"private void ClearAssist()"}</code> | <span className="api-desc">Disables and drops the `GrabAssistController`. Called when the grab assist setting is turned off and on destroy.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Records the trigger object's position each physics step, so the overlap capsule spans last step to now.</span> |
| <Link id="m-getcollideroverlap-2" /><code>{"private int GetColliderOverlap()"}</code> | <span className="api-desc">Sweeps the hand's trigger since the last physics step and returns how many colliders it hit, with the shared buffer.</span> |
| <Link id="m-isgrabassistenabledandnotblocked" /><code>{"private bool IsGrabAssistEnabledAndNotBlocked()"}</code> | <span className="api-desc">True when a grab assist controller exists and no `GetGrabAssistBlock` listener blocks it.</span> |
| <Link id="m-jointbroken" /><code>{"private void JointBroken("}<Link to="/mod/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" detector, float force)"}</code> | <span className="api-desc">Handler for the joint break detector: stops the current interaction when the hand joint breaks.</span> |
| <Link id="m-networkstartinteraction" /><code>{"private void NetworkStartInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Callback for a networked start: stops any current interaction and starts the new one as coming from the network.</span> |
| <Link id="m-networkstopinteraction" /><code>{"private void NetworkStopInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Callback for a networked end: stops the interaction if it is still with that interactable.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears toggle hold, stops interacting, removes grab assist and unhooks the settings listener.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the joint break, trigger and controller action handlers and disables grab assist.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor gizmo: the trigger sphere or capsule, or in play mode the grab assist capsule.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the joint break detector, the trigger's `Entered` event and the Interact, HardInteract, ToggleGrab and ReleaseToggleGrab actions.</span> |
| <Link id="m-onstartinteractionattempt" /><code>{"private void OnStartInteractionAttempt()"}</code> | <span className="api-desc">Marks the start time of an interaction attempt, used by the timeout. Also passed to grab assist.</span> |
| <Link id="m-readstartarguments" /><code>{"private void ReadStartArguments("}<Link to="/mod/game-api/types/global-i-l/inetworkinteractargument">{"INetworkInteractArgument"}</Link>{" args)"}</code> | <span className="api-desc">Applies a received start message: waits for the target entity to spawn, then starts the interaction, or sends an end at once if the local hand already let go.</span> |
| <Link id="m-releasetogglehold" /><code>{"private void ReleaseToggleHold("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Handler for ReleaseToggleGrab: ends toggle hold and stops interacting if Interact isn't held. Briefly blocks a new toggle hold.</span> |
| <Link id="m-selectbest" /><code>{"private bool SelectBest(int overlapCount, out "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" best)"}</code> | <span className="api-desc">Collects the interactables in the overlap buffer that match the channels and picks the one with the lowest `AssessInteraction` score.</span> |
| <Link id="m-sendnetworkinteract" /><code>{"private void SendNetworkInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isForced, bool isForcingHold)"}</code> | <span className="api-desc">Sends the interaction start to the chunk, as a grab point message for pickups with a best grab, otherwise an interact message.</span> |
| <Link id="m-sendnetworkinteractend" /><code>{"private void SendNetworkInteractEnd("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isForced)"}</code> | <span className="api-desc">Sends the interaction end message to the chunk. Only the local owner, or the server when forced, sends it.</span> |
| <Link id="m-setupcollisionmask" /><code>{"private bool SetupCollisionMask()"}</code> | <span className="api-desc">Editor bake step: builds `collisionMask` from the layers that collide with `collisionLayer`.</span> |
| <Link id="m-setuptriggerobject" /><code>{"private bool SetupTriggerObject()"}</code> | <span className="api-desc">Editor bake step: for controller based interactors, creates the child trigger object with a sphere or capsule and kinematic rigidbody.</span> |
| <Link id="m-syncconfirmationrequest-2" /><code>{"private void SyncConfirmationRequest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Receives a confirmation request: buzzes the local holder's hand, or forwards the request on (server to the player, client to the chunk).</span> |
| <Link id="m-syncend-2" /><code>{"private void SyncEnd("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" args)"}</code> | <span className="api-desc">Receives an interaction end. The server checks the sender owns this interactor and relays it, then the interaction is stopped.</span> |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" args)"}</code> | <span className="api-desc">Receives an interaction start. The server ignores dead players, checks the sender owns this interactor and relays it to the chunk.</span> |
| <Link id="m-syncstartgrabpoint-2" /><code>{"private void SyncStartGrabPoint("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-e-h/grabpointarguments">{"GrabPointArguments"}</Link>{" args)"}</code> | <span className="api-desc">Same as `SyncStart` but for pickup grabs that carry the grab point.</span> |
| <Link id="m-togglehold" /><code>{"private void ToggleHold("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Handler for ToggleGrab: turns on toggle hold while interacting, so letting go of Interact doesn't drop.</span> |
| <Link id="m-updategrabassist" /><code>{"private void UpdateGrabAssist(Settings obj)"}</code> | <span className="api-desc">Creates or clears the grab assist controller to match the game's grab assist setting.</span> |
| <Link id="m-waitforconfirmation" /><code>{"private IEnumerator WaitForConfirmation("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetInteractable, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" forwardInteractable) (iterator)"}</code> | <span className="api-desc">Coroutine used when grabbing something another player holds: buzzes both hands, then grabs once they let go, unless the hand moves away or Interact is released.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Interactor`:

<div className="api-used-in">

[`ActionOrb.HandleGrabbed`](/mod/game-api/types/global-a-b/actionorb#m-handlegrabbed), [`ActionOrb.StartMovingBack`](/mod/game-api/types/global-a-b/actionorb#m-startmovingback), [`Smelter.CheckSmelt`](/mod/game-api/types/alta-crafting/smelter#m-checksmelt-2), [`Smelter.MouldAdded`](/mod/game-api/types/alta-crafting/smelter#m-mouldadded), [`Smelter.MouldRemoved`](/mod/game-api/types/alta-crafting/smelter#m-mouldremoved), [`BuilderDock.BlockFilter`](/mod/game-api/types/alta-crafting/builderdock#m-blockfilter), [`ChiselingTool.StartCheckHaptic`](/mod/game-api/types/alta-crafting/chiselingtool#m-startcheckhaptic), [`ChiselingTool.StopCheckHaptic`](/mod/game-api/types/alta-crafting/chiselingtool#m-stopcheckhaptic), [`ChiselingTool.TriggerHaptic`](/mod/game-api/types/alta-crafting/chiselingtool#m-triggerhaptic), [`RecipePlacer.AddDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-adddefinition), [`RecipePlacer.ClearDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-cleardefinition), [`RecipePlacer.PageFilter`](/mod/game-api/types/alta-crafting/recipeplacer#m-pagefilter), [`TimberBlockSpawner.IsNewPlayer`](/mod/game-api/types/alta-crafting/timberblockspawner#m-isnewplayer), [`TimberBlockSpawner.SnapPoint`](/mod/game-api/types/alta-crafting/timberblockspawner#m-snappoint), [`TimberBlockSpawner.StartCheckingPosition`](/mod/game-api/types/alta-crafting/timberblockspawner#m-startcheckingposition), [`CaveTeleporter.HandFilter`](/mod/game-api/types/alta-world-generation/caveteleporter#m-handfilter), [`DockedDissolver.DissolveItem`](/mod/game-api/types/alta-world-generation/dockeddissolver#m-dissolveitem), [`CharacterCollisionController.collidersMap`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-collidersmap), [`CharacterCollisionController.DelaySetColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-delaysetcolliders), [`CharacterCollisionController.DisableColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-disablecolliders), [`CharacterCollisionController.disabledCache`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-disabledcache), [`CharacterCollisionController.EnableColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-enablecolliders), [`CharacterCollisionController.enablingCoroutines`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-enablingcoroutines), [`CharacterCollisionController.SetColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-setcolliders), [`Hand.Detach`](/mod/game-api/types/alta-player/hand#m-detach), [`Hand.Interactor`](/mod/game-api/types/alta-player/hand#m-interactor), [`Hand.MoveCenterOfMassToGripPoint`](/mod/game-api/types/alta-player/hand#m-movecenterofmasstogrippoint), [`Hand.ResetCenterOfMass`](/mod/game-api/types/alta-player/hand#m-resetcenterofmass), [`HandStore.Source`](/mod/game-api/types/alta-player/handstore#m-source), [`InteractionCollisionController.InteractionEnded`](/mod/game-api/types/alta-player/interactioncollisioncontroller#m-interactionended), [`InteractionCollisionController.InteractionStarted`](/mod/game-api/types/alta-player/interactioncollisioncontroller#m-interactionstarted), [`InteractionCollisionController.interactor`](/mod/game-api/types/alta-player/interactioncollisioncontroller#m-interactor), [`Inventory.LeftHand`](/mod/game-api/types/alta-player/inventory#m-lefthand), [`Inventory.RightHand`](/mod/game-api/types/alta-player/inventory#m-righthand), [`AdditionalOwnedDock.CheckDockFilter`](/mod/game-api/types/alta-crafting/additionalowneddock#m-checkdockfilter), [`AdditionalOwnedDock.CheckInteractionFilter`](/mod/game-api/types/alta-crafting/additionalowneddock#m-checkinteractionfilter), [`AdditionalOwnedDock.DeregisterDock`](/mod/game-api/types/alta-crafting/additionalowneddock#m-deregisterdock), [`AdditionalOwnedDock.RegisterDock`](/mod/game-api/types/alta-crafting/additionalowneddock#m-registerdock), [`ConfirmationCraftingPart.InteractionPopout`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-interactionpopout), [`CraftingOptions.AttemptCraft`](/mod/game-api/types/alta-crafting/craftingoptions#m-attemptcraft), [`CraftingOptions.Cancel`](/mod/game-api/types/alta-crafting/craftingoptions#m-cancel), [`CraftingOptions.RequestCraft`](/mod/game-api/types/alta-crafting/craftingoptions#m-requestcraft), [`CraftingPart.CheckPossibleConnections`](/mod/game-api/types/alta-crafting/craftingpart#m-checkpossibleconnections), [`DisableLightOnDock.CheckEnabledEnable`](/mod/game-api/types/alta-crafting/disablelightondock#m-checkenabledenable), [`DisableLightOnDock.ForceEnable`](/mod/game-api/types/alta-crafting/disablelightondock#m-forceenable), [`GenericAssemblyStation.CalculateDockPosition`](/mod/game-api/types/alta-crafting/genericassemblystation#m-calculatedockposition), [`GenericAssemblyStation.DockFilter`](/mod/game-api/types/alta-crafting/genericassemblystation#m-dockfilter), [`GenericAssemblyStation.InsertPiece`](/mod/game-api/types/alta-crafting/genericassemblystation#m-insertpiece), [`GenericAssemblyStation.RemovePiece`](/mod/game-api/types/alta-crafting/genericassemblystation#m-removepiece), [`GenericCraftingPiece.FilterPop`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-filterpop), [`GenericCraftingPiece.Grab`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-grab), [`GenericCraftingPiece.SpawnRefuseForInteractor`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-spawnrefuseforinteractor), [`GenericCraftingStation.ComponentReleased`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-componentreleased), [`GenericCraftingStation.DockingFilter`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-dockingfilter), [`GenericCraftingStation.GrabResult`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-grabresult), [`GenericCraftingStation.GrabResultFilter`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-grabresultfilter), [`GenericCraftingStation.OnPageDocked`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-onpagedocked), [`GenericCraftingStation.OnPageUndocked`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-onpageundocked), [`GenericCraftingStation.PageFilter`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-pagefilter), [`CosmeticPresetTrophy.DisableGhostHands`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-disableghosthands) and 599 more.

</div>
