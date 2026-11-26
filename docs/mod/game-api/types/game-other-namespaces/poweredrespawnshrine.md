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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`RespawnShrine`](/mod/game-api/types/game-other-namespaces/respawnshrine), [`ISavable<PoweredRespawnShrineSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PoweredRespawnShrineSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PoweredRespawnShrineSaveData`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoweredRespawnShrine()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fueldisplay" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinefueldisplay">{"RespawnShrineFuelDisplay"}</Link>{" fuelDisplay"}</code> | <span className="api-desc">Shows the fuel item and amount above the shrine.</span> |
| <Link id="m-powerstatechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" powerStateChanged"}</code> | <span className="api-desc">Event raised with the normalised remaining power, for visuals.</span> |
| <Link id="m-shrineidsavedata" /><code>{"private string shrineIdSaveData"}</code> | <span className="api-desc">The shrine's id as a string. Saved, loaded and synced to clients.</span> |
| <Link id="m-shrinesettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" shrineSettings"}</code> | <span className="api-desc">Settings for this shrine (id, fuel capacity, fuel item), looked up from the id.</span> |
| <Link id="m-staticaudiocontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller">{"RespawnShrineStaticAudioController"}</Link>{" staticAudioController"}</code> | <span className="api-desc">Plays the looping sound while the shrine has subscribers.</span> |
| <Link id="m-subscribermarkcontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller">{"RespawnShrineSubscriberMarkController"}</Link>{" subscriberMarkController"}</code> | <span className="api-desc">Draws the orbiting marks that show how many players use this shrine.</span> |
| <Link id="m-syncshrineidtoclient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShrineIdToClient"}</code> | <span className="api-desc">Method sync (SyncA) sent to each connecting player with the shrine id.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> | <span className="api-desc">The shrine's ID, taken from its settings.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool IsLoaded { get; }"}</code> | <span className="api-desc">True once the shrine settings have been looked up from the shrine id.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentfuel" /><code>{"float GetCurrentFuel()"}</code> | <span className="api-desc">Remaining fuel: the shrine's normalized powered time times its max fuel capacity.</span> |
| <Link id="m-getmaxfuel" /><code>{"int GetMaxFuel()"}</code> | <span className="api-desc">The shrine's max fuel capacity from its settings.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata">{"PoweredRespawnShrineSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Loads the shrine ID from save data and looks up its settings.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the shrine ID to the joining player so their copy can find its settings.</span> |
| <Link id="m-onsetspawnpointtoggle" /><code>{"override void OnSetSpawnPointToggle("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: makes the shrine the player's respawn point, or clears it if it already was.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata">{"PoweredRespawnShrineSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the shrine ID.</span> |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(float fuelValue)"}</code> | <span className="api-desc">Sets the shrine's fuel in the respawn system.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Sets up the shrine ID sync and, if the shrine shows subscriber marks, listens for players joining and leaving.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Removes the player listeners and base listeners.</span> |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Lets the shrine be touched only while it has powered time left.</span> |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | <span className="api-desc">Client: refreshes glyph colour, power state, subscriber marks, fuel display and sounds from the respawn system model.</span> |
| <Link id="m-start" /><code>{"protected override async void Start()"}</code> | <span className="api-desc">Waits until the shrine ID has arrived (from save or the server) before running the base start.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeshrinesettings" /><code>{"private void InitializeShrineSettings()"}</code> | <span className="api-desc">Parses the saved shrine id and looks up its settings in the respawn system settings.</span> |
| <Link id="m-onplayercountchanged" /><code>{"private void OnPlayerCountChanged("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Player join, leave or local player handler that refreshes the subscriber marks.</span> |
| <Link id="m-playemptiedshrinesfx" /><code>{"private void PlayEmptiedShrineSfx(bool hasConsumedAllFuel)"}</code> | <span className="api-desc">Plays the shrine deactivation sound when the shrine has used up all its fuel.</span> |
| <Link id="m-refreshsubscribermarks" /><code>{"private async void RefreshSubscriberMarks()"}</code> | <span className="api-desc">Waits for the shrine id, then redraws the marks from the current subscriber count.</span> |
| <Link id="m-syncshrineidtoclient-2" /><code>{"private void SyncShrineIdToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler: the server sends the shrine id string and clients look up the shrine settings from it.</span> |
| <Link id="m-updatepowerstate" /><code>{"private void UpdatePowerState(float shrinePower)"}</code> | <span className="api-desc">Raises `powerStateChanged` with the shrine's normalised remaining power.</span> |
| <Link id="m-updateshrine" /><code>{"private void UpdateShrine(int numberOfSubscribers, bool isSubscribedToShrine, float shrinePower, float currentFuel, bool hasConsumedAllFuel)"}</code> | <span className="api-desc">Updates the glyph colour, power state, empty sound, subscriber marks, fuel display and audio in one go.</span> |
| <Link id="m-waitforsavedata" /><code>{"private async Task WaitForSaveData()"}</code> | <span className="api-desc">Waits in 100 ms steps until the shrine settings are loaded.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PoweredRespawnShrine`:

<div className="api-used-in">

[`RespawnShrineFuelDockController.poweredRespawnShrine`](/mod/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-poweredrespawnshrine).

</div>
