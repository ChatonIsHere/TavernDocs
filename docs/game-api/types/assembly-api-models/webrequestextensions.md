---
title: "WebRequestExtensions"
description: "Turns request bodies and response headers into readable strings for the API client's logs, hiding secrets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebRequestExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

Turns request bodies and response headers into readable strings for the API client's logs, hiding secrets.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializecontentstream" /><code>{"static string SerializeContentStream(Stream contentStream)"}</code> | Copies a stream (rewinding it before and after when it can seek) and returns its body as text through `SerializeBody`. |
| <Link id="m-serializetostring" /><code>{"static string SerializeToString(Stream contentStream)"}</code> | Returns a stream's body, or response headers one per line with `authorization` redacted, as a string for logging. |
| <Link id="m-serializetostring-2" /><code>{"static string SerializeToString(HttpResponseHeaders headers)"}</code> | Returns a stream's body, or response headers one per line with `authorization` redacted, as a string for logging. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializebody" /><code>{"private static string SerializeBody(Stream inputStream)"}</code> | Reads a stream to text and, if it's JSON, pretty-prints it with passwords, tokens and nonces masked. |

</details>
