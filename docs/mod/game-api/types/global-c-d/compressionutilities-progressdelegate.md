---
title: "CompressionUtilities.ProgressDelegate"
description: "Private callback that receives progress messages while CompressionUtilities compresses or decompresses a directory."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompressionUtilities.ProgressDelegate

A **private delegate** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private callback that receives progress messages while `CompressionUtilities` compresses or decompresses a directory.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`CompressionUtilities`](/mod/game-api/types/global-c-d/compressionutilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressDelegate(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(string message, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(string message)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ProgressDelegate`:

<div className="api-used-in">

[`CompressionUtilities.CompressDirectory`](/mod/game-api/types/global-c-d/compressionutilities#m-compressdirectory), [`CompressionUtilities.Decompress`](/mod/game-api/types/global-c-d/compressionutilities#m-decompress), [`CompressionUtilities.DecompressFile`](/mod/game-api/types/global-c-d/compressionutilities#m-decompressfile-2).

</div>
