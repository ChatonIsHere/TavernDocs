---
title: "CleanNullsAttribute"
description: "Prefab-apply attribute meant for removing null entries from a list field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CleanNullsAttribute

A **class** in `Alta.Attributes`, the global namespace.

Prefab-apply attribute meant for removing null entries from a list field. In this build `HandleApply` does nothing.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CleanNullsAttribute()"}</code> | <span className="api-desc">Creates a `CleanNullsAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Always returns false without changing the field.</span> |
