---
title: "TransformSaveObject"
description: "class TransformSaveObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformSaveObject

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SaveableTransform`](/game-api/types/global-s/saveabletransform)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformSaveObject()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-transformname" /><code>{"private string transformName"}</code> |
| <Link id="m-transformsave" /><code>{"private TransformSave transformSave"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> |
| <Link id="m-transformname-2" /><code>{"string TransformName { get; set; }"}</code> |
| <Link id="m-transformsave-2" /><code>{"TransformSave TransformSave { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-loadinto" /><code>{"override bool LoadInto(Transform transform)"}</code> |
| <Link id="m-save" /><code>{"override void Save(Transform transform, bool isLocalSave)"}</code> |
| <Link id="m-updatename" /><code>{"void UpdateName(string newName)"}</code> |

## Used in

Members of other types that take, return or hold a `TransformSaveObject`:

[`TransformSaveCollection.savedTransforms`](/game-api/types/global-t-x/transformsavecollection#m-savedtransforms), [`TransformSaveCollection.SavedTransforms`](/game-api/types/global-t-x/transformsavecollection#m-savedtransforms-2), [`TransformSaveCollection.savedTransformsList`](/game-api/types/global-t-x/transformsavecollection#m-savedtransformslist).
