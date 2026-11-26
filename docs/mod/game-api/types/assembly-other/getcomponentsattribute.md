---
title: "GetComponentsAttribute"
description: "Array field attribute that fills the field with all matching components on the same object when the prefab is applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsAttribute

A **class** in `Alta.Attributes`, the global namespace.

Array field attribute that fills the field with all matching components on the same object when the prefab is applied. Base for the plural `GetComponents` attributes.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)
- **Derived types** [`GetComponentsInChildrenAttribute`](/mod/game-api/types/assembly-other/getcomponentsinchildrenattribute), [`GetComponentsInParentAttribute`](/mod/game-api/types/assembly-other/getcomponentsinparentattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentsAttribute()"}</code> | <span className="api-desc">Creates a `GetComponentsAttribute` with default values.</span> |

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
| <Link id="m-includeinactive" /><code>{"bool IncludeInActive { get; set; }"}</code> | <span className="api-desc">Also includes inactive objects (used by the children and parent variants).</span> |
| <Link id="m-type" /><code>{"Type Type { get; set; }"}</code> | <span className="api-desc">Component type to look for. Defaults to the array's element type.</span> |
| <Link id="m-warnonempty" /><code>{"bool WarnOnEmpty { get; set; }"}</code> | <span className="api-desc">Meant to log when nothing is found, but the check is never reached.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"virtual Component[] GetComponents(Transform transform, Type type)"}</code> | <span className="api-desc">Finds the components. Overridden to search children or parents.</span> |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Replaces the array if the found components differ; returns true if it changed.</span> |
