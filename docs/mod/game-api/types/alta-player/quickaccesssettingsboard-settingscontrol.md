---
title: "QuickAccessSettingsBoard.SettingsControl"
description: "Private delegate for the per frame show or hide step during the board's slide animation; it gets the board's position and a running distance it updates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessSettingsBoard.SettingsControl

A **private delegate** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private delegate for the per frame show or hide step during the board's slide animation; it gets the board's position and a running distance it updates.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`QuickAccessSettingsBoard`](/mod/game-api/types/alta-player/quickaccesssettingsboard)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsControl(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(float position, ref float distance, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref float distance, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(float position, ref float distance)"}</code> | Calls every method on this delegate with these arguments. |
