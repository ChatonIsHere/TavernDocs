---
title: "VivoxClient"
description: "class VivoxClient in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxClient

A **class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxClient()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loginsession" /><code>{"ILoginSession loginSession"}</code> |  |
| <Link id="m-account" /><code>{"private AccountId account"}</code> |  |
| <Link id="m-channels" /><code>{"private readonly Dictionary<string, "}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> channels"}</code> |  |
| <Link id="m-client" /><code>{"private Client client"}</code> |  |
| <Link id="m-isintendedmute" /><code>{"private bool isIntendedMute"}</code> |  |
| <Link id="m-ismutedbymods" /><code>{"private bool isMutedByMods"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-positionalchat" /><code>{"private "}<Link to="/game-api/types/alta-networking/ivivoxvoiceupdatable">{"IVivoxVoiceUpdatable"}</Link>{" positionalChat"}</code> |  |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeinputdevice" /><code>{"IAudioDevice ActiveInputDevice { get; }"}</code> |  |
| <Link id="m-activeoutputdevice" /><code>{"IAudioDevice ActiveOutputDevice { get; }"}</code> |  |
| <Link id="m-effectiveinputdevice" /><code>{"IAudioDevice EffectiveInputDevice { get; }"}</code> |  |
| <Link id="m-effectiveoutputdevice" /><code>{"IAudioDevice EffectiveOutputDevice { get; }"}</code> |  |
| <Link id="m-inputdevices" /><code>{"IEnumerable<IAudioDevice> InputDevices { get; }"}</code> |  |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; private set; }"}</code> |  |
| <Link id="m-ismicmuted" /><code>{"bool IsMicMuted { get; }"}</code> |  |
| <Link id="m-outputdevices" /><code>{"IEnumerable<IAudioDevice> OutputDevices { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-channeljoined" /><code>{"event Action ChannelJoined"}</code> |  |
| <Link id="m-loginfailed" /><code>{"event Action LoginFailed"}</code> |  |
| <Link id="m-loginsucceeded" /><code>{"event Action LoginSucceeded"}</code> |  |
| <Link id="m-playerjoinedchannel" /><code>{"event Action<IParticipant> PlayerJoinedChannel"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinchannel" /><code>{"void JoinChannel("}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel, Action<"}<Link to="/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{"> textCreated, Action<"}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{"> voiceCreated)"}</code> |  |
| <Link id="m-leavechannel" /><code>{"void LeaveChannel("}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel)"}</code> |  |
| <Link id="m-login" /><code>{"async Task<bool> Login(int userId, string displayName)"}</code> |  |
| <Link id="m-logout" /><code>{"void Logout()"}</code> |  |
| <Link id="m-refreshdevices" /><code>{"async Task<bool> RefreshDevices()"}</code> |  |
| <Link id="m-setinputdevice" /><code>{"async Task<bool> SetInputDevice(IAudioDevice device)"}</code> |  |
| <Link id="m-setmodsmute" /><code>{"void SetModsMute(bool isMutedByMods)"}</code> |  |
| <Link id="m-setmuted" /><code>{"void SetMuted(bool isMuted)"}</code> |  |
| <Link id="m-setmuted-2" /><code>{"void SetMuted(int userId, bool isMuted)"}</code> |  |
| <Link id="m-setoutputdevice" /><code>{"async Task<bool> SetOutputDevice(IAudioDevice device)"}</code> |  |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> |  |
| <Link id="m-togglemute" /><code>{"void ToggleMute()"}</code> |  |
| <Link id="m-update" /><code>{"void Update()"}</code> |  |
| <Link id="m-handlesessionstatechanged" /><code>{"private void HandleSessionStateChanged()"}</code> |  |
| <Link id="m-logdeviceinfo" /><code>{"private void LogDeviceInfo()"}</code> |  |
| <Link id="m-onplayerpaired" /><code>{"private void OnPlayerPaired(IParticipant player)"}</code> |  |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> |  |

## Used in

Members of other types that take, return or hold a `VivoxClient`:

[`VivoxManager.Client`](/game-api/types/alta-networking/vivoxmanager#m-client), [`VivoxManager.ClientCreated`](/game-api/types/alta-networking/vivoxmanager#m-clientcreated), [`VoiceChat.OnVivoxClientCreated`](/game-api/types/alta-networking/voicechat#m-onvivoxclientcreated).
