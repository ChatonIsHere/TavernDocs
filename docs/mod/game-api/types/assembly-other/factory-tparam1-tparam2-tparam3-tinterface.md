---
title: "Factory<TParam1, TParam2, TParam3, TInterface>"
description: "Synchronous factory taking three parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory&lt;TParam1, TParam2, TParam3, TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Synchronous factory taking three parameters. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/mod/game-api/types/assembly-other/factory), [`IFactory<TParam1, TParam2, TParam3, TInterface>`](/mod/game-api/types/assembly-other/ifactory-intparam1-intparam2-intparam3-outtinterface), [`IFactory`](/mod/game-api/types/assembly-other/ifactory-intparam1-intparam2-intparam3-outtinterface), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> | <span className="api-desc">Creates a `Factory` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"virtual TInterface Create(TParam1 param1, TParam2 param2, TParam3 param3)"}</code> | <span className="api-desc">Calls `CreateInstance` with the three parameters, injects the result, registers it for disposal and returns it.</span> |
| <Link id="m-createinstance" /><code>{"protected abstract TInterface CreateInstance(TParam1 param1, TParam2 param2, TParam3 param3)"}</code> | <span className="api-desc">Abstract. Builds the raw instance from the three parameters.</span> |
