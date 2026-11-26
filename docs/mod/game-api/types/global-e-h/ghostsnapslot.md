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
| <Link id="m-ctor" /><code>{"GhostSnapSlot()"}</code> | Creates a `GhostSnapSlot` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{"[] channels"}</code> | Channels this slot accepts; an object matches if its channel is in the list. |
| <Link id="m-collection" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{"> collection"}</code> | The child-sync collection this slot belongs to, used to sync it. |
| <Link id="m-ejectvelocity" /><code>{"private float ejectVelocity"}</code> | Speed of the random push given to an ejected object (default 5). |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Serialized entity reference for the slot. |
| <Link id="m-ghostsnapobjects" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{"> ghostSnapObjects"}</code> | Objects currently inside the trigger, keyed by collider. |
| <Link id="m-isallowingreplace" /><code>{"private bool isAllowingReplace"}</code> | Whether a new object can push out the one already snapped. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code><Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" Contains { get; private set; }"}</code> | The object in the slot, or null. Cleared when a player grabs it out. |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The entity the slot belongs to, which becomes the held object's chunking parent. |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | The slot's index in its collection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptsnap" /><code>{"bool AttemptSnap("}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | Snaps the object in if its channel matches. Returns false otherwise. |
| <Link id="m-eject" /><code>{"void Eject()"}</code> | Pushes the held object out in a random direction and gives it back its own save. |
| <Link id="m-matches" /><code>{"bool Matches("}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | Whether the object's snap channel is one this slot accepts. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code>{"private void Connect("}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | Snaps the object in: ejects the old one if replacing is allowed, parents and freezes it, and makes it save as a child. Server syncs the slot. |
| <Link id="m-empty" /><code>{"private void Empty("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Runs when the snapped object is grabbed; frees it from the slot and restores its normal save mode. |
| <Link id="m-hideghost" /><code>{"private IEnumerator HideGhost(Collider other, "}<Link to="/mod/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject) (iterator)"}</code> | Coroutine: after 0.1 seconds, hides the ghost if the object hasn't re-entered and the ghost is still at this slot. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Shows the ghost preview for a matching `GhostSnapObject` whose collider's parent enters the trigger. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Starts `HideGhost` for an object leaving the trigger. |

</details>

## Used in

Members of other types that take, return or hold a `GhostSnapSlot`:

[`GhostSnapObject.GhostShownAt`](/mod/game-api/types/global-e-h/ghostsnapobject#m-ghostshownat), [`GhostSnapObject.ShowGhost`](/mod/game-api/types/global-e-h/ghostsnapobject#m-showghost).
