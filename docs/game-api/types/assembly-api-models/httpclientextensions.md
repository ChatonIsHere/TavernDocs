---
title: "HttpClientExtensions"
description: "HttpClient helpers for the API client: JSON post, put, patch and delete, with debug logging of requests and responses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpClientExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

`HttpClient` helpers for the API client: JSON post, put, patch and delete, with debug logging of requests and responses.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`JsonContent`](/game-api/types/assembly-api-models/httpclientextensions-jsoncontent)
- **Attributes** `Extension`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteasync" /><code>{"static async Task<HttpResponseMessage> DeleteAsync(HttpClient client, string requestUri, HttpContent content)"}</code> | Sends a DELETE with a body, which plain `HttpClient` doesn't offer. |
| <Link id="m-deletejsonasync" /><code>{"static Task<HttpResponseMessage> DeleteJsonAsync<T>(HttpClient client, string uri, T content)"}</code> | Sends a DELETE with the object as a JSON body. |
| <Link id="m-patchasync" /><code>{"static async Task<HttpResponseMessage> PatchAsync(HttpClient client, string requestUri, HttpContent content)"}</code> | Sends a PATCH request with the given content. |
| <Link id="m-patchjsonasync" /><code>{"static Task<HttpResponseMessage> PatchJsonAsync<T>(HttpClient client, string uri, T content)"}</code> | Sends a PATCH with the object as a JSON body. |
| <Link id="m-postasync" /><code>{"static async Task<HttpResponseMessage> PostAsync<T>(HttpClient client, string uri)"}</code> | Posts with no body and logs the request and response. |
| <Link id="m-postjsonasync" /><code>{"static async Task<HttpResponseMessage> PostJsonAsync<T>(HttpClient client, string uri, T content, Action<"}<Link to="/game-api/types/assembly-api-models/httpclientextensions-jsoncontent">{"HttpClientExtensions.JsonContent"}</Link>{"> modifyContent = null)"}</code> | Posts the object as JSON, with an optional hook to change the content first, and logs the request and response. |
| <Link id="m-putjsonasync" /><code>{"static Task<HttpResponseMessage> PutJsonAsync<T>(HttpClient client, string uri, T content)"}</code> | Sends a PUT with the object as a JSON body. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logapirequest" /><code>{"private static async Task LogApiRequest(string uri, "}<Link to="/game-api/types/assembly-api-models/httpclientextensions-jsoncontent">{"HttpClientExtensions.JsonContent"}</Link>{" content)"}</code> | Writes the request URI, and the JSON body if there is one, to the debug log. |
| <Link id="m-logapirequest-2" /><code>{"private static void LogApiRequest(string uri)"}</code> | Writes the request URI, and the JSON body if there is one, to the debug log. |

</details>
