---
title: "TypeExtensions"
description: "Reflection helpers that look up fields and methods on a type and all its base types, so private members of base classes are found too."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeExtensions

A **static class** in `Alta.Attributes`, no namespace.

Reflection helpers that look up fields and methods on a type and all its base types, so private members of base classes are found too.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfieldincludingbase" /><code>{"static FieldInfo GetFieldIncludingBase(Type type, string name, BindingFlags flags)"}</code> | Returns the first field with the name found walking up from the type through its base types, or null. |
| <Link id="m-getfieldsincludingbase" /><code>{"static IEnumerable<FieldInfo> GetFieldsIncludingBase(Type type, BindingFlags flags) (iterator)"}</code> | Yields the fields matching the flags on the type and each of its base types. |
| <Link id="m-getmethodincludingbase" /><code>{"static MethodInfo GetMethodIncludingBase(Type type, string name, BindingFlags flags)"}</code> | Returns the first method with the name found walking up from the type through its base types, or null. |
| <Link id="m-getmethodsincludingbase" /><code>{"static IEnumerable<MethodInfo> GetMethodsIncludingBase(Type type, BindingFlags flags) (iterator)"}</code> | Yields the methods matching the flags on the type and each of its base types. |
