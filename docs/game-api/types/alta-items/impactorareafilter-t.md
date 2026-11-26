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

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private static Collider[] colliders"}</code> | Shared buffer for the overlap check (20 slots). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger used when `IsLogging` is on. |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> | Layers the overlap check looks at. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"static bool IsLogging { get; set; }"}</code> | When true, logs how many colliders each check found. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkfilter" /><code>{"override bool CheckFilter("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out float multiplier)"}</code> | Checks a tiny sphere at the contact point for a collider with `T`; multiplier 1 if found, else 0. |
