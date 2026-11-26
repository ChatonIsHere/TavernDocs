---
title: "HealthObject.DeathAnalytics"
description: "Analytics record of a death: who died, where, and who killed them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject.DeathAnalytics

A **struct** in `Root.Township`, no namespace.

Analytics record of a death: who died, where, and who killed them.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`HealthObject`](/game-api/types/global-e-h/healthobject)
- **Attributes** `AnalyticsRecordForAll`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathAnalytics(string victim, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit, Vector3 position)"}</code> | Creates a `HealthObject.DeathAnalytics` from `victim`, `killingHit` and `position`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-murderer" /><code>{"string murderer"}</code> | Username of the player who landed the killing hit, the wielder's name if not a player, or "unknown" if no tool wielder. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Where the victim was when it died. |
| <Link id="m-victim" /><code>{"string victim"}</code> | The dead entity's original name. |

## Used in

Members of other types that take, return or hold a `DeathAnalytics`:

[`HealthObject.AnalyticsRecord`](/game-api/types/global-e-h/healthobject#m-analyticsrecord), [`PlayerHealth.AnalyticsRecord`](/game-api/types/global-p/playerhealth#m-analyticsrecord).
