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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocitymax" /><code>{"static readonly float AngularVelocityMax"}</code> | <span className="api-desc">Largest angular velocity per axis that can be sent (325).</span> |
| <Link id="m-angularvelocitymaxvector" /><code>{"static Vector3 AngularVelocityMaxVector"}</code> | <span className="api-desc">`AngularVelocityMax` on every axis.</span> |
| <Link id="m-angularvelocityminvector" /><code>{"static Vector3 AngularVelocityMinVector"}</code> | <span className="api-desc">Negative `AngularVelocityMax` on every axis.</span> |
| <Link id="m-angularvelocityprecision" /><code>{"const float AngularVelocityPrecision"}</code> | <span className="api-desc">Step size for packed angular velocity (0.01).</span> |
| <Link id="m-maximumscale" /><code>{"const float MaximumScale"}</code> | <span className="api-desc">Largest scale that can be sent (10).</span> |
| <Link id="m-scaleresolution" /><code>{"const float ScaleResolution"}</code> | <span className="api-desc">Step size for packed scale (0.01).</span> |
| <Link id="m-velocitymax" /><code>{"static readonly float VelocityMax"}</code> | <span className="api-desc">Largest velocity per axis that can be sent (100).</span> |
| <Link id="m-velocitymaxvector" /><code>{"static Vector3 VelocityMaxVector"}</code> | <span className="api-desc">`VelocityMax` on every axis.</span> |
| <Link id="m-velocityminvector" /><code>{"static Vector3 VelocityMinVector"}</code> | <span className="api-desc">Negative `VelocityMax` on every axis.</span> |
| <Link id="m-velocityprecision" /><code>{"const float VelocityPrecision"}</code> | <span className="api-desc">Step size for packed velocity (0.01).</span> |
