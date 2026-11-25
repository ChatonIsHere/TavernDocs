---
title: "VivoxSession"
description: "class VivoxSession in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxSession

A **class** in `Root.Township`, `Alta.Voice`.

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
| <Link id="m-channel" /><code><Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" Channel { get; }"}</code> |  |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> |  |
| <Link id="m-vivoxtext" /><code><Link to="/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{" "}<Link to="/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{" { get; }"}</code> |  |
| <Link id="m-vivoxvoice" /><code><Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" "}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-audioconnected" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> AudioConnected"}</code> |  |
| <Link id="m-connectionfailed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> ConnectionFailed"}</code> |  |
| <Link id="m-playerpaired" /><code>{"event Action<IParticipant> PlayerPaired"}</code> |  |
| <Link id="m-textconnected" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> TextConnected"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> |  |
| <Link id="m-setmuted" /><code>{"void SetMuted(string username, bool isMuted)"}</code> |  |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> |  |
| <Link id="m-connectasync" /><code>{"private async Task<bool> ConnectAsync(string accessToken)"}</code> |  |
| <Link id="m-pairwithplayer" /><code>{"private void PairWithPlayer(string key, IParticipant player, float delay = 0.5)"}</code> |  |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined(object sender, KeyEventArg<string> e)"}</code> |  |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft(object sender, KeyEventArg<string> e)"}</code> |  |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> |  |

## Used in

Members of other types that take, return or hold a `VivoxSession`:

[`VivoxClient.channels`](/game-api/types/alta-networking/vivoxclient#m-channels).
