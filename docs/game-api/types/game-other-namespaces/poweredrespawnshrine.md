---
title: "PoweredRespawnShrine"
description: "class PoweredRespawnShrine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoweredRespawnShrine

A **class** in `Root.Township`, `ATT.Respawn`.

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
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentfuel" /><code>{"float GetCurrentFuel()"}</code> |  |
| <Link id="m-getmaxfuel" /><code>{"int GetMaxFuel()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata">{"PoweredRespawnShrineSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onsetspawnpointtoggle" /><code>{"override void OnSetSpawnPointToggle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata">{"PoweredRespawnShrineSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(float fuelValue)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-initializeshrinesettings" /><code>{"private void InitializeShrineSettings()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> |  |
| <Link id="m-onplayercountchanged" /><code>{"private void OnPlayerCountChanged("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-playemptiedshrinesfx" /><code>{"private void PlayEmptiedShrineSfx(bool hasConsumedAllFuel)"}</code> |  |
| <Link id="m-refreshsubscribermarks" /><code>{"private async void RefreshSubscriberMarks()"}</code> |  |
| <Link id="m-start" /><code>{"protected override async void Start()"}</code> |  |
| <Link id="m-syncshrineidtoclient-2" /><code>{"private void SyncShrineIdToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatepowerstate" /><code>{"private void UpdatePowerState(float shrinePower)"}</code> |  |
| <Link id="m-updateshrine" /><code>{"private void UpdateShrine(int numberOfSubscribers, bool isSubscribedToShrine, float shrinePower, float currentFuel, bool hasConsumedAllFuel)"}</code> |  |
| <Link id="m-waitforsavedata" /><code>{"private async Task WaitForSaveData()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PoweredRespawnShrine`:

[`RespawnShrineFuelDockController.poweredRespawnShrine`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-poweredrespawnshrine).
