---
title: "TwistRelaxerController"
description: "Character rig component that runs the forearm's TwistRelaxers each fixed update, scaling their weight by how far the hand is twisted against the elbow."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwistRelaxerController

A **class** in `Root.Township`, `Alta.Character`.

Character rig component that runs the forearm's `TwistRelaxer`s each fixed update, scaling their weight by how far the hand is twisted against the elbow.

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

| Member | What it is |
| --- | --- |
| <Link id="m-angletoweightmultiplier" /><code>{"private AnimationCurve angleToWeightMultiplier"}</code> | Curve from hand-to-elbow angle (degrees) to a weight multiplier. |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | Backing field for `Elbow`. |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | Backing field for `Hand`. |
| <Link id="m-ischangingweights" /><code>{"private bool isChangingWeights"}</code> | When false, relaxers keep their own weight and only `Relax` is called. |
| <Link id="m-relaxers" /><code>{"private List<TwistRelaxer> relaxers"}</code> | Backing field for `Relaxers`. |
| <Link id="m-relaxerstartingweights" /><code>{"private Dictionary<TwistRelaxer, float> relaxerStartingWeights"}</code> | Each relaxer's weight at `Start`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; set; }"}</code> | Elbow (forearm) bone compared with the hand. |
| <Link id="m-hand-2" /><code>{"Transform Hand { get; set; }"}</code> | Hand bone compared with the elbow. |
| <Link id="m-relaxers-2" /><code>{"List<TwistRelaxer> Relaxers { get; set; }"}</code> | The twist relaxers driven by this controller. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Scales each relaxer's weight by the hand-to-elbow angle curve (if enabled) and relaxes it. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Stores each relaxer's starting weight. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Empty. |

</details>

## Used in

Members of other types that take, return or hold a `TwistRelaxerController`:

[`ArmIKController.twistRelaxerController`](/game-api/types/alta-player/armikcontroller#m-twistrelaxercontroller), [`ArmIKController.TwistRelaxerController`](/game-api/types/alta-player/armikcontroller#m-twistrelaxercontroller-2).
