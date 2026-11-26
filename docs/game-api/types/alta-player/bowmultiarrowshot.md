---
title: "BowMultiArrowShot"
description: "Skill modifier that adds extra arrows to a bow while the skill is active, set by a MultiArrowConfiguration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowMultiArrowShot

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Skill modifier that adds extra arrows to a bow while the skill is active, set by a `MultiArrowConfiguration`. A `ScriptableObject` asset.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PickupBasedSkillModifier`](/game-api/types/global-p/pickupbasedskillmodifier)
- **Derived types** [`BowMultiArrowShot.Create`](/game-api/types/alta-player/bowmultiarrowshot-create)
- **Nested types** [`Create`](/game-api/types/alta-player/bowmultiarrowshot-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowMultiArrowShot()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowconfiguration" /><code>{"private "}<Link to="/game-api/types/alta-player/multiarrowconfiguration">{"MultiArrowConfiguration"}</Link>{" arrowConfiguration"}</code> | Offsets and damage multiplier for the extra arrows. |
| <Link id="m-bowstrings" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{", "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{"> bowStrings"}</code> | Bow string for each registered skill input. |
| <Link id="m-extraarrowprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" extraArrowPrefab"}</code> | Prefab spawned for each extra arrow. |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputs"}</code> | Skill input for each bow string. |
| <Link id="m-oncancelled" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onCancelled"}</code> | Event raised with the entity's transform when the skill is cancelled. |
| <Link id="m-oncharged" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onCharged"}</code> | Event raised with the entity's transform when the skill finishes charging. |
| <Link id="m-onchargingstarted" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onChargingStarted"}</code> | Event raised with the entity's transform when charging starts. |
| <Link id="m-onconsumed" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onConsumed"}</code> | Event raised with the entity's transform when the skill is used. |
| <Link id="m-validitemstags" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> validItemsTags"}</code> | Pickup tags this skill applies to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Removes the input's bow string from the maps on the next frame. |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Hooks the string's shoot event and creates extra arrows when enabled; destroys them when disabled. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Records the bow string on the held pickup for this input. |
| <Link id="m-getidentifier" /><code>{"protected override uint GetIdentifier("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Uses the identifier of the arrow docked on the string, if any, instead of the default. |
| <Link id="m-handleskillstatus" /><code>{"protected override void HandleSkillStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> | Fires the matching transform event (charging started, charged, consumed or cancelled) for the entity. |
| <Link id="m-modify" /><code>{"protected override void Modify("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Does nothing. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createextraarrows" /><code>{"private void CreateExtraArrows("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> | Spawns an extra arrow at each configured offset on the bow string, applies the damage multiplier and syncs them. |
| <Link id="m-onarrowshot" /><code>{"private void OnArrowShot("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> | When the input is active: copies the shot arrow's settings to the extra arrows, sends consumed and resets the input. |

</details>
