---
title: "OfflineException"
description: "Thrown when an API method is called while the client is in offline mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineException

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Exceptions`.

Thrown when an API method is called while the client is in offline mode. The message names the calling method.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `Exception`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineException()"}</code> | <span className="api-desc">Creates the exception.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getmethodname" /><code>{"private static string GetMethodName()"}</code> | <span className="api-desc">Builds the message from the method two frames up the stack, the one that threw.</span> |

</details>
