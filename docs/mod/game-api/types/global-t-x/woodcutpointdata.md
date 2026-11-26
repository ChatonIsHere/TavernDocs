---
title: "WoodcutPointData"
description: "One damage point on a woodcut tree: a local position and how far it has been chopped (0 to 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutPointData

A **class** in `Root.Township`, the global namespace.

One damage point on a woodcut tree: a local position and how far it has been chopped (0 to 1). Synced as a child of the tree, saved with it, and drives the tree's damage colouring.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`IColorModelPoint<WoodcutPointData>`](/mod/game-api/types/global-i-l/icolormodelpoint-outt), [`IChildSyncable<WoodcutPointData, WoodcutPointCollectionSaveData.Element>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<WoodcutPointData>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`WoodcutPointCollection`](/mod/game-api/types/global-t-x/woodcutpointcollection), [`WoodcutPointData`](/mod/game-api/types/global-t-x/woodcutpointdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutPointData()"}</code> | <span className="api-desc">Creates a `WoodcutPointData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`, set in the inspector.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haschangedsincelastwrite" /><code>{"private bool hasChangedSinceLastWrite"}</code> | <span className="api-desc">Set when progress changes; cleared after the point is written to a sync stream.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">How far this cut point has been chopped, 0 to 1; saved and synced. Backing field for `Progress`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The tree entity this point belongs to.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">The point's local position on the tree.</span> |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> | <span className="api-desc">How chopped this point is, from 0 to 1. Setting it raises `Changed` and marks it for sync.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> Changed"}</code> | <span className="api-desc">Raised when `Progress` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{" other)"}</code> | <span className="api-desc">Copies another point's progress.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> collection)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{" other)"}</code> | <span className="api-desc">True if both points have the same progress.</span> |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | <span className="api-desc">True if progress changed since it was last written to the network.</span> |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the progress (7 bits). Clients apply what they read.</span> |
| <Link id="m-takedamage" /><code>{"void TakeDamage(float damage)"}</code> | <span className="api-desc">Server: adds the damage to the progress, clamped to 1.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | <span className="api-desc">Marks the point as needing sync and raises `Changed`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Raises the change event when edited in the inspector.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WoodcutPointData`:

<div className="api-used-in">

[`WoodcutConnection.BreakPoints`](/mod/game-api/types/alta-crafting/woodcutconnection#m-breakpoints), [`WoodcutTreeBaker.NodeModified`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/mod/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.BottomPoints`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-bottompoints), [`WoodcutTreeModel.Core`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-core), [`WoodcutTreeModel.WoodcutPoints`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-woodcutpoints).

</div>
