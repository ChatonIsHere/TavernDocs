---
title: "SentGift"
description: "class SentGift in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SentGift

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SentGiftData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SentGiftData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SentGiftData`](/game-api/types/global-s/sentgiftdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SentGift()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-receiversname" /><code>{"private string receiversName"}</code> |
| <Link id="m-receiversnametext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" receiversNameText"}</code> |
| <Link id="m-sendersname" /><code>{"private string sendersName"}</code> |
| <Link id="m-sendersnametext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" sendersNameText"}</code> |
| <Link id="m-sendertag" /><code>{"private "}<Link to="/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag"}</code> |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> |
| <Link id="m-spawnradius" /><code>{"private float spawnRadius"}</code> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |
| <Link id="m-tospawn" /><code>{"private "}<Link to="/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{"[] toSpawn"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setup" /><code>{"void Setup(string sendersName, string receiversName, "}<Link to="/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag, "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{"[] toSpawn)"}</code> |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updatenametag" /><code>{"private void UpdateNameTag()"}</code> |

</details>
