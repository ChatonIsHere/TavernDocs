---
title: "CustomMethodApplyAttribute"
description: "Prefab apply attribute that calls a named method on the component when the prefab is applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomMethodApplyAttribute

A **class** in `Alta.Attributes`, the global namespace.

Prefab apply attribute that calls a named method on the component when the prefab is applied. The method should return bool (true means it applied); methods are looked up by reflection and cached.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomMethodApplyAttribute(string method)"}</code> | <span className="api-desc">Creates a `CustomMethodApplyAttribute` from `method`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"private static object[] empty"}</code> | <span className="api-desc">Empty argument array for the reflection call.</span> |
| <Link id="m-flags" /><code>{"private const BindingFlags flags"}</code> | <span className="api-desc">Binding flags used to find the method.</span> |
| <Link id="m-methods" /><code>{"private static Dictionary<int, MethodInfo> methods"}</code> | <span className="api-desc">Cache of found methods that return bool.</span> |
| <Link id="m-nonreturnmethods" /><code>{"private static Dictionary<int, MethodInfo> nonReturnMethods"}</code> | <span className="api-desc">Cache of found methods that don't return bool.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-method" /><code>{"string Method { get; }"}</code> | <span className="api-desc">Name of the method to call, public or private, instance or static.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Finds and calls `Method` on the component and returns its bool; a non-bool method is called, logs an error and counts as true.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethashcode" /><code>{"private static int GetHashCode(Type type, string method)"}</code> | <span className="api-desc">Builds the cache key from the component type and method name.</span> |

</details>
