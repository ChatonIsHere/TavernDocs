---
title: "IStrikeSuccessionModifier"
description: "A skill that changes a strike succession skill, such as PowerStrike and BlockingCharge."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStrikeSuccessionModifier

An **interface** in `Root.Township`, the global namespace.

A skill that changes a strike succession skill, such as `PowerStrike` and `BlockingCharge`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`BlockingCharge`](/mod/game-api/types/global-a-b/blockingcharge), [`PowerStrike`](/mod/game-api/types/global-p/powerstrike)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetskill" /><code><Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" TargetSkill { get; }"}</code> | The skill whose strike succession input it uses. |
