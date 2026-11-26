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
| <Link id="m-ctor" /><code>{"HasReferenceValueAttribute(string targetField)"}</code> | <span className="api-desc">Creates a `HasReferenceValueAttribute` from `targetField`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flags" /><code>{"private static readonly BindingFlags flags"}</code> | <span className="api-desc">Binding flags used to find the target field (any access, instance or static, including base classes).</span> |
| <Link id="m-targetfield" /><code>{"private string targetField"}</code> | <span className="api-desc">Name of the field to check.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Sets the bool field to whether the target field is non-null and returns true if that changed it.</span> |
