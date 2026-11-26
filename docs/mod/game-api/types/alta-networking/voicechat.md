---
title: "VoiceChat"
description: "Client voice chat mute logic: who you can hear (everyone, friends or no one) plus your own muted players list, applied to Vivox."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceChat

A **class** in `Root.Township`, `Alta.Voice`.

Client voice chat mute logic: who you can hear (everyone, friends or no one) plus your own muted players list, applied to Vivox. Does nothing on Linux.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IVoiceChat`](/mod/game-api/types/alta-networking/ivoicechat)
- **Documented in** [Connection messages](/mod/game-api/networking/messages)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VoiceChat()"}</code> | Creates a `VoiceChat` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-mutedstore" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/ivivoxmutedplayerstore">{"IVivoxMutedPlayerStore"}</Link>{" mutedStore"}</code> | Your muted user ids, kept in PlayerPrefs. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-audiblescope" /><code><Link to="/mod/game-api/types/alta-networking/voicechatscope">{"VoiceChatScope"}</Link>{" AudibleScope { get; private set; }"}</code> | Who you can hear. Starts at `Everyone`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cycleaudiblescope" /><code>{"void CycleAudibleScope()"}</code> | Steps the scope from everyone to friends to no one and back, then reapplies mutes. |
| <Link id="m-getplayermuted" /><code>{"bool GetPlayerMuted(int player)"}</code> | Whether you have muted that user id. |
| <Link id="m-setplayermuted" /><code>{"void SetPlayerMuted(int player, bool isMuted)"}</code> | Adds or removes a user id from your muted list and applies it. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-newplayercreated" /><code>{"private void NewPlayerCreated("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Applies the mute state for a player as they're added. |
| <Link id="m-onfriendstatusupdated" /><code>{"private void OnFriendStatusUpdated(int player, bool isFriend)"}</code> | Reapplies the mute state when a friendship changes, which matters in friends scope. |
| <Link id="m-onplayerjoinedchannel" /><code>{"private void OnPlayerJoinedChannel(IParticipant player)"}</code> | Applies the mute state when someone joins the Vivox channel, reading their user id from the account name. |
| <Link id="m-onvivoxclientcreated" /><code>{"private void OnVivoxClientCreated("}<Link to="/mod/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{" client)"}</code> | Hooks the client's player joined channel event. |
| <Link id="m-syncmutestateforplayer" /><code>{"private void SyncMuteStateForPlayer(int userID)"}</code> | Mutes the user in Vivox if the scope excludes them or you muted them, else unmutes. Skipped on Linux and in the editor. |
| <Link id="m-updatemuteallplayers" /><code>{"private void UpdateMuteAllPlayers()"}</code> | Applies the mute state for every other player. |

</details>
