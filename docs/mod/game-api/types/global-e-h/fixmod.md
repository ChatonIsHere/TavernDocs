---
title: "FixMod"
description: "Empty ModBase named \"Empty Mod\" that does nothing on start or stop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixMod

A **class** in `Root.Township`, the global namespace.

Empty `ModBase` named "Empty Mod" that does nothing on start or stop.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ModBase`](/mod/game-api/types/global-m-o/modbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FixMod()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Always "Empty Mod". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | Does nothing. |
| <Link id="m-terminate" /><code>{"protected override void Terminate()"}</code> | Does nothing. |
