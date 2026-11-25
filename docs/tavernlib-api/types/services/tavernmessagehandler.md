---
title: "TavernMessageHandler"
description: "Probably a leftover from before the service registry: TavernLib never creates or registers one."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernMessageHandler

A **class** in `TavernLib`, `TavernLib.Services`.

Probably a leftover from before the service registry: TavernLib never creates or registers one. Creating one makes a second roles handler.

- **Listed in** [TavernLib.Services](/tavernlib-api/types/services)
- **Documented in** [TavernMessageHandler](/tavernlib-api/types/services/tavernmessagehandler), [Services](/tavernlib-api/services#tavernmessagehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TavernMessageHandler()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverentrancehandler" /><code><Link to="/tavernlib-api/types/backend/entrancemessagehandler">{"EntranceMessageHandler"}</Link>{" ServerEntranceHandler { get; private set; }"}</code> | A new `EntranceMessageHandler` made with the object, which hooks every new connection's roles message. |
