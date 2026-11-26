---
title: "ElementDestroy"
description: "Callback for when a population's SpawnedElement is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElementDestroy

A **delegate** in `Root.Township`, `Alta.Populations`.

Callback for when a population's `SpawnedElement` is destroyed. Nothing in this build uses it.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElementDestroy(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world-generation/spawnedelement">{"SpawnedElement"}</Link>{" element, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world-generation/spawnedelement">{"SpawnedElement"}</Link>{" element)"}</code> | Calls every method on this delegate with these arguments. |
