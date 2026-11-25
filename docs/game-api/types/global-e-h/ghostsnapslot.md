---
title: "GhostSnapSlot"
description: "A slot that shows a ghost preview when a matching GhostSnapObject is brought near and holds it when snapped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostSnapSlot

A **class** in `Root.Township`, no namespace.

A slot that shows a ghost preview when a matching `GhostSnapObject` is brought near and holds it when snapped. The held object rides on this entity and saves as its child.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IChildSyncable<GhostSnapSlot, GhostSnapSlotCollectionSaveData.Element>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<GhostSnapSlot>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`GhostSnapSlot`](/game-api/types/global-e-h/ghostsnapslot), [`GhostSnapSlotCollection`](/game-api/types/global-e-h/ghostsnapslotcollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostSnapSlot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/global-e-h/ghostsnapchannel">{"GhostSnapChannel"}</Link>{"[] channels"}</code> |  |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/game-api/types/global-e-h/ghostsnapslot">{"GhostSnapSlot"}</Link>{"> collection"}</code> |  |
| <Link id="m-ejectvelocity" /><code>{"private float ejectVelocity"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-ghostsnapobjects" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{"> ghostSnapObjects"}</code> |  |
| <Link id="m-isallowingreplace" /><code>{"private bool isAllowingReplace"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code><Link to="/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" Contains { get; private set; }"}</code> | The object in the slot, or null. Cleared when a player grabs it out. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The entity the slot belongs to, which becomes the held object's chunking parent. |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | The slot's index in its collection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptsnap" /><code>{"bool AttemptSnap("}<Link to="/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | Snaps the object in if its channel matches. Returns false otherwise. |
| <Link id="m-eject" /><code>{"void Eject()"}</code> | Pushes the held object out in a random direction and gives it back its own save. |
| <Link id="m-matches" /><code>{"bool Matches("}<Link to="/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> | Whether the object's snap channel is one this slot accepts. |
| <Link id="m-connect" /><code>{"private void Connect("}<Link to="/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject)"}</code> |  |
| <Link id="m-empty" /><code>{"private void Empty("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-hideghost" /><code>{"private IEnumerator HideGhost(Collider other, "}<Link to="/game-api/types/global-e-h/ghostsnapobject">{"GhostSnapObject"}</Link>{" snapObject) (iterator)"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GhostSnapSlot`:

[`GhostSnapObject.GhostShownAt`](/game-api/types/global-e-h/ghostsnapobject#m-ghostshownat), [`GhostSnapObject.ShowGhost`](/game-api/types/global-e-h/ghostsnapobject#m-showghost).
