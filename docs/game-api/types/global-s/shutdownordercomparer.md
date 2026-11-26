---
title: "ShutdownOrderComparer"
description: "Sorts ApplicationQuit handlers by the ApplicationShutdownOrderAttribute on their declaring type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShutdownOrderComparer

A **class** in `Root.Township`, no namespace.

Sorts `ApplicationQuit` handlers by the `ApplicationShutdownOrderAttribute` on their declaring type. `ApplicationManager` uses it when shutting down.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `IComparer<Delegate>`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShutdownOrderComparer()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compare" /><code>{"int Compare(Delegate x, Delegate y)"}</code> | Compares two delegates by the shutdown order of the types that declare them. |
