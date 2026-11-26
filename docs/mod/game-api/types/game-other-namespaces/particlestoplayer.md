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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ParticlesToPlayerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ParticlesToPlayerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ParticlesToPlayerSaveData`](/mod/game-api/types/game-other-namespaces/particlestoplayersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticlesToPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | <span className="api-desc">Where the particles start when not starting from the player.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | <span className="api-desc">Method sync for the VFX data reference.</span> |
| <Link id="m-uniquemessagechannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" uniqueMessageChannel"}</code> | <span className="api-desc">Message type used for the sync, default `VfxData`. Change it if another behaviour on the entity uses that channel.</span> |
| <Link id="m-useplayerfeetasorigin" /><code>{"private bool usePlayerFeetAsOrigin"}</code> | <span className="api-desc">Start the particles at the player instead of `origin`. The code ends up placing them at the head.</span> |
| <Link id="m-vfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData"}</code> | <span className="api-desc">The effect to play. Saved.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the setup sync on `uniqueMessageChannel`.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/particlestoplayersavedata">{"ParticlesToPlayerSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores the VFX data reference from save data.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the VFX data reference to the joining player.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/particlestoplayersavedata">{"ParticlesToPlayerSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the VFX data reference.</span> |
| <Link id="m-triggerforplayer" /><code>{"void TriggerForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Not on headless: spawns the particles at `origin` (or at the player's head when `usePlayerFeetAsOrigin` is set) and moves them to the player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server to client: sends the VFX data reference. Logged as unauthorized if a client sends it.</span> |

</details>
