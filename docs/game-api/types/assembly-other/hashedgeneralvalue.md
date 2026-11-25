---
title: "HashedGeneralValue"
description: "abstract class HashedGeneralValue in Alta.Values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValue

An **abstract class** in `Alta.Values`, `Alta`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`HashedGeneralValue<T>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`HashedGeneralValueComparer`](/game-api/types/assembly-other/hashedgeneralvaluecomparer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected HashedGeneralValue()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-allvalues" /><code>{"protected static Dictionary<Type, IEnumerable<"}<Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{">> allValues"}</code> |
| <Link id="m-hash" /><code>{"protected int hash"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-oftype" /><code>{"static "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{" OfType(Type type, uint hash)"}</code> |

## Used in

Members of other types that take, return or hold a `HashedGeneralValue`:

[`HashedItemInfo.op_Implicit`](/game-api/types/alta-console/hashediteminfo#m-op-implicit), [`Page.components`](/game-api/types/alta-items/page#m-components), [`Page.Components`](/game-api/types/alta-items/page#m-components-2), [`GameTaskManager.SyncPlayerCompletedProgressFlagItem`](/game-api/types/global-e-h/gametaskmanager#m-syncplayercompletedprogressflagitem).
