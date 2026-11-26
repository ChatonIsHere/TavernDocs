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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxClient()"}</code> | <span className="api-desc">Creates a `VivoxClient` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loginsession" /><code>{"ILoginSession loginSession"}</code> | <span className="api-desc">The Vivox login session, or null when logged out.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code>{"private AccountId account"}</code> | <span className="api-desc">The Vivox account id for the logged-in user, built from the user id and display name. Null when logged out.</span> |
| <Link id="m-channels" /><code>{"private readonly Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/vivoxsession">{"VivoxSession"}</Link>{"> channels"}</code> | <span className="api-desc">Joined channel sessions, keyed by channel name.</span> |
| <Link id="m-client" /><code>{"private Client client"}</code> | <span className="api-desc">The underlying Vivox SDK client, created in the constructor and cleared by `Terminate`.</span> |
| <Link id="m-isintendedmute" /><code>{"private bool isIntendedMute"}</code> | <span className="api-desc">Whether the player wants the mic muted, flipped by `ToggleMute`. Restored when a mod mute is lifted.</span> |
| <Link id="m-ismutedbymods" /><code>{"private bool isMutedByMods"}</code> | <span className="api-desc">Whether moderators have muted this player's mic, set by `SetModsMute`. While true, `ToggleMute` does not unmute.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-positionalchat" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/ivivoxvoiceupdatable">{"IVivoxVoiceUpdatable"}</Link>{" positionalChat"}</code> | <span className="api-desc">The voice session of the last joined voice-enabled channel; its 3D position is updated each `Update`.</span> |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> | <span className="api-desc">Shared builder used for login and device log messages.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeinputdevice" /><code>{"IAudioDevice ActiveInputDevice { get; }"}</code> | <span className="api-desc">The microphone chosen in Vivox.</span> |
| <Link id="m-activeoutputdevice" /><code>{"IAudioDevice ActiveOutputDevice { get; }"}</code> | <span className="api-desc">The speaker or headset chosen in Vivox.</span> |
| <Link id="m-effectiveinputdevice" /><code>{"IAudioDevice EffectiveInputDevice { get; }"}</code> | <span className="api-desc">The microphone Vivox is actually using.</span> |
| <Link id="m-effectiveoutputdevice" /><code>{"IAudioDevice EffectiveOutputDevice { get; }"}</code> | <span className="api-desc">The output device Vivox is actually using.</span> |
| <Link id="m-inputdevices" /><code>{"IEnumerable<IAudioDevice> InputDevices { get; }"}</code> | <span className="api-desc">Available microphones.</span> |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; private set; }"}</code> | <span className="api-desc">Whether login succeeded and no logout has happened since.</span> |
| <Link id="m-ismicmuted" /><code>{"bool IsMicMuted { get; }"}</code> | <span className="api-desc">Whether the microphone is muted.</span> |
| <Link id="m-outputdevices" /><code>{"IEnumerable<IAudioDevice> OutputDevices { get; }"}</code> | <span className="api-desc">Available output devices.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-channeljoined" /><code>{"event Action ChannelJoined"}</code> | <span className="api-desc">Raised after a channel is joined.</span> |
| <Link id="m-loginfailed" /><code>{"event Action LoginFailed"}</code> | <span className="api-desc">Raised when the login attempt fails.</span> |
| <Link id="m-loginsucceeded" /><code>{"event Action LoginSucceeded"}</code> | <span className="api-desc">Raised when login succeeds.</span> |
| <Link id="m-playerjoinedchannel" /><code>{"event Action<IParticipant> PlayerJoinedChannel"}</code> | <span className="api-desc">Raised when a participant in a channel is paired with a player.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinchannel" /><code>{"void JoinChannel("}<Link to="/mod/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel, Action<"}<Link to="/mod/game-api/types/alta-networking/vivoxtext">{"VivoxText"}</Link>{"> textCreated, Action<"}<Link to="/mod/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{"> voiceCreated)"}</code> | <span className="api-desc">Joins a channel and calls back when its text or voice part connects. A voice channel becomes the positional one.</span> |
| <Link id="m-leavechannel" /><code>{"void LeaveChannel("}<Link to="/mod/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Leaves a joined channel and removes its session.</span> |
| <Link id="m-login" /><code>{"async Task<bool> Login(int userId, string displayName)"}</code> | <span className="api-desc">Logs in to Vivox for a user id and display name, then refreshes devices. Logging in twice logs an error and returns true.</span> |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | <span className="api-desc">Logs out and clears the session.</span> |
| <Link id="m-refreshdevices" /><code>{"async Task<bool> RefreshDevices()"}</code> | <span className="api-desc">Refreshes the input and output device lists; true if both worked.</span> |
| <Link id="m-setinputdevice" /><code>{"async Task<bool> SetInputDevice(IAudioDevice device)"}</code> | <span className="api-desc">Chooses the microphone.</span> |
| <Link id="m-setmodsmute" /><code>{"void SetModsMute(bool isMutedByMods)"}</code> | <span className="api-desc">Mutes the mic while moderators require it, then restores the player's own mute choice.</span> |
| <Link id="m-setmuted" /><code>{"void SetMuted(bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes your mic; with a user id, mutes that user in every joined channel.</span> |
| <Link id="m-setmuted-2" /><code>{"void SetMuted(int userId, bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes your mic; with a user id, mutes that user in every joined channel.</span> |
| <Link id="m-setoutputdevice" /><code>{"async Task<bool> SetOutputDevice(IAudioDevice device)"}</code> | <span className="api-desc">Chooses the output device.</span> |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | <span className="api-desc">Shuts the Vivox client down.</span> |
| <Link id="m-togglemute" /><code>{"void ToggleMute()"}</code> | <span className="api-desc">Flips the player's chosen mute; it only takes effect if moderators aren't muting them.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Runs Vivox once and updates the positional voice position. Call every frame.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlesessionstatechanged" /><code>{"private void HandleSessionStateChanged()"}</code> | <span className="api-desc">Runs when the Vivox login state changes; on logged out it calls `Logout` and logs back in through `VivoxManager` if the game login is still active.</span> |
| <Link id="m-logdeviceinfo" /><code>{"private void LogDeviceInfo()"}</code> | <span className="api-desc">Logs the available, active and effective audio input and output devices. Called after login.</span> |
| <Link id="m-onplayerpaired" /><code>{"private void OnPlayerPaired(IParticipant player)"}</code> | <span className="api-desc">Passes a session's `PlayerPaired` event on as `PlayerJoinedChannel`.</span> |
| <Link id="m-sessionpropertychanged" /><code>{"private void SessionPropertyChanged(object sender, PropertyChangedEventArgs e)"}</code> | <span className="api-desc">Handler for the login session's `PropertyChanged`; logs the change and calls `HandleSessionStateChanged` when `State` changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxClient`:

<div className="api-used-in">

[`VivoxManager.Client`](/mod/game-api/types/alta-networking/vivoxmanager#m-client), [`VivoxManager.ClientCreated`](/mod/game-api/types/alta-networking/vivoxmanager#m-clientcreated), [`VoiceChat.OnVivoxClientCreated`](/mod/game-api/types/alta-networking/voicechat#m-onvivoxclientcreated).

</div>
