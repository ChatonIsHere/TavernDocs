---
title: "ApplicationShutdownOrderAttribute"
description: "Class attribute that sets the order of a class's shutdown handlers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationShutdownOrderAttribute

A **class** in `Root.Township`, no namespace.

Class attribute that sets the order of a class's shutdown handlers. `ShutdownOrderComparer` sorts `ApplicationManager`'s shutdown delegates by it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationShutdownOrderAttribute(int order)"}</code> | Creates an `ApplicationShutdownOrderAttribute` from `order`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shutdownorder" /><code>{"int ShutdownOrder { get; private set; }"}</code> | The order value given in the constructor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getshutdownorder" /><code>{"static int GetShutdownOrder(Type targetType)"}</code> | Returns the order on the given type's attribute, or 0 when it has none. |
