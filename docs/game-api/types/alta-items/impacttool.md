---
title: "ImpactTool"
description: "Component on anything that can hit with its impactors (weapons, tools, arrows, crafted handles)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool

A **class** in `Root.Township`, `Alta.Impact`.

Component on anything that can hit with its impactors (weapons, tools, arrows, crafted handles). Records its motion, turns collisions with an `ImpactDetector` into `ImpactHitWithTool`s, handles blocking and wears durability. Runs wherever the physics happens; client-side hits are synced to the server by impactor index.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody)
- **Derived types** [`TriggerImpactTool`](/game-api/types/alta-items/triggerimpacttool)
- **Nested types** [`OnCollidedHit`](/game-api/types/alta-items/impacttool-oncollidedhit), [`OnCollisionEnterEvent`](/game-api/types/alta-items/impacttool-oncollisionenterevent), [`OnGeneratedHit`](/game-api/types/alta-items/impacttool-ongeneratedhit), [`ResetConditions`](/game-api/types/alta-items/impacttool-resetconditions)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts#impacttool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactTool()"}</code> |

## Fields

<details>
<summary>33 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-blockablelayers" /><code>{"private LayerMask blockableLayers"}</code> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-collided" /><code>{"private UnityEvent collided"}</code> |
| <Link id="m-collidedrigidbodies" /><code>{"private HashSet<Rigidbody> collidedRigidBodies"}</code> |
| <Link id="m-currentlytrackingplayer" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" currentlyTrackingPlayer"}</code> |
| <Link id="m-damage" /><code>{"private float damage"}</code> |
| <Link id="m-dualhandedmultiplier" /><code>{"private float dualHandedMultiplier"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-forceindeximpactors" /><code>{"private bool forceIndexImpactors"}</code> |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> |
| <Link id="m-hit" /><code>{"private UnityEvent hit"}</code> |
| <Link id="m-hitdependants" /><code>{"private Component[] hitDependants"}</code> |
| <Link id="m-indexedimpactors" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> indexedImpactors"}</code> |
| <Link id="m-isignoringinteractor" /><code>{"private bool isIgnoringInteractor"}</code> |
| <Link id="m-isignoringvelocitycheck" /><code>{"private bool isIgnoringVelocityCheck"}</code> |
| <Link id="m-ismedhandle" /><code>{"private bool isMedHandle"}</code> |
| <Link id="m-isrecentgrab" /><code>{"private Coroutine isRecentGrab"}</code> |
| <Link id="m-lengthaxis" /><code>{"private Vector3 lengthAxis"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maps" /><code>{"private "}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"[] maps"}</code> |
| <Link id="m-needstobeprocessedinstantly" /><code>{"private bool needsToBeProcessedInstantly"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-providesexperience" /><code>{"private bool providesExperience"}</code> |
| <Link id="m-recorder" /><code>{"private "}<Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder"}</code> |
| <Link id="m-requiredblocklevel" /><code>{"private "}<Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" requiredBlockLevel"}</code> |
| <Link id="m-resetconditions" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool-resetconditions">{"ImpactTool.ResetConditions"}</Link>{" resetConditions"}</code> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |
| <Link id="m-singlecontact" /><code>{"private static "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] singleContact"}</code> |
| <Link id="m-singlehandedmultiplier" /><code>{"private float singleHandedMultiplier"}</code> |
| <Link id="m-timetoselfhit" /><code>{"private float timeToSelfHit"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |
| <Link id="m-updatepositions" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePositions"}</code> |
| <Link id="m-updatesposition" /><code>{"private bool updatesPosition"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"HashSet<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> | All impact channels of the registered impactors, including those from crafted child parts. |
| <Link id="m-damage-2" /><code>{"float Damage { get; }"}</code> | Base damage of the tool, set on the prefab. Impactor modifiers and stats multiply it. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The network entity the tool is on. |
| <Link id="m-hasimpactors" /><code>{"bool HasImpactors { get; private set; }"}</code> | Whether any impactors are registered. |
| <Link id="m-haspickup-2" /><code>{"bool HasPickup { get; }"}</code> | Whether the tool has a `Pickup` in its parents. |
| <Link id="m-hitdependants-2" /><code>{"Component[] HitDependants { get; }"}</code> | Child components that implement `IToolHitDependant` and get `OnHit` and `OnCollided` calls. |
| <Link id="m-impactorspercollider" /><code>{"Dictionary<Collider, HashSet<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> ImpactorsPerCollider { get; }"}</code> | Map from each collider to the impactors on it. |
| <Link id="m-isignoringvelocitycheck-2" /><code>{"bool IsIgnoringVelocityCheck { get; }"}</code> | When true, detectors accept hits from this tool even when it is barely moving. |
| <Link id="m-lastposition" /><code>{"Vector3 LastPosition { get; }"}</code> | The tool's current position. |
| <Link id="m-lastrotatation" /><code>{"Quaternion LastRotatation { get; }"}</code> | The tool's current rotation (name misspelt in the game). |
| <Link id="m-lengthaxis-2" /><code>{"Vector3 LengthAxis { get; }"}</code> | The tool's length direction in world space, from the prefab's local axis. |
| <Link id="m-maxdamage" /><code>{"float MaxDamage { get; }"}</code> | `Damage` times the highest health damage modifier among its impactors. |
| <Link id="m-needstobeprocessedinstantly-2" /><code>{"bool NeedsToBeProcessedInstantly { get; }"}</code> | When true, detectors resolve this tool's hits at once instead of through the delayed resolver. |
| <Link id="m-oneoffmultiplier" /><code>{"float OneOffMultiplier { get; set; }"}</code> | Damage multiplier for the next hit only. Reset to 1 after a hit lands. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup this tool belongs to, if any. |
| <Link id="m-playerowner" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" PlayerOwner { get; set; }"}</code> | The player credited with hits when nobody holds the tool, such as a fired arrow. |
| <Link id="m-playerwielder" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" PlayerWielder { get; }"}</code> | The last player to hold the tool's pickup, or null if it has no pickup. |
| <Link id="m-providesexperience-2" /><code>{"bool ProvidesExperience { get; }"}</code> | Whether hits from this tool can give progression experience. |
| <Link id="m-recorder-2" /><code><Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" Recorder { get; }"}</code> | Records the tool's recent positions so impactors can work out swing direction and speed. |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The tool's own rigidbody. |
| <Link id="m-velocity" /><code>{"virtual Vector3 Velocity { get; }"}</code> | Velocity of the pickup's rigidbody, or the tool's own if it has no pickup. |
| <Link id="m-wielder" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Wielder { get; }"}</code> | The root entity holding the tool (last interactor), or the tool's own root if it has no pickup. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-callcoroutine" /><code>{"private Coroutine CallCoroutine { get; set; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-collisionfilter" /><code>{"event "}<Link to="/game-api/types/alta-items/collisionfilter">{"CollisionFilter"}</Link>{" "}<Link to="/game-api/types/alta-items/collisionfilter">{"CollisionFilter"}</Link></code> | Raised when another impact tool collides with this one. A handler can mark the hit consumed to cancel blocking. |
| <Link id="m-onblocked" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnBlocked"}</code> | Raised on a tool when its swing is blocked by this tool. |
| <Link id="m-oncollided" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-oncollidedhit">{"ImpactTool.OnCollidedHit"}</Link>{" OnCollided"}</code> | Raised on every collision, with whether it counted as a hit. |
| <Link id="m-oncollisionentercalled" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-oncollisionenterevent">{"ImpactTool.OnCollisionEnterEvent"}</Link>{" OnCollisionEnterCalled"}</code> | Raised when a held tool collides with something on a blockable layer. |
| <Link id="m-onhit" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHit"}</code> | Raised when the tool lands a hit. Hit dependants are subscribed to it. |
| <Link id="m-onhitany" /><code>{"static event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHitAny"}</code> | Static: raised for every hit by any impact tool. |
| <Link id="m-onhittingimpactdetector" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnHittingImpactDetector"}</code> | Raised when a hit reaches an impact detector. Impact modifiers listen to it to change the hit. |
| <Link id="m-reseted" /><code>{"event Action Reseted"}</code> | Raised when the position record is cleared, for example after a hit or a block. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearhitevents" /><code>{"void ClearHitEvents()"}</code> | Clears `OnHit` and `OnCollided`, then re-adds only the tool's own hit dependants. |
| <Link id="m-deregisterchildimpacttool" /><code>{"void DeregisterChildImpactTool(IEnumerable<Component> hitDependants, ICollection<"}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> | Removes a crafted child part's hit dependants and impactors from this tool. Called when a part is taken off. |
| <Link id="m-generatehit" /><code>{"bool GenerateHit(out "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, Vector3 relativeVelocity, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, bool isDamaging = true, bool isOverridingEffects = true, "}<Link to="/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" blockLevel = 4)"}</code> | Works out the best hit from one contact across the collider's impactors, then applies effects, haptics and durability loss. Ignored for 0.1 s after a grab. |
| <Link id="m-generateimpactondetector" /><code><Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" GenerateImpactOnDetector("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, int impactorIndex, float effectiveness, int channelIndex, Vector3 point, Vector3 normal)"}</code> | Rebuilds and fires a hit from synced values (impactor and channel index), wearing durability. Used when a client-side hit arrives. |
| <Link id="m-getcurrentplayerwielder" /><code>{"bool GetCurrentPlayerWielder(out "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" wielder)"}</code> | True with the player holding the tool's pickup, if it is held. |
| <Link id="m-getfulltriggerhit" /><code>{"bool GetFullTriggerHit("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, out "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> | Best hit across every impactor for a trigger contact, with hand-count and damage stat multipliers. False if none match. |
| <Link id="m-gethandcountefficiencymultiplier" /><code>{"void GetHandCountEfficiencyMultiplier(ref float efficiencyMultiplier, ref float damageMultiplier)"}</code> | Sets efficiency to the single or dual handed multiplier by how many hands hold the pickup. Leaves damage unchanged. |
| <Link id="m-getimpactdamageon" /><code>{"float GetImpactDamageOn("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, int impactorIndex, float effectiveness, int channelIndex)"}</code> | Health damage a synced hit with these values would do on a detector, without applying it. |
| <Link id="m-getimpactorindex" /><code>{"int GetImpactorIndex("}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor)"}</code> | Index of an impactor in this tool's list, for syncing hits. -1 with an error if it is not on this tool. |
| <Link id="m-gettriggerhit" /><code>{"float GetTriggerHit("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type)"}</code> | Best efficiency of the touched collider's impactors of a given type and channel, or -1 if none. |
| <Link id="m-hitimpactdetector" /><code>{"void HitImpactDetector("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Raises `OnHittingImpactDetector` for a hit. Called from `ImpactHitWithTool.Hit`. |
| <Link id="m-iswieldedbylocalplayer" /><code>{"bool IsWieldedByLocalPlayer()"}</code> | True if the pickup is held and its last player interactor is the local player. |
| <Link id="m-registerchildimpacttool" /><code>{"void RegisterChildImpactTool(Component[] hitDependants, HashSet<"}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> | Adds a crafted child part's hit dependants and impactors to this tool. Called when a part is attached. |
| <Link id="m-startrecordingposition" /><code>{"void StartRecordingPosition()"}</code> | Starts recording positions if any impactor needs them. |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | Re-reads the rigidbody from the game object. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Gets a position recorder, hooks grab and release on the pickup and registers the impactors found in children. |
| <Link id="m-hit-2" /><code>{"protected void Hit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Protected: fires the inspector hit event, `OnHit` and the static `OnHitAny`. |

<details>
<summary>17 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-deregisterplayer" /><code>{"private void DeregisterPlayer()"}</code> |
| <Link id="m-getoverlapchannel" /><code>{"private bool GetOverlapChannel(List<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> impactorChannels, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] detectorChannels, out "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" overlap)"}</code> |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-haptic" /><code>{"private void Haptic(AnimationCurve haptic)"}</code> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-recentgrab" /><code>{"private IEnumerator RecentGrab() (iterator)"}</code> |
| <Link id="m-registerimpactorchannels" /><code>{"private void RegisterImpactorChannels("}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor)"}</code> |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |
| <Link id="m-setupimpactors" /><code>{"private void SetupImpactors()"}</code> |
| <Link id="m-timetohurtself" /><code>{"private IEnumerator TimeToHurtSelf() (iterator)"}</code> |
| <Link id="m-undockwakeup" /><code>{"private void UndockWakeUp("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-updateindexedimpactors" /><code>{"private void UpdateIndexedImpactors()"}</code> |
| <Link id="m-updateindexedimpactorsoncraftingpart" /><code>{"private void UpdateIndexedImpactorsOnCraftingPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |
| <Link id="m-updatepositions-2" /><code>{"private void UpdatePositions()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ImpactTool`:

[`AfkTimer.ResetWithHit`](/game-api/types/global-a-b/afktimer#m-resetwithhit), [`ChiselingTool.UpdateTool`](/game-api/types/alta-crafting/chiselingtool#m-updatetool), [`CraftingPart.impactTool`](/game-api/types/alta-crafting/craftingpart#m-impacttool), [`CraftingPart.ImpactTool`](/game-api/types/alta-crafting/craftingpart#m-impacttool-2), [`QuickDrawApplication.Proc`](/game-api/types/alta-crafting/quickdrawapplication#m-proc), [`QuickDrawApplication.tool`](/game-api/types/alta-crafting/quickdrawapplication#m-tool), [`QuickDrawApplication.ValidateHit`](/game-api/types/alta-crafting/quickdrawapplication#m-validatehit), [`BlockedTrigger.Blocked`](/game-api/types/alta-items/blockedtrigger#m-blocked), [`ColliderModifierSettings.IsDamaging`](/game-api/types/alta-items/collidermodifiersettings#m-isdamaging), [`ContactProjectile.OnCollided`](/game-api/types/alta-items/contactprojectile#m-oncollided), [`ContactProjectile.OnHit`](/game-api/types/alta-items/contactprojectile#m-onhit), [`CraftableImpactDetectorBase.RegisteredTool`](/game-api/types/alta-items/craftableimpactdetectorbase#m-registeredtool), [`CraftableImpactDetectorBase.UpdateTool`](/game-api/types/alta-items/craftableimpactdetectorbase#m-updatetool), [`DamageMultiplierCollider.IsDamaging`](/game-api/types/alta-items/damagemultipliercollider#m-isdamaging), [`DelayedImpactResolver.frameHits`](/game-api/types/alta-items/delayedimpactresolver#m-framehits), [`DelayedImpactResolver.Hit`](/game-api/types/alta-items/delayedimpactresolver#m-hit), [`DelayedImpactResolver.ProcessImmediate`](/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.ImpactDetectorHit`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-ctor), [`DelayedImpactResolver.ImpactDetectorHit.impactTool`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-impacttool), [`DirectionalMultiplierCollider.IsDamaging`](/game-api/types/alta-items/directionalmultipliercollider#m-isdamaging), [`ImpactDetector.hitCooldowns`](/game-api/types/alta-items/impactdetector#m-hitcooldowns), [`ImpactDetector.IsForcedClientSideImpact`](/game-api/types/alta-items/impactdetector#m-isforcedclientsideimpact), [`ImpactDetector.IsImpactClientSideOnly`](/game-api/types/alta-items/impactdetector#m-isimpactclientsideonly), [`ImpactDetectorColliderModifier.IsDamaging`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-isdamaging), [`ImpactGenerator.DeRegisterTool`](/game-api/types/alta-items/impactgenerator#m-deregistertool), [`ImpactGenerator.RegisteredTool`](/game-api/types/alta-items/impactgenerator#m-registeredtool), [`ImpactGenerator.RegisterTool`](/game-api/types/alta-items/impactgenerator#m-registertool), [`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactHitWithTool.Tool`](/game-api/types/alta-items/impacthitwithtool#m-tool), [`ImpactModifier.trackedTool`](/game-api/types/alta-items/impactmodifier#m-trackedtool), [`Impactor.impactTool`](/game-api/types/alta-items/impactor#m-impacttool), [`ImpactTool.OnCollidedHit.BeginInvoke`](/game-api/types/alta-items/impacttool-oncollidedhit#m-begininvoke), [`ImpactTool.OnCollidedHit.Invoke`](/game-api/types/alta-items/impacttool-oncollidedhit#m-invoke), [`ImpactTool.OnGeneratedHit.BeginInvoke`](/game-api/types/alta-items/impacttool-ongeneratedhit#m-begininvoke), [`ImpactTool.OnGeneratedHit.Invoke`](/game-api/types/alta-items/impacttool-ongeneratedhit#m-invoke), [`ImpactTypeFilter.ValidateImpacTool`](/game-api/types/alta-items/impacttypefilter#m-validateimpactool), [`IToolHitDependant.OnCollided`](/game-api/types/alta-items/itoolhitdependant#m-oncollided), [`IToolHitDependant.OnHit`](/game-api/types/alta-items/itoolhitdependant#m-onhit), [`NonDamagingCollider.IsDamaging`](/game-api/types/alta-items/nondamagingcollider#m-isdamaging), [`TriggerImpactDetector.GenerateHit`](/game-api/types/alta-items/triggerimpactdetector#m-generatehit), [`SeedSpray.Seed.tool`](/game-api/types/alta-intelligence/seedspray-seed#m-tool), [`NetworkEntity.commonImpactTool`](/game-api/types/alta-networking/networkentity#m-commonimpacttool), [`NetworkEntity.CommonImpactTool`](/game-api/types/alta-networking/networkentity#m-commonimpacttool-2), [`Arrow.impactTool`](/game-api/types/global-a-b/arrow#m-impacttool), [`Arrow.ImpactTool`](/game-api/types/global-a-b/arrow#m-impacttool-2), [`Arrow.OnCollided`](/game-api/types/global-a-b/arrow#m-oncollided), [`Arrow.OnHit`](/game-api/types/global-a-b/arrow#m-onhit), [`BreakOnImpact.OnCollided`](/game-api/types/global-a-b/breakonimpact#m-oncollided), [`BreakOnImpact.OnHit`](/game-api/types/global-a-b/breakonimpact#m-onhit-2), [`DiggingImpactor.currentTool`](/game-api/types/global-c-d/diggingimpactor#m-currenttool), [`DiggingImpactor.OnCollided`](/game-api/types/global-c-d/diggingimpactor#m-oncollided), [`DiggingImpactor.OnHit`](/game-api/types/global-c-d/diggingimpactor#m-onhit), [`DiggingImpactor.RegisterTool`](/game-api/types/global-c-d/diggingimpactor#m-registertool), [`DynamiteStrike.Collided`](/game-api/types/global-c-d/dynamitestrike#m-collided), [`Embeddable.OnCollided`](/game-api/types/global-e-h/embeddable#m-oncollided), [`Embeddable.OnHit`](/game-api/types/global-e-h/embeddable#m-onhit), [`ExtraArrowUpdater.arrowImpactTool`](/game-api/types/global-e-h/extraarrowupdater#m-arrowimpacttool), [`HeartCall.modifiers`](/game-api/types/global-e-h/heartcall#m-modifiers), [`HeartCall.Modify`](/game-api/types/global-e-h/heartcall#m-modify), [`HeldPickupHandler.Tool`](/game-api/types/global-e-h/heldpickuphandler#m-tool) and 10 more.
