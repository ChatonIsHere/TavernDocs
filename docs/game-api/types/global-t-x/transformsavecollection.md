---
title: "TransformSaveCollection"
description: "Asset that stores saved transforms for a hierarchy by object name and can load them back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformSaveCollection

A **class** in `Root.Township`, no namespace.

Asset that stores saved transforms for a hierarchy by object name and can load them back. Saving is stubbed out in this build: `Save` only empties the list.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SaveableTransform`](/game-api/types/global-s/saveabletransform)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformSaveCollection()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> |
| <Link id="m-savedtransforms" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> savedTransforms"}</code> |
| <Link id="m-savedtransformslist" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> savedTransformsList"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-savedtransforms-2" /><code>{"Dictionary<string, "}<Link to="/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> SavedTransforms { get; }"}</code> | Saved transforms by object name, built from the list on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteindividualsave" /><code>{"void DeleteIndividualSave(string name)"}</code> | Does nothing in this build. |
| <Link id="m-getsavefortransform" /><code>{"TransformSave GetSaveForTransform(Transform transform)"}</code> | The saved transform for an object with this transform's name, or null. |
| <Link id="m-loadinto" /><code>{"override bool LoadInto(Transform transform)"}</code> | Applies the saved transforms to the hierarchy by name. False if the root isn't in the save. |
| <Link id="m-save" /><code>{"override void Save(Transform transform, bool isLocalSave)"}</code> | Clears the saved list and walks the hierarchy, but the per-transform save is empty, so nothing is stored. |
| <Link id="m-setupdictionary" /><code>{"void SetupDictionary()"}</code> | Rebuilds the name lookup from the saved list. |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-recursiveload" /><code>{"private void RecursiveLoad(Transform transform)"}</code> |
| <Link id="m-recursivesave" /><code>{"private void RecursiveSave(Transform transform, bool isLocalSave)"}</code> |
| <Link id="m-savetransform" /><code>{"private void SaveTransform(Transform transform, bool isLocalSave)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TransformSaveCollection`:

[`HandGripConfiguration.RotationSnapshots.Closed`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-closed), [`HandGripConfiguration.RotationSnapshots.closedHandRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-closedhandrotations), [`HandGripConfiguration.RotationSnapshots.Default`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-default), [`HandGripConfiguration.RotationSnapshots.defaultRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-defaultrotations), [`HandGripConfiguration.RotationSnapshots.Open`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-open), [`HandGripConfiguration.RotationSnapshots.openHandRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-openhandrotations), [`HandGripConfiguration.RotationSnapshots.Splaid`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-splaid), [`HandGripConfiguration.RotationSnapshots.splaidHandRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-splaidhandrotations).
