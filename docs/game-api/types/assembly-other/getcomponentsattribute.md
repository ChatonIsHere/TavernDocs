---
title: "GetComponentsAttribute"
description: "Array field attribute that fills the field with all matching components on the same object when the prefab is applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsAttribute

A **class** in `Alta.Attributes`, no namespace.

Array field attribute that fills the field with all matching components on the same object when the prefab is applied. Base for the plural `GetComponents` attributes.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)
- **Derived types** [`GetComponentsInChildrenAttribute`](/game-api/types/assembly-other/getcomponentsinchildrenattribute), [`GetComponentsInParentAttribute`](/game-api/types/assembly-other/getcomponentsinparentattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GetComponentsAttribute()"}</code> |

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
| <Link id="m-includeinactive" /><code>{"bool IncludeInActive { get; set; }"}</code> | Also includes inactive objects (used by the children and parent variants). |
| <Link id="m-type" /><code>{"Type Type { get; set; }"}</code> | Component type to look for. Defaults to the array's element type. |
| <Link id="m-warnonempty" /><code>{"bool WarnOnEmpty { get; set; }"}</code> | Meant to log when nothing is found, but the check is never reached. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"virtual Component[] GetComponents(Transform transform, Type type)"}</code> | Finds the components. Overridden to search children or parents. |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Replaces the array if the found components differ; returns true if it changed. |
