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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`BoolDelegate`](/mod/game-api/types/alta-crafting/builderdock-booldelegate)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuilderDock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activechanged" /><code><Link to="/mod/game-api/types/alta-crafting/builderdock-booldelegate">{"BuilderDock.BoolDelegate"}</Link>{" ActiveChanged"}</code> | <span className="api-desc">Delegate called with whether the dock holds any wedges, whenever that changes.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds before docked wedges turn into block size.</span> |
| <Link id="m-builderparent" /><code>{"private Transform builderParent"}</code> | <span className="api-desc">Parent of the wedge pieces, moved along x to follow the block.</span> |
| <Link id="m-builderpieces" /><code>{"private Renderer[] builderPieces"}</code> | <span className="api-desc">Renderers for the wedge pieces shown as wedges are added.</span> |
| <Link id="m-builderpiecesfilters" /><code>{"private MeshFilter[] builderPiecesFilters"}</code> | <span className="api-desc">Mesh filters of the wedge pieces. Not read in this build.</span> |
| <Link id="m-deck" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | <span className="api-desc">The chiselling deck this dock feeds.</span> |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The `PickupDock` on this object.</span> |
| <Link id="m-undockingtarget" /><code>{"private Transform undockingTarget"}</code> | <span className="api-desc">Where ejected wedges and refuse are dropped.</span> |
| <Link id="m-updatingroutine" /><code>{"private Coroutine updatingRoutine"}</code> | <span className="api-desc">Private: the running `EnsureSpace` coroutine.</span> |
| <Link id="m-wedgeitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" wedgeItem"}</code> | <span className="api-desc">The only item the dock accepts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentphysicalmaterial" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" CurrentPhysicalMaterial { get; private set; }"}</code> | <span className="api-desc">Material of the wedges in the dock, used for the block and refuse.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">Whether the dock currently holds wedges.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Always 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reducesize" /><code>{"void ReduceSize()"}</code> | <span className="api-desc">Ejects all wedges and marks the dock inactive.</span> |
| <Link id="m-setupphysicalmaterial" /><code>{"void SetupPhysicalMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | <span className="api-desc">Sets `CurrentPhysicalMaterial` directly.</span> |
| <Link id="m-spawnrefuse" /><code>{"void SpawnRefuse(int refuse)"}</code> | <span className="api-desc">Server: spawns wedges of the current material at the undocking point, in a pouch if more than one.</span> |
| <Link id="m-updateposition" /><code>{"void UpdatePosition()"}</code> | <span className="api-desc">Moves the wedge display to the block positioner's `BuilderX`.</span> |
| <Link id="m-updatequantity" /><code>{"void UpdateQuantity()"}</code> | <span className="api-desc">Called when the docked amount changes. The server starts `EnsureSpace`; clients update visuals.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the dock filter and quantity change, and empties the dock whenever the block is chiselled.</span> |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Hides the wedge pieces when baked.</span> |
| <Link id="m-blockfilter" /><code>{"private void BlockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Private: accepts only the wedge item, matching the block's material, while the deck has space and the block is unchiselled.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-ensurespace" /><code>{"private IEnumerator EnsureSpace() (iterator)"}</code> | <span className="api-desc">Private, server: updates the visuals and active state, grows the block if there are enough wedges, then makes room on the deck.</span> |
| <Link id="m-spawnanimation" /><code>{"private IEnumerator SpawnAnimation() (iterator)"}</code> | <span className="api-desc">Private: waits `animationDuration`, then turns docked wedges into block size, up to the deck's or positioner's limit. Ejects if the block was chiselled.</span> |
| <Link id="m-updateimage" /><code>{"private void UpdateImage()"}</code> | <span className="api-desc">Private: shows wedge pieces in proportion to how many wedges are docked, with the wedges' material.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BuilderDock`:

<div className="api-used-in">

[`ChisellingDeck.docker`](/mod/game-api/types/alta-crafting/chisellingdeck#m-docker), [`DeckClamp.docker`](/mod/game-api/types/alta-crafting/deckclamp#m-docker).

</div>
