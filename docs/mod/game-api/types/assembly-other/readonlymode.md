---
title: "ReadOnlyMode"
description: "How an inspector field shows under a condition (ReadOnlyAttribute, ValueConditionAttribute): hidden, read-only or editable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReadOnlyMode

An **enum** in `Alta.Attributes`, the global namespace.

How an inspector field shows under a condition (`ReadOnlyAttribute`, `ValueConditionAttribute`): hidden, read-only or editable. Editor only.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Values

| Member |
| --- |
| <Link id="m-editable" /><code>{"Editable = 2"}</code> |
| <Link id="m-hidden" /><code>{"Hidden = 0"}</code> |
| <Link id="m-readonly" /><code>{"ReadOnly = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ReadOnlyMode`:

<div className="api-used-in">

[`ConditionAttribute.ConditionAttribute`](/mod/game-api/types/assembly-other/conditionattribute#m-ctor), [`ConditionAttribute.FalseMode`](/mod/game-api/types/assembly-other/conditionattribute#m-falsemode), [`ConditionAttribute.TrueMode`](/mod/game-api/types/assembly-other/conditionattribute#m-truemode), [`NullConditionAttribute.NotNullMode`](/mod/game-api/types/assembly-other/nullconditionattribute#m-notnullmode), [`NullConditionAttribute.NullConditionAttribute`](/mod/game-api/types/assembly-other/nullconditionattribute#m-ctor), [`NullConditionAttribute.NullMode`](/mod/game-api/types/assembly-other/nullconditionattribute#m-nullmode), [`ReadOnlyAttribute.InPlayMode`](/mod/game-api/types/assembly-other/readonlyattribute#m-inplaymode), [`ReadOnlyAttribute.OutOfPlayMode`](/mod/game-api/types/assembly-other/readonlyattribute#m-outofplaymode), [`ReadOnlyAttribute.ReadOnlyAttribute`](/mod/game-api/types/assembly-other/readonlyattribute#m-ctor), [`ValueConditionAttribute.FalseMode`](/mod/game-api/types/assembly-other/valueconditionattribute#m-falsemode), [`ValueConditionAttribute.TrueMode`](/mod/game-api/types/assembly-other/valueconditionattribute#m-truemode), [`ValueConditionAttribute.ValueConditionAttribute`](/mod/game-api/types/assembly-other/valueconditionattribute#m-ctor).

</div>
