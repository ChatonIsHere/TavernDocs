---
title: "GetComponentsInterfaceAttribute"
description: "Array field attribute that fills the field with every component implementing an interface."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsInterfaceAttribute

A **class** in `Alta.Attributes`, no namespace.

Array field attribute that fills the field with every component implementing an interface. The field must hold `MonoBehaviour` elements.

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

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-includeinactive" /><code>{"bool IncludeInActive { get; set; }"}</code> | Settable but not used by this class or its children variant. |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | Interface type to look for, set in the constructor. |
| <Link id="m-warnonempty" /><code>{"bool WarnOnEmpty { get; set; }"}</code> | Meant to log when nothing is found, but the check is never reached. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"virtual Component[] GetComponents(Transform transform, Type type)"}</code> | Components on this object that implement the type. Overridden to search children. |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Replaces the array with a new `MonoBehaviour` array if the found components differ. |
