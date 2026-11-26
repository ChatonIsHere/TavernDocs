---
title: "SentGift"
description: "A gift package from a postbox."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SentGift

A **class** in `Root.Township`, the global namespace.

A gift package from a postbox. `PostboxSender` spawns it on the server, fills it with the sent items and stores it in the receiver's postbox; spawning it out gives the receiver the items.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SentGiftData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SentGiftData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SentGiftData`](/mod/game-api/types/global-s/sentgiftdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SentGift()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-receiversname" /><code>{"private string receiversName"}</code> | <span className="api-desc">Receiver's username.</span> |
| <Link id="m-receiversnametext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" receiversNameText"}</code> | <span className="api-desc">Text showing the receiver's name.</span> |
| <Link id="m-sendersname" /><code>{"private string sendersName"}</code> | <span className="api-desc">Sender's username.</span> |
| <Link id="m-sendersnametext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" sendersNameText"}</code> | <span className="api-desc">Text showing the sender's name.</span> |
| <Link id="m-sendertag" /><code>{"private "}<Link to="/mod/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag"}</code> | <span className="api-desc">Sender and receiver user IDs, used to track sent and retrieved gifts.</span> |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> | <span className="api-desc">Centre point the items spawn around.</span> |
| <Link id="m-spawnradius" /><code>{"private float spawnRadius"}</code> | <span className="api-desc">Radius of the random spread for spawned items.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | <span className="api-desc">Method sync for the names.</span> |
| <Link id="m-tospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{"[] toSpawn"}</code> | <span className="api-desc">The saved items inside the gift.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the setup sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: shows the names on the tag.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the sender and receiver names to a joining player.</span> |
| <Link id="m-setup" /><code>{"void Setup(string sendersName, string receiversName, "}<Link to="/mod/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag, "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{"[] toSpawn)"}</code> | <span className="api-desc">Server: sets the names, sender tag and the saved items to spawn. Called by `PostboxSender`.</span> |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | <span className="api-desc">Server: marks the gift as retrieved with `PostBoxSenderManager`, then spawns each item owned near `spawnPosition` in this chunk.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the spawn radius.</span> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the sender and receiver names and updates the tag on clients.</span> |
| <Link id="m-updatenametag" /><code>{"private void UpdateNameTag()"}</code> | <span className="api-desc">Shows the sender and receiver names on the text renderers, except on headless.</span> |

</details>
