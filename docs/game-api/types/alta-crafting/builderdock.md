---
title: "BuilderDock"
description: "class BuilderDock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuilderDock

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`BoolDelegate`](/game-api/types/alta-crafting/builderdock-booldelegate)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuilderDock()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activechanged" /><code><Link to="/game-api/types/alta-crafting/builderdock-booldelegate">{"BuilderDock.BoolDelegate"}</Link>{" ActiveChanged"}</code> |  |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |  |
| <Link id="m-builderparent" /><code>{"private Transform builderParent"}</code> |  |
| <Link id="m-builderpieces" /><code>{"private Renderer[] builderPieces"}</code> |  |
| <Link id="m-builderpiecesfilters" /><code>{"private MeshFilter[] builderPiecesFilters"}</code> |  |
| <Link id="m-deck" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> |  |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |  |
| <Link id="m-undockingtarget" /><code>{"private Transform undockingTarget"}</code> |  |
| <Link id="m-updatingroutine" /><code>{"private Coroutine updatingRoutine"}</code> |  |
| <Link id="m-wedgeitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" wedgeItem"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentphysicalmaterial" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" CurrentPhysicalMaterial { get; private set; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reducesize" /><code>{"void ReduceSize()"}</code> |  |
| <Link id="m-setupphysicalmaterial" /><code>{"void SetupPhysicalMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> |  |
| <Link id="m-spawnrefuse" /><code>{"void SpawnRefuse(int refuse)"}</code> |  |
| <Link id="m-updateposition" /><code>{"void UpdatePosition()"}</code> |  |
| <Link id="m-updatequantity" /><code>{"void UpdateQuantity()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-blockfilter" /><code>{"private void BlockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-ensurespace" /><code>{"private IEnumerator EnsureSpace() (iterator)"}</code> |  |
| <Link id="m-spawnanimation" /><code>{"private IEnumerator SpawnAnimation() (iterator)"}</code> |  |
| <Link id="m-updateimage" /><code>{"private void UpdateImage()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BuilderDock`:

[`ChisellingDeck.docker`](/game-api/types/alta-crafting/chisellingdeck#m-docker), [`DeckClamp.docker`](/game-api/types/alta-crafting/deckclamp#m-docker).
