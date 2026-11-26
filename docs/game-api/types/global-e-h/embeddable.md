---
title: "Embeddable"
description: "Lets a pointed item (arrow, knife, spear) stick into what it hits and parents it there, saved across restarts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Embeddable

A **class** in `Root.Township`, no namespace.

Lets a pointed item (arrow, knife, spear) stick into what it hits and parents it there, saved across restarts. The server decides when it embeds; clients follow a synced message. Get it with `GetComponent<Embeddable>()` on the item.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<EmbeddableSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<EmbeddableSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`EmbeddableEvent`](/game-api/types/global-e-h/embeddableevent), [`EmbeddableSaveData`](/game-api/types/global-e-h/embeddablesavedata), [`EmbeddableUnityEvent`](/game-api/types/global-e-h/embeddableunityevent)
- **Attributes** `SavingInfo`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Embeddable()"}</code> |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakforce" /><code>{"private float breakForce"}</code> | Serialized force (10000). Not read in this build. |
| <Link id="m-btncleargizmos" /><code>{"private bool btnClearGizmos"}</code> | Inspector button that runs `ClearGizmos`. |
| <Link id="m-btnunembed" /><code>{"private bool btnUnEmbed"}</code> | Inspector button labelled "UnEmbed". |
| <Link id="m-distancetocheckforwedge" /><code>{"private float distanceToCheckForWedge"}</code> | Raycast length for finding the embed spot: tip distance times `raycastDistanceMultiplier`. |
| <Link id="m-embedded" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddableevent">{"EmbeddableEvent"}</Link>{" embedded"}</code> | Event invoked on embed. The `Embedded` event adds to it. |
| <Link id="m-isallowedtoembed" /><code>{"private bool isAllowedToEmbed"}</code> | Backing field for `IsAllowedToEmbed`. |
| <Link id="m-lastembeddedplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastEmbeddedPlayer"}</code> | The player the object is stuck in, watched so it can unembed when they leave. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for debug messages. |
| <Link id="m-maxembedangle" /><code>{"private float maxEmbedAngle"}</code> | Minimum alignment (a dot product set from an angle) needed between tip and surface to embed. |
| <Link id="m-minhiteffectivenesstowedge" /><code>{"private float minHitEffectivenessToWedge"}</code> | Lowest hit effectiveness, after the surface multiplier, that embeds (0.3 by default). |
| <Link id="m-minsquaredwedgingvelocity" /><code>{"private float minSquaredWedgingVelocity"}</code> | Lowest squared impact speed that can embed (10 by default). |
| <Link id="m-negativetipoffset" /><code>{"private Vector3 negativeTipOffset"}</code> | Local offset from the tip back to the origin. |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | The object's network rigidbody, turned off while embedded. |
| <Link id="m-nonembeddinghitdrag" /><code>{"private float nonEmbeddingHitDrag"}</code> | Velocity multiplier applied when a hit is at the wrong angle to embed (0.5 by default). |
| <Link id="m-otherscolliders" /><code>{"private IEnumerable<Collider> othersColliders"}</code> | Colliders of the struck entity whose collisions are ignored while embedded. |
| <Link id="m-raycastdistancemultiplier" /><code>{"private float raycastDistanceMultiplier"}</code> | Scales the tip distance to get the wedge raycast length (1.5 by default). |
| <Link id="m-raycasthits" /><code>{"private static RaycastHit[] raycastHits"}</code> | Shared buffer for the wedge raycast hits. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | The object's Rigidbody. |
| <Link id="m-syncembed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{"> syncEmbed"}</code> | Method sync made in `Initialize` for `SyncEmbed`, also sent to players on connect. |
| <Link id="m-tippoint" /><code>{"private Transform tipPoint"}</code> | Transform at the tip that goes in first. |
| <Link id="m-unembedded" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddableevent">{"EmbeddableEvent"}</Link>{" unembedded"}</code> | Event invoked on unembed. The `Unembedded` event adds to it. |
| <Link id="m-wedgemaximumpercentage" /><code>{"private float wedgeMaximumPercentage"}</code> | How deep a perfect hit sinks, as a share of the tip length (0.1 by default). |
| <Link id="m-wedgeminimumpercentage" /><code>{"private float wedgeMinimumPercentage"}</code> | How deep the weakest embedding hit sinks, as a share of the tip length. |
| <Link id="m-wedginglayers" /><code>{"private LayerMask wedgingLayers"}</code> | Layers the wedge raycast hits. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"IEnumerable<Collider> Colliders { get; }"}</code> | The item's pickup colliders, or empty when the entity has no `Pickup`. Used to ignore collisions with what it is stuck in. |
| <Link id="m-embeddedentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" EmbeddedEntity { get; private set; }"}</code> | The entity the item is stuck in, or null when stuck in the static world or not embedded. |
| <Link id="m-embeddedinto" /><code>{"Rigidbody EmbeddedInto { get; private set; }"}</code> | The rigidbody the item is stuck in, or null when stuck in the static world or not embedded. |
| <Link id="m-embeddedrigidbodyindex" /><code>{"int EmbeddedRigidbodyIndex { get; private set; }"}</code> | Index of the struck rigidbody in the target's `EmbeddableManager` list, or -1 when it has none or is not embedded. |
| <Link id="m-haspickup" /><code>{"bool HasPickup { get; }"}</code> | Whether the entity has a common `Pickup`. |
| <Link id="m-isallowedtoembed-2" /><code>{"bool IsAllowedToEmbed { get; set; }"}</code> | Turns embedding on or off for this item. Set it on the server. |
| <Link id="m-isembedded" /><code>{"bool IsEmbedded { get; private set; }"}</code> | Whether the item is currently stuck in something. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-totipdirection" /><code>{"private Vector3 ToTipDirection { get; }"}</code> | World direction from the object's origin to its tip. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-checkembed" /><code>{"event "}<Link to="/game-api/types/global-q-r/refbooldelegate">{"RefBoolDelegate"}</Link>{" CheckEmbed"}</code> | Raised before an embed; set the `ref bool` to false to refuse it. Pickups add a handler that refuses while held or docked. |
| <Link id="m-embedded-2" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> Embedded"}</code> | Raised on both sides when the item sticks into something. |
| <Link id="m-unembedded-2" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> Unembedded"}</code> | Raised on both sides when the item comes free. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externalcollision" /><code>{"void ExternalCollision(Collider collider, Vector3 hitPoint, Vector3 hitNormal)"}</code> | Lets other code (such as `EmbeddableRaycastProjectile`) report a collision; embeds if angle, speed and surface allow it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced embed message (`FixedJoint` entity message type). |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current embed state to a newly connected player. |
| <Link id="m-unembed" /><code>{"void UnEmbed()"}</code> | Frees the item, unparents it and restores physics. Only syncs to clients when called on the server. |

<details>
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Works out the tip offsets, unembeds when the pickup is grabbed, blocks embedding while held or docked, and unembeds on destroy. |
| <Link id="m-childtostruckrigidbody" /><code>{"private void ChildToStruckRigidbody("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" otherEntity, Transform parent)"}</code> | Makes the struck entity the chunking parent, saves as its child, and parents the transform to the struck body. |
| <Link id="m-cleargizmos" /><code>{"private void ClearGizmos()"}</code> | Empty. Run by the "Clear Gizmos" inspector button. |
| <Link id="m-disablecollisionswithother" /><code>{"private void DisableCollisionsWithOther("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" other)"}</code> | Finds the struck entity's colliders (player body, creature, pickup or collider group) and ignores collisions with them. |
| <Link id="m-embed" /><code>{"private void Embed(Rigidbody struckRigidBody, Vector3 embedPosition, Quaternion embedRotation)"}</code> | Server: sticks the object at a position, attaches it to the struck entity if any, fires `Embedded` and syncs to clients. |
| <Link id="m-enforcepickupelibility" /><code>{"private void EnforcePickupElibility(ref bool isValid)"}</code> | Embed check that fails while the object's pickup is held or docked. |
| <Link id="m-ensuretippoint" /><code>{"private bool EnsureTipPoint()"}</code> | Inspector fix: uses the object's own transform as the tip if none is set. |
| <Link id="m-findbesthit" /><code>{"private bool FindBestHit(int numberOfHits, RaycastHit[] raycastHits, out RaycastHit bestHit)"}</code> | Picks the closest raycast hit that isn't the object itself or the throwing player's body. |
| <Link id="m-getbesthitangle" /><code>{"private float GetBestHitAngle("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contacts)"}</code> | Best dot product between the tip direction and the contact normals, used against `maxEmbedAngle`. |
| <Link id="m-getbesthitlocation" /><code>{"private void GetBestHitLocation(float effectiveness, out Quaternion lastRotation, out Vector3 embedPosition)"}</code> | Raycasts along the tip to find where to sit, sunk in deeper the more effective the hit was. |
| <Link id="m-getsyncargs" /><code>{"private "}<Link to="/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{" GetSyncArgs()"}</code> | Builds the embed sync data: state, position (local if in a body), rotation, struck entity, body index and scale. |
| <Link id="m-handledestroyed" /><code>{"private void HandleDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Unembeds when the entity is destroyed, but not when it's only unloading. |
| <Link id="m-handleembedinglobalspace" /><code>{"private void HandleEmbedInGlobalSpace(Vector3 embedPosition, Quaternion embedRotation)"}</code> | Makes the body kinematic and places it at a world position and rotation. |
| <Link id="m-handleembedinlocalspace" /><code>{"private void HandleEmbedInLocalSpace(Vector3 localPosition, Quaternion localRotation, Transform parent)"}</code> | Makes the body kinematic and parents it at a local position and rotation. |
| <Link id="m-handlestruckcollider" /><code>{"private void HandleStruckCollider(float hitEffectiveness, Collider struckCollider, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactPointStructures, Vector3 relativeVelocity)"}</code> | Embeds if allowed, fast enough, and the surface and pickup checks pass. |
| <Link id="m-handlestruckrigidbodywithcorrectangleandvelocity" /><code>{"private void HandleStruckRigidbodyWithCorrectAngleAndVelocity(float hitEffectiveness, Collider struckCollider, Rigidbody struckRigidBody, float embeddMultiplier)"}</code> | Embeds when hit effectiveness times the surface multiplier reaches `minHitEffectivenessToWedge`. |
| <Link id="m-handleunembedonclient" /><code>{"private void HandleUnEmbedOnClient()"}</code> | Client: makes the body physical again, moves it to the spawn folder and turns collisions back on. |
| <Link id="m-ignorecollisions" /><code>{"private void IgnoreCollisions(bool isIgnoring)"}</code> | Turns collisions between this object's colliders and the struck entity's colliders off or on. |
| <Link id="m-israycastedrigidbodyfromthethrowingplayer" /><code>{"private static bool IsRaycastedRigidbodyFromTheThrowingPlayer("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, RaycastHit raycastHit)"}</code> | True when a raycast hit is one of the throwing player's own body rigidbodies. |
| <Link id="m-isvalidembed" /><code>{"private bool IsValidEmbed()"}</code> | False if already embedded, embedding is off, or a `CheckEmbed` handler says no. |
| <Link id="m-isvalidpickup" /><code>{"private bool IsValidPickup(Collider struckCollider)"}</code> | When the global settings restrict it, only lets the object stick into pickups with the allowed tag. |
| <Link id="m-isvalidsurface" /><code>{"private bool IsValidSurface(Collider struckCollider, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactPointStructures, ref float embedMultiplier)"}</code> | Checks the surface's embed multiplier and, if it needs alignment, the hit angle. A bad angle slows the object. |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Server: on a plain collision (not a tool hit), tries to embed with full effectiveness. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the wedge depth range and the raycast line. |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Server: on a tool hit, tries to embed using the hit's effectiveness. |
| <Link id="m-reenablecollisions" /><code>{"private void ReenableCollisions()"}</code> | Turns collisions with the struck entity back on, unless that player is now holding this object. |
| <Link id="m-setuptipoffsets" /><code>{"private void SetupTipOffsets()"}</code> | Stores the tip offset and the wedge raycast distance from the tip point. |
| <Link id="m-syncembed-2" /><code>{"private void SyncEmbed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{" args)"}</code> | Method sync for embed state. Clients embed or unembed to match and fire the events. |
| <Link id="m-trygetstruckobject" /><code>{"private bool TryGetStruckObject(Rigidbody struckRigidBody, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" struckEntity, out int rigidbodyIndex, out "}<Link to="/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{" manager)"}</code> | Finds the struck network entity and, through an `EmbeddableManager`, the index of the body hit. |
| <Link id="m-unchild" /><code>{"private void UnChild()"}</code> | Unparents the object, restores its save mode and chunk, and turns collisions back on. |
| <Link id="m-unembedoninteract" /><code>{"private void UnEmbedOnInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Unembeds when someone grabs the object. |
| <Link id="m-unembedonplayerleave" /><code>{"private void UnEmbedOnPlayerLeave("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Unembeds when the player the object is stuck in is about to leave. |

</details>

## Used in

Members of other types that take, return or hold a `Embeddable`:

[`EmbeddableManager.allEmbedded`](/game-api/types/alta-items/embeddablemanager#m-allembedded), [`EmbeddableManager.AllEmbedded`](/game-api/types/alta-items/embeddablemanager#m-allembedded-2), [`EmbeddableManager.DeregisterEmbeddable`](/game-api/types/alta-items/embeddablemanager#m-deregisterembeddable), [`EmbeddableManager.EmbeddableAdded`](/game-api/types/alta-items/embeddablemanager#m-embeddableadded), [`EmbeddableManager.EmbeddableRemoved`](/game-api/types/alta-items/embeddablemanager#m-embeddableremoved), [`EmbeddableManager.HandleEmbed`](/game-api/types/alta-items/embeddablemanager#m-handleembed), [`EmbeddableManager.HandleEmbeddableUnEmbed`](/game-api/types/alta-items/embeddablemanager#m-handleembeddableunembed), [`EmbeddableManager.HandleUnEmbed`](/game-api/types/alta-items/embeddablemanager#m-handleunembed), [`EmbeddableManager.RegisterEmbeddable`](/game-api/types/alta-items/embeddablemanager#m-registerembeddable), [`Arrow.embeddable`](/game-api/types/global-a-b/arrow#m-embeddable), [`Arrow.StopArrowFlight`](/game-api/types/global-a-b/arrow#m-stoparrowflight), [`EmbeddableRaycastProjectile.embeddable`](/game-api/types/global-e-h/embeddableraycastprojectile#m-embeddable).
