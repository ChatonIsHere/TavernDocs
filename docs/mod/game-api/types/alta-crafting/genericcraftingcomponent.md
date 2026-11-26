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
| <Link id="m-ctor" /><code>{"GenericCraftingComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedby" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/iaffectcrafting">{"IAffectCrafting"}</Link>{"[] affectedBy"}</code> | Private: the `IAffectCrafting` behaviours that must all be active before this item counts. |
| <Link id="m-affectedbybehaviours" /><code>{"private MonoBehaviour[] affectedByBehaviours"}</code> | Serialized list of behaviours implementing `IAffectCrafting`. |
| <Link id="m-bestpiecekey" /><code>{"private int bestPieceKey"}</code> | Private: key of the piece chosen by `Track`, used by `Released`. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Private: cached transform of this object. |
| <Link id="m-centrepointoffset" /><code>{"private Vector3 centrePointOffset"}</code> | Local offset of the point used to find the closest piece. |
| <Link id="m-material" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | Serialized material, used when there is no `part`. |
| <Link id="m-onaddedtoprojecteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onAddedToProjectEffect"}</code> | Effect event raised with the transform when the item is added to a project. |
| <Link id="m-part" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" part"}</code> | Optional `PhysicalMaterialPart` that holds the material instead of `material`. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEffects"}</code> | Private: message that tells clients to play the added effect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> | The physical material, from the `PhysicalMaterialPart` if one is set, otherwise the serialized material. |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup this component belongs to. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-igenericcraftingcomponent-isaddingproject" /><code>{"private bool Alta.Crafting.IGenericCraftingComponent.IsAddingProject { get; }"}</code> | Always false; this component fills pieces and does not start projects. |
| <Link id="m-isactive" /><code>{"private bool IsActive { get; }"}</code> | Private: true only when every `IAffectCrafting` behaviour says it is active (for example the item is finished enough). |
| <Link id="m-objectcentrepoint" /><code>{"private Vector3 ObjectCentrePoint { get; }"}</code> | Private: world position of the centre point, used to find the closest piece. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addedtoproject" /><code>{"void AddedToProject()"}</code> | Plays the added effect (not on headless) and, on the server, tells clients to play it too. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the effect sync message. |
| <Link id="m-setupasrefuse" /><code>{"void SetupAsRefuse("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Sets the material and forces every affecting behaviour active, so refuse can be used straight away. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecentrepointoffset" /><code>{"private bool CalculateCentrePointOffset()"}</code> | Private, editor: sets `centrePointOffset` to the centre of the object's bounds. Returns whether it changed. |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | Casts `affectedByBehaviours` into the `affectedBy` array. |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | Does nothing. |
| <Link id="m-released" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Released("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | When the item is let go near a station, fills the tracked piece with its material and destroys the item. |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: client side of the effect sync, plays `AddedToProject` effects. |
| <Link id="m-track" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Track("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | While held near a station, asks it for the closest piece to the centre point and animates that piece. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingComponent`:

[`GenericCraftingPiece.AcceptsComponent`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-acceptscomponent), [`GenericCraftingStation.TrySetClosestPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`GenericCraftingStation.PickupColliders.PickupColliders`](/mod/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders#m-ctor).
