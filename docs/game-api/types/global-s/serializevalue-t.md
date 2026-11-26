---
title: "SerializeValue<T>"
description: "Delegate for a method that reads or writes one value of type T to a network Stream by reference."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializeValue&lt;T&gt;

A **delegate** in `Root.Township`, no namespace.

Delegate for a method that reads or writes one value of type `T` to a network `Stream` by reference.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializeValue(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref T value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref T value, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref T value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
