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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts#impactorvalues)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactorValues()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> channels"}</code> | <span className="api-desc">Backing field for `Channels`, the impact channels this impactor hits on.</span> |
| <Link id="m-crippledamagemodifier" /><code>{"private float crippleDamageModifier"}</code> | <span className="api-desc">Backing field for `CrippleDamageModifier`. Defaults to 1.</span> |
| <Link id="m-directionpower" /><code>{"private float directionPower"}</code> | <span className="api-desc">Backing field for `DirectionPower`; effectiveness is the direction dot product raised to this power.</span> |
| <Link id="m-edgelength" /><code>{"private float edgeLength"}</code> | <span className="api-desc">Backing field for `EdgeLength`. Defaults to -1.</span> |
| <Link id="m-healthdamagemodifier" /><code>{"private float healthDamageModifier"}</code> | <span className="api-desc">Backing field for `HealthDamageModifier`. Defaults to 1.</span> |
| <Link id="m-lerpvalue" /><code>{"private float lerpValue"}</code> | <span className="api-desc">Backing field for `LerpValue`. Defaults to 0.05.</span> |
| <Link id="m-maximumfollow" /><code>{"private float maximumFollow"}</code> | <span className="api-desc">Backing field for `MaximumFollow`. Defaults to 1.35.</span> |
| <Link id="m-minimumfollow" /><code>{"private float minimumFollow"}</code> | <span className="api-desc">Backing field for `MinimumFollow`. Defaults to 0.35.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`, the `ImpactType` of this impactor.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> | <span className="api-desc">The impact channels set on this asset.</span> |
| <Link id="m-crippledamagemodifier-2" /><code>{"float CrippleDamageModifier { get; }"}</code> | <span className="api-desc">Multiplier on cripple damage.</span> |
| <Link id="m-directionpower-2" /><code>{"float DirectionPower { get; }"}</code> | <span className="api-desc">Effectiveness is the swing direction's dot with the impactor's forward to this power. 0 or less ignores direction.</span> |
| <Link id="m-edgelength-2" /><code>{"float EdgeLength { get; }"}</code> | <span className="api-desc">Length of the edge along local up. Above 0 the hit point along the edge is used, otherwise a single point.</span> |
| <Link id="m-healthdamagemodifier-2" /><code>{"float HealthDamageModifier { get; }"}</code> | <span className="api-desc">Multiplier on health damage.</span> |
| <Link id="m-lerpvalue-2" /><code>{"float LerpValue { get; }"}</code> | <span className="api-desc">Not read anywhere else in this build.</span> |
| <Link id="m-maximumfollow-2" /><code>{"float MaximumFollow { get; }"}</code> | <span className="api-desc">Swing distance at which the distance multiplier reaches 1.</span> |
| <Link id="m-minimumfollow-2" /><code>{"float MinimumFollow { get; }"}</code> | <span className="api-desc">Shortest swing distance that counts. A shorter swing gives no effective hit.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The `ImpactType` of hits from this impactor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Compares every value, but the channel list by reference, so a `GetCopy` result never equals the original.</span> |
| <Link id="m-getcopy" /><code><Link to="/mod/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" GetCopy()"}</code> | <span className="api-desc">A new in-memory copy with its own channel list.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of all values and channels. Logs an error for a missing channel.</span> |

## Used in

Members of other types that take, return or hold a `ImpactorValues`:

<div className="api-used-in">

[`ImpactGenerator.impactorValues`](/mod/game-api/types/alta-items/impactgenerator#m-impactorvalues), [`ImpactGenerator.ImpactorValues`](/mod/game-api/types/alta-items/impactgenerator#m-impactorvalues-2).

</div>
