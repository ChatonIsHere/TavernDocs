---
title: "VivoxClient"
description: "Wrapper around the Vivox voice and text chat client: login, audio devices, channels and muting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxClient

A **class** in `Root.Township`, `Alta.Voice`.

Wrapper around the Vivox voice and text chat client: login, audio devices, channels and muting. Client only; one is made by `VivoxManager` and reached through `VivoxManager.Instance.Client`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VivoxClient()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loginsession" /><code>{"ILoginSession loginSession"}</code> | The Vivox login session, or null when logged out. |

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-account" /><code>{"private AccountId account"}</code> |
| <Link id="m-channels" /><code>{"private readonly Dictionary<string, "}<Link to="/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> channels"}</code> |
| <Link id="m-client" /><code>{"private Client client"}</code> |
| <Link id="m-isintendedmute" /><code>{"private bool isIntendedMute"}</code> |
| <Link id="m-ismutedbymods" /><code>{"private bool isMutedByMods"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-positionalchat" /><code>{"private "}<Link to="/game-api/types/alta-networking/ivivoxvoiceupdatable">{"IVivoxVoiceUpdatable"}</Link>{" positionalChat"}</code> |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeinputdevice" /><code>{"IAudioDevice ActiveInputDevice { get; }"}</code> | The microphone chosen in Vivox. |
| <Link id="m-activeoutputdevice" /><code>{"IAudioDevice ActiveOutputDevice { get; }"}</code> | The speaker or headset chosen in Vivox. |
| <Link id="m-effectiveinputdevice" /><code>{"IAudioDevice EffectiveInputDevice { get; }"}</code> | The microphone Vivox is actually using. |
| <Link id="m-effectiveoutputdevice" /><code>{"IAudioDevice EffectiveOutputDevice { get; }"}</code> | The output device Vivox is actually using. |
| <Link id="m-inputdevices" /><code>{"IEnumerable<IAudioDevice> InputDevices { get; }"}</code> | Available microphones. |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; private set; }"}</code> | Whether login succeeded and no logout has happened since. |
| <Link id="m-ismicmuted" /><code>{"bool IsMicMuted { get; }"}</code> | Whether the microphone is muted. |
| <Link id="m-outputdevices" /><code>{"IEnumerable<IAudioDevice> OutputDevices { get; }"}</code> | Available output devices. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-channeljoined" /><code>{"event Action ChannelJoined"}</code> | Raised after a channel is joined. |
| <Link id="m-loginfailed" /><code>{"event Action LoginFailed"}</code> | Raised when the login attempt fails. |
| <Link id="m-loginsucceeded" /><code>{"event Action LoginSucceeded"}</code> | Raised when login succeeds. |
| <Link id="m-playerjoinedchannel" /><code>{"event Action<IParticipant> PlayerJoinedChannel"}</code> | Raised when a participant in a channel is paired with a player. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinchannel" /><code>{"void JoinChannel("}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel, Action<"}<Link to="/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{"> textCreated, Action<"}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{"> voiceCreated)"}</code> | Joins a channel and calls back when its text or voice part connects. A voice channel becomes the positional one. |
| <Link id="m-leavechannel" /><code>{"void LeaveChannel("}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel)"}</code> | Leaves a joined channel and removes its session. |
| <Link id="m-login" /><code>{"async Task<bool> Login(int userId, string displayName)"}</code> | Logs in to Vivox for a user id and display name, then refreshes devices. Logging in twice logs an error and returns true. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs out and clears the session. |
| <Link id="m-refreshdevices" /><code>{"async Task<bool> RefreshDevices()"}</code> | Refreshes the input and output device lists; true if both worked. |
| <Link id="m-setinputdevice" /><code>{"async Task<bool> SetInputDevice(IAudioDevice device)"}</code> | Chooses the microphone. |
| <Link id="m-setmodsmute" /><code>{"void SetModsMute(bool isMutedByMods)"}</code> | Mutes the mic while moderators require it, then restores the player's own mute choice. |
| <Link id="m-setmuted" /><code>{"void SetMuted(bool isMuted)"}</code> | Mutes or unmutes your mic; with a user id, mutes that user in every joined channel. |
| <Link id="m-setmuted-2" /><code>{"void SetMuted(int userId, bool isMuted)"}</code> | Mutes or unmutes your mic; with a user id, mutes that user in every joined channel. |
| <Link id="m-setoutputdevice" /><code>{"async Task<bool> SetOutputDevice(IAudioDevice device)"}</code> | Chooses the output device. |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | Shuts the Vivox client down. |
| <Link id="m-togglemute" /><code>{"void ToggleMute()"}</code> | Flips the player's chosen mute; it only takes effect if moderators aren't muting them. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Runs Vivox once and updates the positional voice position. Call every frame. |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handlesessionstatechanged" /><code>{"private void HandleSessionStateChanged()"}</code> |
| <Link id="m-logdeviceinfo" /><code>{"private void LogDeviceInfo()"}</code> |
| <Link id="m-onplayerpaired" /><code>{"private void OnPlayerPaired(IParticipant player)"}</code> |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxClient`:

[`VivoxManager.Client`](/game-api/types/alta-networking/vivoxmanager#m-client), [`VivoxManager.ClientCreated`](/game-api/types/alta-networking/vivoxmanager#m-clientcreated), [`VoiceChat.OnVivoxClientCreated`](/game-api/types/alta-networking/voicechat#m-onvivoxclientcreated).
