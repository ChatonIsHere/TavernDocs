---
title: "ChildSyncableCollectionBase<T>"
description: "abstract class ChildSyncableCollectionBase<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollectionBase&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ChildSyncableCollectionBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"protected List<T> children"}</code> |  |
| <Link id="m-isforcedfullsync" /><code>{"protected bool isForcedFullSync"}</code> |  |
| <Link id="m-isgettingchildren" /><code>{"protected bool isGettingChildren"}</code> |  |
| <Link id="m-sync" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncindividual" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncIndividual"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-children-2" /><code>{"List<T> Children { get; }"}</code> |  |
| <Link id="m-isusingsyncmessage" /><code>{"protected virtual bool IsUsingSyncMessage { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-syncreceived" /><code>{"event Action<bool> SyncReceived"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"void AddChild(T child)"}</code> |  |
| <Link id="m-getchildren" /><code>{"void GetChildren()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-syncallchildren" /><code>{"virtual void SyncAllChildren()"}</code> |  |
| <Link id="m-syncchild" /><code>{"abstract void SyncChild(T child)"}</code> |  |
| <Link id="m-onsyncreceived" /><code>{"protected virtual void OnSyncReceived(bool isFull)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChildSyncableCollectionBase&lt;T>`:

[`ForgedPoint.Initialize`](/game-api/types/alta-crafting/forgedpoint#m-initialize), [`HeatPoint.Initialize`](/game-api/types/alta-stats-effects/heatpoint#m-initialize), [`GhostSnapSlot.collection`](/game-api/types/global-e-h/ghostsnapslot#m-collection), [`IChildSyncable<T>.Initialize`](/game-api/types/global-i-l/ichildsyncable-t#m-initialize), [`WoodcutPointData.Initialize`](/game-api/types/global-t-x/woodcutpointdata#m-initialize).
