---
title: "ActiveMeleeAttack"
description: "Wyrm melee attack action."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveMeleeAttack

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm melee attack action. Prefers living, hurt targets in reach and sometimes turns into a flurry. Runs on the server.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmMeleeSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveMeleeAttack()"}</code> | Creates an `ActiveMeleeAttack` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activemeleeattack">{"ActiveMeleeAttack"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/wyrmmeleesettings">{"WyrmMeleeSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/wyrmmeleesettings">{"WyrmMeleeSettings"}</Link>{" settings)"}</code> | Builds the melee action: dangerous target in reach, sticky to the current target, preferring living and hurt ones. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Turns the wyrm to face its target, if it has one. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Rolls `FlurryChance` for a flurry, fires a random attack trigger on the network animator and sets the duration. |
