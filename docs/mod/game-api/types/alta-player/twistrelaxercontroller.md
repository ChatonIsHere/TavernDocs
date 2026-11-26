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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`TwistRelaxerControllerHelper`](/mod/game-api/types/alta-player/twistrelaxercontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TwistRelaxerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletoweightmultiplier" /><code>{"private AnimationCurve angleToWeightMultiplier"}</code> | <span className="api-desc">Curve from hand-to-elbow angle (degrees) to a weight multiplier.</span> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | <span className="api-desc">Backing field for `Elbow`.</span> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | <span className="api-desc">Backing field for `Hand`.</span> |
| <Link id="m-ischangingweights" /><code>{"private bool isChangingWeights"}</code> | <span className="api-desc">When false, relaxers keep their own weight and only `Relax` is called.</span> |
| <Link id="m-relaxers" /><code>{"private List<TwistRelaxer> relaxers"}</code> | <span className="api-desc">Backing field for `Relaxers`.</span> |
| <Link id="m-relaxerstartingweights" /><code>{"private Dictionary<TwistRelaxer, float> relaxerStartingWeights"}</code> | <span className="api-desc">Each relaxer's weight at `Start`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; set; }"}</code> | <span className="api-desc">Elbow (forearm) bone compared with the hand.</span> |
| <Link id="m-hand-2" /><code>{"Transform Hand { get; set; }"}</code> | <span className="api-desc">Hand bone compared with the elbow.</span> |
| <Link id="m-relaxers-2" /><code>{"List<TwistRelaxer> Relaxers { get; set; }"}</code> | <span className="api-desc">The twist relaxers driven by this controller.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Scales each relaxer's weight by the hand-to-elbow angle curve (if enabled) and relaxes it.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Stores each relaxer's starting weight.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Empty.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TwistRelaxerController`:

<div className="api-used-in">

[`ArmIKController.twistRelaxerController`](/mod/game-api/types/alta-player/armikcontroller#m-twistrelaxercontroller), [`ArmIKController.TwistRelaxerController`](/mod/game-api/types/alta-player/armikcontroller#m-twistrelaxercontroller-2).

</div>
