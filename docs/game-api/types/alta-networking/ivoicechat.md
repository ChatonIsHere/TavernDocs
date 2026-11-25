---
title: "IVoiceChat"
description: "interface IVoiceChat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IVoiceChat

An **interface** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`VoiceChat`](/game-api/types/alta-networking/voicechat)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-audiblescope" /><code><Link to="/game-api/types/alta-networking/voicechatscope">{"VoiceChatScope"}</Link>{" AudibleScope { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cycleaudiblescope" /><code>{"void CycleAudibleScope()"}</code> |  |
| <Link id="m-getplayermuted" /><code>{"bool GetPlayerMuted(int player)"}</code> |  |
| <Link id="m-setplayermuted" /><code>{"void SetPlayerMuted(int player, bool isMuted)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IVoiceChat`:

[`MuteNonFriendsActionIcon.voiceChat`](/game-api/types/alta-player/mutenonfriendsactionicon#m-voicechat), [`MuteNonFriendsQuickAccessAction.voiceChat`](/game-api/types/alta-player/mutenonfriendsquickaccessaction#m-voicechat), [`InterfaceResolver.CreateVoiceChat`](/game-api/types/game-other-namespaces/interfaceresolver#m-createvoicechat), [`InterfaceResolver.iVoiceChat`](/game-api/types/game-other-namespaces/interfaceresolver#m-ivoicechat), [`InterfaceResolver.IVoiceChat`](/game-api/types/game-other-namespaces/interfaceresolver#m-ivoicechat-2), [`RecentPlayers.voiceChat`](/game-api/types/global-q-r/recentplayers#m-voicechat), [`RecentPlayers.VoiceChat`](/game-api/types/global-q-r/recentplayers#m-voicechat-2).
