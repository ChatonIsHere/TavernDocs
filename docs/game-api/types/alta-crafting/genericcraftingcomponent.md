---
title: "GenericCraftingComponent"
description: "A material that can fill a station piece."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingComponent

A **class** in `Root.Township`, `Alta.Crafting`.

A material that can fill a station piece.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), `ISerializationCallbackReceiver`, [`IGenericCraftingComponent`](/game-api/types/alta-crafting/igenericcraftingcomponent)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenericCraftingComponent()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-affectedby" /><code>{"private "}<Link to="/game-api/types/alta-crafting/iaffectcrafting">{"IAffectCrafting"}</Link>{"[] affectedBy"}</code> |
| <Link id="m-affectedbybehaviours" /><code>{"private MonoBehaviour[] affectedByBehaviours"}</code> |
| <Link id="m-bestpiecekey" /><code>{"private int bestPieceKey"}</code> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-centrepointoffset" /><code>{"private Vector3 centrePointOffset"}</code> |
| <Link id="m-material" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> |
| <Link id="m-onaddedtoprojecteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onAddedToProjectEffect"}</code> |
| <Link id="m-part" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" part"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEffects"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-material-2" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" Material { get; private set; }"}</code> |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-crafting-igenericcraftingcomponent-isaddingproject" /><code>{"private bool Alta.Crafting.IGenericCraftingComponent.IsAddingProject { get; }"}</code> |
| <Link id="m-isactive" /><code>{"private bool IsActive { get; }"}</code> |
| <Link id="m-objectcentrepoint" /><code>{"private Vector3 ObjectCentrePoint { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addedtoproject" /><code>{"void AddedToProject()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-setupasrefuse" /><code>{"void SetupAsRefuse("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-calculatecentrepointoffset" /><code>{"private bool CalculateCentrePointOffset()"}</code> |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> |
| <Link id="m-released" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Released("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-track" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Track("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingComponent`:

[`GenericCraftingPiece.AcceptsComponent`](/game-api/types/alta-crafting/genericcraftingpiece#m-acceptscomponent), [`GenericCraftingStation.TrySetClosestPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-trysetclosestpiece), [`GenericCraftingStation.PickupColliders.PickupColliders`](/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders#m-ctor).
