---
title: "VivoxChannel"
description: "Settings for one Vivox voice or text channel; VivoxManager makes one for the server and VivoxSession joins it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxChannel

A **class** in `Root.Township`, `Alta.Voice`.

Settings for one Vivox voice or text channel; `VivoxManager` makes one for the server and `VivoxSession` joins it. Client side.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxChannel(string name, bool isTextEnabled, bool isVoiceEnabled, Channel3DProperties positionalProperties = null)"}</code> | <span className="api-desc">Creates a `VivoxChannel` from `name`, `isTextEnabled`, `isVoiceEnabled` and `positionalProperties`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"ChannelId Id { get; }"}</code> | <span className="api-desc">The Vivox channel ID built from the configured issuer and domain; positional when voice is on, non-positional otherwise.</span> |
| <Link id="m-istextenabled" /><code>{"bool IsTextEnabled { get; }"}</code> | <span className="api-desc">Whether the channel carries text chat.</span> |
| <Link id="m-isvoiceenabled" /><code>{"bool IsVoiceEnabled { get; }"}</code> | <span className="api-desc">Whether the channel carries voice. Voice channels are created as positional (3D) channels.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The channel name used to build the Vivox ID.</span> |

## Used in

Members of other types that take, return or hold a `VivoxChannel`:

<div className="api-used-in">

[`VivoxClient.JoinChannel`](/mod/game-api/types/alta-networking/vivoxclient#m-joinchannel), [`VivoxClient.LeaveChannel`](/mod/game-api/types/alta-networking/vivoxclient#m-leavechannel), [`VivoxManager.serverChannel`](/mod/game-api/types/alta-networking/vivoxmanager#m-serverchannel), [`VivoxManager.SetupChannelForServer`](/mod/game-api/types/alta-networking/vivoxmanager#m-setupchannelforserver), [`VivoxSession.Channel`](/mod/game-api/types/alta-networking/vivoxsession#m-channel), [`VivoxSession.VivoxSession`](/mod/game-api/types/alta-networking/vivoxsession#m-ctor).

</div>
