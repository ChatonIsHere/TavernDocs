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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IDynamicQueueElement<RecyclerOutputSlot>`](/mod/game-api/types/alta-crafting/idynamicqueueelement-t), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RecyclerOutputSlot`](/mod/game-api/types/alta-crafting/recycleroutputslot)
- **Nested types** [`SaveData`](/mod/game-api/types/alta-crafting/recycleroutputslot-savedata)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecyclerOutputSlot()"}</code> | <span className="api-desc">Creates a `RecyclerOutputSlot` with default values.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property ID for _FillProgress.</span> |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | <span className="api-desc">Shader property ID for _NegativeChangeProgress.</span> |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> | <span className="api-desc">Shader property ID for _PositiveChangeProgress.</span> |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> | <span className="api-desc">Per-slot copy of the display material whose fill values are animated.</span> |
| <Link id="m-animationcontent" /><code>{"private float animationContent"}</code> | <span className="api-desc">Fill amount currently shown by the animation.</span> |
| <Link id="m-contentanimation" /><code>{"private Coroutine contentAnimation"}</code> | <span className="api-desc">The running fill animation, if any.</span> |
| <Link id="m-contentanimationspeed" /><code>{"private float contentAnimationSpeed"}</code> | <span className="api-desc">Fill animation speed per second.</span> |
| <Link id="m-currentcontent" /><code>{"private float currentContent"}</code> | <span className="api-desc">Partial content toward the next whole item, 0 to 1.</span> |
| <Link id="m-displaydock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" displayDock"}</code> | <span className="api-desc">Dock holding the display item that shows the material.</span> |
| <Link id="m-displayrenderers" /><code>{"private Renderer[] displayRenderers"}</code> | <span className="api-desc">Renderers that show the fill bar.</span> |
| <Link id="m-filledupeffecttarget" /><code>{"private Transform filledUpEffectTarget"}</code> | <span className="api-desc">Where the filled-up effect plays.</span> |
| <Link id="m-index" /><code>{"private int index"}</code> | <span className="api-desc">This slot's index, sent with sync messages.</span> |
| <Link id="m-isdirectmovement" /><code>{"private bool isDirectMovement"}</code> | <span className="api-desc">True when the next sync should animate directly (material change or full sync).</span> |
| <Link id="m-onfilledupeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFilledUpEffect"}</code> | <span className="api-desc">Event played when the slot fills a whole item.</span> |
| <Link id="m-syncmethod" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMethod"}</code> | <span className="api-desc">Method sync from the recycler, sent with this slot's index when content changes.</span> |
| <Link id="m-targetdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" targetDock"}</code> | <span className="api-desc">Dock finished items are put into.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmaterial" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" CurrentMaterial { get; private set; }"}</code> | <span className="api-desc">The material this slot is collecting.</span> |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | <span className="api-desc">True when the partial fill is near zero. Whole pieces in the dock don't count.</span> |
| <Link id="m-next" /><code><Link to="/mod/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" Next { get; set; }"}</code> | <span className="api-desc">Next slot in the recycler's usage order.</span> |
| <Link id="m-previous" /><code><Link to="/mod/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" Previous { get; set; }"}</code> | <span className="api-desc">Previous slot in the recycler's usage order.</span> |
| <Link id="m-totalcontent" /><code>{"float TotalContent { get; }"}</code> | <span className="api-desc">Partial fill plus the number of whole pieces in the dock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcontent" /><code>{"void AddContent(float content)"}</code> | <span className="api-desc">Server: adds metal, docking a new piece for each whole unit, then syncs and updates the display.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-crafting/recycleroutputslot-savedata">{"RecyclerOutputSlot.SaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores the fill and material from save data.</span> |
| <Link id="m-reappropriate" /><code>{"void Reappropriate("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Switches the slot to a new material: pops out docked pieces, clears the fill and display.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-crafting/recycleroutputslot-savedata">{"RecyclerOutputSlot.SaveData"}</Link>{" Save()"}</code> | <span className="api-desc">Makes save data with the slot index, fill and material.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFull)"}</code> | <span className="api-desc">Reads or writes the fill, and plays the fill animation when reading.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMethod, int index)"}</code> | <span className="api-desc">Gives the slot its sync method and index. On clients, also sets up its fill material.</span> |
| <Link id="m-updatecontentremote" /><code>{"void UpdateContentRemote()"}</code> | <span className="api-desc">Client: animates the fill bar to the current content.</span> |
| <Link id="m-updatevisual" /><code>{"void UpdateVisual()"}</code> | <span className="api-desc">Shows a display piece while partly filled, or removes it when empty.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleandisplay" /><code>{"private void CleanDisplay()"}</code> | <span className="api-desc">Destroys the display item in the display dock.</span> |
| <Link id="m-contentanimation-2" /><code>{"private IEnumerator ContentAnimation() (iterator)"}</code> | <span className="api-desc">Client coroutine that animates the fill bar to the new content, playing the filled-up effect each time it wraps past full.</span> |
| <Link id="m-newsource" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" NewSource()"}</code> | <span className="api-desc">Spawns one item of the current material's source item.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the per-slot material.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that removes missing display renderers.</span> |
| <Link id="m-reappropriationcontentanimation" /><code>{"private IEnumerator ReappropriationContentAnimation() (iterator)"}</code> | <span className="api-desc">Client coroutine that animates the fill bar straight up or down to the new content when the material changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RecyclerOutputSlot`:

<div className="api-used-in">

[`Recycler.GetSlot`](/mod/game-api/types/alta-crafting/recycler#m-getslot), [`Recycler.orderedSlots`](/mod/game-api/types/alta-crafting/recycler#m-orderedslots), [`Recycler.slots`](/mod/game-api/types/alta-crafting/recycler#m-slots).

</div>
