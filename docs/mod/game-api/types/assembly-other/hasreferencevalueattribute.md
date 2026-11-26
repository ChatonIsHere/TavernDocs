---
title: "HasReferenceValueAttribute"
description: "Prefab apply attribute for a bool field: keeps it set to whether another named field holds a non-null object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HasReferenceValueAttribute

A **class** in `Alta.Attributes`, the global namespace.

Prefab apply attribute for a bool field: keeps it set to whether another named field holds a non-null object.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HasReferenceValueAttribute(string targetField)"}</code> | Creates a `HasReferenceValueAttribute` from `targetField`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flags" /><code>{"private static readonly BindingFlags flags"}</code> | Binding flags used to find the target field (any access, instance or static, including base classes). |
| <Link id="m-targetfield" /><code>{"private string targetField"}</code> | Name of the field to check. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Sets the bool field to whether the target field is non-null and returns true if that changed it. |
