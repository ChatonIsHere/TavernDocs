---
title: "SimpleHashedGeneralValue<T>"
description: "A HashedGeneralValue asset that can be marked as turned off on simple servers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleHashedGeneralValue&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta`.

A `HashedGeneralValue` asset that can be marked as turned off on simple servers.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`HashedGeneralValue<T>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`IDisableOnSimpleServer`](/mod/game-api/types/alta-utilities/idisableonsimpleserver)
- **Derived types** [`ChiselDefinition`](/mod/game-api/types/alta-crafting/chiseldefinition), [`GenericCraftingRecipe`](/mod/game-api/types/alta-crafting/genericcraftingrecipe), [`Page`](/mod/game-api/types/alta-items/page)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SimpleHashedGeneralValue()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonsimpleserver" /><code>{"private bool isDisabledOnSimpleServer"}</code> | <span className="api-desc">Backing field for `IsDisabledOnSimpleServer`, set in the asset.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonsimpleserver-2" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | <span className="api-desc">True if this value is turned off on simple servers.</span> |
| <Link id="m-simpleall" /><code>{"static IEnumerable<T> SimpleAll { get; }"}</code> | <span className="api-desc">Every value of this type except the ones turned off on simple servers.</span> |
