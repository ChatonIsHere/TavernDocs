---
title: "ThumbConfiguration"
description: "Asset that sets how the player's thumb rests and which axis it curls around, per hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThumbConfiguration

A **class** in `Root.Township`, the global namespace.

Asset that sets how the player's thumb rests and which axis it curls around, per hand.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ThumbConfiguration.Create`](/mod/game-api/types/global-t-x/thumbconfiguration-create)
- **Nested types** [`Create`](/mod/game-api/types/global-t-x/thumbconfiguration-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThumbConfiguration()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | <span className="api-desc">Backing field for `BaseRotation`.</span> |
| <Link id="m-lefthandcurlaxis" /><code>{"private Vector3 leftHandCurlAxis"}</code> | <span className="api-desc">Curl axis for the left hand.</span> |
| <Link id="m-righthandcurlaxis" /><code>{"private Vector3 rightHandCurlAxis"}</code> | <span className="api-desc">Curl axis for the right hand.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baserotation-2" /><code>{"Quaternion BaseRotation { get; }"}</code> | <span className="api-desc">Resting rotation of the thumb.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-curlaxis" /><code>{"Vector3 CurlAxis(bool isLeftHand)"}</code> | <span className="api-desc">Axis the thumb curls around for the left or right hand.</span> |

## Used in

Members of other types that take, return or hold a `ThumbConfiguration`:

<div className="api-used-in">

[`HandGrip.CurrentThumbConfiguration`](/mod/game-api/types/alta-player/handgrip#m-currentthumbconfiguration), [`HandGripConfiguration.thumbConfigurations`](/mod/game-api/types/alta-player/handgripconfiguration#m-thumbconfigurations), [`HandGripConfiguration.ThumbConfigurations`](/mod/game-api/types/alta-player/handgripconfiguration#m-thumbconfigurations-2).

</div>
