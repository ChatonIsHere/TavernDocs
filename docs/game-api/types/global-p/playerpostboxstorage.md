---
title: "PlayerPostboxStorage"
description: "Server: one player's postbox contents, saved items waiting to be taken out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorage

A **class** in `Root.Township`, no namespace.

Server: one player's postbox contents, saved items waiting to be taken out. Get it through `PostboxManager`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PerPlayerContent<PlayerPostboxStorageFileFormat>`](/game-api/types/global-p/perplayercontent-tsaveformat)
- **Derived types** [`PostboxManager`](/game-api/types/global-p/postboxmanager)
- **Nested types** [`InitialContent`](/game-api/types/global-p/playerpostboxstorage-initialcontent)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerPostboxStorage()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnew" /><code>{"private bool isNew"}</code> | True when the postbox file didn't exist at load, so `InitializeIfNew` adds the starting content once. |
| <Link id="m-latest" /><code>{"private "}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" latest"}</code> | The save version that `Push(NetworkEntity)` adds to: the last stored version if it's current, otherwise a new one. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/global-p/playerpostboxstorageeventhandler">{"PlayerPostboxStorageEventHandler"}</Link>{" ItemAdded"}</code> | Raised after an item is pushed, with the new count. |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/global-p/playerpostboxstorageeventhandler">{"PlayerPostboxStorageEventHandler"}</Link>{" ItemRemoved"}</code> | Raised after an item is popped, with the new count. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcount" /><code>{"int GetCount()"}</code> | How many items are in the postbox. |
| <Link id="m-initializeifnew" /><code>{"void InitializeIfNew("}<Link to="/game-api/types/global-p/playerpostboxstorage-initialcontent">{"PlayerPostboxStorage.InitialContent"}</Link>{"[] initialContent)"}</code> | Fills a brand new postbox with starting items, each with its own chance. Does nothing for an existing one. |
| <Link id="m-loadasync" /><code>{"override async Task LoadAsync(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player = null)"}</code> | Loads the file and remembers whether it was new. |
| <Link id="m-pop" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> | Spawns the oldest item as a server entity and removes it from the postbox. Returns null if empty or if spawning failed. |
| <Link id="m-push" /><code>{"void Push("}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" content)"}</code> | Adds an item, from a saved object or a live entity. A live entity is saved without position and destroyed unless told not to. |
| <Link id="m-push-2" /><code>{"void Push("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDestroying = true)"}</code> | Adds an item, from a saved object or a live entity. A live entity is saved without position and destroyed unless told not to. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readasync" /><code>{"private async Task<"}<Link to="/game-api/types/global-p/playerpostboxstoragefileformat">{"PlayerPostboxStorageFileFormat"}</Link>{"> ReadAsync()"}</code> | Reads the postbox file. Nothing in this class calls it. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerPostboxStorage`:

[`TradeCommandModule.GetContent`](/game-api/types/alta-console/tradecommandmodule#m-getcontent), [`TradeVendor.SendToPostBox`](/game-api/types/alta-crafting/tradevendor#m-sendtopostbox), [`PlayerPostboxStorageEventHandler.BeginInvoke`](/game-api/types/global-p/playerpostboxstorageeventhandler#m-begininvoke), [`PlayerPostboxStorageEventHandler.Invoke`](/game-api/types/global-p/playerpostboxstorageeventhandler#m-invoke), [`Postbox.ItemAdded`](/game-api/types/global-p/postbox#m-itemadded), [`Postbox.ItemRemoved`](/game-api/types/global-p/postbox#m-itemremoved), [`PostboxManager.GetContentAsync`](/game-api/types/global-p/postboxmanager#m-getcontentasync), [`TradeCommandModule.GetContent`](/game-api/types/global-t-x/tradecommandmodule#m-getcontent).
