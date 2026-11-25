---
title: "ImpactTool"
description: "Get it with GetComponent<ImpactTool>() on the item, or entity.CommonImpactTool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool

A **class** in `Root.Township`, `Alta.Impact`.

Get it with `GetComponent<ImpactTool>()` on the item, or `entity.CommonImpactTool`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody)
- **Derived types** [`TriggerImpactTool`](/game-api/types/alta-items/triggerimpacttool)
- **Nested types** [`OnCollidedHit`](/game-api/types/alta-items/impacttool-oncollidedhit), [`OnCollisionEnterEvent`](/game-api/types/alta-items/impacttool-oncollisionenterevent), [`OnGeneratedHit`](/game-api/types/alta-items/impacttool-ongeneratedhit), [`ResetConditions`](/game-api/types/alta-items/impacttool-resetconditions)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts#impacttool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactTool()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-blockablelayers" /><code>{"private LayerMask blockableLayers"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-collided" /><code>{"private UnityEvent collided"}</code> |  |
| <Link id="m-collidedrigidbodies" /><code>{"private HashSet<Rigidbody> collidedRigidBodies"}</code> |  |
| <Link id="m-currentlytrackingplayer" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" currentlyTrackingPlayer"}</code> |  |
| <Link id="m-damage" /><code>{"private float damage"}</code> |  |
| <Link id="m-dualhandedmultiplier" /><code>{"private float dualHandedMultiplier"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-forceindeximpactors" /><code>{"private bool forceIndexImpactors"}</code> |  |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> |  |
| <Link id="m-hit" /><code>{"private UnityEvent hit"}</code> |  |
| <Link id="m-hitdependants" /><code>{"private Component[] hitDependants"}</code> |  |
| <Link id="m-indexedimpactors" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> indexedImpactors"}</code> |  |
| <Link id="m-isignoringinteractor" /><code>{"private bool isIgnoringInteractor"}</code> |  |
| <Link id="m-isignoringvelocitycheck" /><code>{"private bool isIgnoringVelocityCheck"}</code> |  |
| <Link id="m-ismedhandle" /><code>{"private bool isMedHandle"}</code> |  |
| <Link id="m-isrecentgrab" /><code>{"private Coroutine isRecentGrab"}</code> |  |
| <Link id="m-lengthaxis" /><code>{"private Vector3 lengthAxis"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maps" /><code>{"private "}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"[] maps"}</code> |  |
| <Link id="m-needstobeprocessedinstantly" /><code>{"private bool needsToBeProcessedInstantly"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-providesexperience" /><code>{"private bool providesExperience"}</code> |  |
| <Link id="m-recorder" /><code>{"private "}<Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder"}</code> |  |
| <Link id="m-requiredblocklevel" /><code>{"private "}<Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" requiredBlockLevel"}</code> |  |
| <Link id="m-resetconditions" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool-resetconditions">{"ImpactTool.ResetConditions"}</Link>{" resetConditions"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-singlecontact" /><code>{"private static "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] singleContact"}</code> |  |
| <Link id="m-singlehandedmultiplier" /><code>{"private float singleHandedMultiplier"}</code> |  |
| <Link id="m-timetoselfhit" /><code>{"private float timeToSelfHit"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-updatepositions" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePositions"}</code> |  |
| <Link id="m-updatesposition" /><code>{"private bool updatesPosition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"HashSet<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> |  |
| <Link id="m-damage-2" /><code>{"float Damage { get; }"}</code> |  |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-hasimpactors" /><code>{"bool HasImpactors { get; private set; }"}</code> |  |
| <Link id="m-haspickup-2" /><code>{"bool HasPickup { get; }"}</code> |  |
| <Link id="m-hitdependants-2" /><code>{"Component[] HitDependants { get; }"}</code> |  |
| <Link id="m-impactorspercollider" /><code>{"Dictionary<Collider, HashSet<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> ImpactorsPerCollider { get; }"}</code> |  |
| <Link id="m-isignoringvelocitycheck-2" /><code>{"bool IsIgnoringVelocityCheck { get; }"}</code> |  |
| <Link id="m-lastposition" /><code>{"Vector3 LastPosition { get; }"}</code> |  |
| <Link id="m-lastrotatation" /><code>{"Quaternion LastRotatation { get; }"}</code> |  |
| <Link id="m-lengthaxis-2" /><code>{"Vector3 LengthAxis { get; }"}</code> |  |
| <Link id="m-maxdamage" /><code>{"float MaxDamage { get; }"}</code> |  |
| <Link id="m-needstobeprocessedinstantly-2" /><code>{"bool NeedsToBeProcessedInstantly { get; }"}</code> |  |
| <Link id="m-oneoffmultiplier" /><code>{"float OneOffMultiplier { get; set; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playerowner" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" PlayerOwner { get; set; }"}</code> |  |
| <Link id="m-playerwielder" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" PlayerWielder { get; }"}</code> |  |
| <Link id="m-providesexperience-2" /><code>{"bool ProvidesExperience { get; }"}</code> |  |
| <Link id="m-recorder-2" /><code><Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" Recorder { get; }"}</code> |  |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> |  |
| <Link id="m-velocity" /><code>{"virtual Vector3 Velocity { get; }"}</code> |  |
| <Link id="m-wielder" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Wielder { get; }"}</code> |  |
| <Link id="m-callcoroutine" /><code>{"private Coroutine CallCoroutine { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-collisionfilter" /><code>{"event "}<Link to="/game-api/types/alta-items/collisionfilter">{"CollisionFilter"}</Link>{" "}<Link to="/game-api/types/alta-items/collisionfilter">{"CollisionFilter"}</Link></code> |  |
| <Link id="m-onblocked" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnBlocked"}</code> |  |
| <Link id="m-oncollided" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-oncollidedhit">{"ImpactTool.OnCollidedHit"}</Link>{" OnCollided"}</code> |  |
| <Link id="m-oncollisionentercalled" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-oncollisionenterevent">{"ImpactTool.OnCollisionEnterEvent"}</Link>{" OnCollisionEnterCalled"}</code> |  |
| <Link id="m-onhit" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHit"}</code> |  |
| <Link id="m-onhitany" /><code>{"static event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHitAny"}</code> |  |
| <Link id="m-onhittingimpactdetector" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnHittingImpactDetector"}</code> |  |
| <Link id="m-reseted" /><code>{"event Action Reseted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearhitevents" /><code>{"void ClearHitEvents()"}</code> |  |
| <Link id="m-deregisterchildimpacttool" /><code>{"void DeregisterChildImpactTool(IEnumerable<Component> hitDependants, ICollection<"}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> |  |
| <Link id="m-generatehit" /><code>{"bool GenerateHit(out "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, Vector3 relativeVelocity, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, bool isDamaging = true, bool isOverridingEffects = true, "}<Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" blockLevel = 4)"}</code> |  |
| <Link id="m-generateimpactondetector" /><code><Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" GenerateImpactOnDetector("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, int impactorIndex, float effectiveness, int channelIndex, Vector3 point, Vector3 normal)"}</code> |  |
| <Link id="m-getcurrentplayerwielder" /><code>{"bool GetCurrentPlayerWielder(out "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" wielder)"}</code> |  |
| <Link id="m-getfulltriggerhit" /><code>{"bool GetFullTriggerHit("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, out "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> |  |
| <Link id="m-gethandcountefficiencymultiplier" /><code>{"void GetHandCountEfficiencyMultiplier(ref float efficiencyMultiplier, ref float damageMultiplier)"}</code> |  |
| <Link id="m-getimpactdamageon" /><code>{"float GetImpactDamageOn("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, int impactorIndex, float effectiveness, int channelIndex)"}</code> |  |
| <Link id="m-getimpactorindex" /><code>{"int GetImpactorIndex("}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor)"}</code> |  |
| <Link id="m-gettriggerhit" /><code>{"float GetTriggerHit("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type)"}</code> |  |
| <Link id="m-hitimpactdetector" /><code>{"void HitImpactDetector("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-iswieldedbylocalplayer" /><code>{"bool IsWieldedByLocalPlayer()"}</code> |  |
| <Link id="m-registerchildimpacttool" /><code>{"void RegisterChildImpactTool(Component[] hitDependants, HashSet<"}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> |  |
| <Link id="m-startrecordingposition" /><code>{"void StartRecordingPosition()"}</code> |  |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-deregisterplayer" /><code>{"private void DeregisterPlayer()"}</code> |  |
| <Link id="m-getoverlapchannel" /><code>{"private bool GetOverlapChannel(List<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> impactorChannels, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] detectorChannels, out "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" overlap)"}</code> |  |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-haptic" /><code>{"private void Haptic(AnimationCurve haptic)"}</code> |  |
| <Link id="m-hit-2" /><code>{"protected void Hit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-recentgrab" /><code>{"private IEnumerator RecentGrab() (iterator)"}</code> |  |
| <Link id="m-registerimpactorchannels" /><code>{"private void RegisterImpactorChannels("}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor)"}</code> |  |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |
| <Link id="m-setupimpactors" /><code>{"private void SetupImpactors()"}</code> |  |
| <Link id="m-timetohurtself" /><code>{"private IEnumerator TimeToHurtSelf() (iterator)"}</code> |  |
| <Link id="m-undockwakeup" /><code>{"private void UndockWakeUp("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-updateindexedimpactors" /><code>{"private void UpdateIndexedImpactors()"}</code> |  |
| <Link id="m-updateindexedimpactorsoncraftingpart" /><code>{"private void UpdateIndexedImpactorsOnCraftingPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |  |
| <Link id="m-updatepositions-2" /><code>{"private void UpdatePositions()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactTool`:

[`AfkTimer.ResetWithHit`](/game-api/types/global-a-b/afktimer#m-resetwithhit), [`ChiselingTool.UpdateTool`](/game-api/types/alta-crafting/chiselingtool#m-updatetool), [`CraftingPart.impactTool`](/game-api/types/alta-crafting/craftingpart#m-impacttool), [`CraftingPart.ImpactTool`](/game-api/types/alta-crafting/craftingpart#m-impacttool-2), [`QuickDrawApplication.Proc`](/game-api/types/alta-crafting/quickdrawapplication#m-proc), [`QuickDrawApplication.tool`](/game-api/types/alta-crafting/quickdrawapplication#m-tool), [`QuickDrawApplication.ValidateHit`](/game-api/types/alta-crafting/quickdrawapplication#m-validatehit), [`BlockedTrigger.Blocked`](/game-api/types/alta-items/blockedtrigger#m-blocked), [`ColliderModifierSettings.IsDamaging`](/game-api/types/alta-items/collidermodifiersettings#m-isdamaging), [`ContactProjectile.OnCollided`](/game-api/types/alta-items/contactprojectile#m-oncollided), [`ContactProjectile.OnHit`](/game-api/types/alta-items/contactprojectile#m-onhit), [`CraftableImpactDetectorBase.RegisteredTool`](/game-api/types/alta-items/craftableimpactdetectorbase#m-registeredtool), [`CraftableImpactDetectorBase.UpdateTool`](/game-api/types/alta-items/craftableimpactdetectorbase#m-updatetool), [`DamageMultiplierCollider.IsDamaging`](/game-api/types/alta-items/damagemultipliercollider#m-isdamaging), [`DelayedImpactResolver.frameHits`](/game-api/types/alta-items/delayedimpactresolver#m-framehits), [`DelayedImpactResolver.Hit`](/game-api/types/alta-items/delayedimpactresolver#m-hit), [`DelayedImpactResolver.ProcessImmediate`](/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.ImpactDetectorHit`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-ctor), [`DelayedImpactResolver.ImpactDetectorHit.impactTool`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-impacttool), [`DirectionalMultiplierCollider.IsDamaging`](/game-api/types/alta-items/directionalmultipliercollider#m-isdamaging), [`ImpactDetector.hitCooldowns`](/game-api/types/alta-items/impactdetector#m-hitcooldowns), [`ImpactDetector.IsForcedClientSideImpact`](/game-api/types/alta-items/impactdetector#m-isforcedclientsideimpact), [`ImpactDetector.IsImpactClientSideOnly`](/game-api/types/alta-items/impactdetector#m-isimpactclientsideonly), [`ImpactDetectorColliderModifier.IsDamaging`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-isdamaging), [`ImpactGenerator.DeRegisterTool`](/game-api/types/alta-items/impactgenerator#m-deregistertool), [`ImpactGenerator.RegisteredTool`](/game-api/types/alta-items/impactgenerator#m-registeredtool), [`ImpactGenerator.RegisterTool`](/game-api/types/alta-items/impactgenerator#m-registertool), [`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactHitWithTool.Tool`](/game-api/types/alta-items/impacthitwithtool#m-tool), [`ImpactModifier.trackedTool`](/game-api/types/alta-items/impactmodifier#m-trackedtool), [`Impactor.impactTool`](/game-api/types/alta-items/impactor#m-impacttool), [`ImpactTool.OnCollidedHit.BeginInvoke`](/game-api/types/alta-items/impacttool-oncollidedhit#m-begininvoke), [`ImpactTool.OnCollidedHit.Invoke`](/game-api/types/alta-items/impacttool-oncollidedhit#m-invoke), [`ImpactTool.OnGeneratedHit.BeginInvoke`](/game-api/types/alta-items/impacttool-ongeneratedhit#m-begininvoke), [`ImpactTool.OnGeneratedHit.Invoke`](/game-api/types/alta-items/impacttool-ongeneratedhit#m-invoke), [`ImpactTypeFilter.ValidateImpacTool`](/game-api/types/alta-items/impacttypefilter#m-validateimpactool), [`IToolHitDependant.OnCollided`](/game-api/types/alta-items/itoolhitdependant#m-oncollided), [`IToolHitDependant.OnHit`](/game-api/types/alta-items/itoolhitdependant#m-onhit), [`NonDamagingCollider.IsDamaging`](/game-api/types/alta-items/nondamagingcollider#m-isdamaging), [`TriggerImpactDetector.GenerateHit`](/game-api/types/alta-items/triggerimpactdetector#m-generatehit), [`SeedSpray.Seed.tool`](/game-api/types/alta-intelligence/seedspray-seed#m-tool), [`NetworkEntity.commonImpactTool`](/game-api/types/alta-networking/networkentity#m-commonimpacttool), [`NetworkEntity.CommonImpactTool`](/game-api/types/alta-networking/networkentity#m-commonimpacttool-2), [`Arrow.impactTool`](/game-api/types/global-a-b/arrow#m-impacttool), [`Arrow.ImpactTool`](/game-api/types/global-a-b/arrow#m-impacttool-2), [`Arrow.OnCollided`](/game-api/types/global-a-b/arrow#m-oncollided), [`Arrow.OnHit`](/game-api/types/global-a-b/arrow#m-onhit), [`BreakOnImpact.OnCollided`](/game-api/types/global-a-b/breakonimpact#m-oncollided), [`BreakOnImpact.OnHit`](/game-api/types/global-a-b/breakonimpact#m-onhit-2), [`DiggingImpactor.currentTool`](/game-api/types/global-c-d/diggingimpactor#m-currenttool), [`DiggingImpactor.OnCollided`](/game-api/types/global-c-d/diggingimpactor#m-oncollided), [`DiggingImpactor.OnHit`](/game-api/types/global-c-d/diggingimpactor#m-onhit), [`DiggingImpactor.RegisterTool`](/game-api/types/global-c-d/diggingimpactor#m-registertool), [`DynamiteStrike.Collided`](/game-api/types/global-c-d/dynamitestrike#m-collided), [`Embeddable.OnCollided`](/game-api/types/global-e-h/embeddable#m-oncollided), [`Embeddable.OnHit`](/game-api/types/global-e-h/embeddable#m-onhit), [`ExtraArrowUpdater.arrowImpactTool`](/game-api/types/global-e-h/extraarrowupdater#m-arrowimpacttool), [`HeartCall.modifiers`](/game-api/types/global-e-h/heartcall#m-modifiers), [`HeartCall.Modify`](/game-api/types/global-e-h/heartcall#m-modify), [`HeldPickupHandler.Tool`](/game-api/types/global-e-h/heldpickuphandler#m-tool) and 10 more.
