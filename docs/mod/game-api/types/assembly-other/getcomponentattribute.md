---
title: "GetComponentAttribute"
description: "Field attribute that fills the field with a component from the same object when the prefab is applied, probably in the editor (the caller isn't in this build)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentAttribute

A **class** in `Alta.Attributes`, the global namespace.

Field attribute that fills the field with a component from the same object when the prefab is applied, probably in the editor (the caller isn't in this build). Base for the other `GetComponent` attributes.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)
- **Derived types** [`GetComponentIfEmptyAttribute`](/mod/game-api/types/assembly-other/getcomponentifemptyattribute), [`GetComponentInChildrenAttribute`](/mod/game-api/types/assembly-other/getcomponentinchildrenattribute), [`GetComponentInParentAttribute`](/mod/game-api/types/assembly-other/getcomponentinparentattribute), [`GetComponentInPrefabRootAttribute`](/mod/game-api/types/global-e-h/getcomponentinprefabrootattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentAttribute()"}</code> | <span className="api-desc">Creates a `GetComponentAttribute` from `type`.</span> |
| <Link id="m-ctor-2" /><code>{"GetComponentAttribute(Type type)"}</code> | <span className="api-desc">Creates a `GetComponentAttribute` from `type`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; set; }"}</code> | <span className="api-desc">Component type to look for. Defaults to the field's type.</span> |
| <Link id="m-warnonnull" /><code>{"bool WarnOnNull { get; set; }"}</code> | <span className="api-desc">Log an error when no component is found.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponent" /><code>{"virtual Component GetComponent(Transform transform, Type type)"}</code> | <span className="api-desc">Finds the component. Overridden by subclasses to search children, parents or the prefab root.</span> |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Sets the field to the found component; returns true if it changed. Logs an error if none found and `WarnOnNull` is set.</span> |
