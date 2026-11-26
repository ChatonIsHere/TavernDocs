---
title: "ServerSaveFileResponse"
description: "The API's answer to a ServerSaveFileRequest: download links for the files."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSaveFileResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

The API's answer to a `ServerSaveFileRequest`: download links for the files.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSaveFileResponse()"}</code> | <span className="api-desc">Creates a `ServerSaveFileResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-urls" /><code>{"IEnumerable<string> Urls { get; set; }"}</code> | <span className="api-desc">One URL per requested save file.</span> |
