---
title: "EyeFocus"
description: "class EyeFocus in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyeFocus

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeFocus()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-eyemovementspeed" /><code>{"private float eyeMovementSpeed"}</code> |  |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> |  |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> |  |
| <Link id="m-target" /><code>{"private Transform target"}</code> |  |
| <Link id="m-torotate" /><code>{"private Transform toRotate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Transform toRotate, RotationLimit rotationLimit)"}</code> |  |
| <Link id="m-forceupdate" /><code>{"private void ForceUpdate()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `EyeFocus`:

[`CharacterEye.eyeFocus`](/game-api/types/alta-player/charactereye#m-eyefocus).
