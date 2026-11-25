---
title: "Interactor"
description: "The grabbing part of a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Interactor

A **class** in `Root.Township`, no namespace.

The grabbing part of a hand. It finds `Interactable`s in its trigger, picks the best one, starts and stops interactions and syncs them. A `ControllerExtension` on each hand of a player body; the owning client drives it and the server checks and relays.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Derived types** [`HandStore`](/game-api/types/alta-player/handstore), [`InteractableEvent`](/game-api/types/global-i-l/interactableevent), [`InteractableUnityEvent`](/game-api/types/global-i-l/interactableunityevent), [`PickupDockedEvent`](/game-api/types/global-p/pickupdockedevent), [`PickupDockedUnityEvent`](/game-api/types/global-p/pickupdockedunityevent)
- **Documented in** [Interactor and hands](/game-api/items/interactor-and-hands)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Interactor()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumscore" /><code>{"const float MaximumScore"}</code> | `float.MaxValue`. A score at this value means the interactable can't be picked. |

<details>
<summary>31 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" channels"}</code> |
| <Link id="m-collisionlayer" /><code>{"private int collisionLayer"}</code> |
| <Link id="m-collisionmask" /><code>{"private int collisionMask"}</code> |
| <Link id="m-grabassistcontroller" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" grabAssistController"}</code> |
| <Link id="m-haptic" /><code>{"private AnimationCurve haptic"}</code> |
| <Link id="m-interactingwith" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactingWith"}</code> |
| <Link id="m-interacttimeout" /><code>{"private float interactTimeout"}</code> |
| <Link id="m-iscontrollerbased" /><code>{"private bool isControllerBased"}</code> |
| <Link id="m-isduringinteractionstarted" /><code>{"private bool isDuringInteractionStarted"}</code> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> |
| <Link id="m-istimingoutinteractionattempt" /><code>{"private bool isTimingOutInteractionAttempt"}</code> |
| <Link id="m-jointbreakdetector" /><code>{"private "}<Link to="/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" jointBreakDetector"}</code> |
| <Link id="m-lastphysicstriggerposition" /><code>{"private Vector3 lastPhysicsTriggerPosition"}</code> |
| <Link id="m-length" /><code>{"private float length"}</code> |
| <Link id="m-localeuler" /><code>{"private Vector3 localEuler"}</code> |
| <Link id="m-localoffset" /><code>{"private Vector3 localOffset"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-overlap" /><code>{"private readonly Collider[] overlap"}</code> |
| <Link id="m-overridechannels" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{"? overrideChannels"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-requesteehaptic" /><code>{"private AnimationCurve requesteeHaptic"}</code> |
| <Link id="m-startofinteractattempt" /><code>{"private float startOfInteractAttempt"}</code> |
| <Link id="m-syncconfirmationrequest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncConfirmationRequest"}</code> |
| <Link id="m-syncend" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{"> syncEnd"}</code> |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{"> syncStart"}</code> |
| <Link id="m-syncstartgrabpoint" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-e-h/grabpointarguments">{"GrabPointArguments"}</Link>{"> syncStartGrabPoint"}</code> |
| <Link id="m-toggleholddelay" /><code>{"private bool toggleHoldDelay"}</code> |
| <Link id="m-trigger" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" trigger"}</code> |
| <Link id="m-triggerobjecttransform" /><code>{"private Transform triggerObjectTransform"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" Channels { get; }"}</code> | The interaction channels this hand can use. An override, if set, replaces the prefab's channels. |
| <Link id="m-folder" /><code>{"Transform Folder { get; }"}</code> | The body's transform, or the interactor's own without a controller. |
| <Link id="m-forwardsource" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" ForwardSource { get; private set; }"}</code> | The interactable the last `StartInteract` was called on, before forwarding picked the real target. |
| <Link id="m-gripanimator" /><code><Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" GripAnimator { get; }"}</code> | The hand's grip animator, if it has one. |
| <Link id="m-hasgripanimator" /><code>{"bool HasGripAnimator { get; private set; }"}</code> | Whether the hand had a grip animator at setup. |
| <Link id="m-interactingwith-2" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" InteractingWith { get; }"}</code> | What this hand is holding or using now, or null. |
| <Link id="m-interactionpoint" /><code>{"Transform InteractionPoint { get; }"}</code> | The point used for distance scoring: the hand's grip point. |
| <Link id="m-isduringphysicsoverlap" /><code>{"static int IsDuringPhysicsOverlap { get; set; }"}</code> | Static counter, above zero while an interaction is starting from a trigger overlap or being stopped. |
| <Link id="m-isinteracting" /><code>{"bool IsInteracting { get; }"}</code> | True while `InteractingWith` is set. |
| <Link id="m-istoggleholding" /><code>{"bool IsToggleHolding { get; private set; }"}</code> | True while the hand holds something with toggle grab, so letting go of the button doesn't drop it. |
| <Link id="m-overlapinteractables" /><code>{"List<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> OverlapInteractables { get; }"}</code> | The interactables found in the last overlap check. |
| <Link id="m-triggerobjecttransform-2" /><code>{"Transform TriggerObjectTransform { get; }"}</code> | The transform of the hand's trigger sphere or capsule. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-hastimedout" /><code>{"private bool HasTimedOut { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-getgrabassistblock" /><code>{"event "}<Link to="/game-api/types/alta-utilities/generaldelegates-boolupdater">{"GeneralDelegates.BoolUpdater"}</Link>{" GetGrabAssistBlock"}</code> | Handlers can set the value to true to turn off grab assist for this hand. |
| <Link id="m-interactionended" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionEnded"}</code> | Raised after an interaction stops. |
| <Link id="m-interactionstarted" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionStarted"}</code> | Raised after an interaction has started and been sent. |
| <Link id="m-preinteractionstarted" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" PreInteractionStarted"}</code> | Raised just before the interactable's `Interact` runs. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkhold" /><code>{"void CheckHold("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Run when the grab button is pressed: tries grab assist, or picks the best overlapping interactable and starts on it. |
| <Link id="m-checkrelease" /><code>{"void CheckRelease("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | Run when the grab button is let go: stops the interaction unless toggle-holding (or the hand is being disabled). |
| <Link id="m-getcollideroverlap" /><code>{"int GetColliderOverlap(out Collider[] colliders)"}</code> | Sweeps the hand's trigger since the last physics step and returns how many colliders it hit, with the shared buffer. |
| <Link id="m-getconfirmationoninteractable" /><code>{"void GetConfirmationOnInteractable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetInteractable)"}</code> | Starts on the interactable, or if another player holds it, buzzes both and waits for them to let go while you keep holding. |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | Sets up the interact sync messages, the trigger offset (mirrored for the right hand) and grab assist on the local player. |
| <Link id="m-isgrabassistblocked" /><code>{"bool IsGrabAssistBlocked()"}</code> | Whether any `GetGrabAssistBlock` handler is blocking grab assist. |
| <Link id="m-onconnectedtoplayer" /><code>{"override void OnConnectedToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: tells a newly arrived player what this hand is holding, as a forced hold. |
| <Link id="m-resetoverrideinteractionchannels" /><code>{"void ResetOverrideInteractionChannels()"}</code> | Clears a channel override so `Channels` goes back to the prefab's. |
| <Link id="m-resettimeout" /><code>{"void ResetTimeout()"}</code> | Restarts the interact attempt timer, so a timed-out hand can grab again. |
| <Link id="m-selectbestfromcurrent" /><code>{"bool SelectBestFromCurrent(out "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" bestInteractable)"}</code> | Overlaps the trigger now and returns the lowest-scoring interactable that accepts this hand. |
| <Link id="m-setoverrideinteractionchannels" /><code>{"void SetOverrideInteractionChannels("}<Link to="/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" newChannels)"}</code> | Replaces this hand's interaction channels until reset. |
| <Link id="m-startinteract" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" StartInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isFromNetwork = false, bool isForced = false, bool isForcingHold = false)"}</code> | Starts interacting after following forwards and checking the target allows it. Sends the grab and keeps a held item out of chunk saves. |
| <Link id="m-stopinteract" /><code>{"void StopInteract(bool isFromServer = false, bool isForced = false)"}</code> | Ends the current interaction, sends it unless it came from the server, and restores the item's save mode. |
| <Link id="m-swapinteract" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" SwapInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isForced = false)"}</code> | Stops the current interaction and starts on another interactable. |

<details>
<summary>28 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addoverlap" /><code>{"private void AddOverlap(Collider collider)"}</code> |  |
| <Link id="m-checkgrabassist" /><code>{"private bool CheckGrabAssist()"}</code> |  |
| <Link id="m-clearassist" /><code>{"private void ClearAssist()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-getcollideroverlap-2" /><code>{"private int GetColliderOverlap()"}</code> | Sweeps the hand's trigger since the last physics step and returns how many colliders it hit, with the shared buffer. |
| <Link id="m-isgrabassistenabledandnotblocked" /><code>{"private bool IsGrabAssistEnabledAndNotBlocked()"}</code> |  |
| <Link id="m-jointbroken" /><code>{"private void JointBroken("}<Link to="/game-api/types/global-i-l/jointbreakdetector">{"JointBreakDetector"}</Link>{" detector, float force)"}</code> |  |
| <Link id="m-networkstartinteraction" /><code>{"private void NetworkStartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-networkstopinteraction" /><code>{"private void NetworkStopInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onstartinteractionattempt" /><code>{"private void OnStartInteractionAttempt()"}</code> |  |
| <Link id="m-readstartarguments" /><code>{"private void ReadStartArguments("}<Link to="/game-api/types/global-i-l/inetworkinteractargument">{"INetworkInteractArgument"}</Link>{" args)"}</code> |  |
| <Link id="m-releasetogglehold" /><code>{"private void ReleaseToggleHold("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-selectbest" /><code>{"private bool SelectBest(int overlapCount, out "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" best)"}</code> |  |
| <Link id="m-sendnetworkinteract" /><code>{"private void SendNetworkInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isForced, bool isForcingHold)"}</code> |  |
| <Link id="m-sendnetworkinteractend" /><code>{"private void SendNetworkInteractEnd("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, bool isForced)"}</code> |  |
| <Link id="m-setupcollisionmask" /><code>{"private bool SetupCollisionMask()"}</code> |  |
| <Link id="m-setuptriggerobject" /><code>{"private bool SetupTriggerObject()"}</code> |  |
| <Link id="m-syncconfirmationrequest-2" /><code>{"private void SyncConfirmationRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncend-2" /><code>{"private void SyncEnd("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" args)"}</code> |  |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" args)"}</code> |  |
| <Link id="m-syncstartgrabpoint-2" /><code>{"private void SyncStartGrabPoint("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-e-h/grabpointarguments">{"GrabPointArguments"}</Link>{" args)"}</code> |  |
| <Link id="m-togglehold" /><code>{"private void ToggleHold("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-updategrabassist" /><code>{"private void UpdateGrabAssist(Settings obj)"}</code> |  |
| <Link id="m-waitforconfirmation" /><code>{"private IEnumerator WaitForConfirmation("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetInteractable, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" forwardInteractable) (iterator)"}</code> |  |

</details>

## Used in

Members of other types that take, return or hold a `Interactor`:

[`ActionOrb.HandleGrabbed`](/game-api/types/global-a-b/actionorb#m-handlegrabbed), [`ActionOrb.StartMovingBack`](/game-api/types/global-a-b/actionorb#m-startmovingback), [`Smelter.CheckSmelt`](/game-api/types/alta-crafting/smelter#m-checksmelt-2), [`Smelter.MouldAdded`](/game-api/types/alta-crafting/smelter#m-mouldadded), [`Smelter.MouldRemoved`](/game-api/types/alta-crafting/smelter#m-mouldremoved), [`BuilderDock.BlockFilter`](/game-api/types/alta-crafting/builderdock#m-blockfilter), [`ChiselingTool.StartCheckHaptic`](/game-api/types/alta-crafting/chiselingtool#m-startcheckhaptic), [`ChiselingTool.StopCheckHaptic`](/game-api/types/alta-crafting/chiselingtool#m-stopcheckhaptic), [`ChiselingTool.TriggerHaptic`](/game-api/types/alta-crafting/chiselingtool#m-triggerhaptic), [`RecipePlacer.AddDefinition`](/game-api/types/alta-crafting/recipeplacer#m-adddefinition), [`RecipePlacer.ClearDefinition`](/game-api/types/alta-crafting/recipeplacer#m-cleardefinition), [`RecipePlacer.PageFilter`](/game-api/types/alta-crafting/recipeplacer#m-pagefilter), [`TimberBlockSpawner.IsNewPlayer`](/game-api/types/alta-crafting/timberblockspawner#m-isnewplayer), [`TimberBlockSpawner.SnapPoint`](/game-api/types/alta-crafting/timberblockspawner#m-snappoint), [`TimberBlockSpawner.StartCheckingPosition`](/game-api/types/alta-crafting/timberblockspawner#m-startcheckingposition), [`CaveTeleporter.HandFilter`](/game-api/types/alta-world-generation/caveteleporter#m-handfilter), [`DockedDissolver.DissolveItem`](/game-api/types/alta-world-generation/dockeddissolver#m-dissolveitem), [`CharacterCollisionController.collidersMap`](/game-api/types/alta-player/charactercollisioncontroller#m-collidersmap), [`CharacterCollisionController.DelaySetColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-delaysetcolliders), [`CharacterCollisionController.DisableColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-disablecolliders), [`CharacterCollisionController.disabledCache`](/game-api/types/alta-player/charactercollisioncontroller#m-disabledcache), [`CharacterCollisionController.EnableColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-enablecolliders), [`CharacterCollisionController.enablingCoroutines`](/game-api/types/alta-player/charactercollisioncontroller#m-enablingcoroutines), [`CharacterCollisionController.SetColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-setcolliders), [`Hand.Detach`](/game-api/types/alta-player/hand#m-detach), [`Hand.Interactor`](/game-api/types/alta-player/hand#m-interactor), [`Hand.MoveCenterOfMassToGripPoint`](/game-api/types/alta-player/hand#m-movecenterofmasstogrippoint), [`Hand.ResetCenterOfMass`](/game-api/types/alta-player/hand#m-resetcenterofmass), [`HandStore.Source`](/game-api/types/alta-player/handstore#m-source), [`InteractionCollisionController.InteractionEnded`](/game-api/types/alta-player/interactioncollisioncontroller#m-interactionended), [`InteractionCollisionController.InteractionStarted`](/game-api/types/alta-player/interactioncollisioncontroller#m-interactionstarted), [`InteractionCollisionController.interactor`](/game-api/types/alta-player/interactioncollisioncontroller#m-interactor), [`Inventory.LeftHand`](/game-api/types/alta-player/inventory#m-lefthand), [`Inventory.RightHand`](/game-api/types/alta-player/inventory#m-righthand), [`AdditionalOwnedDock.CheckDockFilter`](/game-api/types/alta-crafting/additionalowneddock#m-checkdockfilter), [`AdditionalOwnedDock.CheckInteractionFilter`](/game-api/types/alta-crafting/additionalowneddock#m-checkinteractionfilter), [`AdditionalOwnedDock.DeregisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-deregisterdock), [`AdditionalOwnedDock.RegisterDock`](/game-api/types/alta-crafting/additionalowneddock#m-registerdock), [`ConfirmationCraftingPart.InteractionPopout`](/game-api/types/alta-crafting/confirmationcraftingpart#m-interactionpopout), [`CraftingOptions.AttemptCraft`](/game-api/types/alta-crafting/craftingoptions#m-attemptcraft), [`CraftingOptions.Cancel`](/game-api/types/alta-crafting/craftingoptions#m-cancel), [`CraftingOptions.RequestCraft`](/game-api/types/alta-crafting/craftingoptions#m-requestcraft), [`CraftingPart.CheckPossibleConnections`](/game-api/types/alta-crafting/craftingpart#m-checkpossibleconnections), [`DisableLightOnDock.CheckEnabledEnable`](/game-api/types/alta-crafting/disablelightondock#m-checkenabledenable), [`DisableLightOnDock.ForceEnable`](/game-api/types/alta-crafting/disablelightondock#m-forceenable), [`GenericAssemblyStation.CalculateDockPosition`](/game-api/types/alta-crafting/genericassemblystation#m-calculatedockposition), [`GenericAssemblyStation.DockFilter`](/game-api/types/alta-crafting/genericassemblystation#m-dockfilter), [`GenericAssemblyStation.InsertPiece`](/game-api/types/alta-crafting/genericassemblystation#m-insertpiece), [`GenericAssemblyStation.RemovePiece`](/game-api/types/alta-crafting/genericassemblystation#m-removepiece), [`GenericCraftingPiece.FilterPop`](/game-api/types/alta-crafting/genericcraftingpiece#m-filterpop), [`GenericCraftingPiece.Grab`](/game-api/types/alta-crafting/genericcraftingpiece#m-grab), [`GenericCraftingPiece.SpawnRefuseForInteractor`](/game-api/types/alta-crafting/genericcraftingpiece#m-spawnrefuseforinteractor), [`GenericCraftingStation.ComponentReleased`](/game-api/types/alta-crafting/genericcraftingstation#m-componentreleased), [`GenericCraftingStation.DockingFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-dockingfilter), [`GenericCraftingStation.GrabResult`](/game-api/types/alta-crafting/genericcraftingstation#m-grabresult), [`GenericCraftingStation.GrabResultFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-grabresultfilter), [`GenericCraftingStation.OnPageDocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpagedocked), [`GenericCraftingStation.OnPageUndocked`](/game-api/types/alta-crafting/genericcraftingstation#m-onpageundocked), [`GenericCraftingStation.PageFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-pagefilter), [`CosmeticPresetTrophy.DisableGhostHands`](/game-api/types/alta-customization/cosmeticpresettrophy#m-disableghosthands) and 599 more.
