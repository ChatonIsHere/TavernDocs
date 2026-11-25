---
title: "IToolHitDependant"
description: "interface IToolHitDependant in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IToolHitDependant

An **interface** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`ContactProjectile`](/game-api/types/alta-items/contactprojectile), [`Arrow`](/game-api/types/global-a-b/arrow), [`BreakOnImpact`](/game-api/types/global-a-b/breakonimpact), [`DiggingImpactor`](/game-api/types/global-c-d/diggingimpactor), [`Embeddable`](/game-api/types/global-e-h/embeddable), [`Projectile`](/game-api/types/global-p/projectile)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oncollided" /><code>{"void OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-onhit" /><code>{"void OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
