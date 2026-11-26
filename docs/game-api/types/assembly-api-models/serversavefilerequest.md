---
title: "ServerSaveFileRequest"
description: "Request body asking for a server's save files by path; the matching answer is probably a ServerSaveFileResponse."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSaveFileRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body asking for a server's save files by path; the matching answer is probably a `ServerSaveFileResponse`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSaveFileRequest()"}</code> | Creates a `ServerSaveFileRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filepaths" /><code>{"IEnumerable<string> FilePaths { get; set; }"}</code> | Paths of the save files wanted. |
