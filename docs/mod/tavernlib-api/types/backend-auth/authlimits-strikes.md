---
title: "AuthLimits.Strikes"
description: "Private: one address's failure count and when the last one was."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthLimits.Strikes

A **private struct** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one address's failure count and when the last one was.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthLimits`](/mod/tavernlib-api/types/backend-auth/authlimits)
- **Documented in** [AuthLimits.Strikes](/mod/tavernlib-api/types/backend-auth/authlimits-strikes)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count"}</code> | <span className="api-desc">Failures in a row, each within 60 seconds of the one before.</span> |
| <Link id="m-last" /><code>{"DateTime Last"}</code> | <span className="api-desc">When the latest failure was, in UTC.</span> |

## Used in

Members of other types that take, return or hold a `Strikes`:

<div className="api-used-in">

[`AuthLimits._fails`](/mod/tavernlib-api/types/backend-auth/authlimits#m-fails), [`AuthLimits._passwordFails`](/mod/tavernlib-api/types/backend-auth/authlimits#m-passwordfails), [`AuthLimits.Add`](/mod/tavernlib-api/types/backend-auth/authlimits#m-add), [`AuthLimits.Count`](/mod/tavernlib-api/types/backend-auth/authlimits#m-count).

</div>
