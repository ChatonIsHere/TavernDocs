---
title: "ImpactorAreaFilter<T>"
description: "abstract class ImpactorAreaFilter<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorAreaFilter&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactorFilter`](/game-api/types/alta-items/impactorfilter)
- **Derived types** [`AnvilFilterSettings`](/game-api/types/global-a-b/anvilfiltersettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ImpactorAreaFilter()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-islogging" /><code>{"static bool IsLogging { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-checkfilter" /><code>{"override bool CheckFilter("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out float multiplier)"}</code> |
