---
title: "Factory<TParam1, TParam2, TInterface>"
description: "Synchronous factory taking two parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory&lt;TParam1, TParam2, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

Synchronous factory taking two parameters. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/game-api/types/assembly-other/factory), [`IFactory<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-outtinterface), [`IFactory`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-outtinterface), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> | Creates a `Factory` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"virtual TInterface Create(TParam1 param1, TParam2 param2)"}</code> | Calls `CreateInstance` with both parameters, injects the result, registers it for disposal and returns it. |
| <Link id="m-createinstance" /><code>{"protected abstract TInterface CreateInstance(TParam1 param1, TParam2 param2)"}</code> | Abstract. Builds the raw instance from the two parameters. |
