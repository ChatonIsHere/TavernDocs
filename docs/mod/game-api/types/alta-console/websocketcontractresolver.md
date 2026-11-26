---
title: "WebsocketContractResolver"
description: "JSON contract resolver for websocket console replies that drops DevOnly members from the output, based on the calling user's policies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebsocketContractResolver

A **class** in `Root.Township`, `Alta.Console`.

JSON contract resolver for websocket console replies that drops `DevOnly` members from the output, based on the calling user's policies.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `DefaultContractResolver`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebsocketContractResolver()"}</code> | Creates a `WebsocketContractResolver` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-console/websocketcontractresolver">{"WebsocketContractResolver"}</Link>{" Instance"}</code> | Shared instance used by the websocket command handler's JSON settings. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createproperty" /><code>{"protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)"}</code> | Marks a `DevOnly` member as not serialized when the caller has `debug_features`. This looks inverted (probably meant callers without it). |
