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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializecontentstream" /><code>{"static string SerializeContentStream(Stream contentStream)"}</code> | <span className="api-desc">Copies a stream (rewinding it before and after when it can seek) and returns its body as text through `SerializeBody`.</span> |
| <Link id="m-serializetostring" /><code>{"static string SerializeToString(Stream contentStream)"}</code> | <span className="api-desc">Returns a stream's body, or response headers one per line with `authorization` redacted, as a string for logging.</span> |
| <Link id="m-serializetostring-2" /><code>{"static string SerializeToString(HttpResponseHeaders headers)"}</code> | <span className="api-desc">Returns a stream's body, or response headers one per line with `authorization` redacted, as a string for logging.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializebody" /><code>{"private static string SerializeBody(Stream inputStream)"}</code> | <span className="api-desc">Reads a stream to text and, if it's JSON, pretty-prints it with passwords, tokens and nonces masked.</span> |

</details>
