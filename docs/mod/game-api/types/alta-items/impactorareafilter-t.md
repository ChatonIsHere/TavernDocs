---
title: "ImpactorAreaFilter<T>"
description: "Base impactor filter that only allows hits whose contact point is inside a collider carrying a T component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorAreaFilter&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base impactor filter that only allows hits whose contact point is inside a collider carrying a `T` component.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactorFilter`](/mod/game-api/types/alta-items/impactorfilter)
- **Derived types** [`AnvilFilterSettings`](/mod/game-api/types/global-a-b/anvilfiltersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactorAreaFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> | <span className="api-desc">Shared buffer for the overlap check (20 slots).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger used when `IsLogging` is on.</span> |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> | <span className="api-desc">Layers the overlap check looks at.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"static bool IsLogging { get; set; }"}</code> | <span className="api-desc">When true, logs how many colliders each check found.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkfilter" /><code>{"override bool CheckFilter("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out float multiplier)"}</code> | <span className="api-desc">Checks a tiny sphere at the contact point for a collider with `T`; multiplier 1 if found, else 0.</span> |
