---
title: "VoiceChatScope"
description: "Who a player hears or talks to in voice chat: no one, friends only, or everyone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceChatScope

An **enum** in `Root.Township`, `Alta.Voice`.

Who a player hears or talks to in voice chat: no one, friends only, or everyone.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Values

| Member |
| --- |
| <Link id="m-everyone" /><code>{"Everyone = 2"}</code> |
| <Link id="m-friends" /><code>{"Friends = 1"}</code> |
| <Link id="m-noone" /><code>{"Noone = 0"}</code> |

## Used in

Members of other types that take, return or hold a `VoiceChatScope`:

[`IVoiceChat.AudibleScope`](/game-api/types/alta-networking/ivoicechat#m-audiblescope), [`VoiceChat.AudibleScope`](/game-api/types/alta-networking/voicechat#m-audiblescope).
