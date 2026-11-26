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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`AnalyticsTools`](/mod/game-api/types/alta-console/analyticstools)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializeDelegate(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(object target, StringBuilder logger, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(object target, StringBuilder logger)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `SerializeDelegate`:

<div className="api-used-in">

[`AnalyticsTools.CreateSerializationFunction`](/mod/game-api/types/alta-console/analyticstools#m-createserializationfunction), [`AnalyticsTools.CreateSerializationHandler`](/mod/game-api/types/alta-console/analyticstools#m-createserializationhandler), [`AnalyticsTools.CreateSerializationStep`](/mod/game-api/types/alta-console/analyticstools#m-createserializationstep), [`AnalyticsTools.serializationHandlers`](/mod/game-api/types/alta-console/analyticstools#m-serializationhandlers), [`AnalyticsTools.SerializeFields`](/mod/game-api/types/alta-console/analyticstools#m-serializefields), [`AnalyticsTools.SerializeProperties`](/mod/game-api/types/alta-console/analyticstools#m-serializeproperties).

</div>
