---
title: "TwistRelaxerController"
description: "class TwistRelaxerController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwistRelaxerController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`TwistRelaxerControllerHelper`](/game-api/types/alta-player/twistrelaxercontrollerhelper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TwistRelaxerController()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-angletoweightmultiplier" /><code>{"private AnimationCurve angleToWeightMultiplier"}</code> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> |
| <Link id="m-ischangingweights" /><code>{"private bool isChangingWeights"}</code> |
| <Link id="m-relaxers" /><code>{"private List<TwistRelaxer> relaxers"}</code> |
| <Link id="m-relaxerstartingweights" /><code>{"private Dictionary<TwistRelaxer, float> relaxerStartingWeights"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; set; }"}</code> |
| <Link id="m-hand-2" /><code>{"Transform Hand { get; set; }"}</code> |
| <Link id="m-relaxers-2" /><code>{"List<TwistRelaxer> Relaxers { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TwistRelaxerController`:

[`ArmIKController.twistRelaxerController`](/game-api/types/alta-player/armikcontroller#m-twistrelaxercontroller), [`ArmIKController.TwistRelaxerController`](/game-api/types/alta-player/armikcontroller#m-twistrelaxercontroller-2).
