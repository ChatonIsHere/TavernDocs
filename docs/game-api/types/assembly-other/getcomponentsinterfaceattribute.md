---
title: "GetComponentsInterfaceAttribute"
description: "class GetComponentsInterfaceAttribute in Alta.Attributes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsInterfaceAttribute

A **class** in `Alta.Attributes`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)
- **Derived types** [`GetComponentsInChildrenInterfaceAttribute`](/game-api/types/assembly-other/getcomponentsinchildreninterfaceattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GetComponentsInterfaceAttribute(Type type)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-includeinactive" /><code>{"bool IncludeInActive { get; set; }"}</code> |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> |
| <Link id="m-warnonempty" /><code>{"bool WarnOnEmpty { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getcomponents" /><code>{"virtual Component[] GetComponents(Transform transform, Type type)"}</code> |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> |
