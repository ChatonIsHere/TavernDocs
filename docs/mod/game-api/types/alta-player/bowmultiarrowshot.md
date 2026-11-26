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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PickupBasedSkillModifier`](/mod/game-api/types/global-p/pickupbasedskillmodifier)
- **Derived types** [`BowMultiArrowShot.Create`](/mod/game-api/types/alta-player/bowmultiarrowshot-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/bowmultiarrowshot-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowMultiArrowShot()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowconfiguration" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/multiarrowconfiguration">{"MultiArrowConfiguration"}</Link>{" arrowConfiguration"}</code> | <span className="api-desc">Offsets and damage multiplier for the extra arrows.</span> |
| <Link id="m-bowstrings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{", "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{"> bowStrings"}</code> | <span className="api-desc">Bow string for each registered skill input.</span> |
| <Link id="m-extraarrowprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" extraArrowPrefab"}</code> | <span className="api-desc">Prefab spawned for each extra arrow.</span> |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputs"}</code> | <span className="api-desc">Skill input for each bow string.</span> |
| <Link id="m-oncancelled" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onCancelled"}</code> | <span className="api-desc">Event raised with the entity's transform when the skill is cancelled.</span> |
| <Link id="m-oncharged" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onCharged"}</code> | <span className="api-desc">Event raised with the entity's transform when the skill finishes charging.</span> |
| <Link id="m-onchargingstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onChargingStarted"}</code> | <span className="api-desc">Event raised with the entity's transform when charging starts.</span> |
| <Link id="m-onconsumed" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onConsumed"}</code> | <span className="api-desc">Event raised with the entity's transform when the skill is used.</span> |
| <Link id="m-validitemstags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> validItemsTags"}</code> | <span className="api-desc">Pickup tags this skill applies to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Removes the input's bow string from the maps on the next frame.</span> |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Hooks the string's shoot event and creates extra arrows when enabled; destroys them when disabled.</span> |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Records the bow string on the held pickup for this input.</span> |
| <Link id="m-getidentifier" /><code>{"protected override uint GetIdentifier("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Uses the identifier of the arrow docked on the string, if any, instead of the default.</span> |
| <Link id="m-handleskillstatus" /><code>{"protected override void HandleSkillStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> | <span className="api-desc">Fires the matching transform event (charging started, charged, consumed or cancelled) for the entity.</span> |
| <Link id="m-modify" /><code>{"protected override void Modify("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Does nothing.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createextraarrows" /><code>{"private void CreateExtraArrows("}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> | <span className="api-desc">Spawns an extra arrow at each configured offset on the bow string, applies the damage multiplier and syncs them.</span> |
| <Link id="m-onarrowshot" /><code>{"private void OnArrowShot("}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> | <span className="api-desc">When the input is active: copies the shot arrow's settings to the extra arrows, sends consumed and resets the input.</span> |

</details>
