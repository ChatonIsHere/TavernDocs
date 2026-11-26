---
title: "GetComponentAttribute"
description: "Field attribute that fills the field with a component from the same object when the prefab is applied, probably in the editor (the caller isn't in this build)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentAttribute

A **class** in `Alta.Attributes`, no namespace.

Field attribute that fills the field with a component from the same object when the prefab is applied, probably in the editor (the caller isn't in this build). Base for the other `GetComponent` attributes.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)
- **Derived types** [`GetComponentIfEmptyAttribute`](/game-api/types/assembly-other/getcomponentifemptyattribute), [`GetComponentInChildrenAttribute`](/game-api/types/assembly-other/getcomponentinchildrenattribute), [`GetComponentInParentAttribute`](/game-api/types/assembly-other/getcomponentinparentattribute), [`GetComponentInPrefabRootAttribute`](/game-api/types/global-e-h/getcomponentinprefabrootattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentAttribute()"}</code> | Creates a `GetComponentAttribute` from `type`. |
| <Link id="m-ctor-2" /><code>{"GetComponentAttribute(Type type)"}</code> | Creates a `GetComponentAttribute` from `type`. |

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
| <Link id="m-type" /><code>{"Type Type { get; set; }"}</code> | Component type to look for. Defaults to the field's type. |
| <Link id="m-warnonnull" /><code>{"bool WarnOnNull { get; set; }"}</code> | Log an error when no component is found. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponent" /><code>{"virtual Component GetComponent(Transform transform, Type type)"}</code> | Finds the component. Overridden by subclasses to search children, parents or the prefab root. |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Sets the field to the found component; returns true if it changed. Logs an error if none found and `WarnOnNull` is set. |
