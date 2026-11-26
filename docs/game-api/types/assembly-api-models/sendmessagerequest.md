---
title: "SendMessageRequest"
description: "Request body for sending a message to a list of users."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SendMessageRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for sending a message to a list of users.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SendMessageRequest()"}</code> | Creates a `SendMessageRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | The message text. |
| <Link id="m-userids" /><code>{"List<int> UserIds { get; set; }"}</code> | Ids of the users to send it to. |
