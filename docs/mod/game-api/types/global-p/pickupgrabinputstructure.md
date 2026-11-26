---
title: "PickupGrabInputStructure"
description: "Skill input structure asset whose input is simply grabbing the pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupGrabInputStructure

A **class** in `Root.Township`, the global namespace.

Skill input structure asset whose input is simply grabbing the pickup.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`PickupGrabInputStructure.Create`](/mod/game-api/types/global-p/pickupgrabinputstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/pickupgrabinputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupGrabInputStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Returns a new `PickupGrabInputMethod`. |
