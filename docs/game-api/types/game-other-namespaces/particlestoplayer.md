---
title: "ParticlesToPlayer"
description: "class ParticlesToPlayer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticlesToPlayer

A **class** in `Root.Township`, `Features.Visual_Effects.General_Scripts`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ParticlesToPlayerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ParticlesToPlayerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ParticlesToPlayerSaveData`](/game-api/types/game-other-namespaces/particlestoplayersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticlesToPlayer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> |  |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |  |
| <Link id="m-uniquemessagechannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" uniqueMessageChannel"}</code> |  |
| <Link id="m-useplayerfeetasorigin" /><code>{"private bool usePlayerFeetAsOrigin"}</code> |  |
| <Link id="m-vfxdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/particlestoplayersavedata">{"ParticlesToPlayerSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/particlestoplayersavedata">{"ParticlesToPlayerSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-triggerforplayer" /><code>{"void TriggerForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
