---
title: "HttpContentExtensions"
description: "Reads HTTP response content as JSON."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpContentExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

Reads HTTP response content as JSON.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Class logger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readasjsonasync" /><code>{"static async Task<T> ReadAsJsonAsync<T>(HttpContent content)"}</code> | Reads the content and deserialises it to `T` on a worker thread. Logs the raw text and rethrows if parsing fails. |
