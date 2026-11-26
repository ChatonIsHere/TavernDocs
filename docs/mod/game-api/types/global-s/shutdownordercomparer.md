---
title: "ShutdownOrderComparer"
description: "Sorts ApplicationQuit handlers by the ApplicationShutdownOrderAttribute on their declaring type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShutdownOrderComparer

A **class** in `Root.Township`, the global namespace.

Sorts `ApplicationQuit` handlers by the `ApplicationShutdownOrderAttribute` on their declaring type. `ApplicationManager` uses it when shutting down.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `IComparer<Delegate>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShutdownOrderComparer()"}</code> | <span className="api-desc">Creates a `ShutdownOrderComparer` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compare" /><code>{"int Compare(Delegate x, Delegate y)"}</code> | <span className="api-desc">Compares two delegates by the shutdown order of the types that declare them.</span> |
