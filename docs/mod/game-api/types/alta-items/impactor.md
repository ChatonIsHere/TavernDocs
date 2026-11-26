---
title: "Impactor"
description: "The main hitting part of a tool, such as a blade edge or a hammer head."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Impactor

A **class** in `Root.Township`, `Alta.Impact`.

The main hitting part of a tool, such as a blade edge or a hammer head. Works out a hit's direction and effectiveness from the tool's recent motion.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactGenerator`](/mod/game-api/types/alta-items/impactgenerator), [`IGetRigidbody`](/mod/game-api/types/alta-crafting/igetrigidbody)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Impactor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> | <span className="api-desc">The impact tool in the parents.</span> |
| <Link id="m-isusingimproveddirection" /><code>{"private bool isUsingImprovedDirection"}</code> | <span className="api-desc">When on, removes the motion along the edge before scoring direction.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs errors while working out hits.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentattack" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> | <span className="api-desc">Current attack damage and point from how far the impactor has moved, or empty if it barely moved.</span> |
| <Link id="m-getfollowandcurrent" /><code>{"override void GetFollowAndCurrent("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> | <span className="api-desc">For a contact, finds the point now and where it was furthest back, then the efficiency from distance, direction and filters.</span> |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | <span className="api-desc">Resets every effect in `EffectsOnReset`.</span> |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | <span className="api-desc">Registers the parent `ImpactTool` if no tool is registered yet.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Calls the base `OnDestroy` only.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier" /><code>{"private float DistanceMultiplier(float distance)"}</code> | <span className="api-desc">0 to 1 from how far the impactor moved, between minimum and maximum follow.</span> |
| <Link id="m-normalmultiplier" /><code>{"private float NormalMultiplier(Vector3 direction)"}</code> | <span className="api-desc">How well the swing direction lines up with the impactor's forward, raised to `DirectionPower`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the forward direction and the edge length in the editor.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Registers the parent `ImpactTool` if no tool is registered yet.</span> |

</details>
