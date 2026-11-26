---
title: "HashedGeneralValueComparer"
description: "Equality comparer that treats HashedGeneralValue assets as equal when their hashes match."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValueComparer

A **class** in `Alta.Values`, `Alta`.

Equality comparer that treats `HashedGeneralValue` assets as equal when their hashes match. Used for dictionaries keyed by stats and similar.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IEqualityComparer<HashedGeneralValue>`
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private HashedGeneralValueComparer()"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/assembly-other/hashedgeneralvaluecomparer">{"HashedGeneralValueComparer"}</Link>{" Instance { get; }"}</code> | The shared comparer. |
