---
title: "CacheTransformIfEmptyAttribute"
description: "Prefab-apply attribute for a Transform field: fills it with the component's own transform only when the field is empty."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CacheTransformIfEmptyAttribute

A **class** in `Alta.Attributes`, the global namespace.

Prefab-apply attribute for a `Transform` field: fills it with the component's own transform only when the field is empty.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CacheTransformIfEmptyAttribute()"}</code> | Creates a `CacheTransformIfEmptyAttribute` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. Not used. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Sets the field to the component's transform if it's null. Returns true when it changed the field. |
