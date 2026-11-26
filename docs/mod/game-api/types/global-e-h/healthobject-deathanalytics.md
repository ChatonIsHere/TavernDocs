---
title: "HealthObject.DeathAnalytics"
description: "Analytics record of a death: who died, where, and who killed them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject.DeathAnalytics

A **struct** in `Root.Township`, the global namespace.

Analytics record of a death: who died, where, and who killed them.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`HealthObject`](/mod/game-api/types/global-e-h/healthobject)
- **Attributes** `AnalyticsRecordForAll`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathAnalytics(string victim, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit, Vector3 position)"}</code> | <span className="api-desc">Creates a `HealthObject.DeathAnalytics` from `victim`, `killingHit` and `position`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-murderer" /><code>{"string murderer"}</code> | <span className="api-desc">Username of the player who landed the killing hit, the wielder's name if not a player, or "unknown" if no tool wielder.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Where the victim was when it died.</span> |
| <Link id="m-victim" /><code>{"string victim"}</code> | <span className="api-desc">The dead entity's original name.</span> |

## Used in

Members of other types that take, return or hold a `DeathAnalytics`:

<div className="api-used-in">

[`HealthObject.AnalyticsRecord`](/mod/game-api/types/global-e-h/healthobject#m-analyticsrecord), [`PlayerHealth.AnalyticsRecord`](/mod/game-api/types/global-p/playerhealth#m-analyticsrecord).

</div>
