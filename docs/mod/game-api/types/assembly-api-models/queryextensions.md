---
title: "QueryExtensions"
description: "Builds URL query strings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueryExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

Builds URL query strings.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toquerystring" /><code>{"static string ToQueryString(NameValueCollection nvc)"}</code> | Joins every key and value of the collection into a URL-encoded `key=value&...` string, without the leading `?`. |
