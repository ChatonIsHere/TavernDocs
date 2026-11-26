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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IGetRigidbody`](/mod/game-api/types/alta-crafting/igetrigidbody)
- **Derived types** [`TriggerImpactTool`](/mod/game-api/types/alta-items/triggerimpacttool)
- **Nested types** [`OnCollidedHit`](/mod/game-api/types/alta-items/impacttool-oncollidedhit), [`OnCollisionEnterEvent`](/mod/game-api/types/alta-items/impacttool-oncollisionenterevent), [`OnGeneratedHit`](/mod/game-api/types/alta-items/impacttool-ongeneratedhit), [`ResetConditions`](/mod/game-api/types/alta-items/impacttool-resetconditions)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts#impacttool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactTool()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>33 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockablelayers" /><code>{"private LayerMask blockableLayers"}</code> | <span className="api-desc">Layers whose collisions are checked for blocking.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform used by the position recorder.</span> |
| <Link id="m-collided" /><code>{"private UnityEvent collided"}</code> | <span className="api-desc">Unity event invoked on every collision.</span> |
| <Link id="m-collidedrigidbodies" /><code>{"private HashSet<Rigidbody> collidedRigidBodies"}</code> | <span className="api-desc">Rigidbodies already handled this frame, so one collision isn't processed twice. Cleared next frame.</span> |
| <Link id="m-currentlytrackingplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" currentlyTrackingPlayer"}</code> | <span className="api-desc">Locomotion controller of the holder, whose movement is fed into the recorder.</span> |
| <Link id="m-damage" /><code>{"private float damage"}</code> | <span className="api-desc">Backing field for `Damage`: the base health damage of a hit. Default 1.</span> |
| <Link id="m-dualhandedmultiplier" /><code>{"private float dualHandedMultiplier"}</code> | <span className="api-desc">Efficiency multiplier when held with two or more hands.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-forceindeximpactors" /><code>{"private bool forceIndexImpactors"}</code> | <span className="api-desc">Builds the indexed impactor list even when the tool has no network entity.</span> |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> | <span className="api-desc">Backing field for `HasPickup`, baked from whether a pickup is in the parents.</span> |
| <Link id="m-hit" /><code>{"private UnityEvent hit"}</code> | <span className="api-desc">Unity event invoked on every successful hit.</span> |
| <Link id="m-hitdependants" /><code>{"private Component[] hitDependants"}</code> | <span className="api-desc">Backing field for `HitDependants`: child components that get `OnHit` and `OnCollided`.</span> |
| <Link id="m-indexedimpactors" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> indexedImpactors"}</code> | <span className="api-desc">Ordered impactors, so a hit can be synced as an impactor index.</span> |
| <Link id="m-isignoringinteractor" /><code>{"private bool isIgnoringInteractor"}</code> | <span className="api-desc">Set on release so the first contact with the last holder is ignored, until `timeToSelfHit` passes.</span> |
| <Link id="m-isignoringvelocitycheck" /><code>{"private bool isIgnoringVelocityCheck"}</code> | <span className="api-desc">Backing field for `IsIgnoringVelocityCheck`.</span> |
| <Link id="m-ismedhandle" /><code>{"private bool isMedHandle"}</code> | <span className="api-desc">With a single hand, impactors whose pickup has `BypassMed1h` get full efficiency instead of the one hand multiplier.</span> |
| <Link id="m-isrecentgrab" /><code>{"private Coroutine isRecentGrab"}</code> | <span className="api-desc">Coroutine running for 0.1 seconds after a grab; no hits are generated meanwhile.</span> |
| <Link id="m-lengthaxis" /><code>{"private Vector3 lengthAxis"}</code> | <span className="api-desc">Local axis along the tool's length, behind `LengthAxis`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maps" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"[] maps"}</code> | <span className="api-desc">Impactor maps on this object and its children, collider to impactors.</span> |
| <Link id="m-needstobeprocessedinstantly" /><code>{"private bool needsToBeProcessedInstantly"}</code> | <span className="api-desc">Backing field for `NeedsToBeProcessedInstantly`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`, the pickup in this object's parents.</span> |
| <Link id="m-providesexperience" /><code>{"private bool providesExperience"}</code> | <span className="api-desc">Backing field for `ProvidesExperience`. Default true.</span> |
| <Link id="m-recorder" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder"}</code> | <span className="api-desc">Backing field for `Recorder`, pooled from `PickupTypeSettings`.</span> |
| <Link id="m-requiredblocklevel" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" requiredBlockLevel"}</code> | <span className="api-desc">Block level at or above which a block resets the recorder, when `OnBlocked` reset is set.</span> |
| <Link id="m-resetconditions" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool-resetconditions">{"ImpactTool.ResetConditions"}</Link>{" resetConditions"}</code> | <span className="api-desc">When to reset the recorded swing: on a block, on a valid hit, or both. Default valid hit.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">Backing field for `Rigidbody`.</span> |
| <Link id="m-singlecontact" /><code>{"private static "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] singleContact"}</code> | <span className="api-desc">Shared one element contact array put on the best hit.</span> |
| <Link id="m-singlehandedmultiplier" /><code>{"private float singleHandedMultiplier"}</code> | <span className="api-desc">Efficiency multiplier when held with one hand.</span> |
| <Link id="m-timetoselfhit" /><code>{"private float timeToSelfHit"}</code> | <span className="api-desc">Seconds after release before the tool can hit its last holder. Default 1.5.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared fixed update module that runs `UpdatePositions` for all tools.</span> |
| <Link id="m-updatepositions" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePositions"}</code> | <span className="api-desc">This tool's registration in `updateModule`, or null when not recording.</span> |
| <Link id="m-updatesposition" /><code>{"private bool updatesPosition"}</code> | <span className="api-desc">Whether any impactor needs the position recorder.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> | <span className="api-desc">All impact channels of the registered impactors, including those from crafted child parts.</span> |
| <Link id="m-damage-2" /><code>{"float Damage { get; }"}</code> | <span className="api-desc">Base damage of the tool, set on the prefab. Impactor modifiers and stats multiply it.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The network entity the tool is on.</span> |
| <Link id="m-hasimpactors" /><code>{"bool HasImpactors { get; private set; }"}</code> | <span className="api-desc">Whether any impactors are registered.</span> |
| <Link id="m-haspickup-2" /><code>{"bool HasPickup { get; }"}</code> | <span className="api-desc">Whether the tool has a `Pickup` in its parents.</span> |
| <Link id="m-hitdependants-2" /><code>{"Component[] HitDependants { get; }"}</code> | <span className="api-desc">Child components that implement `IToolHitDependant` and get `OnHit` and `OnCollided` calls.</span> |
| <Link id="m-impactorspercollider" /><code>{"Dictionary<Collider, HashSet<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> ImpactorsPerCollider { get; }"}</code> | <span className="api-desc">Map from each collider to the impactors on it.</span> |
| <Link id="m-isignoringvelocitycheck-2" /><code>{"bool IsIgnoringVelocityCheck { get; }"}</code> | <span className="api-desc">When true, detectors accept hits from this tool even when it is barely moving.</span> |
| <Link id="m-lastposition" /><code>{"Vector3 LastPosition { get; }"}</code> | <span className="api-desc">The tool's current position.</span> |
| <Link id="m-lastrotatation" /><code>{"Quaternion LastRotatation { get; }"}</code> | <span className="api-desc">The tool's current rotation (name misspelt in the game).</span> |
| <Link id="m-lengthaxis-2" /><code>{"Vector3 LengthAxis { get; }"}</code> | <span className="api-desc">The tool's length direction in world space, from the prefab's local axis.</span> |
| <Link id="m-maxdamage" /><code>{"float MaxDamage { get; }"}</code> | <span className="api-desc">`Damage` times the highest health damage modifier among its impactors.</span> |
| <Link id="m-needstobeprocessedinstantly-2" /><code>{"bool NeedsToBeProcessedInstantly { get; }"}</code> | <span className="api-desc">When true, detectors resolve this tool's hits at once instead of through the delayed resolver.</span> |
| <Link id="m-oneoffmultiplier" /><code>{"float OneOffMultiplier { get; set; }"}</code> | <span className="api-desc">Damage multiplier for the next hit only. Reset to 1 after a hit lands.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup this tool belongs to, if any.</span> |
| <Link id="m-playerowner" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" PlayerOwner { get; set; }"}</code> | <span className="api-desc">The player credited with hits when nobody holds the tool, such as a fired arrow.</span> |
| <Link id="m-playerwielder" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" PlayerWielder { get; }"}</code> | <span className="api-desc">The last player to hold the tool's pickup, or null if it has no pickup.</span> |
| <Link id="m-providesexperience-2" /><code>{"bool ProvidesExperience { get; }"}</code> | <span className="api-desc">Whether hits from this tool can give progression experience.</span> |
| <Link id="m-recorder-2" /><code><Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" Recorder { get; }"}</code> | <span className="api-desc">Records the tool's recent positions so impactors can work out swing direction and speed.</span> |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The tool's own rigidbody.</span> |
| <Link id="m-velocity" /><code>{"virtual Vector3 Velocity { get; }"}</code> | <span className="api-desc">Velocity of the pickup's rigidbody, or the tool's own if it has no pickup.</span> |
| <Link id="m-wielder" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Wielder { get; }"}</code> | <span className="api-desc">The root entity holding the tool (last interactor), or the tool's own root if it has no pickup.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callcoroutine" /><code>{"private Coroutine CallCoroutine { get; set; }"}</code> | <span className="api-desc">Private coroutine slot that nothing in this class sets.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-collisionfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/collisionfilter">{"CollisionFilter"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/collisionfilter">{"CollisionFilter"}</Link></code> | <span className="api-desc">Raised when another impact tool collides with this one. A handler can mark the hit consumed to cancel blocking.</span> |
| <Link id="m-onblocked" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnBlocked"}</code> | <span className="api-desc">Raised on a tool when its swing is blocked by this tool.</span> |
| <Link id="m-oncollided" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/impacttool-oncollidedhit">{"ImpactTool.OnCollidedHit"}</Link>{" OnCollided"}</code> | <span className="api-desc">Raised on every collision, with whether it counted as a hit.</span> |
| <Link id="m-oncollisionentercalled" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/impacttool-oncollisionenterevent">{"ImpactTool.OnCollisionEnterEvent"}</Link>{" OnCollisionEnterCalled"}</code> | <span className="api-desc">Raised when a held tool collides with something on a blockable layer.</span> |
| <Link id="m-onhit" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHit"}</code> | <span className="api-desc">Raised when the tool lands a hit. Hit dependants are subscribed to it.</span> |
| <Link id="m-onhitany" /><code>{"static event "}<Link to="/mod/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHitAny"}</code> | <span className="api-desc">Static: raised for every hit by any impact tool.</span> |
| <Link id="m-onhittingimpactdetector" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnHittingImpactDetector"}</code> | <span className="api-desc">Raised when a hit reaches an impact detector. Impact modifiers listen to it to change the hit.</span> |
| <Link id="m-reseted" /><code>{"event Action Reseted"}</code> | <span className="api-desc">Raised when the position record is cleared, for example after a hit or a block.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearhitevents" /><code>{"void ClearHitEvents()"}</code> | <span className="api-desc">Clears `OnHit` and `OnCollided`, then re-adds only the tool's own hit dependants.</span> |
| <Link id="m-deregisterchildimpacttool" /><code>{"void DeregisterChildImpactTool(IEnumerable<Component> hitDependants, ICollection<"}<Link to="/mod/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> | <span className="api-desc">Removes a crafted child part's hit dependants and impactors from this tool. Called when a part is taken off.</span> |
| <Link id="m-generatehit" /><code>{"bool GenerateHit(out "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, Vector3 relativeVelocity, "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, bool isDamaging = true, bool isOverridingEffects = true, "}<Link to="/mod/game-api/types/global-a-b/blocklevel">{"BlockLevel"}</Link>{" blockLevel = 4)"}</code> | <span className="api-desc">Works out the best hit from one contact across the collider's impactors, then applies effects, haptics and durability loss. Ignored for 0.1 s after a grab.</span> |
| <Link id="m-generateimpactondetector" /><code><Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" GenerateImpactOnDetector("}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, int impactorIndex, float effectiveness, int channelIndex, Vector3 point, Vector3 normal)"}</code> | <span className="api-desc">Rebuilds and fires a hit from synced values (impactor and channel index), wearing durability. Used when a client-side hit arrives.</span> |
| <Link id="m-getcurrentplayerwielder" /><code>{"bool GetCurrentPlayerWielder(out "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" wielder)"}</code> | <span className="api-desc">True with the player holding the tool's pickup, if it is held.</span> |
| <Link id="m-getfulltriggerhit" /><code>{"bool GetFullTriggerHit("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, out "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> | <span className="api-desc">Best hit across every impactor for a trigger contact, with hand-count and damage stat multipliers. False if none match.</span> |
| <Link id="m-gethandcountefficiencymultiplier" /><code>{"void GetHandCountEfficiencyMultiplier(ref float efficiencyMultiplier, ref float damageMultiplier)"}</code> | <span className="api-desc">Sets efficiency to the single or dual handed multiplier by how many hands hold the pickup. Leaves damage unchanged.</span> |
| <Link id="m-getimpactdamageon" /><code>{"float GetImpactDamageOn("}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, int impactorIndex, float effectiveness, int channelIndex)"}</code> | <span className="api-desc">Health damage a synced hit with these values would do on a detector, without applying it.</span> |
| <Link id="m-getimpactorindex" /><code>{"int GetImpactorIndex("}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor)"}</code> | <span className="api-desc">Index of an impactor in this tool's list, for syncing hits. -1 with an error if it is not on this tool.</span> |
| <Link id="m-gettriggerhit" /><code>{"float GetTriggerHit("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact, "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels, "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type)"}</code> | <span className="api-desc">Best efficiency of the touched collider's impactors of a given type and channel, or -1 if none.</span> |
| <Link id="m-hitimpactdetector" /><code>{"void HitImpactDetector("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Raises `OnHittingImpactDetector` for a hit. Called from `ImpactHitWithTool.Hit`.</span> |
| <Link id="m-iswieldedbylocalplayer" /><code>{"bool IsWieldedByLocalPlayer()"}</code> | <span className="api-desc">True if the pickup is held and its last player interactor is the local player.</span> |
| <Link id="m-registerchildimpacttool" /><code>{"void RegisterChildImpactTool(Component[] hitDependants, HashSet<"}<Link to="/mod/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> | <span className="api-desc">Adds a crafted child part's hit dependants and impactors to this tool. Called when a part is attached.</span> |
| <Link id="m-startrecordingposition" /><code>{"void StartRecordingPosition()"}</code> | <span className="api-desc">Starts recording positions if any impactor needs them.</span> |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | <span className="api-desc">Re-reads the rigidbody from the game object.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Gets a position recorder, hooks grab and release on the pickup and registers the impactors found in children.</span> |
| <Link id="m-hit-2" /><code>{"protected void Hit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Protected: fires the inspector hit event, `OnHit` and the static `OnHitAny`.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterplayer" /><code>{"private void DeregisterPlayer()"}</code> | <span className="api-desc">Stops feeding the tracked player's movement and turning into the position recorder.</span> |
| <Link id="m-getoverlapchannel" /><code>{"private bool GetOverlapChannel(List<"}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> impactorChannels, "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] detectorChannels, out "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" overlap)"}</code> | <span className="api-desc">Finds the first impactor channel that is also in the detector's channels.</span> |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Handler for the pickup's `InteractionStarted`: blocks hits for 0.1 seconds, starts position recording and tracks the holder's locomotion.</span> |
| <Link id="m-haptic" /><code>{"private void Haptic(AnimationCurve haptic)"}</code> | <span className="api-desc">Client: plays a haptic curve on every hand holding the pickup.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Handles physical hits against other held items and tools: works out blocking, applies blocking skills, impact modifiers and durability, and raises `OnCollided`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Returns the position recorder to the pool and stops the position updates.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the length axis in the editor.</span> |
| <Link id="m-recentgrab" /><code>{"private IEnumerator RecentGrab() (iterator)"}</code> | <span className="api-desc">Coroutine that clears the recent grab flag after 0.1 seconds.</span> |
| <Link id="m-registerimpactorchannels" /><code>{"private void RegisterImpactorChannels("}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor)"}</code> | <span className="api-desc">Adds an impactor's channels to `Channels`.</span> |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Handler for the pickup's `InteractionEnded`: lets the tool hit its own wielder again after `timeToSelfHit`, and stops tracking the player once nobody holds it.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Clears the position recorder and raises `Reseted`.</span> |
| <Link id="m-setupimpactors" /><code>{"private void SetupImpactors()"}</code> | <span className="api-desc">Called on awake: registers this tool with every impactor in its maps, collects channels and starts position updates if any impactor needs them.</span> |
| <Link id="m-timetohurtself" /><code>{"private IEnumerator TimeToHurtSelf() (iterator)"}</code> | <span className="api-desc">Coroutine that waits `timeToSelfHit` seconds, then stops ignoring the last holder.</span> |
| <Link id="m-undockwakeup" /><code>{"private void UndockWakeUp("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Handler for the pickup's `Undocked`: starts position updates again.</span> |
| <Link id="m-updateindexedimpactors" /><code>{"private void UpdateIndexedImpactors()"}</code> | <span className="api-desc">Rebuilds the ordered impactor list used to sync hits by index, including impactors on crafted child parts.</span> |
| <Link id="m-updateindexedimpactorsoncraftingpart" /><code>{"private void UpdateIndexedImpactorsOnCraftingPart("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">Adds the impactors of every part connected to a crafting part, recursing down the tree.</span> |
| <Link id="m-updatepositions-2" /><code>{"private void UpdatePositions()"}</code> | <span className="api-desc">Fixed update: records the tool's position, or stops and resets once it is asleep and not held, or is a crafted child.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ImpactTool`:

<div className="api-used-in">

[`AfkTimer.ResetWithHit`](/mod/game-api/types/global-a-b/afktimer#m-resetwithhit), [`ChiselingTool.UpdateTool`](/mod/game-api/types/alta-crafting/chiselingtool#m-updatetool), [`CraftingPart.impactTool`](/mod/game-api/types/alta-crafting/craftingpart#m-impacttool), [`CraftingPart.ImpactTool`](/mod/game-api/types/alta-crafting/craftingpart#m-impacttool-2), [`QuickDrawApplication.Proc`](/mod/game-api/types/alta-crafting/quickdrawapplication#m-proc), [`QuickDrawApplication.tool`](/mod/game-api/types/alta-crafting/quickdrawapplication#m-tool), [`QuickDrawApplication.ValidateHit`](/mod/game-api/types/alta-crafting/quickdrawapplication#m-validatehit), [`BlockedTrigger.Blocked`](/mod/game-api/types/alta-items/blockedtrigger#m-blocked), [`ColliderModifierSettings.IsDamaging`](/mod/game-api/types/alta-items/collidermodifiersettings#m-isdamaging), [`ContactProjectile.OnCollided`](/mod/game-api/types/alta-items/contactprojectile#m-oncollided), [`ContactProjectile.OnHit`](/mod/game-api/types/alta-items/contactprojectile#m-onhit), [`CraftableImpactDetectorBase.RegisteredTool`](/mod/game-api/types/alta-items/craftableimpactdetectorbase#m-registeredtool), [`CraftableImpactDetectorBase.UpdateTool`](/mod/game-api/types/alta-items/craftableimpactdetectorbase#m-updatetool), [`DamageMultiplierCollider.IsDamaging`](/mod/game-api/types/alta-items/damagemultipliercollider#m-isdamaging), [`DelayedImpactResolver.frameHits`](/mod/game-api/types/alta-items/delayedimpactresolver#m-framehits), [`DelayedImpactResolver.Hit`](/mod/game-api/types/alta-items/delayedimpactresolver#m-hit), [`DelayedImpactResolver.ProcessImmediate`](/mod/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.ImpactDetectorHit`](/mod/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-ctor), [`DelayedImpactResolver.ImpactDetectorHit.impactTool`](/mod/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-impacttool), [`DirectionalMultiplierCollider.IsDamaging`](/mod/game-api/types/alta-items/directionalmultipliercollider#m-isdamaging), [`ImpactDetector.hitCooldowns`](/mod/game-api/types/alta-items/impactdetector#m-hitcooldowns), [`ImpactDetector.IsForcedClientSideImpact`](/mod/game-api/types/alta-items/impactdetector#m-isforcedclientsideimpact), [`ImpactDetector.IsImpactClientSideOnly`](/mod/game-api/types/alta-items/impactdetector#m-isimpactclientsideonly), [`ImpactDetectorColliderModifier.IsDamaging`](/mod/game-api/types/alta-items/impactdetectorcollidermodifier#m-isdamaging), [`ImpactGenerator.DeRegisterTool`](/mod/game-api/types/alta-items/impactgenerator#m-deregistertool), [`ImpactGenerator.RegisteredTool`](/mod/game-api/types/alta-items/impactgenerator#m-registeredtool), [`ImpactGenerator.RegisterTool`](/mod/game-api/types/alta-items/impactgenerator#m-registertool), [`ImpactHitWithTool.ImpactHitWithTool`](/mod/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactHitWithTool.Tool`](/mod/game-api/types/alta-items/impacthitwithtool#m-tool), [`ImpactModifier.trackedTool`](/mod/game-api/types/alta-items/impactmodifier#m-trackedtool), [`Impactor.impactTool`](/mod/game-api/types/alta-items/impactor#m-impacttool), [`ImpactTool.OnCollidedHit.BeginInvoke`](/mod/game-api/types/alta-items/impacttool-oncollidedhit#m-begininvoke), [`ImpactTool.OnCollidedHit.Invoke`](/mod/game-api/types/alta-items/impacttool-oncollidedhit#m-invoke), [`ImpactTool.OnGeneratedHit.BeginInvoke`](/mod/game-api/types/alta-items/impacttool-ongeneratedhit#m-begininvoke), [`ImpactTool.OnGeneratedHit.Invoke`](/mod/game-api/types/alta-items/impacttool-ongeneratedhit#m-invoke), [`ImpactTypeFilter.ValidateImpacTool`](/mod/game-api/types/alta-items/impacttypefilter#m-validateimpactool), [`IToolHitDependant.OnCollided`](/mod/game-api/types/alta-items/itoolhitdependant#m-oncollided), [`IToolHitDependant.OnHit`](/mod/game-api/types/alta-items/itoolhitdependant#m-onhit), [`NonDamagingCollider.IsDamaging`](/mod/game-api/types/alta-items/nondamagingcollider#m-isdamaging), [`TriggerImpactDetector.GenerateHit`](/mod/game-api/types/alta-items/triggerimpactdetector#m-generatehit), [`SeedSpray.Seed.tool`](/mod/game-api/types/alta-intelligence/seedspray-seed#m-tool), [`NetworkEntity.commonImpactTool`](/mod/game-api/types/alta-networking/networkentity#m-commonimpacttool), [`NetworkEntity.CommonImpactTool`](/mod/game-api/types/alta-networking/networkentity#m-commonimpacttool-2), [`Arrow.impactTool`](/mod/game-api/types/global-a-b/arrow#m-impacttool), [`Arrow.ImpactTool`](/mod/game-api/types/global-a-b/arrow#m-impacttool-2), [`Arrow.OnCollided`](/mod/game-api/types/global-a-b/arrow#m-oncollided), [`Arrow.OnHit`](/mod/game-api/types/global-a-b/arrow#m-onhit), [`BreakOnImpact.OnCollided`](/mod/game-api/types/global-a-b/breakonimpact#m-oncollided), [`BreakOnImpact.OnHit`](/mod/game-api/types/global-a-b/breakonimpact#m-onhit-2), [`DiggingImpactor.currentTool`](/mod/game-api/types/global-c-d/diggingimpactor#m-currenttool), [`DiggingImpactor.OnCollided`](/mod/game-api/types/global-c-d/diggingimpactor#m-oncollided), [`DiggingImpactor.OnHit`](/mod/game-api/types/global-c-d/diggingimpactor#m-onhit), [`DiggingImpactor.RegisterTool`](/mod/game-api/types/global-c-d/diggingimpactor#m-registertool), [`DynamiteStrike.Collided`](/mod/game-api/types/global-c-d/dynamitestrike#m-collided), [`Embeddable.OnCollided`](/mod/game-api/types/global-e-h/embeddable#m-oncollided), [`Embeddable.OnHit`](/mod/game-api/types/global-e-h/embeddable#m-onhit), [`ExtraArrowUpdater.arrowImpactTool`](/mod/game-api/types/global-e-h/extraarrowupdater#m-arrowimpacttool), [`HeartCall.modifiers`](/mod/game-api/types/global-e-h/heartcall#m-modifiers), [`HeartCall.Modify`](/mod/game-api/types/global-e-h/heartcall#m-modify), [`HeldPickupHandler.Tool`](/mod/game-api/types/global-e-h/heldpickuphandler#m-tool) and 10 more.

</div>
