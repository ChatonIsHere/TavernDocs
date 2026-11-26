---
title: "CacheTransformAttribute"
description: "Prefab-apply attribute for a Transform field: when the prefab is applied, sets the field to the component's own transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CacheTransformAttribute

A **class** in `Alta.Attributes`, the global namespace.

Prefab-apply attribute for a `Transform` field: when the prefab is applied, sets the field to the component's own transform.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CacheTransformAttribute()"}</code> | Creates a `CacheTransformAttribute` with default values. |

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
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Writes the component's own transform into the field. Returns true when the value changed. |
