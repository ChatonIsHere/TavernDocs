---
title: "SentGiftData"
description: "Save data (version 1) for a SentGift."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SentGiftData

A **class** in `Root.Township`, the global namespace.

Save data (version 1) for a `SentGift`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SentGift, SentGiftData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SentGift`](/mod/game-api/types/global-s/sentgift), [`SentGiftData`](/mod/game-api/types/global-s/sentgiftdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SentGiftData()"}</code> | Creates a `SentGiftData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-receiversname" /><code>{"string receiversName"}</code> | Receiver's username. |
| <Link id="m-sendersname" /><code>{"string sendersName"}</code> | Sender's username. |
| <Link id="m-sendertag" /><code><Link to="/mod/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag"}</code> | Sender and receiver user IDs. |
| <Link id="m-tospawn" /><code><Link to="/mod/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{"[] toSpawn"}</code> | The saved items inside the gift. |
