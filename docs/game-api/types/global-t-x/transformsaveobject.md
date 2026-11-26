---
title: "TransformSaveObject"
description: "Asset that stores one transform's saved position, rotation and name, and can load it back onto a transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformSaveObject

A **class** in `Root.Township`, no namespace.

Asset that stores one transform's saved position, rotation and name, and can load it back onto a transform. Used in `TransformSaveCollection`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SaveableTransform`](/game-api/types/global-s/saveabletransform)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformSaveObject()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transformname" /><code>{"private string transformName"}</code> | Backing field for `TransformName`. |
| <Link id="m-transformsave" /><code>{"private TransformSave transformSave"}</code> | Backing field for `TransformSave`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Saved position. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | Saved rotation. |
| <Link id="m-transformname-2" /><code>{"string TransformName { get; set; }"}</code> | Name of the transform that was saved. |
| <Link id="m-transformsave-2" /><code>{"TransformSave TransformSave { get; }"}</code> | The saved transform data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadinto" /><code>{"override bool LoadInto(Transform transform)"}</code> | Applies the saved transform. Returns false if nothing is saved and warns if the name differs. |
| <Link id="m-save" /><code>{"override void Save(Transform transform, bool isLocalSave)"}</code> | Stores the transform's name and its local or world transform. |
| <Link id="m-updatename" /><code>{"void UpdateName(string newName)"}</code> | Does nothing in this build. |

## Used in

Members of other types that take, return or hold a `TransformSaveObject`:

[`TransformSaveCollection.savedTransforms`](/game-api/types/global-t-x/transformsavecollection#m-savedtransforms), [`TransformSaveCollection.SavedTransforms`](/game-api/types/global-t-x/transformsavecollection#m-savedtransforms-2), [`TransformSaveCollection.savedTransformsList`](/game-api/types/global-t-x/transformsavecollection#m-savedtransformslist).
