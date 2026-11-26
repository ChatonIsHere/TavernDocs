---
title: "PlayerPostboxStorage"
description: "Server: one player's postbox contents, saved items waiting to be taken out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorage

A **class** in `Root.Township`, the global namespace.

Server: one player's postbox contents, saved items waiting to be taken out. Get it through `PostboxManager`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PerPlayerContent<PlayerPostboxStorageFileFormat>`](/mod/game-api/types/global-p/perplayercontent-tsaveformat)
- **Derived types** [`PostboxManager`](/mod/game-api/types/global-p/postboxmanager)
- **Nested types** [`InitialContent`](/mod/game-api/types/global-p/playerpostboxstorage-initialcontent)
- **Documented in** [Trading](/mod/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerPostboxStorage()"}</code> | <span className="api-desc">Creates a `PlayerPostboxStorage` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnew" /><code>{"private bool isNew"}</code> | <span className="api-desc">True when the postbox file didn't exist at load, so `InitializeIfNew` adds the starting content once.</span> |
| <Link id="m-latest" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" latest"}</code> | <span className="api-desc">The save version that `Push(NetworkEntity)` adds to: the last stored version if it's current, otherwise a new one.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playerpostboxstorageeventhandler">{"PlayerPostboxStorageEventHandler"}</Link>{" ItemAdded"}</code> | <span className="api-desc">Raised after an item is pushed, with the new count.</span> |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playerpostboxstorageeventhandler">{"PlayerPostboxStorageEventHandler"}</Link>{" ItemRemoved"}</code> | <span className="api-desc">Raised after an item is popped, with the new count.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcount" /><code>{"int GetCount()"}</code> | <span className="api-desc">How many items are in the postbox.</span> |
| <Link id="m-initializeifnew" /><code>{"void InitializeIfNew("}<Link to="/mod/game-api/types/global-p/playerpostboxstorage-initialcontent">{"PlayerPostboxStorage.InitialContent"}</Link>{"[] initialContent)"}</code> | <span className="api-desc">Fills a brand new postbox with starting items, each with its own chance. Does nothing for an existing one.</span> |
| <Link id="m-loadasync" /><code>{"override async Task LoadAsync(int playerIdentifier, "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player = null)"}</code> | <span className="api-desc">Loads the file and remembers whether it was new.</span> |
| <Link id="m-pop" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> | <span className="api-desc">Spawns the oldest item as a server entity and removes it from the postbox. Returns null if empty or if spawning failed.</span> |
| <Link id="m-push" /><code>{"void Push("}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" content)"}</code> | <span className="api-desc">Adds an item, from a saved object or a live entity. A live entity is saved without position and destroyed unless told not to.</span> |
| <Link id="m-push-2" /><code>{"void Push("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDestroying = true)"}</code> | <span className="api-desc">Adds an item, from a saved object or a live entity. A live entity is saved without position and destroyed unless told not to.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readasync" /><code>{"private async Task<"}<Link to="/mod/game-api/types/global-p/playerpostboxstoragefileformat">{"PlayerPostboxStorageFileFormat"}</Link>{"> ReadAsync()"}</code> | <span className="api-desc">Reads the postbox file. Nothing in this class calls it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerPostboxStorage`:

<div className="api-used-in">

[`TradeCommandModule.GetContent`](/mod/game-api/types/alta-console/tradecommandmodule#m-getcontent), [`TradeVendor.SendToPostBox`](/mod/game-api/types/alta-crafting/tradevendor#m-sendtopostbox), [`PlayerPostboxStorageEventHandler.BeginInvoke`](/mod/game-api/types/global-p/playerpostboxstorageeventhandler#m-begininvoke), [`PlayerPostboxStorageEventHandler.Invoke`](/mod/game-api/types/global-p/playerpostboxstorageeventhandler#m-invoke), [`Postbox.ItemAdded`](/mod/game-api/types/global-p/postbox#m-itemadded), [`Postbox.ItemRemoved`](/mod/game-api/types/global-p/postbox#m-itemremoved), [`PostboxManager.GetContentAsync`](/mod/game-api/types/global-p/postboxmanager#m-getcontentasync), [`TradeCommandModule.GetContent`](/mod/game-api/types/global-t-x/tradecommandmodule#m-getcontent).

</div>
