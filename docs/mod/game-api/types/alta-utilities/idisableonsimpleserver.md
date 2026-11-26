---
title: "IDisableOnSimpleServer"
description: "Content that can be turned off on a simple server, such as items and pages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDisableOnSimpleServer

An **interface** in `Root.Township`, `Alta`.

Content that can be turned off on a simple server, such as items and pages. Loot and progress commands check it.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`SimpleHashedGeneralValue<T>`](/mod/game-api/types/alta-utilities/simplehashedgeneralvalue-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | <span className="api-desc">True if this should be left out on a simple server (for example, it's skipped when rolling loot).</span> |
