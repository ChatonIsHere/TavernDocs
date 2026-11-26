---
title: "SoundSourceEvent"
description: "Parameterless handler for SoundSource.OnPlay and SoundSource.OnStop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundSourceEvent

A **delegate** in `Root.Township`, the global namespace.

Parameterless handler for `SoundSource.OnPlay` and `SoundSource.OnStop`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SoundSourceEvent(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke()"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SoundSourceEvent`:

[`SoundSource.OnPlay`](/mod/game-api/types/global-s/soundsource#m-onplay), [`SoundSource.OnStop`](/mod/game-api/types/global-s/soundsource#m-onstop).
