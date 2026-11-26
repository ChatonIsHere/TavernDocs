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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxSession("}<Link to="/mod/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel, ILoginSession login)"}</code> | <span className="api-desc">Creates a `VivoxSession` from `channel` and `login`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-session" /><code>{"private readonly IChannelSession session"}</code> | <span className="api-desc">The underlying Vivox channel session.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code><Link to="/mod/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">The Vivox channel this session is for.</span> |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> | <span className="api-desc">True once the channel has been joined.</span> |
| <Link id="m-vivoxtext" /><code><Link to="/mod/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{" { get; }"}</code> | <span className="api-desc">Text chat for the channel, or null if text is off.</span> |
| <Link id="m-vivoxvoice" /><code><Link to="/mod/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" { get; }"}</code> | <span className="api-desc">Voice for the channel, or null if voice is off.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-audioconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> AudioConnected"}</code> | <span className="api-desc">Raised when the channel's audio connects.</span> |
| <Link id="m-connectionfailed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> ConnectionFailed"}</code> | <span className="api-desc">Raised when connecting fails after a token was got.</span> |
| <Link id="m-playerpaired" /><code>{"event Action<IParticipant> PlayerPaired"}</code> | <span className="api-desc">Raised when a participant is matched to an in-game player and set as their `Voice`.</span> |
| <Link id="m-textconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> TextConnected"}</code> | <span className="api-desc">Raised when the channel's text chat connects.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> | <span className="api-desc">Gets a connect token (up to 5 tries, waiting longer each time) and joins the channel.</span> |
| <Link id="m-setmuted" /><code>{"void SetMuted(string username, bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes a participant locally, found by username in the participant key.</span> |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | <span className="api-desc">Disconnects from the channel.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectasync" /><code>{"private async Task<bool> ConnectAsync(string accessToken)"}</code> | <span className="api-desc">Connects the channel session with the access token and returns whether it worked.</span> |
| <Link id="m-pairwithplayer" /><code>{"private void PairWithPlayer(string key, IParticipant player, float delay = 0.5)"}</code> | <span className="api-desc">Links a Vivox participant to the matching player by user ID, retrying with a doubling delay until the player shows up or the participant leaves.</span> |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined(object sender, KeyEventArg<string> e)"}</code> | <span className="api-desc">Called when a participant joins; logs it and starts pairing them with a player.</span> |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft(object sender, KeyEventArg<string> e)"}</code> | <span className="api-desc">Called when a participant leaves. Only logs it.</span> |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> | <span className="api-desc">Logs session changes and raises `AudioConnected` or `TextConnected` when that state becomes connected.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxSession`:

<div className="api-used-in">

[`VivoxClient.channels`](/mod/game-api/types/alta-networking/vivoxclient#m-channels).

</div>
