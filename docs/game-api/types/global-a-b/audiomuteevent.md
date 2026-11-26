---
title: "AudioMuteEvent"
description: "Delegate for a mute change; the argument says whether audio is now muted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioMuteEvent

A **delegate** in `Root.Township`, no namespace.

Delegate for a mute change; the argument says whether audio is now muted.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AudioMuteEvent(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(bool IsMuted, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(bool IsMuted)"}</code> |

## Used in

Members of other types that take, return or hold a `AudioMuteEvent`:

[`AudioManager.AudioMutedEvent`](/game-api/types/global-a-b/audiomanager#m-audiomutedevent).
