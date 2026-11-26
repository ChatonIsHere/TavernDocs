---
title: "Factory"
description: "Base for the VContainer factories."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Base for the VContainer factories. Holds the injected container and a disposer, and disposes everything it created when it is disposed.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/mod/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`Factory<TInterface>`](/mod/game-api/types/assembly-other/factory-tinterface), [`Factory<TParam, TInterface>`](/mod/game-api/types/assembly-other/factory-tparam-tinterface), [`Factory<TParam1, TParam2, TInterface>`](/mod/game-api/types/assembly-other/factory-tparam1-tparam2-tinterface), [`Factory<TParam1, TParam2, TParam3, TInterface>`](/mod/game-api/types/assembly-other/factory-tparam1-tparam2-tparam3-tinterface), [`FactoryAsync`](/mod/game-api/types/assembly-other/factoryasync), [`FactoryAsyncPooled<TConcrete, TInterface>`](/mod/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> | <span className="api-desc">Creates a `Factory` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"protected IObjectResolver container"}</code> | <span className="api-desc">The injected VContainer resolver, used to inject or instantiate what the factory creates.</span> |
| <Link id="m-disposer" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/idisposer">{"IDisposer"}</Link>{" disposer"}</code> | <span className="api-desc">Injected disposer that collects created instances to dispose with the factory.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"virtual void Dispose()"}</code> | <span className="api-desc">Disposes every `IDisposable` instance this factory created, through the disposer.</span> |
| <Link id="m-tryadddisposable" /><code>{"protected void TryAddDisposable<TInstance>(TInstance instance)"}</code> | <span className="api-desc">Adds the instance to the disposer if it implements `IDisposable`, so the factory's `Dispose` cleans it up.</span> |
