---
title: "TransformSaveCollection"
description: "Asset that stores saved transforms for a hierarchy by object name and can load them back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformSaveCollection

A **class** in `Root.Township`, the global namespace.

Asset that stores saved transforms for a hierarchy by object name and can load them back. Saving is stubbed out in this build: `Save` only empties the list.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SaveableTransform`](/mod/game-api/types/global-s/saveabletransform)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformSaveCollection()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | <span className="api-desc">Name for this save in the editor. Default "Test".</span> |
| <Link id="m-savedtransforms" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> savedTransforms"}</code> | <span className="api-desc">Backing dictionary for `SavedTransforms`, saves by transform name. Built from the list on first read.</span> |
| <Link id="m-savedtransformslist" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> savedTransformsList"}</code> | <span className="api-desc">The saved transforms as a serialized list.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-savedtransforms-2" /><code>{"Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> SavedTransforms { get; }"}</code> | <span className="api-desc">Saved transforms by object name, built from the list on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteindividualsave" /><code>{"void DeleteIndividualSave(string name)"}</code> | <span className="api-desc">Does nothing in this build.</span> |
| <Link id="m-getsavefortransform" /><code>{"TransformSave GetSaveForTransform(Transform transform)"}</code> | <span className="api-desc">The saved transform for an object with this transform's name, or null.</span> |
| <Link id="m-loadinto" /><code>{"override bool LoadInto(Transform transform)"}</code> | <span className="api-desc">Applies the saved transforms to the hierarchy by name. False if the root isn't in the save.</span> |
| <Link id="m-save" /><code>{"override void Save(Transform transform, bool isLocalSave)"}</code> | <span className="api-desc">Clears the saved list and walks the hierarchy, but the per-transform save is empty, so nothing is stored.</span> |
| <Link id="m-setupdictionary" /><code>{"void SetupDictionary()"}</code> | <span className="api-desc">Rebuilds the name lookup from the saved list.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-recursiveload" /><code>{"private void RecursiveLoad(Transform transform)"}</code> | <span className="api-desc">Applies saved values to a transform and all its children, matched by name.</span> |
| <Link id="m-recursivesave" /><code>{"private void RecursiveSave(Transform transform, bool isLocalSave)"}</code> | <span className="api-desc">Calls `SaveTransform` on a transform and all its children.</span> |
| <Link id="m-savetransform" /><code>{"private void SaveTransform(Transform transform, bool isLocalSave)"}</code> | <span className="api-desc">Empty in this build, so `Save` only clears the list.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TransformSaveCollection`:

<div className="api-used-in">

[`HandGripConfiguration.RotationSnapshots.Closed`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-closed), [`HandGripConfiguration.RotationSnapshots.closedHandRotations`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-closedhandrotations), [`HandGripConfiguration.RotationSnapshots.Default`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-default), [`HandGripConfiguration.RotationSnapshots.defaultRotations`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-defaultrotations), [`HandGripConfiguration.RotationSnapshots.Open`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-open), [`HandGripConfiguration.RotationSnapshots.openHandRotations`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-openhandrotations), [`HandGripConfiguration.RotationSnapshots.Splaid`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-splaid), [`HandGripConfiguration.RotationSnapshots.splaidHandRotations`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-splaidhandrotations).

</div>
