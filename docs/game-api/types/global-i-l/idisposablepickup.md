---
title: "IDisposablePickup"
description: "A pickup that gets used up, such as DisposablePickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDisposablePickup

An **interface** in `Root.Township`, no namespace.

A pickup that gets used up, such as `DisposablePickup`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`DisposablePickup`](/game-api/types/global-c-d/disposablepickup), [`DisposablePickupHolder`](/game-api/types/global-c-d/disposablepickupholder)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | True once the pickup has been used up. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced)"}</code> | Uses up the pickup; the flag forces it. |
