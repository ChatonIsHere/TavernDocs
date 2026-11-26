---
title: "VoiceChatScope"
description: "Whose voices the local player can hear (VoiceChat.AudibleScope): no one, friends only, or everyone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceChatScope

An **enum** in `Root.Township`, `Alta.Voice`.

Whose voices the local player can hear (`VoiceChat.AudibleScope`): no one, friends only, or everyone. Toggled by the mute non-friends quick action.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Values

| Member |
| --- |
| <Link id="m-everyone" /><code>{"Everyone = 2"}</code> |
| <Link id="m-friends" /><code>{"Friends = 1"}</code> |
| <Link id="m-noone" /><code>{"Noone = 0"}</code> |

## Used in

Members of other types that take, return or hold a `VoiceChatScope`:

<div className="api-used-in">

[`IVoiceChat.AudibleScope`](/mod/game-api/types/alta-networking/ivoicechat#m-audiblescope), [`VoiceChat.AudibleScope`](/mod/game-api/types/alta-networking/voicechat#m-audiblescope).

</div>
