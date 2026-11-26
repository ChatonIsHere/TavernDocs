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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`AnalyticsTools`](/mod/game-api/types/alta-console/analyticstools)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FieldHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(object fieldValue, string fieldName, Type fieldType, StringBuilder logger, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(object fieldValue, string fieldName, Type fieldType, StringBuilder logger)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `FieldHandler`:

[`AnalyticsTools.CreateSerializationStep`](/mod/game-api/types/alta-console/analyticstools#m-createserializationstep).
