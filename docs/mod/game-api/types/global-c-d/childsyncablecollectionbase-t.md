---
title: "ChildSyncableCollectionBase<T>"
description: "Base for a component that syncs a list of child items (woodcut points, forged points) on its entity, in full or one at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollectionBase&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for a component that syncs a list of child items (woodcut points, forged points) on its entity, in full or one at a time.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>`](/mod/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ChildSyncableCollectionBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"protected List<T> children"}</code> | <span className="api-desc">Backing list for `Children`.</span> |
| <Link id="m-isforcedfullsync" /><code>{"protected bool isForcedFullSync"}</code> | <span className="api-desc">True while sending a full sync to a joining player.</span> |
| <Link id="m-isgettingchildren" /><code>{"protected bool isGettingChildren"}</code> | <span className="api-desc">Inspector button field for `GetChildren`.</span> |
| <Link id="m-sync" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">The full sync message.</span> |
| <Link id="m-syncindividual" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncIndividual"}</code> | <span className="api-desc">The message that syncs one child by index.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-children-2" /><code>{"List<T> Children { get; }"}</code> | <span className="api-desc">The children being synced.</span> |
| <Link id="m-isusingsyncmessage" /><code>{"protected virtual bool IsUsingSyncMessage { get; }"}</code> | <span className="api-desc">Whether the full sync message is used. True by default.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-syncreceived" /><code>{"event Action<bool> SyncReceived"}</code> | <span className="api-desc">Raised when a sync arrives, with whether it was a full sync.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"void AddChild(T child)"}</code> | <span className="api-desc">Adds a child to the list.</span> |
| <Link id="m-getchildren" /><code>{"void GetChildren()"}</code> | <span className="api-desc">Editor button: adds every matching component in the object's children. Only works when the child type is a component.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player a forced full sync.</span> |
| <Link id="m-syncallchildren" /><code>{"virtual void SyncAllChildren()"}</code> | <span className="api-desc">Sends the full sync to the chunk.</span> |
| <Link id="m-syncchild" /><code>{"abstract void SyncChild(T child)"}</code> | <span className="api-desc">Implemented by subclasses to sync one child.</span> |
| <Link id="m-onsyncreceived" /><code>{"protected virtual void OnSyncReceived(bool isFull)"}</code> | <span className="api-desc">Raises `SyncReceived`.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook. Empty in the base class.</span> |

## Used in

Members of other types that take, return or hold a `ChildSyncableCollectionBase&lt;T>`:

<div className="api-used-in">

[`ForgedPoint.Initialize`](/mod/game-api/types/alta-crafting/forgedpoint#m-initialize), [`HeatPoint.Initialize`](/mod/game-api/types/alta-stats-effects/heatpoint#m-initialize), [`GhostSnapSlot.collection`](/mod/game-api/types/global-e-h/ghostsnapslot#m-collection), [`IChildSyncable<T>.Initialize`](/mod/game-api/types/global-i-l/ichildsyncable-t#m-initialize), [`WoodcutPointData.Initialize`](/mod/game-api/types/global-t-x/woodcutpointdata#m-initialize).

</div>
