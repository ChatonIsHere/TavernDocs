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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoweredRespawnShrine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fueldisplay" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinefueldisplay">{"RespawnShrineFuelDisplay"}</Link>{" fuelDisplay"}</code> |  |
| <Link id="m-powerstatechanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" powerStateChanged"}</code> |  |
| <Link id="m-shrineidsavedata" /><code>{"private string shrineIdSaveData"}</code> |  |
| <Link id="m-shrinesettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" shrineSettings"}</code> |  |
| <Link id="m-staticaudiocontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller">{"RespawnShrineStaticAudioController"}</Link>{" staticAudioController"}</code> |  |
| <Link id="m-subscribermarkcontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller">{"RespawnShrineSubscriberMarkController"}</Link>{" subscriberMarkController"}</code> |  |
| <Link id="m-syncshrineidtoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShrineIdToClient"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool IsLoaded { get; }"}</code> |  |
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> | The shrine's ID, taken from its settings. |

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
| <Link id="m-initializeshrinesettings" /><code>{"private void InitializeShrineSettings()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Removes the player listeners and base listeners. |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Lets the shrine be touched only while it has powered time left. |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Client: refreshes glyph colour, power state, subscriber marks, fuel display and sounds from the respawn system model. |
| <Link id="m-onplayercountchanged" /><code>{"private void OnPlayerCountChanged("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-playemptiedshrinesfx" /><code>{"private void PlayEmptiedShrineSfx(bool hasConsumedAllFuel)"}</code> |  |
| <Link id="m-refreshsubscribermarks" /><code>{"private async void RefreshSubscriberMarks()"}</code> |  |
| <Link id="m-start" /><code>{"protected override async void Start()"}</code> | Waits until the shrine ID has arrived (from save or the server) before running the base start. |
| <Link id="m-syncshrineidtoclient-2" /><code>{"private void SyncShrineIdToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatepowerstate" /><code>{"private void UpdatePowerState(float shrinePower)"}</code> |  |
| <Link id="m-updateshrine" /><code>{"private void UpdateShrine(int numberOfSubscribers, bool isSubscribedToShrine, float shrinePower, float currentFuel, bool hasConsumedAllFuel)"}</code> |  |
| <Link id="m-waitforsavedata" /><code>{"private async Task WaitForSaveData()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PoweredRespawnShrine`:

[`RespawnShrineFuelDockController.poweredRespawnShrine`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-poweredrespawnshrine).
