---
title: "ThumbConfiguration"
description: "Asset that sets how the player's thumb rests and which axis it curls around, per hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThumbConfiguration

A **class** in `Root.Township`, no namespace.

Asset that sets how the player's thumb rests and which axis it curls around, per hand.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ThumbConfiguration.Create`](/game-api/types/global-t-x/thumbconfiguration-create)
- **Nested types** [`Create`](/game-api/types/global-t-x/thumbconfiguration-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ThumbConfiguration()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | Backing field for `BaseRotation`. |
| <Link id="m-lefthandcurlaxis" /><code>{"private Vector3 leftHandCurlAxis"}</code> | Curl axis for the left hand. |
| <Link id="m-righthandcurlaxis" /><code>{"private Vector3 rightHandCurlAxis"}</code> | Curl axis for the right hand. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baserotation-2" /><code>{"Quaternion BaseRotation { get; }"}</code> | Resting rotation of the thumb. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-curlaxis" /><code>{"Vector3 CurlAxis(bool isLeftHand)"}</code> | Axis the thumb curls around for the left or right hand. |

## Used in

Members of other types that take, return or hold a `ThumbConfiguration`:

[`HandGrip.CurrentThumbConfiguration`](/game-api/types/alta-player/handgrip#m-currentthumbconfiguration), [`HandGripConfiguration.thumbConfigurations`](/game-api/types/alta-player/handgripconfiguration#m-thumbconfigurations), [`HandGripConfiguration.ThumbConfigurations`](/game-api/types/alta-player/handgripconfiguration#m-thumbconfigurations-2).
