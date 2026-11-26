---
title: "BuilderDock"
description: "The dock on a ChisellingDeck where players put wood wedges."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuilderDock

A **class** in `Root.Township`, `Alta.Carpentry`.

The dock on a `ChisellingDeck` where players put wood wedges. Each `WedgesPerBlock` wedges grows the timber block by one size, and it shows the wedges stacked up.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`BoolDelegate`](/game-api/types/alta-crafting/builderdock-booldelegate)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuilderDock()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activechanged" /><code><Link to="/game-api/types/alta-crafting/builderdock-booldelegate">{"BuilderDock.BoolDelegate"}</Link>{" ActiveChanged"}</code> | Delegate called with whether the dock holds any wedges, whenever that changes. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds before docked wedges turn into block size. |
| <Link id="m-builderparent" /><code>{"private Transform builderParent"}</code> | Parent of the wedge pieces, moved along x to follow the block. |
| <Link id="m-builderpieces" /><code>{"private Renderer[] builderPieces"}</code> | Renderers for the wedge pieces shown as wedges are added. |
| <Link id="m-builderpiecesfilters" /><code>{"private MeshFilter[] builderPiecesFilters"}</code> | Mesh filters of the wedge pieces. Not read in this build. |
| <Link id="m-deck" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | The chiselling deck this dock feeds. |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The `PickupDock` on this object. |
| <Link id="m-undockingtarget" /><code>{"private Transform undockingTarget"}</code> | Where ejected wedges and refuse are dropped. |
| <Link id="m-updatingroutine" /><code>{"private Coroutine updatingRoutine"}</code> | Private: the running `EnsureSpace` coroutine. |
| <Link id="m-wedgeitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" wedgeItem"}</code> | The only item the dock accepts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentphysicalmaterial" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" CurrentPhysicalMaterial { get; private set; }"}</code> | Material of the wedges in the dock, used for the block and refuse. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | Whether the dock currently holds wedges. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reducesize" /><code>{"void ReduceSize()"}</code> | Ejects all wedges and marks the dock inactive. |
| <Link id="m-setupphysicalmaterial" /><code>{"void SetupPhysicalMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | Sets `CurrentPhysicalMaterial` directly. |
| <Link id="m-spawnrefuse" /><code>{"void SpawnRefuse(int refuse)"}</code> | Server: spawns wedges of the current material at the undocking point, in a pouch if more than one. |
| <Link id="m-updateposition" /><code>{"void UpdatePosition()"}</code> | Moves the wedge display to the block positioner's `BuilderX`. |
| <Link id="m-updatequantity" /><code>{"void UpdateQuantity()"}</code> | Called when the docked amount changes. The server starts `EnsureSpace`; clients update visuals. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the dock filter and quantity change, and empties the dock whenever the block is chiselled. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Hides the wedge pieces when baked. |
| <Link id="m-blockfilter" /><code>{"private void BlockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Private: accepts only the wedge item, matching the block's material, while the deck has space and the block is unchiselled. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Does nothing. |
| <Link id="m-ensurespace" /><code>{"private IEnumerator EnsureSpace() (iterator)"}</code> | Private, server: updates the visuals and active state, grows the block if there are enough wedges, then makes room on the deck. |
| <Link id="m-spawnanimation" /><code>{"private IEnumerator SpawnAnimation() (iterator)"}</code> | Private: waits `animationDuration`, then turns docked wedges into block size, up to the deck's or positioner's limit. Ejects if the block was chiselled. |
| <Link id="m-updateimage" /><code>{"private void UpdateImage()"}</code> | Private: shows wedge pieces in proportion to how many wedges are docked, with the wedges' material. |

</details>

## Used in

Members of other types that take, return or hold a `BuilderDock`:

[`ChisellingDeck.docker`](/game-api/types/alta-crafting/chisellingdeck#m-docker), [`DeckClamp.docker`](/game-api/types/alta-crafting/deckclamp#m-docker).
