---
title: "SoundSourceEvent"
description: "Parameterless handler for SoundSource.OnPlay and SoundSource.OnStop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundSourceEvent

A **delegate** in `Root.Township`, no namespace.

Parameterless handler for `SoundSource.OnPlay` and `SoundSource.OnStop`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SoundSourceEvent(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke()"}</code> |

## Used in

Members of other types that take, return or hold a `SoundSourceEvent`:

[`SoundSource.OnPlay`](/game-api/types/global-s/soundsource#m-onplay), [`SoundSource.OnStop`](/game-api/types/global-s/soundsource#m-onstop).
