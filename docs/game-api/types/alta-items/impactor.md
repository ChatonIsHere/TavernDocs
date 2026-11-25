---
title: "Impactor"
description: "class Impactor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Impactor

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactGenerator`](/game-api/types/alta-items/impactgenerator), [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Impactor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> |  |
| <Link id="m-isusingimproveddirection" /><code>{"private bool isUsingImprovedDirection"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentattack" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> |  |
| <Link id="m-getfollowandcurrent" /><code>{"override void GetFollowAndCurrent("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> |  |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> |  |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> |  |
| <Link id="m-distancemultiplier" /><code>{"private float DistanceMultiplier(float distance)"}</code> |  |
| <Link id="m-normalmultiplier" /><code>{"private float NormalMultiplier(Vector3 direction)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
