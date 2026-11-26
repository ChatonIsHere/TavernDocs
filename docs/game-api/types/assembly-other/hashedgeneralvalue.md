---
title: "HashedGeneralValue"
description: "Base for game data assets identified by a hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValue

An **abstract class** in `Alta.Values`, `Alta`.

Base for game data assets identified by a hash. `HashedGeneralValue<T>` builds on it to load every asset of a type from Resources and look them up by hash or name.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`HashedGeneralValue<T>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`HashedGeneralValueComparer`](/game-api/types/assembly-other/hashedgeneralvaluecomparer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected HashedGeneralValue()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allvalues" /><code>{"protected static Dictionary<Type, IEnumerable<"}<Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{">> allValues"}</code> | The loaded values for each type, filled in by each `HashedGeneralValue<T>.CheckItems`. |
| <Link id="m-hash" /><code>{"protected int hash"}</code> | Backing field for `Hash`, stored as an int and read-only in the inspector. |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | The asset's hash, its id when written to streams and saves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oftype" /><code>{"static "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{" OfType(Type type, uint hash)"}</code> | Finds the value of the given type with the given hash, running that type's `CheckItems` first if it isn't loaded yet. |

## Used in

Members of other types that take, return or hold a `HashedGeneralValue`:

[`HashedItemInfo.op_Implicit`](/game-api/types/alta-console/hashediteminfo#m-op-implicit), [`Page.components`](/game-api/types/alta-items/page#m-components), [`Page.Components`](/game-api/types/alta-items/page#m-components-2), [`GameTaskManager.SyncPlayerCompletedProgressFlagItem`](/game-api/types/global-e-h/gametaskmanager#m-syncplayercompletedprogressflagitem).
