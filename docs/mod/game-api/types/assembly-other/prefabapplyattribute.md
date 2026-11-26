---
title: "PrefabApplyAttribute"
description: "Base for field attributes that fill in or check a field when a prefab is applied in the editor, such as GetComponent and CacheTransform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabApplyAttribute

An **abstract class** in `Alta.Attributes`, the global namespace.

Base for field attributes that fill in or check a field when a prefab is applied in the editor, such as `GetComponent` and `CacheTransform`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`CacheTransformAttribute`](/mod/game-api/types/assembly-other/cachetransformattribute), [`CacheTransformIfEmptyAttribute`](/mod/game-api/types/assembly-other/cachetransformifemptyattribute), [`CleanNullsAttribute`](/mod/game-api/types/assembly-other/cleannullsattribute), [`CustomMethodApplyAttribute`](/mod/game-api/types/assembly-other/custommethodapplyattribute), [`GetComponentAttribute`](/mod/game-api/types/assembly-other/getcomponentattribute), [`GetComponentsAttribute`](/mod/game-api/types/assembly-other/getcomponentsattribute), [`GetComponentsInterfaceAttribute`](/mod/game-api/types/assembly-other/getcomponentsinterfaceattribute), [`HasReferenceValueAttribute`](/mod/game-api/types/assembly-other/hasreferencevalueattribute), [`MigrateSoundEffectAttribute`](/mod/game-api/types/global-m-o/migratesoundeffectattribute), [`ValidatePrefabApplyAttribute`](/mod/game-api/types/assembly-other/validateprefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PrefabApplyAttribute()"}</code> | <span className="api-desc">Creates a `PrefabApplyAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"abstract bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Sets up or checks the field on the component. Returns whether anything changed, probably so the prefab is marked dirty.</span> |
