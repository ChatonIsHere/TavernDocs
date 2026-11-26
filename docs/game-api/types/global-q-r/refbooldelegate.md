---
title: "RefBoolDelegate"
description: "Veto callback: listeners get a ref bool they can set false to block something."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RefBoolDelegate

A **delegate** in `Root.Township`, no namespace.

Veto callback: listeners get a `ref bool` they can set false to block something. Used by events like `Embeddable.CheckEmbed` and `ItemLevitator.CheckHover`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RefBoolDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isValid, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isValid, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isValid)"}</code> |

## Used in

Members of other types that take, return or hold a `RefBoolDelegate`:

[`ItemLevitator.CheckHover`](/game-api/types/alta-player/itemlevitator#m-checkhover), [`Embeddable.CheckEmbed`](/game-api/types/global-e-h/embeddable#m-checkembed).
