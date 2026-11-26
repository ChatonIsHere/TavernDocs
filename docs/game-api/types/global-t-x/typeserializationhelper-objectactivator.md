---
title: "TypeSerializationHelper.ObjectActivator"
description: "Delegate that creates a new object, compiled per type by TypeSerializationHelper.GetActivator as a fast constructor call."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TypeSerializationHelper.ObjectActivator

A **delegate** in `Root.Township`, no namespace.

Delegate that creates a new object, compiled per type by `TypeSerializationHelper.GetActivator` as a fast constructor call.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectActivator(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual object EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual object Invoke()"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ObjectActivator`:

[`SavingSystem.VersionSetup.activator`](/game-api/types/alta-world/savingsystem-versionsetup#m-activator), [`TypeSerializationHelper.GetActivator`](/game-api/types/global-t-x/typeserializationhelper#m-getactivator), [`TypeSerializationHelper.SubClassSerialization<T>.activator`](/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t#m-activator).
