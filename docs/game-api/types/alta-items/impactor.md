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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactGenerator`](/game-api/types/alta-items/impactgenerator), [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Impactor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> | The impact tool in the parents. |
| <Link id="m-isusingimproveddirection" /><code>{"private bool isUsingImprovedDirection"}</code> | When on, removes the motion along the edge before scoring direction. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs errors while working out hits. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentattack" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> | Current attack damage and point from how far the impactor has moved, or empty if it barely moved. |
| <Link id="m-getfollowandcurrent" /><code>{"override void GetFollowAndCurrent("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> | For a contact, finds the point now and where it was furthest back, then the efficiency from distance, direction and filters. |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | Resets every effect in `EffectsOnReset`. |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | Registers the parent `ImpactTool` if no tool is registered yet. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Calls the base `OnDestroy` only. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier" /><code>{"private float DistanceMultiplier(float distance)"}</code> | 0 to 1 from how far the impactor moved, between minimum and maximum follow. |
| <Link id="m-normalmultiplier" /><code>{"private float NormalMultiplier(Vector3 direction)"}</code> | How well the swing direction lines up with the impactor's forward, raised to `DirectionPower`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the forward direction and the edge length in the editor. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Registers the parent `ImpactTool` if no tool is registered yet. |

</details>
