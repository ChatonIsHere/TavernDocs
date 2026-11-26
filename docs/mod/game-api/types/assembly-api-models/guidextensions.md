---
title: "GuidExtensions"
description: "Helpers for turning GUIDs into short strings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GuidExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

Helpers for turning GUIDs into short strings.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-newbase64string" /><code>{"static string NewBase64String()"}</code> | <span className="api-desc">Makes a new GUID and returns it as a base64 string.</span> |
| <Link id="m-tobase64string" /><code>{"static string ToBase64String(Guid guid)"}</code> | <span className="api-desc">Returns the GUID's bytes as a base64 string.</span> |
| <Link id="m-toshortstring" /><code>{"static string ToShortString(Guid guid)"}</code> | <span className="api-desc">Returns the GUID as 32 hex digits with no dashes.</span> |
