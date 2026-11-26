---
title: "TransformSaveObject"
description: "Asset that stores one transform's saved position, rotation and name, and can load it back onto a transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformSaveObject

A **class** in `Root.Township`, the global namespace.

Asset that stores one transform's saved position, rotation and name, and can load it back onto a transform. Used in `TransformSaveCollection`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SaveableTransform`](/mod/game-api/types/global-s/saveabletransform)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformSaveObject()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transformname" /><code>{"private string transformName"}</code> | <span className="api-desc">Backing field for `TransformName`.</span> |
| <Link id="m-transformsave" /><code>{"private TransformSave transformSave"}</code> | <span className="api-desc">Backing field for `TransformSave`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Saved position.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | <span className="api-desc">Saved rotation.</span> |
| <Link id="m-transformname-2" /><code>{"string TransformName { get; set; }"}</code> | <span className="api-desc">Name of the transform that was saved.</span> |
| <Link id="m-transformsave-2" /><code>{"TransformSave TransformSave { get; }"}</code> | <span className="api-desc">The saved transform data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadinto" /><code>{"override bool LoadInto(Transform transform)"}</code> | <span className="api-desc">Applies the saved transform. Returns false if nothing is saved and warns if the name differs.</span> |
| <Link id="m-save" /><code>{"override void Save(Transform transform, bool isLocalSave)"}</code> | <span className="api-desc">Stores the transform's name and its local or world transform.</span> |
| <Link id="m-updatename" /><code>{"void UpdateName(string newName)"}</code> | <span className="api-desc">Does nothing in this build.</span> |

## Used in

Members of other types that take, return or hold a `TransformSaveObject`:

<div className="api-used-in">

[`TransformSaveCollection.savedTransforms`](/mod/game-api/types/global-t-x/transformsavecollection#m-savedtransforms), [`TransformSaveCollection.SavedTransforms`](/mod/game-api/types/global-t-x/transformsavecollection#m-savedtransforms-2), [`TransformSaveCollection.savedTransformsList`](/mod/game-api/types/global-t-x/transformsavecollection#m-savedtransformslist).

</div>
