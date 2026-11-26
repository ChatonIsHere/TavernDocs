---
title: "WoodcutPointData"
description: "One damage point on a woodcut tree: a local position and how far it has been chopped (0 to 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutPointData

A **class** in `Root.Township`, no namespace.

One damage point on a woodcut tree: a local position and how far it has been chopped (0 to 1). Synced as a child of the tree, saved with it, and drives the tree's damage colouring.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`IColorModelPoint<WoodcutPointData>`](/game-api/types/global-i-l/icolormodelpoint-outt), [`IChildSyncable<WoodcutPointData, WoodcutPointCollectionSaveData.Element>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<WoodcutPointData>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`WoodcutPointCollection`](/game-api/types/global-t-x/woodcutpointcollection), [`WoodcutPointData`](/game-api/types/global-t-x/woodcutpointdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutPointData()"}</code> | Creates a `WoodcutPointData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Backing field for `Position`, set in the inspector. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haschangedsincelastwrite" /><code>{"private bool hasChangedSinceLastWrite"}</code> | Set when progress changes; cleared after the point is written to a sync stream. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | How far this cut point has been chopped, 0 to 1; saved and synced. Backing field for `Progress`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The tree entity this point belongs to. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | The point's local position on the tree. |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> | How chopped this point is, from 0 to 1. Setting it raises `Changed` and marks it for sync. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> Changed"}</code> | Raised when `Progress` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{" other)"}</code> | Copies another point's progress. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> collection)"}</code> | Does nothing. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{" other)"}</code> | True if both points have the same progress. |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | True if progress changed since it was last written to the network. |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the progress (7 bits). Clients apply what they read. |
| <Link id="m-takedamage" /><code>{"void TakeDamage(float damage)"}</code> | Server: adds the damage to the progress, clamped to 1. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | Marks the point as needing sync and raises `Changed`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Raises the change event when edited in the inspector. |

</details>

## Used in

Members of other types that take, return or hold a `WoodcutPointData`:

[`WoodcutConnection.BreakPoints`](/game-api/types/alta-crafting/woodcutconnection#m-breakpoints), [`WoodcutTreeBaker.NodeModified`](/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.BottomPoints`](/game-api/types/alta-crafting/woodcuttreemodel#m-bottompoints), [`WoodcutTreeModel.Core`](/game-api/types/alta-crafting/woodcuttreemodel#m-core), [`WoodcutTreeModel.WoodcutPoints`](/game-api/types/alta-crafting/woodcuttreemodel#m-woodcutpoints).
