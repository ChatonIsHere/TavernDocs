---
title: "GhostSnapObject"
description: "An item that shows a ghost preview at a matching GhostSnapSlot while held, and snaps into it when let go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostSnapObject

A **class** in `Root.Township`, the global namespace.

An item that shows a ghost preview at a matching `GhostSnapSlot` while held, and snaps into it when let go. The server does the snap.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostSnapObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{" channel"}</code> | <span className="api-desc">Which ghost snap channel this object belongs to; slots only take matching objects. Backing field for `Channel`.</span> |
| <Link id="m-ghostversion" /><code>{"private GameObject ghostVersion"}</code> | <span className="api-desc">The see-through preview object shown at a slot while the item is held near it.</span> |
| <Link id="m-parentslotindex" /><code>{"private uint parentSlotIndex"}</code> | <span className="api-desc">Index of the slot this object is snapped to. Backing field for `ParentSlotIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/mod/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Slots only accept objects whose channel they list.</span> |
| <Link id="m-ghostshownat" /><code><Link to="/mod/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{" GhostShownAt { get; protected set; }"}</code> | <span className="api-desc">Slot the ghost is shown at, or null.</span> |
| <Link id="m-parentslotindex-2" /><code>{"uint ParentSlotIndex { get; set; }"}</code> | <span className="api-desc">Index of the slot it is snapped into, set by the slot.</span> |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">This entity's `Pickup`.</span> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The pickup's rigidbody. Made kinematic when snapped.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hideghost" /><code>{"void HideGhost()"}</code> | <span className="api-desc">Clears the slot and hides the ghost.</span> |
| <Link id="m-showghost" /><code>{"void ShowGhost("}<Link to="/mod/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{" target)"}</code> | <span className="api-desc">Remembers the slot and, while held, shows the ghost copy there.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hides the ghost and hooks the pickup's grab and release events.</span> |
| <Link id="m-ensureghost" /><code>{"private bool EnsureGhost()"}</code> | <span className="api-desc">Creates the ghost from the prefab's `ghostVersion` if this copy has none; logs an error if the prefab has none either.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the last hand lets go while a ghost is shown, the server tries to snap the object to that slot; the ghost is hidden.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Shows the ghost again at the current slot when the object is picked up.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Destroys the ghost object.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GhostSnapObject`:

<div className="api-used-in">

[`GhostSnapSlot.AttemptSnap`](/mod/game-api/types/global-e-h/ghostsnapslot#m-attemptsnap), [`GhostSnapSlot.Connect`](/mod/game-api/types/global-e-h/ghostsnapslot#m-connect), [`GhostSnapSlot.Contains`](/mod/game-api/types/global-e-h/ghostsnapslot#m-contains), [`GhostSnapSlot.ghostSnapObjects`](/mod/game-api/types/global-e-h/ghostsnapslot#m-ghostsnapobjects), [`GhostSnapSlot.HideGhost`](/mod/game-api/types/global-e-h/ghostsnapslot#m-hideghost), [`GhostSnapSlot.Matches`](/mod/game-api/types/global-e-h/ghostsnapslot#m-matches).

</div>
