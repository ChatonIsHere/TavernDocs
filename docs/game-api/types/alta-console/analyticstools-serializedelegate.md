---
title: "AnalyticsTools.SerializeDelegate"
description: "Private delegate in the obsolete AnalyticsTools: a cached per-type method that writes an object's analytics fields to a StringBuilder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsTools.SerializeDelegate

A **private delegate** in `Root.Township`, `Alta.Analytics`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private delegate in the obsolete `AnalyticsTools`: a cached per-type method that writes an object's analytics fields to a `StringBuilder`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`AnalyticsTools`](/game-api/types/alta-console/analyticstools)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializeDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(object target, StringBuilder logger, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(object target, StringBuilder logger)"}</code> |

## Used in

Members of other types that take, return or hold a `SerializeDelegate`:

[`AnalyticsTools.CreateSerializationFunction`](/game-api/types/alta-console/analyticstools#m-createserializationfunction), [`AnalyticsTools.CreateSerializationHandler`](/game-api/types/alta-console/analyticstools#m-createserializationhandler), [`AnalyticsTools.CreateSerializationStep`](/game-api/types/alta-console/analyticstools#m-createserializationstep), [`AnalyticsTools.serializationHandlers`](/game-api/types/alta-console/analyticstools#m-serializationhandlers), [`AnalyticsTools.SerializeFields`](/game-api/types/alta-console/analyticstools#m-serializefields), [`AnalyticsTools.SerializeProperties`](/game-api/types/alta-console/analyticstools#m-serializeproperties).
