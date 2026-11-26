---
title: "GhostSnapSlot"
description: "A slot that shows a ghost preview when a matching GhostSnapObject is brought near and holds it when snapped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostSnapSlot

A **class** in `Root.Township`, the global namespace.

A slot that shows a ghost preview when a matching `GhostSnapObject` is brought near and holds it when snapped. The held object rides on this entity and saves as its child.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IChildSyncable<GhostSnapSlot, GhostSnapSlotCollectionSaveData.Element>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<GhostSnapSlot>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`GhostSnapSlot`](/mod/game-api/types/global-e-h/ghostsnapslot), [`GhostSnapSlotCollection`](/mod/game-api/types/global-e-h/ghostsnapslotcollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostSnapSlot()"}</code> | <span className="api-desc">Creates a `GhostSnapSlot` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">Channels this slot accepts; an object matches if its channel is in the list.</span> |
| <Link id="m-collection" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{"> collection"}</code> | <span className="api-desc">The child-sync collection this slot belongs to, used to sync it.</span> |
| <Link id="m-ejectvelocity" /><code>{"private float ejectVelocity"}</code> | <span className="api-desc">Speed of the random push given to an ejected object (default 5).</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Serialized entity reference for the slot.</span> |
| <Link id="m-ghostsnapobjects" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{"> ghostSnapObjects"}</code> | <span className="api-desc">Objects currently inside the trigger, keyed by collider.</span> |
| <Link id="m-isallowingreplace" /><code>{"private bool isAllowingReplace"}</code> | <span className="api-desc">Whether a new object can push out the one already snapped.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code><Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" Contains { get; private set; }"}</code> | <span className="api-desc">The object in the slot, or null. Cleared when a player grabs it out.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The entity the slot belongs to, which becomes the held object's chunking parent.</span> |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | <span className="api-desc">The slot's index in its collection.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptsnap" /><code>{"bool AttemptSnap("}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | <span className="api-desc">Snaps the object in if its channel matches. Returns false otherwise.</span> |
| <Link id="m-eject" /><code>{"void Eject()"}</code> | <span className="api-desc">Pushes the held object out in a random direction and gives it back its own save.</span> |
| <Link id="m-matches" /><code>{"bool Matches("}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | <span className="api-desc">Whether the object's snap channel is one this slot accepts.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code>{"private void Connect("}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | <span className="api-desc">Snaps the object in: ejects the old one if replacing is allowed, parents and freezes it, and makes it save as a child. Server syncs the slot.</span> |
| <Link id="m-empty" /><code>{"private void Empty("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Runs when the snapped object is grabbed; frees it from the slot and restores its normal save mode.</span> |
| <Link id="m-hideghost" /><code>{"private IEnumerator HideGhost(Collider other, "}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject) (iterator)"}</code> | <span className="api-desc">Coroutine: after 0.1 seconds, hides the ghost if the object hasn't re-entered and the ghost is still at this slot.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Shows the ghost preview for a matching `GhostSnapObject` whose collider's parent enters the trigger.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Starts `HideGhost` for an object leaving the trigger.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GhostSnapSlot`:

<div className="api-used-in">

[`GhostSnapObject.GhostShownAt`](/mod/game-api/types/global-e-h/ghostsnapobject#m-ghostshownat), [`GhostSnapObject.ShowGhost`](/mod/game-api/types/global-e-h/ghostsnapobject#m-showghost).

</div>
