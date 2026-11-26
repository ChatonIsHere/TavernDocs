---
title: "ParticlesToPlayer"
description: "Plays a VfxData particle trail that flies from an origin to a given player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticlesToPlayer

A **class** in `Root.Township`, `Features.Visual_Effects.General_Scripts`.

Plays a `VfxData` particle trail that flies from an origin to a given player. The VFX data is saved and sent to joining players; `TriggerForPlayer` plays it locally and does nothing on a headless server.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ParticlesToPlayerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ParticlesToPlayerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ParticlesToPlayerSaveData`](/game-api/types/game-other-namespaces/particlestoplayersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticlesToPlayer()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | Where the particles start when not starting from the player. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Method sync for the VFX data reference. |
| <Link id="m-uniquemessagechannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" uniqueMessageChannel"}</code> | Message type used for the sync, default `VfxData`. Change it if another behaviour on the entity uses that channel. |
| <Link id="m-useplayerfeetasorigin" /><code>{"private bool usePlayerFeetAsOrigin"}</code> | Start the particles at the player instead of `origin`. The code ends up placing them at the head. |
| <Link id="m-vfxdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData"}</code> | The effect to play. Saved. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the setup sync on `uniqueMessageChannel`. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/particlestoplayersavedata">{"ParticlesToPlayerSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores the VFX data reference from save data. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the VFX data reference to the joining player. |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/particlestoplayersavedata">{"ParticlesToPlayerSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves the VFX data reference. |
| <Link id="m-triggerforplayer" /><code>{"void TriggerForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Not on headless: spawns the particles at `origin` (or at the player's head when `usePlayerFeetAsOrigin` is set) and moves them to the player. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server to client: sends the VFX data reference. Logged as unauthorized if a client sends it. |

</details>
