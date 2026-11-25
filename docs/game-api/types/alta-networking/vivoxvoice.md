---
title: "VivoxVoice"
description: "class VivoxVoice in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxVoice

A **class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`IVivoxVoiceUpdatable`](/game-api/types/alta-networking/ivivoxvoiceupdatable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VivoxVoice(IChannelSession session)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> |
| <Link id="m-session" /><code>{"private readonly IChannelSession session"}</code> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |
| <Link id="m-updateinterval" /><code>{"private const float UpdateInterval"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-activate" /><code>{"void Activate(Transform head)"}</code> |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-connectaudiocallback" /><code>{"private void ConnectAudioCallback(IAsyncResult result)"}</code> |
| <Link id="m-disconnectaudiocallback" /><code>{"private static void DisconnectAudioCallback(IAsyncResult result)"}</code> |
| <Link id="m-issessiondisconnected" /><code>{"private bool IsSessionDisconnected(IChannelSession channelSession)"}</code> |
| <Link id="m-update3dposition" /><code>{"private void Alta.Voice.IVivoxVoiceUpdatable.Update3DPosition()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxVoice`:

[`VivoxClient.JoinChannel`](/game-api/types/alta-networking/vivoxclient#m-joinchannel), [`VivoxManager.SetVoice`](/game-api/types/alta-networking/vivoxmanager#m-setvoice), [`VivoxManager.voice`](/game-api/types/alta-networking/vivoxmanager#m-voice), [`VivoxSession.VivoxVoice`](/game-api/types/alta-networking/vivoxsession#m-vivoxvoice).
