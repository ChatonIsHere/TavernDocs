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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`HashedGeneralValue<T>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`HashedGeneralValueComparer`](/mod/game-api/types/assembly-other/hashedgeneralvaluecomparer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashedGeneralValue()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allvalues" /><code>{"protected static Dictionary<Type, IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{">> allValues"}</code> | <span className="api-desc">The loaded values for each type, filled in by each `HashedGeneralValue<T>.CheckItems`.</span> |
| <Link id="m-hash" /><code>{"protected int hash"}</code> | <span className="api-desc">Backing field for `Hash`, stored as an int and read-only in the inspector.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">The asset's hash, its id when written to streams and saves.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oftype" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{" OfType(Type type, uint hash)"}</code> | <span className="api-desc">Finds the value of the given type with the given hash, running that type's `CheckItems` first if it isn't loaded yet.</span> |

## Used in

Members of other types that take, return or hold a `HashedGeneralValue`:

<div className="api-used-in">

[`HashedItemInfo.op_Implicit`](/mod/game-api/types/alta-console/hashediteminfo#m-op-implicit), [`Page.components`](/mod/game-api/types/alta-items/page#m-components), [`Page.Components`](/mod/game-api/types/alta-items/page#m-components-2), [`GameTaskManager.SyncPlayerCompletedProgressFlagItem`](/mod/game-api/types/global-e-h/gametaskmanager#m-syncplayercompletedprogressflagitem).

</div>
