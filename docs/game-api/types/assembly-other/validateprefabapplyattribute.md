---
title: "ValidatePrefabApplyAttribute"
description: "Prefab-apply attribute for a bool field: when a prefab is applied, sets the field to the result of a named method on the component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidatePrefabApplyAttribute

A **class** in `Alta.Attributes`, no namespace.

Prefab-apply attribute for a bool field: when a prefab is applied, sets the field to the result of a named method on the component.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidatePrefabApplyAttribute(string method)"}</code> | Creates a `ValidatePrefabApplyAttribute` from `method`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flags" /><code>{"private static readonly BindingFlags flags"}</code> | Binding flags for finding the method: instance or static, public or not. |
| <Link id="m-method" /><code>{"private string method"}</code> | Name of the bool method to call. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Calls the named method (searching base types) and writes its bool to the field. Returns true if the value changed. |
