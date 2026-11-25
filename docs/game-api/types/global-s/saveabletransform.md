---
title: "SaveableTransform"
description: "abstract class SaveableTransform in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SaveableTransform

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`TransformSaveCollection`](/game-api/types/global-t-x/transformsavecollection), [`TransformSaveObject`](/game-api/types/global-t-x/transformsaveobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SaveableTransform()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createobject" /><code>{"static ScriptableObject CreateObject<T>(Transform transform, bool isLocalSave, string savePath)"}</code> |  |
| <Link id="m-loadinto" /><code>{"abstract bool LoadInto(Transform transform)"}</code> |  |
| <Link id="m-save" /><code>{"abstract void Save(Transform transform, bool isLocalSave)"}</code> |  |
