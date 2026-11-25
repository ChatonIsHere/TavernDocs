---
title: "ImpactorValues"
description: "Asset of numbers for an Impactor (the part of a tool that deals hits): impact type, damage modifiers, edge length, and how swing distance and direction..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorValues

A **class** in `Root.Township`, `Alta.Impact`.

Asset of numbers for an `Impactor` (the part of a tool that deals hits): impact type, damage modifiers, edge length, and how swing distance and direction affect effectiveness.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts#impactorvalues)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactorValues()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> channels"}</code> |  |
| <Link id="m-crippledamagemodifier" /><code>{"private float crippleDamageModifier"}</code> |  |
| <Link id="m-directionpower" /><code>{"private float directionPower"}</code> |  |
| <Link id="m-edgelength" /><code>{"private float edgeLength"}</code> |  |
| <Link id="m-healthdamagemodifier" /><code>{"private float healthDamageModifier"}</code> |  |
| <Link id="m-lerpvalue" /><code>{"private float lerpValue"}</code> |  |
| <Link id="m-maximumfollow" /><code>{"private float maximumFollow"}</code> |  |
| <Link id="m-minimumfollow" /><code>{"private float minimumFollow"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> | The impact channels set on this asset. |
| <Link id="m-crippledamagemodifier-2" /><code>{"float CrippleDamageModifier { get; }"}</code> | Multiplier on cripple damage. |
| <Link id="m-directionpower-2" /><code>{"float DirectionPower { get; }"}</code> | Effectiveness is the swing direction's dot with the impactor's forward to this power. 0 or less ignores direction. |
| <Link id="m-edgelength-2" /><code>{"float EdgeLength { get; }"}</code> | Length of the edge along local up. Above 0 the hit point along the edge is used, otherwise a single point. |
| <Link id="m-healthdamagemodifier-2" /><code>{"float HealthDamageModifier { get; }"}</code> | Multiplier on health damage. |
| <Link id="m-lerpvalue-2" /><code>{"float LerpValue { get; }"}</code> | Not read anywhere else in this build. |
| <Link id="m-maximumfollow-2" /><code>{"float MaximumFollow { get; }"}</code> | Swing distance at which the distance multiplier reaches 1. |
| <Link id="m-minimumfollow-2" /><code>{"float MinimumFollow { get; }"}</code> | Shortest swing distance that counts. A shorter swing gives no effective hit. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" Type { get; }"}</code> | The `ImpactType` of hits from this impactor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Compares every value, but the channel list by reference, so a `GetCopy` result never equals the original. |
| <Link id="m-getcopy" /><code><Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" GetCopy()"}</code> | A new in-memory copy with its own channel list. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of all values and channels. Logs an error for a missing channel. |

## Used in

Members of other types that take, return or hold a `ImpactorValues`:

[`ImpactGenerator.impactorValues`](/game-api/types/alta-items/impactgenerator#m-impactorvalues), [`ImpactGenerator.ImpactorValues`](/game-api/types/alta-items/impactgenerator#m-impactorvalues-2).
