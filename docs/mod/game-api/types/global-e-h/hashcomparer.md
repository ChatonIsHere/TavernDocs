---
title: "HashComparer"
description: "Equality comparer for uint hashes that returns the hash itself as the hash code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashComparer

A **class** in `Root.Township`, the global namespace.

Equality comparer for `uint` hashes that returns the hash itself as the hash code. Use the shared `Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `IEqualityComparer<uint>`

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private HashComparer()"}</code> | Creates a `HashComparer` with default values. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/hashcomparer">{"HashComparer"}</Link>{" Instance { get; }"}</code> | The single shared comparer. |
