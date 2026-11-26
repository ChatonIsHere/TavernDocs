---
title: "PhysicsSerializationSettings"
description: "Limits and precision used when packing physics values (velocity, angular velocity, scale) into network messages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicsSerializationSettings

A **static class** in `Root.Township`, `Alta.Networking`.

Limits and precision used when packing physics values (velocity, angular velocity, scale) into network messages.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocitymax" /><code>{"static readonly float AngularVelocityMax"}</code> | Largest angular velocity per axis that can be sent (325). |
| <Link id="m-angularvelocitymaxvector" /><code>{"static Vector3 AngularVelocityMaxVector"}</code> | `AngularVelocityMax` on every axis. |
| <Link id="m-angularvelocityminvector" /><code>{"static Vector3 AngularVelocityMinVector"}</code> | Negative `AngularVelocityMax` on every axis. |
| <Link id="m-angularvelocityprecision" /><code>{"const float AngularVelocityPrecision"}</code> | Step size for packed angular velocity (0.01). |
| <Link id="m-maximumscale" /><code>{"const float MaximumScale"}</code> | Largest scale that can be sent (10). |
| <Link id="m-scaleresolution" /><code>{"const float ScaleResolution"}</code> | Step size for packed scale (0.01). |
| <Link id="m-velocitymax" /><code>{"static readonly float VelocityMax"}</code> | Largest velocity per axis that can be sent (100). |
| <Link id="m-velocitymaxvector" /><code>{"static Vector3 VelocityMaxVector"}</code> | `VelocityMax` on every axis. |
| <Link id="m-velocityminvector" /><code>{"static Vector3 VelocityMinVector"}</code> | Negative `VelocityMax` on every axis. |
| <Link id="m-velocityprecision" /><code>{"const float VelocityPrecision"}</code> | Step size for packed velocity (0.01). |
