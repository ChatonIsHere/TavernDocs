---
title: "VoiceChat"
description: "class VoiceChat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceChat

A **class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`IVoiceChat`](/game-api/types/alta-networking/ivoicechat)
- **Documented in** [Connection messages](/game-api/networking/messages)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VoiceChat()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-mutedstore" /><code>{"private "}<Link to="/game-api/types/alta-networking/ivivoxmutedplayerstore">{"IVivoxMutedPlayerStore"}</Link>{" mutedStore"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-audiblescope" /><code><Link to="/game-api/types/alta-networking/voicechatscope">{"VoiceChatScope"}</Link>{" AudibleScope { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-cycleaudiblescope" /><code>{"void CycleAudibleScope()"}</code> |
| <Link id="m-getplayermuted" /><code>{"bool GetPlayerMuted(int player)"}</code> |
| <Link id="m-setplayermuted" /><code>{"void SetPlayerMuted(int player, bool isMuted)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-newplayercreated" /><code>{"private void NewPlayerCreated("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-onfriendstatusupdated" /><code>{"private void OnFriendStatusUpdated(int player, bool isFriend)"}</code> |
| <Link id="m-onplayerjoinedchannel" /><code>{"private void OnPlayerJoinedChannel(IParticipant player)"}</code> |
| <Link id="m-onvivoxclientcreated" /><code>{"private void OnVivoxClientCreated("}<Link to="/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{" client)"}</code> |
| <Link id="m-syncmutestateforplayer" /><code>{"private void SyncMuteStateForPlayer(int userID)"}</code> |
| <Link id="m-updatemuteallplayers" /><code>{"private void UpdateMuteAllPlayers()"}</code> |

</details>
