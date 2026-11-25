---
title: "Embeddable"
description: "class Embeddable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Embeddable

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<EmbeddableSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<EmbeddableSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`EmbeddableEvent`](/game-api/types/global-e-h/embeddableevent), [`EmbeddableSaveData`](/game-api/types/global-e-h/embeddablesavedata), [`EmbeddableUnityEvent`](/game-api/types/global-e-h/embeddableunityevent)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Embeddable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-breakforce" /><code>{"private float breakForce"}</code> |  |
| <Link id="m-btncleargizmos" /><code>{"private bool btnClearGizmos"}</code> |  |
| <Link id="m-btnunembed" /><code>{"private bool btnUnEmbed"}</code> |  |
| <Link id="m-distancetocheckforwedge" /><code>{"private float distanceToCheckForWedge"}</code> |  |
| <Link id="m-embedded" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddableevent">{"EmbeddableEvent"}</Link>{" embedded"}</code> |  |
| <Link id="m-isallowedtoembed" /><code>{"private bool isAllowedToEmbed"}</code> |  |
| <Link id="m-lastembeddedplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastEmbeddedPlayer"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxembedangle" /><code>{"private float maxEmbedAngle"}</code> |  |
| <Link id="m-minhiteffectivenesstowedge" /><code>{"private float minHitEffectivenessToWedge"}</code> |  |
| <Link id="m-minsquaredwedgingvelocity" /><code>{"private float minSquaredWedgingVelocity"}</code> |  |
| <Link id="m-negativetipoffset" /><code>{"private Vector3 negativeTipOffset"}</code> |  |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> |  |
| <Link id="m-nonembeddinghitdrag" /><code>{"private float nonEmbeddingHitDrag"}</code> |  |
| <Link id="m-otherscolliders" /><code>{"private IEnumerable<Collider> othersColliders"}</code> |  |
| <Link id="m-raycastdistancemultiplier" /><code>{"private float raycastDistanceMultiplier"}</code> |  |
| <Link id="m-raycasthits" /><code>{"private static RaycastHit[] raycastHits"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-syncembed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{"> syncEmbed"}</code> |  |
| <Link id="m-tippoint" /><code>{"private Transform tipPoint"}</code> |  |
| <Link id="m-unembedded" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddableevent">{"EmbeddableEvent"}</Link>{" unembedded"}</code> |  |
| <Link id="m-wedgemaximumpercentage" /><code>{"private float wedgeMaximumPercentage"}</code> |  |
| <Link id="m-wedgeminimumpercentage" /><code>{"private float wedgeMinimumPercentage"}</code> |  |
| <Link id="m-wedginglayers" /><code>{"private LayerMask wedgingLayers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"IEnumerable<Collider> Colliders { get; }"}</code> |  |
| <Link id="m-embeddedentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" EmbeddedEntity { get; private set; }"}</code> |  |
| <Link id="m-embeddedinto" /><code>{"Rigidbody EmbeddedInto { get; private set; }"}</code> |  |
| <Link id="m-embeddedrigidbodyindex" /><code>{"int EmbeddedRigidbodyIndex { get; private set; }"}</code> |  |
| <Link id="m-haspickup" /><code>{"bool HasPickup { get; }"}</code> |  |
| <Link id="m-isallowedtoembed-2" /><code>{"bool IsAllowedToEmbed { get; set; }"}</code> |  |
| <Link id="m-isembedded" /><code>{"bool IsEmbedded { get; private set; }"}</code> |  |
| <Link id="m-totipdirection" /><code>{"private Vector3 ToTipDirection { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-checkembed" /><code>{"event "}<Link to="/game-api/types/global-q-r/refbooldelegate">{"RefBoolDelegate"}</Link>{" CheckEmbed"}</code> |  |
| <Link id="m-embedded-2" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> Embedded"}</code> |  |
| <Link id="m-unembedded-2" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> Unembedded"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externalcollision" /><code>{"void ExternalCollision(Collider collider, Vector3 hitPoint, Vector3 hitNormal)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-unembed" /><code>{"void UnEmbed()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-childtostruckrigidbody" /><code>{"private void ChildToStruckRigidbody("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" otherEntity, Transform parent)"}</code> |  |
| <Link id="m-cleargizmos" /><code>{"private void ClearGizmos()"}</code> |  |
| <Link id="m-disablecollisionswithother" /><code>{"private void DisableCollisionsWithOther("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" other)"}</code> |  |
| <Link id="m-embed" /><code>{"private void Embed(Rigidbody struckRigidBody, Vector3 embedPosition, Quaternion embedRotation)"}</code> |  |
| <Link id="m-enforcepickupelibility" /><code>{"private void EnforcePickupElibility(ref bool isValid)"}</code> |  |
| <Link id="m-ensuretippoint" /><code>{"private bool EnsureTipPoint()"}</code> |  |
| <Link id="m-findbesthit" /><code>{"private bool FindBestHit(int numberOfHits, RaycastHit[] raycastHits, out RaycastHit bestHit)"}</code> |  |
| <Link id="m-getbesthitangle" /><code>{"private float GetBestHitAngle("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contacts)"}</code> |  |
| <Link id="m-getbesthitlocation" /><code>{"private void GetBestHitLocation(float effectiveness, out Quaternion lastRotation, out Vector3 embedPosition)"}</code> |  |
| <Link id="m-getsyncargs" /><code>{"private "}<Link to="/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{" GetSyncArgs()"}</code> |  |
| <Link id="m-handledestroyed" /><code>{"private void HandleDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-handleembedinglobalspace" /><code>{"private void HandleEmbedInGlobalSpace(Vector3 embedPosition, Quaternion embedRotation)"}</code> |  |
| <Link id="m-handleembedinlocalspace" /><code>{"private void HandleEmbedInLocalSpace(Vector3 localPosition, Quaternion localRotation, Transform parent)"}</code> |  |
| <Link id="m-handlestruckcollider" /><code>{"private void HandleStruckCollider(float hitEffectiveness, Collider struckCollider, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactPointStructures, Vector3 relativeVelocity)"}</code> |  |
| <Link id="m-handlestruckrigidbodywithcorrectangleandvelocity" /><code>{"private void HandleStruckRigidbodyWithCorrectAngleAndVelocity(float hitEffectiveness, Collider struckCollider, Rigidbody struckRigidBody, float embeddMultiplier)"}</code> |  |
| <Link id="m-handleunembedonclient" /><code>{"private void HandleUnEmbedOnClient()"}</code> |  |
| <Link id="m-ignorecollisions" /><code>{"private void IgnoreCollisions(bool isIgnoring)"}</code> |  |
| <Link id="m-israycastedrigidbodyfromthethrowingplayer" /><code>{"private static bool IsRaycastedRigidbodyFromTheThrowingPlayer("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, RaycastHit raycastHit)"}</code> |  |
| <Link id="m-isvalidembed" /><code>{"private bool IsValidEmbed()"}</code> |  |
| <Link id="m-isvalidpickup" /><code>{"private bool IsValidPickup(Collider struckCollider)"}</code> |  |
| <Link id="m-isvalidsurface" /><code>{"private bool IsValidSurface(Collider struckCollider, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactPointStructures, ref float embedMultiplier)"}</code> |  |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-reenablecollisions" /><code>{"private void ReenableCollisions()"}</code> |  |
| <Link id="m-setuptipoffsets" /><code>{"private void SetupTipOffsets()"}</code> |  |
| <Link id="m-syncembed-2" /><code>{"private void SyncEmbed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-e-h/embedarguments">{"EmbedArguments"}</Link>{" args)"}</code> |  |
| <Link id="m-trygetstruckobject" /><code>{"private bool TryGetStruckObject(Rigidbody struckRigidBody, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" struckEntity, out int rigidbodyIndex, out "}<Link to="/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-unchild" /><code>{"private void UnChild()"}</code> |  |
| <Link id="m-unembedoninteract" /><code>{"private void UnEmbedOnInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-unembedonplayerleave" /><code>{"private void UnEmbedOnPlayerLeave("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Embeddable`:

[`EmbeddableManager.allEmbedded`](/game-api/types/alta-items/embeddablemanager#m-allembedded), [`EmbeddableManager.AllEmbedded`](/game-api/types/alta-items/embeddablemanager#m-allembedded-2), [`EmbeddableManager.DeregisterEmbeddable`](/game-api/types/alta-items/embeddablemanager#m-deregisterembeddable), [`EmbeddableManager.EmbeddableAdded`](/game-api/types/alta-items/embeddablemanager#m-embeddableadded), [`EmbeddableManager.EmbeddableRemoved`](/game-api/types/alta-items/embeddablemanager#m-embeddableremoved), [`EmbeddableManager.HandleEmbed`](/game-api/types/alta-items/embeddablemanager#m-handleembed), [`EmbeddableManager.HandleEmbeddableUnEmbed`](/game-api/types/alta-items/embeddablemanager#m-handleembeddableunembed), [`EmbeddableManager.HandleUnEmbed`](/game-api/types/alta-items/embeddablemanager#m-handleunembed), [`EmbeddableManager.RegisterEmbeddable`](/game-api/types/alta-items/embeddablemanager#m-registerembeddable), [`Arrow.embeddable`](/game-api/types/global-a-b/arrow#m-embeddable), [`Arrow.StopArrowFlight`](/game-api/types/global-a-b/arrow#m-stoparrowflight), [`EmbeddableRaycastProjectile.embeddable`](/game-api/types/global-e-h/embeddableraycastprojectile#m-embeddable).
