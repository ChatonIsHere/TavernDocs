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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IEqualityComparer<HashedGeneralValue>`
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private HashedGeneralValueComparer()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvaluecomparer">{"HashedGeneralValueComparer"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The shared comparer.</span> |
