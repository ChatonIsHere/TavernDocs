---
title: "IVoiceChat"
description: "The voice chat service, implemented by VoiceChat: who you can hear and per-player mutes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IVoiceChat

An **interface** in `Root.Township`, `Alta.Voice`.

The voice chat service, implemented by `VoiceChat`: who you can hear and per-player mutes.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`VoiceChat`](/mod/game-api/types/alta-networking/voicechat)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-audiblescope" /><code><Link to="/mod/game-api/types/alta-networking/voicechatscope">{"VoiceChatScope"}</Link>{" AudibleScope { get; }"}</code> | <span className="api-desc">Who you can hear. Starts at `Everyone`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cycleaudiblescope" /><code>{"void CycleAudibleScope()"}</code> | <span className="api-desc">Steps the scope down one (towards `Noone`, then back to `Everyone`) and updates mutes.</span> |
| <Link id="m-getplayermuted" /><code>{"bool GetPlayerMuted(int player)"}</code> | <span className="api-desc">True if the player with that id is muted.</span> |
| <Link id="m-setplayermuted" /><code>{"void SetPlayerMuted(int player, bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes the player with that id.</span> |

## Used in

Members of other types that take, return or hold a `IVoiceChat`:

<div className="api-used-in">

[`MuteNonFriendsActionIcon.voiceChat`](/mod/game-api/types/alta-player/mutenonfriendsactionicon#m-voicechat), [`MuteNonFriendsQuickAccessAction.voiceChat`](/mod/game-api/types/alta-player/mutenonfriendsquickaccessaction#m-voicechat), [`InterfaceResolver.CreateVoiceChat`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-createvoicechat), [`InterfaceResolver.iVoiceChat`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ivoicechat), [`InterfaceResolver.IVoiceChat`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ivoicechat-2), [`RecentPlayers.voiceChat`](/mod/game-api/types/global-q-r/recentplayers#m-voicechat), [`RecentPlayers.VoiceChat`](/mod/game-api/types/global-q-r/recentplayers#m-voicechat-2).

</div>
