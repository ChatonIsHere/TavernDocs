---
title: "Factory<TParam, TInterface>"
description: "Synchronous factory taking one parameter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory&lt;TParam, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

Synchronous factory taking one parameter. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/game-api/types/assembly-other/factory), [`IFactory<TParam, TInterface>`](/game-api/types/assembly-other/ifactory-intparam-outtinterface), [`IFactory`](/game-api/types/assembly-other/ifactory-intparam-outtinterface), `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"virtual TInterface Create(TParam param)"}</code> | Calls `CreateInstance` with the parameter, injects the result, registers it for disposal and returns it. |
| <Link id="m-createinstance" /><code>{"protected abstract TInterface CreateInstance(TParam param)"}</code> | Abstract. Builds the raw instance from the parameter. |
