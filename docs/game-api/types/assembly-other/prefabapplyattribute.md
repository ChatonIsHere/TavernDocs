---
title: "PrefabApplyAttribute"
description: "Base for field attributes that fill in or check a field when a prefab is applied in the editor, such as GetComponent and CacheTransform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabApplyAttribute

An **abstract class** in `Alta.Attributes`, no namespace.

Base for field attributes that fill in or check a field when a prefab is applied in the editor, such as `GetComponent` and `CacheTransform`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`CacheTransformAttribute`](/game-api/types/assembly-other/cachetransformattribute), [`CacheTransformIfEmptyAttribute`](/game-api/types/assembly-other/cachetransformifemptyattribute), [`CleanNullsAttribute`](/game-api/types/assembly-other/cleannullsattribute), [`CustomMethodApplyAttribute`](/game-api/types/assembly-other/custommethodapplyattribute), [`GetComponentAttribute`](/game-api/types/assembly-other/getcomponentattribute), [`GetComponentsAttribute`](/game-api/types/assembly-other/getcomponentsattribute), [`GetComponentsInterfaceAttribute`](/game-api/types/assembly-other/getcomponentsinterfaceattribute), [`HasReferenceValueAttribute`](/game-api/types/assembly-other/hasreferencevalueattribute), [`MigrateSoundEffectAttribute`](/game-api/types/global-m-o/migratesoundeffectattribute), [`ValidatePrefabApplyAttribute`](/game-api/types/assembly-other/validateprefabapplyattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PrefabApplyAttribute()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"abstract bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Sets up or checks the field on the component. Returns whether anything changed, probably so the prefab is marked dirty. |
