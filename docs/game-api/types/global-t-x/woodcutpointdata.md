---
title: "WoodcutPointData"
description: "class WoodcutPointData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutPointData

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`IColorModelPoint<WoodcutPointData>`](/game-api/types/global-i-l/icolormodelpoint-outt), [`IChildSyncable<WoodcutPointData, WoodcutPointCollectionSaveData.Element>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<WoodcutPointData>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`WoodcutPointCollection`](/game-api/types/global-t-x/woodcutpointcollection), [`WoodcutPointData`](/game-api/types/global-t-x/woodcutpointdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutPointData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> |  |
| <Link id="m-haschangedsincelastwrite" /><code>{"private bool hasChangedSinceLastWrite"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> |  |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> Changed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{" other)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> collection)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{" other)"}</code> |  |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> |  |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-takedamage" /><code>{"void TakeDamage(float damage)"}</code> |  |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `WoodcutPointData`:

[`WoodcutConnection.BreakPoints`](/game-api/types/alta-crafting/woodcutconnection#m-breakpoints), [`WoodcutTreeBaker.NodeModified`](/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.BottomPoints`](/game-api/types/alta-crafting/woodcuttreemodel#m-bottompoints), [`WoodcutTreeModel.Core`](/game-api/types/alta-crafting/woodcuttreemodel#m-core), [`WoodcutTreeModel.WoodcutPoints`](/game-api/types/alta-crafting/woodcuttreemodel#m-woodcutpoints).
