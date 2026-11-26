---
title: "MaterialProperty<T>"
description: "Base for a typed shader property that can be set on a material or on a MaterialPropertyBlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialProperty&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

Base for a typed shader property that can be set on a material or on a `MaterialPropertyBlock`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`ColorMaterialProperty`](/mod/game-api/types/alta-utilities/colormaterialproperty), [`FloatMaterialProperty`](/mod/game-api/types/alta-utilities/floatmaterialproperty), [`Vector3MaterialProperty`](/mod/game-api/types/alta-utilities/vector3materialproperty)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialProperty(string propertyName)"}</code> | <span className="api-desc">Creates a `MaterialProperty` from `propertyName`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-propertyindex" /><code>{"protected int PropertyIndex { get; }"}</code> | <span className="api-desc">Shader property ID for the name given to the constructor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setonmaterial" /><code>{"abstract void SetOnMaterial(T value, Material material)"}</code> | <span className="api-desc">Sets the value on a material.</span> |
| <Link id="m-setonpropertyblock" /><code>{"abstract void SetOnPropertyBlock(T value, MaterialPropertyBlock propertyBlock)"}</code> | <span className="api-desc">Sets the value on a `MaterialPropertyBlock`.</span> |
