---
title: "TransformSaveCollection"
description: "class TransformSaveCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformSaveCollection

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SaveableTransform`](/game-api/types/global-s/saveabletransform)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformSaveCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> |  |
| <Link id="m-savedtransforms" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> savedTransforms"}</code> |  |
| <Link id="m-savedtransformslist" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> savedTransformsList"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-savedtransforms-2" /><code>{"Dictionary<string, "}<Link to="/game-api/types/global-t-x/transformsaveobject">{"TransformSaveObject"}</Link>{"> SavedTransforms { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteindividualsave" /><code>{"void DeleteIndividualSave(string name)"}</code> |  |
| <Link id="m-getsavefortransform" /><code>{"TransformSave GetSaveForTransform(Transform transform)"}</code> |  |
| <Link id="m-loadinto" /><code>{"override bool LoadInto(Transform transform)"}</code> |  |
| <Link id="m-save" /><code>{"override void Save(Transform transform, bool isLocalSave)"}</code> |  |
| <Link id="m-setupdictionary" /><code>{"void SetupDictionary()"}</code> |  |
| <Link id="m-recursiveload" /><code>{"private void RecursiveLoad(Transform transform)"}</code> |  |
| <Link id="m-recursivesave" /><code>{"private void RecursiveSave(Transform transform, bool isLocalSave)"}</code> |  |
| <Link id="m-savetransform" /><code>{"private void SaveTransform(Transform transform, bool isLocalSave)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TransformSaveCollection`:

[`HandGripConfiguration.RotationSnapshots.Closed`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-closed), [`HandGripConfiguration.RotationSnapshots.closedHandRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-closedhandrotations), [`HandGripConfiguration.RotationSnapshots.Default`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-default), [`HandGripConfiguration.RotationSnapshots.defaultRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-defaultrotations), [`HandGripConfiguration.RotationSnapshots.Open`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-open), [`HandGripConfiguration.RotationSnapshots.openHandRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-openhandrotations), [`HandGripConfiguration.RotationSnapshots.Splaid`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-splaid), [`HandGripConfiguration.RotationSnapshots.splaidHandRotations`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots#m-splaidhandrotations).
