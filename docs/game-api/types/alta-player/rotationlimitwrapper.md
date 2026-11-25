---
title: "RotationLimitWrapper"
description: "class RotationLimitWrapper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationLimitWrapper

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationLimitWrapper()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-iscachingbonerotation" /><code>{"private bool isCachingBoneRotation"}</code> |  |
| <Link id="m-lastwristrotation" /><code>{"private Quaternion lastWristRotation"}</code> |  |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rotationlimit-2" /><code>{"RotationLimit RotationLimit { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RotationLimitWrapper`:

[`ArmIKController.rotationLimitWrapper`](/game-api/types/alta-player/armikcontroller#m-rotationlimitwrapper).
