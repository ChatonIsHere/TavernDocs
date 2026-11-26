---
title: "LerpDelegate"
description: "Delegate taking a progress value from 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpDelegate

A **delegate** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Delegate taking a progress value from 0 to 1. Not used elsewhere in this build.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LerpDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(float progress, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(float progress)"}</code> |
