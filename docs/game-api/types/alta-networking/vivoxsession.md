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
| <Link id="m-ctor" /><code>{"VivoxSession("}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel, ILoginSession login)"}</code> | Creates a `VivoxSession` from `channel` and `login`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-session" /><code>{"private readonly IChannelSession session"}</code> | The underlying Vivox channel session. |

</details>

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

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectasync" /><code>{"private async Task<bool> ConnectAsync(string accessToken)"}</code> | Connects the channel session with the access token and returns whether it worked. |
| <Link id="m-pairwithplayer" /><code>{"private void PairWithPlayer(string key, IParticipant player, float delay = 0.5)"}</code> | Links a Vivox participant to the matching player by user ID, retrying with a doubling delay until the player shows up or the participant leaves. |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined(object sender, KeyEventArg<string> e)"}</code> | Called when a participant joins; logs it and starts pairing them with a player. |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft(object sender, KeyEventArg<string> e)"}</code> | Called when a participant leaves. Only logs it. |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> | Logs session changes and raises `AudioConnected` or `TextConnected` when that state becomes connected. |

</details>

## Used in

Members of other types that take, return or hold a `VivoxSession`:

[`VivoxClient.channels`](/game-api/types/alta-networking/vivoxclient#m-channels).
