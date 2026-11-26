---
title: "CustomMethodApplyAttribute"
description: "Prefab apply attribute that calls a named method on the component when the prefab is applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomMethodApplyAttribute

A **class** in `Alta.Attributes`, no namespace.

Prefab apply attribute that calls a named method on the component when the prefab is applied. The method should return bool (true means it applied); methods are looked up by reflection and cached.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomMethodApplyAttribute(string method)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"private static object[] empty"}</code> | Empty argument array for the reflection call. |
| <Link id="m-flags" /><code>{"private const BindingFlags flags"}</code> | Binding flags used to find the method. |
| <Link id="m-methods" /><code>{"private static Dictionary<int, MethodInfo> methods"}</code> | Cache of found methods that return bool. |
| <Link id="m-nonreturnmethods" /><code>{"private static Dictionary<int, MethodInfo> nonReturnMethods"}</code> | Cache of found methods that don't return bool. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-method" /><code>{"string Method { get; }"}</code> | Name of the method to call, public or private, instance or static. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Finds and calls `Method` on the component and returns its bool; a non-bool method is called, logs an error and counts as true. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethashcode" /><code>{"private static int GetHashCode(Type type, string method)"}</code> | Builds the cache key from the component type and method name. |

</details>
