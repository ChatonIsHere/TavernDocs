---
title: "SaveableTransform"
description: "Base ScriptableObject for assets that store a transform's state and can apply it again."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SaveableTransform

An **abstract class** in `Root.Township`, the global namespace.

Base `ScriptableObject` for assets that store a transform's state and can apply it again. Subclasses are `TransformSaveObject` and `TransformSaveCollection`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`TransformSaveCollection`](/mod/game-api/types/global-t-x/transformsavecollection), [`TransformSaveObject`](/mod/game-api/types/global-t-x/transformsaveobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SaveableTransform()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createobject" /><code>{"static ScriptableObject CreateObject<T>(Transform transform, bool isLocalSave, string savePath)"}</code> | <span className="api-desc">Creates a new instance of the given subclass. The transform, flag and path are ignored here.</span> |
| <Link id="m-loadinto" /><code>{"abstract bool LoadInto(Transform transform)"}</code> | <span className="api-desc">Applies the stored state to a transform. Returns whether it worked.</span> |
| <Link id="m-save" /><code>{"abstract void Save(Transform transform, bool isLocalSave)"}</code> | <span className="api-desc">Stores a transform's state, in local or world space.</span> |
