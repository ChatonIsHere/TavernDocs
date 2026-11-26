---
title: "GenericCraftingComponent"
description: "A component on a pickup that can be added as a piece to a GenericCraftingStation project."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingComponent

A **class** in `Root.Township`, `Alta.Crafting`.

A component on a pickup that can be added as a piece to a `GenericCraftingStation` project. Tracks the nearest free piece while held and fills it when released.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), `ISerializationCallbackReceiver`, [`IGenericCraftingComponent`](/mod/game-api/types/alta-crafting/igenericcraftingcomponent)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedby" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/iaffectcrafting">{"IAffectCrafting"}</Link>{"[] affectedBy"}</code> | <span className="api-desc">Private: the `IAffectCrafting` behaviours that must all be active before this item counts.</span> |
| <Link id="m-affectedbybehaviours" /><code>{"private MonoBehaviour[] affectedByBehaviours"}</code> | <span className="api-desc">Serialized list of behaviours implementing `IAffectCrafting`.</span> |
| <Link id="m-bestpiecekey" /><code>{"private int bestPieceKey"}</code> | <span className="api-desc">Private: key of the piece chosen by `Track`, used by `Released`.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Private: cached transform of this object.</span> |
| <Link id="m-centrepointoffset" /><code>{"private Vector3 centrePointOffset"}</code> | <span className="api-desc">Local offset of the point used to find the closest piece.</span> |
| <Link id="m-material" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | <span className="api-desc">Serialized material, used when there is no `part`.</span> |
| <Link id="m-onaddedtoprojecteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onAddedToProjectEffect"}</code> | <span className="api-desc">Effect event raised with the transform when the item is added to a project.</span> |
| <Link id="m-part" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" part"}</code> | <span className="api-desc">Optional `PhysicalMaterialPart` that holds the material instead of `material`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEffects"}</code> | <span className="api-desc">Private: message that tells clients to play the added effect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> | <span className="api-desc">The physical material, from the `PhysicalMaterialPart` if one is set, otherwise the serialized material.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup this component belongs to.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-igenericcraftingcomponent-isaddingproject" /><code>{"private bool Alta.Crafting.IGenericCraftingComponent.IsAddingProject { get; }"}</code> | <span className="api-desc">Always false; this component fills pieces and does not start projects.</span> |
| <Link id="m-isactive" /><code>{"private bool IsActive { get; }"}</code> | <span className="api-desc">Private: true only when every `IAffectCrafting` behaviour says it is active (for example the item is finished enough).</span> |
| <Link id="m-objectcentrepoint" /><code>{"private Vector3 ObjectCentrePoint { get; }"}</code> | <span className="api-desc">Private: world position of the centre point, used to find the closest piece.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addedtoproject" /><code>{"void AddedToProject()"}</code> | <span className="api-desc">Plays the added effect (not on headless) and, on the server, tells clients to play it too.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the effect sync message.</span> |
| <Link id="m-setupasrefuse" /><code>{"void SetupAsRefuse("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Sets the material and forces every affecting behaviour active, so refuse can be used straight away.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecentrepointoffset" /><code>{"private bool CalculateCentrePointOffset()"}</code> | <span className="api-desc">Private, editor: sets `centrePointOffset` to the centre of the object's bounds. Returns whether it changed.</span> |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | <span className="api-desc">Casts `affectedByBehaviours` into the `affectedBy` array.</span> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-released" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Released("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | <span className="api-desc">When the item is let go near a station, fills the tracked piece with its material and destroys the item.</span> |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: client side of the effect sync, plays `AddedToProject` effects.</span> |
| <Link id="m-track" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Track("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | <span className="api-desc">While held near a station, asks it for the closest piece to the centre point and animates that piece.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingComponent`:

<div className="api-used-in">

[`GenericCraftingPiece.AcceptsComponent`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-acceptscomponent), [`GenericCraftingStation.TrySetClosestPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`GenericCraftingStation.PickupColliders.PickupColliders`](/mod/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders#m-ctor).

</div>
