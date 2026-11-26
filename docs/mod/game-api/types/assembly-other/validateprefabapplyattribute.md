---
title: "ValidatePrefabApplyAttribute"
description: "Prefab-apply attribute for a bool field: when a prefab is applied, sets the field to the result of a named method on the component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidatePrefabApplyAttribute

A **class** in `Alta.Attributes`, the global namespace.

Prefab-apply attribute for a bool field: when a prefab is applied, sets the field to the result of a named method on the component.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidatePrefabApplyAttribute(string method)"}</code> | <span className="api-desc">Creates a `ValidatePrefabApplyAttribute` from `method`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flags" /><code>{"private static readonly BindingFlags flags"}</code> | <span className="api-desc">Binding flags for finding the method: instance or static, public or not.</span> |
| <Link id="m-method" /><code>{"private string method"}</code> | <span className="api-desc">Name of the bool method to call.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Calls the named method (searching base types) and writes its bool to the field. Returns true if the value changed.</span> |
