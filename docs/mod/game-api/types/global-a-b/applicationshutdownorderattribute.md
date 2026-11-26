---
title: "ApplicationShutdownOrderAttribute"
description: "Class attribute that sets the order of a class's shutdown handlers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationShutdownOrderAttribute

A **class** in `Root.Township`, the global namespace.

Class attribute that sets the order of a class's shutdown handlers. `ShutdownOrderComparer` sorts `ApplicationManager`'s shutdown delegates by it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationShutdownOrderAttribute(int order)"}</code> | <span className="api-desc">Creates an `ApplicationShutdownOrderAttribute` from `order`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shutdownorder" /><code>{"int ShutdownOrder { get; private set; }"}</code> | <span className="api-desc">The order value given in the constructor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getshutdownorder" /><code>{"static int GetShutdownOrder(Type targetType)"}</code> | <span className="api-desc">Returns the order on the given type's attribute, or 0 when it has none.</span> |
