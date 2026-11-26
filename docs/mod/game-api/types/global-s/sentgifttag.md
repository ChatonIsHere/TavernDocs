---
title: "SentGiftTag"
description: "The sender and receiver of a gift sent by post box, saved with the SentGift."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SentGiftTag

A **class** in `Root.Township`, the global namespace.

The sender and receiver of a gift sent by post box, saved with the `SentGift`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SentGiftTag()"}</code> | <span className="api-desc">Creates a `SentGiftTag` from `from` and `to`.</span> |
| <Link id="m-ctor-2" /><code>{"SentGiftTag(int from, int to)"}</code> | <span className="api-desc">Creates a `SentGiftTag` from `from` and `to`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"int from"}</code> | <span className="api-desc">Sender's user id.</span> |
| <Link id="m-to" /><code>{"int to"}</code> | <span className="api-desc">Receiver's user id.</span> |

## Used in

Members of other types that take, return or hold a `SentGiftTag`:

<div className="api-used-in">

[`SentGift.senderTag`](/mod/game-api/types/global-s/sentgift#m-sendertag), [`SentGift.Setup`](/mod/game-api/types/global-s/sentgift#m-setup), [`SentGiftData.senderTag`](/mod/game-api/types/global-s/sentgiftdata#m-sendertag).

</div>
