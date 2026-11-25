---
title: "BitWriter.GetMoreData"
description: "delegate BitWriter.GetMoreData in Alta.Serialization.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BitWriter.GetMoreData

A **delegate** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`BitWriter`](/game-api/types/assembly-other/bitwriter)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetMoreData(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(uint[] data, ref uint wordIndex, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual uint[] EndInvoke(ref uint wordIndex, IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual uint[] Invoke(uint[] data, ref uint wordIndex)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GetMoreData`:

[`BitWriter.getMoreData`](/game-api/types/assembly-other/bitwriter#m-getmoredata), [`BitWriter.Initialize`](/game-api/types/assembly-other/bitwriter#m-initialize), [`Stream.ResizeDataFunc`](/game-api/types/assembly-other/stream#m-resizedatafunc), [`StreamWriter.StreamWriter`](/game-api/types/assembly-other/streamwriter#m-ctor).
