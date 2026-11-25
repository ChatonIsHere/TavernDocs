---
title: "PlayerPostboxStorage"
description: "The per-player file, above."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorage

A **class** in `Root.Township`, no namespace.

The per-player file, above.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PerPlayerContent<PlayerPostboxStorageFileFormat>`](/game-api/types/global-p/perplayercontent-tsaveformat)
- **Derived types** [`PostboxManager`](/game-api/types/global-p/postboxmanager)
- **Nested types** [`InitialContent`](/game-api/types/global-p/playerpostboxstorage-initialcontent)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerPostboxStorage()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isnew" /><code>{"private bool isNew"}</code> |  |
| <Link id="m-latest" /><code>{"private "}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" latest"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/global-p/playerpostboxstorageeventhandler">{"PlayerPostboxStorageEventHandler"}</Link>{" ItemAdded"}</code> |  |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/global-p/playerpostboxstorageeventhandler">{"PlayerPostboxStorageEventHandler"}</Link>{" ItemRemoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcount" /><code>{"int GetCount()"}</code> |  |
| <Link id="m-initializeifnew" /><code>{"void InitializeIfNew("}<Link to="/game-api/types/global-p/playerpostboxstorage-initialcontent">{"PlayerPostboxStorage.InitialContent"}</Link>{"[] initialContent)"}</code> |  |
| <Link id="m-loadasync" /><code>{"override async Task LoadAsync(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player = null)"}</code> |  |
| <Link id="m-pop" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Pop()"}</code> |  |
| <Link id="m-push" /><code>{"void Push("}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" content)"}</code> |  |
| <Link id="m-push-2" /><code>{"void Push("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDestroying = true)"}</code> |  |
| <Link id="m-readasync" /><code>{"private async Task<"}<Link to="/game-api/types/global-p/playerpostboxstoragefileformat">{"PlayerPostboxStorageFileFormat"}</Link>{"> ReadAsync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerPostboxStorage`:

[`TradeCommandModule.GetContent`](/game-api/types/alta-console/tradecommandmodule#m-getcontent), [`TradeVendor.SendToPostBox`](/game-api/types/alta-crafting/tradevendor#m-sendtopostbox), [`PlayerPostboxStorageEventHandler.BeginInvoke`](/game-api/types/global-p/playerpostboxstorageeventhandler#m-begininvoke), [`PlayerPostboxStorageEventHandler.Invoke`](/game-api/types/global-p/playerpostboxstorageeventhandler#m-invoke), [`Postbox.ItemAdded`](/game-api/types/global-p/postbox#m-itemadded), [`Postbox.ItemRemoved`](/game-api/types/global-p/postbox#m-itemremoved), [`PostboxManager.GetContentAsync`](/game-api/types/global-p/postboxmanager#m-getcontentasync), [`TradeCommandModule.GetContent`](/game-api/types/global-t-x/tradecommandmodule#m-getcontent).
