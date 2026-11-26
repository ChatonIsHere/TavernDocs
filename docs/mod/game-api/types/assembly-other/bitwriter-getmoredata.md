---
title: "BitWriter.GetMoreData"
description: "Callback a BitWriter calls when its buffer is full to get a bigger one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BitWriter.GetMoreData

A **delegate** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

Callback a `BitWriter` calls when its buffer is full to get a bigger one. Called with null at start to get the first buffer. Without it, a full buffer logs a fatal error and corrupts the write.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`BitWriter`](/mod/game-api/types/assembly-other/bitwriter)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetMoreData(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(uint[] data, ref uint wordIndex, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual uint[] EndInvoke(ref uint wordIndex, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual uint[] Invoke(uint[] data, ref uint wordIndex)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `GetMoreData`:

[`BitWriter.getMoreData`](/mod/game-api/types/assembly-other/bitwriter#m-getmoredata), [`BitWriter.Initialize`](/mod/game-api/types/assembly-other/bitwriter#m-initialize), [`Stream.ResizeDataFunc`](/mod/game-api/types/assembly-other/stream#m-resizedatafunc), [`StreamWriter.StreamWriter`](/mod/game-api/types/assembly-other/streamwriter#m-ctor).
