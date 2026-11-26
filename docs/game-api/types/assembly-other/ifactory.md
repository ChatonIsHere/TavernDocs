---
title: "IFactory"
description: "Base interface for the VContainer layer's factories."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactory

An **interface** in `Alta.VContainerLayer.Runtime`, no namespace.

Base interface for the VContainer layer's factories. The generic versions add `Create` with zero to three parameters; all are disposable.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`
- **Derived types** [`Factory`](/game-api/types/assembly-other/factory), [`Factory<TInterface>`](/game-api/types/assembly-other/factory-tinterface), [`Factory<TParam, TInterface>`](/game-api/types/assembly-other/factory-tparam-tinterface), [`Factory<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tinterface), [`Factory<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tparam3-tinterface), [`FactoryAsync<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tconcrete-tinterface), [`FactoryAsync<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam-tconcrete-tinterface), [`FactoryAsync<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tparam3-tconcrete-tinterface), [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tconcrete-tinterface), [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface), [`IFactory<TInstance>`](/game-api/types/assembly-other/ifactory-outtinstance), [`IFactory<TParam, TInterface>`](/game-api/types/assembly-other/ifactory-intparam-outtinterface), [`IFactory<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-outtinterface), [`IFactory<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-intparam3-outtinterface), [`IFactoryAsync<TInterface>`](/game-api/types/assembly-other/ifactoryasync-tinterface), [`IFactoryAsync<TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam-tinterface), [`IFactoryAsync<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-tinterface), [`IFactoryAsync<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-intparam3-tinterface), [`IFactoryAsyncPooled<TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-tinterface), [`IFactoryAsyncPooled<TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam-tinterface), [`IFactoryAsyncPooled<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-tinterface), [`IFactoryAsyncPooled<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-intparam3-tinterface)
