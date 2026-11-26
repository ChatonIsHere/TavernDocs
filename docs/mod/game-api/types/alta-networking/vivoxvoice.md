---
title: "VivoxVoice"
description: "Client: positional Vivox voice for one channel session."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxVoice

A **class** in `Root.Township`, `Alta.Voice`.

Client: positional Vivox voice for one channel session. Connects the audio and sends the head's position to Vivox while active. Made by `VivoxSession`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IVivoxVoiceUpdatable`](/mod/game-api/types/alta-networking/ivivoxvoiceupdatable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxVoice(IChannelSession session)"}</code> | <span className="api-desc">Creates a `VivoxVoice` from `session`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> | <span className="api-desc">True once audio is connected and until `Deactivate`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> | <span className="api-desc">Real time when the next position update may be sent.</span> |
| <Link id="m-session" /><code>{"private readonly IChannelSession session"}</code> | <span className="api-desc">The Vivox channel session.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Head transform whose position is sent.</span> |
| <Link id="m-updateinterval" /><code>{"private const float UpdateInterval"}</code> | <span className="api-desc">Seconds between position updates (0.3).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate(Transform head)"}</code> | <span className="api-desc">Starts positional voice from the given head transform and connects the session's audio.</span> |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | <span className="api-desc">Stops position updates and disconnects the session unless it's already disconnected.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectaudiocallback" /><code>{"private void ConnectAudioCallback(IAsyncResult result)"}</code> | <span className="api-desc">Finishes the async audio connect and marks voice active, or logs an error.</span> |
| <Link id="m-disconnectaudiocallback" /><code>{"private static void DisconnectAudioCallback(IAsyncResult result)"}</code> | <span className="api-desc">Logs whether the disconnect finished.</span> |
| <Link id="m-issessiondisconnected" /><code>{"private bool IsSessionDisconnected(IChannelSession channelSession)"}</code> | <span className="api-desc">True if the session's audio or text is disconnected or disconnecting.</span> |
| <Link id="m-update3dposition" /><code>{"private void Alta.Voice.IVivoxVoiceUpdatable.Update3DPosition()"}</code> | <span className="api-desc">Sends the head's position and facing to Vivox, at most every 0.3 seconds. Called by `VivoxClient`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxVoice`:

<div className="api-used-in">

[`VivoxClient.JoinChannel`](/mod/game-api/types/alta-networking/vivoxclient#m-joinchannel), [`VivoxManager.SetVoice`](/mod/game-api/types/alta-networking/vivoxmanager#m-setvoice), [`VivoxManager.voice`](/mod/game-api/types/alta-networking/vivoxmanager#m-voice), [`VivoxSession.VivoxVoice`](/mod/game-api/types/alta-networking/vivoxsession#m-vivoxvoice).

</div>
