---
title: "ChildSyncableCollectionBase<T>"
description: "Base for a component that syncs a list of child items (woodcut points, forged points) on its entity, in full or one at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollectionBase&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

Base for a component that syncs a list of child items (woodcut points, forged points) on its entity, in full or one at a time.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ChildSyncableCollectionBase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"protected List<T> children"}</code> | Backing list for `Children`. |
| <Link id="m-isforcedfullsync" /><code>{"protected bool isForcedFullSync"}</code> | True while sending a full sync to a joining player. |
| <Link id="m-isgettingchildren" /><code>{"protected bool isGettingChildren"}</code> | Inspector button field for `GetChildren`. |
| <Link id="m-sync" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | The full sync message. |
| <Link id="m-syncindividual" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncIndividual"}</code> | The message that syncs one child by index. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-children-2" /><code>{"List<T> Children { get; }"}</code> | The children being synced. |
| <Link id="m-isusingsyncmessage" /><code>{"protected virtual bool IsUsingSyncMessage { get; }"}</code> | Whether the full sync message is used. True by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-syncreceived" /><code>{"event Action<bool> SyncReceived"}</code> | Raised when a sync arrives, with whether it was a full sync. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"void AddChild(T child)"}</code> | Adds a child to the list. |
| <Link id="m-getchildren" /><code>{"void GetChildren()"}</code> | Editor button: adds every matching component in the object's children. Only works when the child type is a component. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player a forced full sync. |
| <Link id="m-syncallchildren" /><code>{"virtual void SyncAllChildren()"}</code> | Sends the full sync to the chunk. |
| <Link id="m-syncchild" /><code>{"abstract void SyncChild(T child)"}</code> | Implemented by subclasses to sync one child. |
| <Link id="m-onsyncreceived" /><code>{"protected virtual void OnSyncReceived(bool isFull)"}</code> | Raises `SyncReceived`. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook. Empty in the base class. |

## Used in

Members of other types that take, return or hold a `ChildSyncableCollectionBase&lt;T>`:

[`ForgedPoint.Initialize`](/game-api/types/alta-crafting/forgedpoint#m-initialize), [`HeatPoint.Initialize`](/game-api/types/alta-stats-effects/heatpoint#m-initialize), [`GhostSnapSlot.collection`](/game-api/types/global-e-h/ghostsnapslot#m-collection), [`IChildSyncable<T>.Initialize`](/game-api/types/global-i-l/ichildsyncable-t#m-initialize), [`WoodcutPointData.Initialize`](/game-api/types/global-t-x/woodcutpointdata#m-initialize).
