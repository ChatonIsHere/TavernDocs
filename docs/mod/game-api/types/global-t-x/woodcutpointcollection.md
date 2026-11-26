---
title: "WoodcutPointCollection"
description: "The synced list of woodcut points on a tree model (WoodcutTreeModel)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutPointCollection

A **class** in `Root.Township`, the global namespace.

The synced list of woodcut points on a tree model (`WoodcutTreeModel`). Points can be generated in the editor from a skinned mesh's bones.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ChildSyncableCollection<WoodcutPointData, WoodcutPointCollection, WoodcutPointCollectionSaveData, WoodcutPointCollectionSaveData.Element>`](/mod/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata)
- **Derived types** [`WoodcutPointCollection`](/mod/game-api/types/global-t-x/woodcutpointcollection), [`WoodcutPointCollectionSaveData`](/mod/game-api/types/global-t-x/woodcutpointcollectionsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutPointCollection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatefrom" /><code>{"private GameObject generateFrom"}</code> | <span className="api-desc">Editor helper: drop in a skinned mesh object to generate points from its bones.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> | <span className="api-desc">Only syncs on a dedicated server, not in local test.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: if `generateFrom` is set, replaces the points with its skinned mesh's bone positions and clears the field.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws each point as a small sphere in a rainbow of colours.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WoodcutPointCollection`:

<div className="api-used-in">

[`WoodcutTreeModel.woodcutPointsCollection`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-woodcutpointscollection).

</div>
