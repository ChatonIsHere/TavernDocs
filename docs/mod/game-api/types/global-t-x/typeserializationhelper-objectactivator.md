---
title: "TypeSerializationHelper.ObjectActivator"
description: "Delegate that creates a new object, compiled per type by TypeSerializationHelper.GetActivator as a fast constructor call."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.ObjectActivator

A **delegate** in `Root.Township`, the global namespace.

Delegate that creates a new object, compiled per type by `TypeSerializationHelper.GetActivator` as a fast constructor call.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/mod/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectActivator(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual object EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual object Invoke()"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ObjectActivator`:

<div className="api-used-in">

[`SavingSystem.VersionSetup.activator`](/mod/game-api/types/alta-world/savingsystem-versionsetup#m-activator), [`TypeSerializationHelper.GetActivator`](/mod/game-api/types/global-t-x/typeserializationhelper#m-getactivator), [`TypeSerializationHelper.SubClassSerialization<T>.activator`](/mod/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t#m-activator).

</div>
