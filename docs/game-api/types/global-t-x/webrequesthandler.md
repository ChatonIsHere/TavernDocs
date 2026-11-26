---
title: "WebRequestHandler"
description: "Callback that receives a web response as text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebRequestHandler

A **delegate** in `Root.Township`, no namespace.

Callback that receives a web response as text. Nothing in the decompiled code uses it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WebRequestHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(string text, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(string text)"}</code> |
