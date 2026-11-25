---
title: "GhostSnapObject"
description: "An item that shows a ghost preview at a matching GhostSnapSlot while held, and snaps into it when let go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostSnapObject

A **class** in `Root.Township`, no namespace.

An item that shows a ghost preview at a matching `GhostSnapSlot` while held, and snaps into it when let go. The server does the snap.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostSnapObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{" channel"}</code> |  |
| <Link id="m-ghostversion" /><code>{"private GameObject ghostVersion"}</code> |  |
| <Link id="m-parentslotindex" /><code>{"private uint parentSlotIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{" Channel { get; }"}</code> | Slots only accept objects whose channel they list. |
| <Link id="m-ghostshownat" /><code><Link to="/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{" GhostShownAt { get; protected set; }"}</code> | Slot the ghost is shown at, or null. |
| <Link id="m-parentslotindex-2" /><code>{"uint ParentSlotIndex { get; set; }"}</code> | Index of the slot it is snapped into, set by the slot. |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | This entity's `Pickup`. |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The pickup's rigidbody. Made kinematic when snapped. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hideghost" /><code>{"void HideGhost()"}</code> | Clears the slot and hides the ghost. |
| <Link id="m-showghost" /><code>{"void ShowGhost("}<Link to="/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{" target)"}</code> | Remembers the slot and, while held, shows the ghost copy there. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ensureghost" /><code>{"private bool EnsureGhost()"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GhostSnapObject`:

[`GhostSnapSlot.AttemptSnap`](/game-api/types/global-e-h/ghostsnapslot#m-attemptsnap), [`GhostSnapSlot.Connect`](/game-api/types/global-e-h/ghostsnapslot#m-connect), [`GhostSnapSlot.Contains`](/game-api/types/global-e-h/ghostsnapslot#m-contains), [`GhostSnapSlot.ghostSnapObjects`](/game-api/types/global-e-h/ghostsnapslot#m-ghostsnapobjects), [`GhostSnapSlot.HideGhost`](/game-api/types/global-e-h/ghostsnapslot#m-hideghost), [`GhostSnapSlot.Matches`](/game-api/types/global-e-h/ghostsnapslot#m-matches).
