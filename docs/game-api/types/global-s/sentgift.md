---
title: "SentGift"
description: "A gift package from a postbox."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SentGift

A **class** in `Root.Township`, no namespace.

A gift package from a postbox. `PostboxSender` spawns it on the server, fills it with the sent items and stores it in the receiver's postbox; spawning it out gives the receiver the items.

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

| Member | What it is |
| --- | --- |
| <Link id="m-receiversname" /><code>{"private string receiversName"}</code> | Receiver's username. |
| <Link id="m-receiversnametext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" receiversNameText"}</code> | Text showing the receiver's name. |
| <Link id="m-sendersname" /><code>{"private string sendersName"}</code> | Sender's username. |
| <Link id="m-sendersnametext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" sendersNameText"}</code> | Text showing the sender's name. |
| <Link id="m-sendertag" /><code>{"private "}<Link to="/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag"}</code> | Sender and receiver user IDs, used to track sent and retrieved gifts. |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> | Centre point the items spawn around. |
| <Link id="m-spawnradius" /><code>{"private float spawnRadius"}</code> | Radius of the random spread for spawned items. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Method sync for the names. |
| <Link id="m-tospawn" /><code>{"private "}<Link to="/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{"[] toSpawn"}</code> | The saved items inside the gift. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the setup sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: shows the names on the tag. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the sender and receiver names to a joining player. |
| <Link id="m-setup" /><code>{"void Setup(string sendersName, string receiversName, "}<Link to="/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag, "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{"[] toSpawn)"}</code> | Server: sets the names, sender tag and the saved items to spawn. Called by `PostboxSender`. |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | Server: marks the gift as retrieved with `PostBoxSenderManager`, then spawns each item owned near `spawnPosition` in this chunk. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the spawn radius. |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the sender and receiver names and updates the tag on clients. |
| <Link id="m-updatenametag" /><code>{"private void UpdateNameTag()"}</code> | Shows the sender and receiver names on the text renderers, except on headless. |

</details>
