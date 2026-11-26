---
title: "SaveableTransform"
description: "Base ScriptableObject for assets that store a transform's state and can apply it again."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SaveableTransform

An **abstract class** in `Root.Township`, no namespace.

Base `ScriptableObject` for assets that store a transform's state and can apply it again. Subclasses are `TransformSaveObject` and `TransformSaveCollection`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`TransformSaveCollection`](/game-api/types/global-t-x/transformsavecollection), [`TransformSaveObject`](/game-api/types/global-t-x/transformsaveobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SaveableTransform()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createobject" /><code>{"static ScriptableObject CreateObject<T>(Transform transform, bool isLocalSave, string savePath)"}</code> | Creates a new instance of the given subclass. The transform, flag and path are ignored here. |
| <Link id="m-loadinto" /><code>{"abstract bool LoadInto(Transform transform)"}</code> | Applies the stored state to a transform. Returns whether it worked. |
| <Link id="m-save" /><code>{"abstract void Save(Transform transform, bool isLocalSave)"}</code> | Stores a transform's state, in local or world space. |
