---
title: "GetComponentAttribute"
description: "class GetComponentAttribute in Alta.Attributes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentAttribute

A **class** in `Alta.Attributes`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)
- **Derived types** [`GetComponentIfEmptyAttribute`](/game-api/types/assembly-other/getcomponentifemptyattribute), [`GetComponentInChildrenAttribute`](/game-api/types/assembly-other/getcomponentinchildrenattribute), [`GetComponentInParentAttribute`](/game-api/types/assembly-other/getcomponentinparentattribute), [`GetComponentInPrefabRootAttribute`](/game-api/types/global-e-h/getcomponentinprefabrootattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GetComponentAttribute()"}</code> |
| <Link id="m-ctor-2" /><code>{"GetComponentAttribute(Type type)"}</code> |

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
| <Link id="m-type" /><code>{"Type Type { get; set; }"}</code> |
| <Link id="m-warnonnull" /><code>{"bool WarnOnNull { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getcomponent" /><code>{"virtual Component GetComponent(Transform transform, Type type)"}</code> |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> |
