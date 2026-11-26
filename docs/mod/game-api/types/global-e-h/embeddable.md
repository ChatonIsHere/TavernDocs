---
title: "Embeddable"
description: "Lets a pointed item (arrow, knife, spear) stick into what it hits and parents it there, saved across restarts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Embeddable

A **class** in `Root.Township`, the global namespace.

Lets a pointed item (arrow, knife, spear) stick into what it hits and parents it there, saved across restarts. The server decides when it embeds; clients follow a synced message. Get it with `GetComponent<Embeddable>()` on the item.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<EmbeddableSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<EmbeddableSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IToolHitDependant`](/mod/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`EmbeddableEvent`](/mod/game-api/types/global-e-h/embeddableevent), [`EmbeddableSaveData`](/mod/game-api/types/global-e-h/embeddablesavedata), [`EmbeddableUnityEvent`](/mod/game-api/types/global-e-h/embeddableunityevent)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Embeddable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakforce" /><code>{"private float breakForce"}</code> | <span className="api-desc">Serialized force (10000). Not read in this build.</span> |
| <Link id="m-btncleargizmos" /><code>{"private bool btnClearGizmos"}</code> | <span className="api-desc">Inspector button that runs `ClearGizmos`.</span> |
| <Link id="m-btnunembed" /><code>{"private bool btnUnEmbed"}</code> | <span className="api-desc">Inspector button labelled "UnEmbed".</span> |
| <Link id="m-distancetocheckforwedge" /><code>{"private float distanceToCheckForWedge"}</code> | <span className="api-desc">Raycast length for finding the embed spot: tip distance times `raycastDistanceMultiplier`.</span> |
| <Link id="m-embedded" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/embeddableevent">{"EmbeddableEvent"}</Link>{" embedded"}</code> | <span className="api-desc">Event invoked on embed. The `Embedded` event adds to it.</span> |
| <Link id="m-isallowedtoembed" /><code>{"private bool isAllowedToEmbed"}</code> | <span className="api-desc">Backing field for `IsAllowedToEmbed`.</span> |
| <Link id="m-lastembeddedplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastEmbeddedPlayer"}</code> | <span className="api-desc">The player the object is stuck in, watched so it can unembed when they leave.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for debug messages.</span> |
| <Link id="m-maxembedangle" /><code>{"private float maxEmbedAngle"}</code> | <span className="api-desc">Minimum alignment (a dot product set from an angle) needed between tip and surface to embed.</span> |
| <Link id="m-minhiteffectivenesstowedge" /><code>{"private float minHitEffectivenessToWedge"}</code> | <span className="api-desc">Lowest hit effectiveness, after the surface multiplier, that embeds (0.3 by default).</span> |
| <Link id="m-minsquaredwedgingvelocity" /><code>{"private float minSquaredWedgingVelocity"}</code> | <span className="api-desc">Lowest squared impact speed that can embed (10 by default).</span> |
| <Link id="m-negativetipoffset" /><code>{"private Vector3 negativeTipOffset"}</code> | <span className="api-desc">Local offset from the tip back to the origin.</span> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | <span className="api-desc">The object's network rigidbody, turned off while embedded.</span> |
| <Link id="m-nonembeddinghitdrag" /><code>{"private float nonEmbeddingHitDrag"}</code> | <span className="api-desc">Velocity multiplier applied when a hit is at the wrong angle to embed (0.5 by default).</span> |
| <Link id="m-otherscolliders" /><code>{"private IEnumerable<Collider> othersColliders"}</code> | <span className="api-desc">Colliders of the struck entity whose collisions are ignored while embedded.</span> |
| <Link id="m-raycastdistancemultiplier" /><code>{"private float raycastDistanceMultiplier"}</code> | <span className="api-desc">Scales the tip distance to get the wedge raycast length (1.5 by default).</span> |
| <Link id="m-raycasthits" /><code>{"private static RaycastHit[] raycastHits"}</code> | <span className="api-desc">Shared buffer for the wedge raycast hits.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">The object's Rigidbody.</span> |
| <Link id="m-syncembed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{"> syncEmbed"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SyncEmbed`, also sent to players on connect.</span> |
| <Link id="m-tippoint" /><code>{"private Transform tipPoint"}</code> | <span className="api-desc">Transform at the tip that goes in first.</span> |
| <Link id="m-unembedded" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/embeddableevent">{"EmbeddableEvent"}</Link>{" unembedded"}</code> | <span className="api-desc">Event invoked on unembed. The `Unembedded` event adds to it.</span> |
| <Link id="m-wedgemaximumpercentage" /><code>{"private float wedgeMaximumPercentage"}</code> | <span className="api-desc">How deep a perfect hit sinks, as a share of the tip length (0.1 by default).</span> |
| <Link id="m-wedgeminimumpercentage" /><code>{"private float wedgeMinimumPercentage"}</code> | <span className="api-desc">How deep the weakest embedding hit sinks, as a share of the tip length.</span> |
| <Link id="m-wedginglayers" /><code>{"private LayerMask wedgingLayers"}</code> | <span className="api-desc">Layers the wedge raycast hits.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"IEnumerable<Collider> Colliders { get; }"}</code> | <span className="api-desc">The item's pickup colliders, or empty when the entity has no `Pickup`. Used to ignore collisions with what it is stuck in.</span> |
| <Link id="m-embeddedentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" EmbeddedEntity { get; private set; }"}</code> | <span className="api-desc">The entity the item is stuck in, or null when stuck in the static world or not embedded.</span> |
| <Link id="m-embeddedinto" /><code>{"Rigidbody EmbeddedInto { get; private set; }"}</code> | <span className="api-desc">The rigidbody the item is stuck in, or null when stuck in the static world or not embedded.</span> |
| <Link id="m-embeddedrigidbodyindex" /><code>{"int EmbeddedRigidbodyIndex { get; private set; }"}</code> | <span className="api-desc">Index of the struck rigidbody in the target's `EmbeddableManager` list, or -1 when it has none or is not embedded.</span> |
| <Link id="m-haspickup" /><code>{"bool HasPickup { get; }"}</code> | <span className="api-desc">Whether the entity has a common `Pickup`.</span> |
| <Link id="m-isallowedtoembed-2" /><code>{"bool IsAllowedToEmbed { get; set; }"}</code> | <span className="api-desc">Turns embedding on or off for this item. Set it on the server.</span> |
| <Link id="m-isembedded" /><code>{"bool IsEmbedded { get; private set; }"}</code> | <span className="api-desc">Whether the item is currently stuck in something.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-totipdirection" /><code>{"private Vector3 ToTipDirection { get; }"}</code> | <span className="api-desc">World direction from the object's origin to its tip.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-checkembed" /><code>{"event "}<Link to="/mod/game-api/types/global-q-r/refbooldelegate">{"RefBoolDelegate"}</Link>{" CheckEmbed"}</code> | <span className="api-desc">Raised before an embed; set the `ref bool` to false to refuse it. Pickups add a handler that refuses while held or docked.</span> |
| <Link id="m-embedded-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> Embedded"}</code> | <span className="api-desc">Raised on both sides when the item sticks into something.</span> |
| <Link id="m-unembedded-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> Unembedded"}</code> | <span className="api-desc">Raised on both sides when the item comes free.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externalcollision" /><code>{"void ExternalCollision(Collider collider, Vector3 hitPoint, Vector3 hitNormal)"}</code> | <span className="api-desc">Lets other code (such as `EmbeddableRaycastProjectile`) report a collision; embeds if angle, speed and surface allow it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced embed message (`FixedJoint` entity message type).</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current embed state to a newly connected player.</span> |
| <Link id="m-unembed" /><code>{"void UnEmbed()"}</code> | <span className="api-desc">Frees the item, unparents it and restores physics. Only syncs to clients when called on the server.</span> |

<details className="api-private">
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Works out the tip offsets, unembeds when the pickup is grabbed, blocks embedding while held or docked, and unembeds on destroy.</span> |
| <Link id="m-childtostruckrigidbody" /><code>{"private void ChildToStruckRigidbody("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" otherEntity, Transform parent)"}</code> | <span className="api-desc">Makes the struck entity the chunking parent, saves as its child, and parents the transform to the struck body.</span> |
| <Link id="m-cleargizmos" /><code>{"private void ClearGizmos()"}</code> | <span className="api-desc">Empty. Run by the "Clear Gizmos" inspector button.</span> |
| <Link id="m-disablecollisionswithother" /><code>{"private void DisableCollisionsWithOther("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" other)"}</code> | <span className="api-desc">Finds the struck entity's colliders (player body, creature, pickup or collider group) and ignores collisions with them.</span> |
| <Link id="m-embed" /><code>{"private void Embed(Rigidbody struckRigidBody, Vector3 embedPosition, Quaternion embedRotation)"}</code> | <span className="api-desc">Server: sticks the object at a position, attaches it to the struck entity if any, fires `Embedded` and syncs to clients.</span> |
| <Link id="m-enforcepickupelibility" /><code>{"private void EnforcePickupElibility(ref bool isValid)"}</code> | <span className="api-desc">Embed check that fails while the object's pickup is held or docked.</span> |
| <Link id="m-ensuretippoint" /><code>{"private bool EnsureTipPoint()"}</code> | <span className="api-desc">Inspector fix: uses the object's own transform as the tip if none is set.</span> |
| <Link id="m-findbesthit" /><code>{"private bool FindBestHit(int numberOfHits, RaycastHit[] raycastHits, out RaycastHit bestHit)"}</code> | <span className="api-desc">Picks the closest raycast hit that isn't the object itself or the throwing player's body.</span> |
| <Link id="m-getbesthitangle" /><code>{"private float GetBestHitAngle("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contacts)"}</code> | <span className="api-desc">Best dot product between the tip direction and the contact normals, used against `maxEmbedAngle`.</span> |
| <Link id="m-getbesthitlocation" /><code>{"private void GetBestHitLocation(float effectiveness, out Quaternion lastRotation, out Vector3 embedPosition)"}</code> | <span className="api-desc">Raycasts along the tip to find where to sit, sunk in deeper the more effective the hit was.</span> |
| <Link id="m-getsyncargs" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{" GetSyncArgs()"}</code> | <span className="api-desc">Builds the embed sync data: state, position (local if in a body), rotation, struck entity, body index and scale.</span> |
| <Link id="m-handledestroyed" /><code>{"private void HandleDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Unembeds when the entity is destroyed, but not when it's only unloading.</span> |
| <Link id="m-handleembedinglobalspace" /><code>{"private void HandleEmbedInGlobalSpace(Vector3 embedPosition, Quaternion embedRotation)"}</code> | <span className="api-desc">Makes the body kinematic and places it at a world position and rotation.</span> |
| <Link id="m-handleembedinlocalspace" /><code>{"private void HandleEmbedInLocalSpace(Vector3 localPosition, Quaternion localRotation, Transform parent)"}</code> | <span className="api-desc">Makes the body kinematic and parents it at a local position and rotation.</span> |
| <Link id="m-handlestruckcollider" /><code>{"private void HandleStruckCollider(float hitEffectiveness, Collider struckCollider, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactPointStructures, Vector3 relativeVelocity)"}</code> | <span className="api-desc">Embeds if allowed, fast enough, and the surface and pickup checks pass.</span> |
| <Link id="m-handlestruckrigidbodywithcorrectangleandvelocity" /><code>{"private void HandleStruckRigidbodyWithCorrectAngleAndVelocity(float hitEffectiveness, Collider struckCollider, Rigidbody struckRigidBody, float embeddMultiplier)"}</code> | <span className="api-desc">Embeds when hit effectiveness times the surface multiplier reaches `minHitEffectivenessToWedge`.</span> |
| <Link id="m-handleunembedonclient" /><code>{"private void HandleUnEmbedOnClient()"}</code> | <span className="api-desc">Client: makes the body physical again, moves it to the spawn folder and turns collisions back on.</span> |
| <Link id="m-ignorecollisions" /><code>{"private void IgnoreCollisions(bool isIgnoring)"}</code> | <span className="api-desc">Turns collisions between this object's colliders and the struck entity's colliders off or on.</span> |
| <Link id="m-israycastedrigidbodyfromthethrowingplayer" /><code>{"private static bool IsRaycastedRigidbodyFromTheThrowingPlayer("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, RaycastHit raycastHit)"}</code> | <span className="api-desc">True when a raycast hit is one of the throwing player's own body rigidbodies.</span> |
| <Link id="m-isvalidembed" /><code>{"private bool IsValidEmbed()"}</code> | <span className="api-desc">False if already embedded, embedding is off, or a `CheckEmbed` handler says no.</span> |
| <Link id="m-isvalidpickup" /><code>{"private bool IsValidPickup(Collider struckCollider)"}</code> | <span className="api-desc">When the global settings restrict it, only lets the object stick into pickups with the allowed tag.</span> |
| <Link id="m-isvalidsurface" /><code>{"private bool IsValidSurface(Collider struckCollider, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactPointStructures, ref float embedMultiplier)"}</code> | <span className="api-desc">Checks the surface's embed multiplier and, if it needs alignment, the hit angle. A bad angle slows the object.</span> |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Server: on a plain collision (not a tool hit), tries to embed with full effectiveness.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the wedge depth range and the raycast line.</span> |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Server: on a tool hit, tries to embed using the hit's effectiveness.</span> |
| <Link id="m-reenablecollisions" /><code>{"private void ReenableCollisions()"}</code> | <span className="api-desc">Turns collisions with the struck entity back on, unless that player is now holding this object.</span> |
| <Link id="m-setuptipoffsets" /><code>{"private void SetupTipOffsets()"}</code> | <span className="api-desc">Stores the tip offset and the wedge raycast distance from the tip point.</span> |
| <Link id="m-syncembed-2" /><code>{"private void SyncEmbed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{" args)"}</code> | <span className="api-desc">Method sync for embed state. Clients embed or unembed to match and fire the events.</span> |
| <Link id="m-trygetstruckobject" /><code>{"private bool TryGetStruckObject(Rigidbody struckRigidBody, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" struckEntity, out int rigidbodyIndex, out "}<Link to="/mod/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{" manager)"}</code> | <span className="api-desc">Finds the struck network entity and, through an `EmbeddableManager`, the index of the body hit.</span> |
| <Link id="m-unchild" /><code>{"private void UnChild()"}</code> | <span className="api-desc">Unparents the object, restores its save mode and chunk, and turns collisions back on.</span> |
| <Link id="m-unembedoninteract" /><code>{"private void UnEmbedOnInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Unembeds when someone grabs the object.</span> |
| <Link id="m-unembedonplayerleave" /><code>{"private void UnEmbedOnPlayerLeave("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Unembeds when the player the object is stuck in is about to leave.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Embeddable`:

<div className="api-used-in">

[`EmbeddableManager.allEmbedded`](/mod/game-api/types/alta-items/embeddablemanager#m-allembedded), [`EmbeddableManager.AllEmbedded`](/mod/game-api/types/alta-items/embeddablemanager#m-allembedded-2), [`EmbeddableManager.DeregisterEmbeddable`](/mod/game-api/types/alta-items/embeddablemanager#m-deregisterembeddable), [`EmbeddableManager.EmbeddableAdded`](/mod/game-api/types/alta-items/embeddablemanager#m-embeddableadded), [`EmbeddableManager.EmbeddableRemoved`](/mod/game-api/types/alta-items/embeddablemanager#m-embeddableremoved), [`EmbeddableManager.HandleEmbed`](/mod/game-api/types/alta-items/embeddablemanager#m-handleembed), [`EmbeddableManager.HandleEmbeddableUnEmbed`](/mod/game-api/types/alta-items/embeddablemanager#m-handleembeddableunembed), [`EmbeddableManager.HandleUnEmbed`](/mod/game-api/types/alta-items/embeddablemanager#m-handleunembed), [`EmbeddableManager.RegisterEmbeddable`](/mod/game-api/types/alta-items/embeddablemanager#m-registerembeddable), [`Arrow.embeddable`](/mod/game-api/types/global-a-b/arrow#m-embeddable), [`Arrow.StopArrowFlight`](/mod/game-api/types/global-a-b/arrow#m-stoparrowflight), [`EmbeddableRaycastProjectile.embeddable`](/mod/game-api/types/global-e-h/embeddableraycastprojectile#m-embeddable).

</div>
