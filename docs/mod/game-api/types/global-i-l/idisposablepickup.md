---
title: "IDisposablePickup"
description: "A pickup that gets used up, such as DisposablePickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDisposablePickup

An **interface** in `Root.Township`, the global namespace.

A pickup that gets used up, such as `DisposablePickup`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`DisposablePickup`](/mod/game-api/types/global-c-d/disposablepickup), [`DisposablePickupHolder`](/mod/game-api/types/global-c-d/disposablepickupholder)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; }"}</code> | <span className="api-desc">True once the pickup has been used up.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced)"}</code> | <span className="api-desc">Uses up the pickup; the flag forces it.</span> |
