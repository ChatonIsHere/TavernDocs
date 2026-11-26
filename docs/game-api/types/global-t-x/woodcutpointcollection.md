---
title: "WoodcutPointCollection"
description: "The synced list of woodcut points on a tree model (WoodcutTreeModel)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutPointCollection

A **class** in `Root.Township`, no namespace.

The synced list of woodcut points on a tree model (`WoodcutTreeModel`). Points can be generated in the editor from a skinned mesh's bones.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ChildSyncableCollection<WoodcutPointData, WoodcutPointCollection, WoodcutPointCollectionSaveData, WoodcutPointCollectionSaveData.Element>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata)
- **Derived types** [`WoodcutPointCollection`](/game-api/types/global-t-x/woodcutpointcollection), [`WoodcutPointCollectionSaveData`](/game-api/types/global-t-x/woodcutpointcollectionsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutPointCollection()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatefrom" /><code>{"private GameObject generateFrom"}</code> | Editor helper: drop in a skinned mesh object to generate points from its bones. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> | Only syncs on a dedicated server, not in local test. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: if `generateFrom` is set, replaces the points with its skinned mesh's bone positions and clears the field. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws each point as a small sphere in a rainbow of colours. |

</details>

## Used in

Members of other types that take, return or hold a `WoodcutPointCollection`:

[`WoodcutTreeModel.woodcutPointsCollection`](/game-api/types/alta-crafting/woodcuttreemodel#m-woodcutpointscollection).
