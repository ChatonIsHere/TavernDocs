---
title: "BackendUtils"
description: "Small helpers shared by TavernLib's backend: the listing URL, SHA-256 hashing and random URL-safe tokens."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BackendUtils

A **static class** in `TavernLib`, `TavernLib.Backend`.

Small helpers shared by TavernLib's backend: the listing URL, SHA-256 hashing and random URL-safe tokens.

- **Listed in** [TavernLib.Backend](/mod/tavernlib-api/types/backend)
- **Documented in** [BackendUtils](/mod/tavernlib-api/types/backend/backendutils), [Internals](/mod/tavernlib-api/internals)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serveruri" /><code>{"static string ServerUri { get; }"}</code> | <span className="api-desc">`/servers`, the listing API's path for posting and removing a server.</span> |
| <Link id="m-tavernapi" /><code>{"static string TavernApi { get; }"}</code> | <span className="api-desc">The Community Servers listing's base URL: `/listing_api`'s value, or `http://themoddingtavern.com:1763`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hashdigest" /><code>{"static string HashDigest(string input)"}</code> | <span className="api-desc">The SHA-256 hash of a string's UTF-8 bytes, as lower-case hex.</span> |
| <Link id="m-tokenurlsafe" /><code>{"static string TokenUrlSafe(int nbytes = 32)"}</code> | <span className="api-desc">A random token from a cryptographic generator, as base64url with no padding. 32 bytes by default.</span> |
