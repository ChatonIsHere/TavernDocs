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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`ColorMaterialProperty`](/game-api/types/alta-utilities/colormaterialproperty), [`FloatMaterialProperty`](/game-api/types/alta-utilities/floatmaterialproperty), [`Vector3MaterialProperty`](/game-api/types/alta-utilities/vector3materialproperty)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialProperty(string propertyName)"}</code> | Creates a `MaterialProperty` from `propertyName`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-propertyindex" /><code>{"protected int PropertyIndex { get; }"}</code> | Shader property ID for the name given to the constructor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setonmaterial" /><code>{"abstract void SetOnMaterial(T value, Material material)"}</code> | Sets the value on a material. |
| <Link id="m-setonpropertyblock" /><code>{"abstract void SetOnPropertyBlock(T value, MaterialPropertyBlock propertyBlock)"}</code> | Sets the value on a `MaterialPropertyBlock`. |
