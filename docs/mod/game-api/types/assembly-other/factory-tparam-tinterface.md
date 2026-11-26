---
title: "Factory<TParam, TInterface>"
description: "Synchronous factory taking one parameter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory&lt;TParam, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Synchronous factory taking one parameter. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/mod/game-api/types/assembly-other/factory), [`IFactory<TParam, TInterface>`](/mod/game-api/types/assembly-other/ifactory-intparam-outtinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory-intparam-outtinterface), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> | <span className="api-desc">Creates a `Factory` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"virtual TInterface Create(TParam param)"}</code> | <span className="api-desc">Calls `CreateInstance` with the parameter, injects the result, registers it for disposal and returns it.</span> |
| <Link id="m-createinstance" /><code>{"protected abstract TInterface CreateInstance(TParam param)"}</code> | <span className="api-desc">Abstract. Builds the raw instance from the parameter.</span> |
