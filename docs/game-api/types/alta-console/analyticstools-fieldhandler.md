---
title: "AnalyticsTools.FieldHandler"
description: "Private delegate in AnalyticsTools for writing one field or property of an object into a log string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsTools.FieldHandler

A **private delegate** in `Root.Township`, `Alta.Analytics`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private delegate in `AnalyticsTools` for writing one field or property of an object into a log string. Used when building per-type serialization steps.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`AnalyticsTools`](/game-api/types/alta-console/analyticstools)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FieldHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(object fieldValue, string fieldName, Type fieldType, StringBuilder logger, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(object fieldValue, string fieldName, Type fieldType, StringBuilder logger)"}</code> |

## Used in

Members of other types that take, return or hold a `FieldHandler`:

[`AnalyticsTools.CreateSerializationStep`](/game-api/types/alta-console/analyticstools#m-createserializationstep).
