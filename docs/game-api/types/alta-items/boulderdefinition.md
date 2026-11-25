---
title: "BoulderDefinition"
description: "An asset describing a mineable rock: its health, what it drops, how its hits look, and its ore material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoulderDefinition

A **class** in `Root.Township`, `Alta.Impact`.

An asset describing a mineable rock: its health, what it drops, how its hits look, and its ore material. Used by `Rock`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<BoulderDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`BoulderDefinition`](/game-api/types/alta-items/boulderdefinition), [`BoulderDefinition.Create`](/game-api/types/alta-items/boulderdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-items/boulderdefinition-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoulderDefinition()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-destroyedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyedEffect"}</code> |
| <Link id="m-dropcount" /><code>{"private AnimationCurve dropCount"}</code> |
| <Link id="m-health" /><code>{"private int health"}</code> |
| <Link id="m-impactsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" impactSettings"}</code> |
| <Link id="m-orematerial" /><code>{"private Material oreMaterial"}</code> |
| <Link id="m-resourcesdropchances" /><code>{"private "}<Link to="/game-api/types/alta-items/resourcedropchance">{"ResourceDropChance"}</Link>{"[] resourcesDropChances"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestroyedEffect { get; }"}</code> | Pooled effect spawned when the rock is destroyed. Not on headless servers. |
| <Link id="m-dropcount-2" /><code>{"AnimationCurve DropCount { get; }"}</code> | Curve sampled at a random value to get how many resources drop. |
| <Link id="m-health-2" /><code>{"int Health { get; }"}</code> | How much damage the rock takes before breaking. |
| <Link id="m-impactsettings-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" ImpactSettings { get; }"}</code> | Impact effects and sounds for hits on the rock. |
| <Link id="m-orematerial-2" /><code>{"Material OreMaterial { get; }"}</code> | Material put on the rock's ore renderers. |
| <Link id="m-resourcesdropchances-2" /><code><Link to="/game-api/types/alta-items/resourcedropchance">{"ResourceDropChance"}</Link>{"[] ResourcesDropChances { get; }"}</code> | Which resources can drop and how likely each is. |

## Used in

Members of other types that take, return or hold a `BoulderDefinition`:

[`Rock.Define`](/game-api/types/global-q-r/rock#m-define), [`Rock.Definition`](/game-api/types/global-q-r/rock#m-definition), [`RockCluster.definition`](/game-api/types/global-q-r/rockcluster#m-definition), [`RockClusterSaveData.definition`](/game-api/types/global-q-r/rockclustersavedata#m-definition).
