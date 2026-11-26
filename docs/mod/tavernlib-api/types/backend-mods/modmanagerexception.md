---
title: "ModManagerException"
description: "The exception the mod manager throws for a problem it can describe, such as a bad manifest, a failed download or an unsafe file name."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModManagerException

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

The exception the mod manager throws for a problem it can describe, such as a bad manifest, a failed download or an unsafe file name.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Inherits or implements** `Exception`
- **Documented in** [ModManagerException](/mod/tavernlib-api/types/backend-mods/modmanagerexception)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModManagerException(string message)"}</code> | <span className="api-desc">Creates the exception with the given message.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-describe" /><code>{"static string Describe(Exception e)"}</code> | <span className="api-desc">An exception's message followed by each inner exception's type and message.</span> |
