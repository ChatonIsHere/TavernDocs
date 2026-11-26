---
title: "SentGiftData"
description: "Save data (version 1) for a SentGift."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SentGiftData

A **class** in `Root.Township`, no namespace.

Save data (version 1) for a `SentGift`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SentGift, SentGiftData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SentGift`](/game-api/types/global-s/sentgift), [`SentGiftData`](/game-api/types/global-s/sentgiftdata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SentGiftData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-receiversname" /><code>{"string receiversName"}</code> | Receiver's username. |
| <Link id="m-sendersname" /><code>{"string sendersName"}</code> | Sender's username. |
| <Link id="m-sendertag" /><code><Link to="/game-api/types/global-s/sentgifttag">{"SentGiftTag"}</Link>{" senderTag"}</code> | Sender and receiver user IDs. |
| <Link id="m-tospawn" /><code><Link to="/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{"[] toSpawn"}</code> | The saved items inside the gift. |
