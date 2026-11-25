---
title: "RecyclerOutputSlot"
description: "One output slot of the recycler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecyclerOutputSlot

A **class** in `Root.Township`, `Alta.Blacksmithing`.

One output slot of the recycler. It fills up with molten metal of one material and drops a whole piece of that material into its dock each time it reaches 1.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IDynamicQueueElement<RecyclerOutputSlot>`](/game-api/types/alta-crafting/idynamicqueueelement-t), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RecyclerOutputSlot`](/game-api/types/alta-crafting/recycleroutputslot)
- **Nested types** [`SaveData`](/game-api/types/alta-crafting/recycleroutputslot-savedata)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecyclerOutputSlot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> |  |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> |  |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> |  |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> |  |
| <Link id="m-animationcontent" /><code>{"private float animationContent"}</code> |  |
| <Link id="m-contentanimation" /><code>{"private Coroutine contentAnimation"}</code> |  |
| <Link id="m-contentanimationspeed" /><code>{"private float contentAnimationSpeed"}</code> |  |
| <Link id="m-currentcontent" /><code>{"private float currentContent"}</code> |  |
| <Link id="m-displaydock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" displayDock"}</code> |  |
| <Link id="m-displayrenderers" /><code>{"private Renderer[] displayRenderers"}</code> |  |
| <Link id="m-filledupeffecttarget" /><code>{"private Transform filledUpEffectTarget"}</code> |  |
| <Link id="m-index" /><code>{"private int index"}</code> |  |
| <Link id="m-isdirectmovement" /><code>{"private bool isDirectMovement"}</code> |  |
| <Link id="m-onfilledupeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFilledUpEffect"}</code> |  |
| <Link id="m-syncmethod" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMethod"}</code> |  |
| <Link id="m-targetdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" targetDock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmaterial" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" CurrentMaterial { get; private set; }"}</code> | The material this slot is collecting. |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | True when the partial fill is near zero. Whole pieces in the dock don't count. |
| <Link id="m-next" /><code><Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" Next { get; set; }"}</code> | Next slot in the recycler's usage order. |
| <Link id="m-previous" /><code><Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" Previous { get; set; }"}</code> | Previous slot in the recycler's usage order. |
| <Link id="m-totalcontent" /><code>{"float TotalContent { get; }"}</code> | Partial fill plus the number of whole pieces in the dock. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcontent" /><code>{"void AddContent(float content)"}</code> | Server: adds metal, docking a new piece for each whole unit, then syncs and updates the display. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-crafting/recycleroutputslot-savedata">{"RecyclerOutputSlot.SaveData"}</Link>{" data)"}</code> | Restores the fill and material from save data. |
| <Link id="m-reappropriate" /><code>{"void Reappropriate("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Switches the slot to a new material: pops out docked pieces, clears the fill and display. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-crafting/recycleroutputslot-savedata">{"RecyclerOutputSlot.SaveData"}</Link>{" Save()"}</code> | Makes save data with the slot index, fill and material. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFull)"}</code> | Reads or writes the fill, and plays the fill animation when reading. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMethod, int index)"}</code> | Gives the slot its sync method and index. On clients, also sets up its fill material. |
| <Link id="m-updatecontentremote" /><code>{"void UpdateContentRemote()"}</code> | Client: animates the fill bar to the current content. |
| <Link id="m-updatevisual" /><code>{"void UpdateVisual()"}</code> | Shows a display piece while partly filled, or removes it when empty. |
| <Link id="m-cleandisplay" /><code>{"private void CleanDisplay()"}</code> |  |
| <Link id="m-contentanimation-2" /><code>{"private IEnumerator ContentAnimation() (iterator)"}</code> |  |
| <Link id="m-newsource" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" NewSource()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-reappropriationcontentanimation" /><code>{"private IEnumerator ReappropriationContentAnimation() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RecyclerOutputSlot`:

[`Recycler.GetSlot`](/game-api/types/alta-crafting/recycler#m-getslot), [`Recycler.orderedSlots`](/game-api/types/alta-crafting/recycler#m-orderedslots), [`Recycler.slots`](/game-api/types/alta-crafting/recycler#m-slots).
