---
title: "BowMultiArrowShot"
description: "class BowMultiArrowShot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowMultiArrowShot

A **class** in `Root.Township`, `Alta.Progression.Skills`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PickupBasedSkillModifier`](/game-api/types/global-p/pickupbasedskillmodifier)
- **Derived types** [`BowMultiArrowShot.Create`](/game-api/types/alta-player/bowmultiarrowshot-create)
- **Nested types** [`Create`](/game-api/types/alta-player/bowmultiarrowshot-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowMultiArrowShot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arrowconfiguration" /><code>{"private "}<Link to="/game-api/types/alta-player/multiarrowconfiguration">{"MultiArrowConfiguration"}</Link>{" arrowConfiguration"}</code> |  |
| <Link id="m-bowstrings" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{", "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{"> bowStrings"}</code> |  |
| <Link id="m-extraarrowprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" extraArrowPrefab"}</code> |  |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputs"}</code> |  |
| <Link id="m-oncancelled" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onCancelled"}</code> |  |
| <Link id="m-oncharged" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onCharged"}</code> |  |
| <Link id="m-onchargingstarted" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onChargingStarted"}</code> |  |
| <Link id="m-onconsumed" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onConsumed"}</code> |  |
| <Link id="m-validitemstags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> validItemsTags"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-createextraarrows" /><code>{"private void CreateExtraArrows("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> |  |
| <Link id="m-getidentifier" /><code>{"protected override uint GetIdentifier("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-handleskillstatus" /><code>{"protected override void HandleSkillStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> |  |
| <Link id="m-modify" /><code>{"protected override void Modify("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-onarrowshot" /><code>{"private void OnArrowShot("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> |  |
