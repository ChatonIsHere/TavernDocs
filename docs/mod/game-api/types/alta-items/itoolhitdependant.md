---
title: "IToolHitDependant"
description: "A component on an impact tool or crafting part that wants to know when the tool hits or collides with something, such as arrows or breakable items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IToolHitDependant

An **interface** in `Root.Township`, `Alta.Impact`.

A component on an impact tool or crafting part that wants to know when the tool hits or collides with something, such as arrows or breakable items. Found automatically in the tool's children.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`ContactProjectile`](/mod/game-api/types/alta-items/contactprojectile), [`Arrow`](/mod/game-api/types/global-a-b/arrow), [`BreakOnImpact`](/mod/game-api/types/global-a-b/breakonimpact), [`DiggingImpactor`](/mod/game-api/types/global-c-d/diggingimpactor), [`Embeddable`](/mod/game-api/types/global-e-h/embeddable), [`Projectile`](/mod/game-api/types/global-p/projectile)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oncollided" /><code>{"void OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Called when the tool's collider touches something, with whether it counts as a hit.</span> |
| <Link id="m-onhit" /><code>{"void OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Called when the tool lands a hit.</span> |
