---
title: "VivoxSession"
description: "One joined Vivox voice or text channel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxSession

A **class** in `Root.Township`, `Alta.Voice`.

One joined Vivox voice or text channel. Connects with a token from the API and pairs each participant with the matching in-game player. Client side.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxSession("}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel, ILoginSession login)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-session" /><code>{"private readonly IChannelSession session"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code><Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" Channel { get; }"}</code> | The Vivox channel this session is for. |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> | True once the channel has been joined. |
| <Link id="m-vivoxtext" /><code><Link to="/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{" "}<Link to="/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{" { get; }"}</code> | Text chat for the channel, or null if text is off. |
| <Link id="m-vivoxvoice" /><code><Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" "}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" { get; }"}</code> | Voice for the channel, or null if voice is off. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-audioconnected" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> AudioConnected"}</code> | Raised when the channel's audio connects. |
| <Link id="m-connectionfailed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> ConnectionFailed"}</code> | Raised when connecting fails after a token was got. |
| <Link id="m-playerpaired" /><code>{"event Action<IParticipant> PlayerPaired"}</code> | Raised when a participant is matched to an in-game player and set as their `Voice`. |
| <Link id="m-textconnected" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> TextConnected"}</code> | Raised when the channel's text chat connects. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> | Gets a connect token (up to 5 tries, waiting longer each time) and joins the channel. |
| <Link id="m-setmuted" /><code>{"void SetMuted(string username, bool isMuted)"}</code> | Mutes or unmutes a participant locally, found by username in the participant key. |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | Disconnects from the channel. |
| <Link id="m-connectasync" /><code>{"private async Task<bool> ConnectAsync(string accessToken)"}</code> |  |
| <Link id="m-pairwithplayer" /><code>{"private void PairWithPlayer(string key, IParticipant player, float delay = 0.5)"}</code> |  |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined(object sender, KeyEventArg<string> e)"}</code> |  |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft(object sender, KeyEventArg<string> e)"}</code> |  |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> |  |

## Used in

Members of other types that take, return or hold a `VivoxSession`:

[`VivoxClient.channels`](/game-api/types/alta-networking/vivoxclient#m-channels).
