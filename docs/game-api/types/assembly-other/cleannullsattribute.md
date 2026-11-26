---
title: "CleanNullsAttribute"
description: "Prefab-apply attribute meant for removing null entries from a list field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CleanNullsAttribute

A **class** in `Alta.Attributes`, no namespace.

Prefab-apply attribute meant for removing null entries from a list field. In this build `HandleApply` does nothing.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CleanNullsAttribute()"}</code> | Creates a `CleanNullsAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Always returns false without changing the field. |
