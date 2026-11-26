---
title: "PoweredRespawnShrine"
description: "A respawn shrine that runs on fuel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoweredRespawnShrine

A **class** in `Root.Township`, `ATT.Respawn`.

A respawn shrine that runs on fuel. Players toggle it as their spawn point, and it only works while it has power. Both sides: the server owns the respawn data, clients update glyphs, fuel display and sounds.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`RespawnShrine`](/game-api/types/game-other-namespaces/respawnshrine), [`ISavable<PoweredRespawnShrineSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PoweredRespawnShrineSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PoweredRespawnShrineSaveData`](/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PoweredRespawnShrine()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fueldisplay" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinefueldisplay">{"RespawnShrineFuelDisplay"}</Link>{" fuelDisplay"}</code> | Shows the fuel item and amount above the shrine. |
| <Link id="m-powerstatechanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" powerStateChanged"}</code> | Event raised with the normalised remaining power, for visuals. |
| <Link id="m-shrineidsavedata" /><code>{"private string shrineIdSaveData"}</code> | The shrine's id as a string. Saved, loaded and synced to clients. |
| <Link id="m-shrinesettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" shrineSettings"}</code> | Settings for this shrine (id, fuel capacity, fuel item), looked up from the id. |
| <Link id="m-staticaudiocontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller">{"RespawnShrineStaticAudioController"}</Link>{" staticAudioController"}</code> | Plays the looping sound while the shrine has subscribers. |
| <Link id="m-subscribermarkcontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller">{"RespawnShrineSubscriberMarkController"}</Link>{" subscriberMarkController"}</code> | Draws the orbiting marks that show how many players use this shrine. |
| <Link id="m-syncshrineidtoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShrineIdToClient"}</code> | Method sync (SyncA) sent to each connecting player with the shrine id. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> | The shrine's ID, taken from its settings. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool IsLoaded { get; }"}</code> | True once the shrine settings have been looked up from the shrine id. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentfuel" /><code>{"float GetCurrentFuel()"}</code> | Remaining fuel: the shrine's normalized powered time times its max fuel capacity. |
| <Link id="m-getmaxfuel" /><code>{"int GetMaxFuel()"}</code> | The shrine's max fuel capacity from its settings. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata">{"PoweredRespawnShrineSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Loads the shrine ID from save data and looks up its settings. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the shrine ID to the joining player so their copy can find its settings. |
| <Link id="m-onsetspawnpointtoggle" /><code>{"override void OnSetSpawnPointToggle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: makes the shrine the player's respawn point, or clears it if it already was. |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata">{"PoweredRespawnShrineSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves the shrine ID. |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(float fuelValue)"}</code> | Sets the shrine's fuel in the respawn system. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Sets up the shrine ID sync and, if the shrine shows subscriber marks, listens for players joining and leaving. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Removes the player listeners and base listeners. |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Lets the shrine be touched only while it has powered time left. |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Client: refreshes glyph colour, power state, subscriber marks, fuel display and sounds from the respawn system model. |
| <Link id="m-start" /><code>{"protected override async void Start()"}</code> | Waits until the shrine ID has arrived (from save or the server) before running the base start. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeshrinesettings" /><code>{"private void InitializeShrineSettings()"}</code> | Parses the saved shrine id and looks up its settings in the respawn system settings. |
| <Link id="m-onplayercountchanged" /><code>{"private void OnPlayerCountChanged("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Player join, leave or local player handler that refreshes the subscriber marks. |
| <Link id="m-playemptiedshrinesfx" /><code>{"private void PlayEmptiedShrineSfx(bool hasConsumedAllFuel)"}</code> | Plays the shrine deactivation sound when the shrine has used up all its fuel. |
| <Link id="m-refreshsubscribermarks" /><code>{"private async void RefreshSubscriberMarks()"}</code> | Waits for the shrine id, then redraws the marks from the current subscriber count. |
| <Link id="m-syncshrineidtoclient-2" /><code>{"private void SyncShrineIdToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler: the server sends the shrine id string and clients look up the shrine settings from it. |
| <Link id="m-updatepowerstate" /><code>{"private void UpdatePowerState(float shrinePower)"}</code> | Raises `powerStateChanged` with the shrine's normalised remaining power. |
| <Link id="m-updateshrine" /><code>{"private void UpdateShrine(int numberOfSubscribers, bool isSubscribedToShrine, float shrinePower, float currentFuel, bool hasConsumedAllFuel)"}</code> | Updates the glyph colour, power state, empty sound, subscriber marks, fuel display and audio in one go. |
| <Link id="m-waitforsavedata" /><code>{"private async Task WaitForSaveData()"}</code> | Waits in 100 ms steps until the shrine settings are loaded. |

</details>

## Used in

Members of other types that take, return or hold a `PoweredRespawnShrine`:

[`RespawnShrineFuelDockController.poweredRespawnShrine`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-poweredrespawnshrine).
