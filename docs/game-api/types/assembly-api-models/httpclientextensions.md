---
title: "HttpClientExtensions"
description: "static class HttpClientExtensions in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpClientExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`JsonContent`](/game-api/types/assembly-api-models/httpclientextensions-jsoncontent)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteasync" /><code>{"static async Task<HttpResponseMessage> DeleteAsync(HttpClient client, string requestUri, HttpContent content)"}</code> |  |
| <Link id="m-deletejsonasync" /><code>{"static Task<HttpResponseMessage> DeleteJsonAsync<T>(HttpClient client, string uri, T content)"}</code> |  |
| <Link id="m-patchasync" /><code>{"static async Task<HttpResponseMessage> PatchAsync(HttpClient client, string requestUri, HttpContent content)"}</code> |  |
| <Link id="m-patchjsonasync" /><code>{"static Task<HttpResponseMessage> PatchJsonAsync<T>(HttpClient client, string uri, T content)"}</code> |  |
| <Link id="m-postasync" /><code>{"static async Task<HttpResponseMessage> PostAsync<T>(HttpClient client, string uri)"}</code> |  |
| <Link id="m-postjsonasync" /><code>{"static async Task<HttpResponseMessage> PostJsonAsync<T>(HttpClient client, string uri, T content, Action<"}<Link to="/game-api/types/assembly-api-models/httpclientextensions-jsoncontent">{"HttpClientExtensions.JsonContent"}</Link>{"> modifyContent = null)"}</code> |  |
| <Link id="m-putjsonasync" /><code>{"static Task<HttpResponseMessage> PutJsonAsync<T>(HttpClient client, string uri, T content)"}</code> |  |
| <Link id="m-logapirequest" /><code>{"private static async Task LogApiRequest(string uri, "}<Link to="/game-api/types/assembly-api-models/httpclientextensions-jsoncontent">{"HttpClientExtensions.JsonContent"}</Link>{" content)"}</code> |  |
| <Link id="m-logapirequest-2" /><code>{"private static void LogApiRequest(string uri)"}</code> |  |
