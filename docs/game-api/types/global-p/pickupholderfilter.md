---
title: "PickupHolderFilter"
description: "delegate PickupHolderFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupHolderFilter

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupHolderFilter(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isValid, IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupHolderFilter`:

[`PickupHolder.HoldFilter`](/game-api/types/global-p/pickupholder#m-holdfilter).
