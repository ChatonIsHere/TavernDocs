---
title: "LerpingValue<T>"
description: "Base for a value that eases from where it is to a target over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingValue&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

Base for a value that eases from where it is to a target over time. Call `Update` each frame and it pushes every step through the setter given to the constructor; subclasses supply the maths.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`AtmosphereColor`](/game-api/types/alta-world/atmospherecolor)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LerpingValue(Action<T> setValue)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private T current"}</code> | Backing field for `Current`. |
| <Link id="m-gettarget" /><code>{"private Func<T> getTarget"}</code> | Returns the target. Called every frame, so the target can move during the lerp. |
| <Link id="m-initial" /><code>{"private T initial"}</code> | The value the running lerp started from. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | How long a lerp takes, in seconds, despite the name (default 1). |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Lerp progress from 0 to 1. |
| <Link id="m-setvalue" /><code>{"private Action<T> setValue"}</code> | Setter that receives each new value. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"T Current { get; }"}</code> | The value last pushed to the setter. |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | True while a lerp is running. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | Stops the running lerp where it is. |
| <Link id="m-lerp-2" /><code>{"void Lerp(T target, float lerpSpeed)"}</code> | Starts a lerp from the current value to a fixed target over `lerpSpeed` seconds, or to a target read each frame. The protected overload does the interpolation. |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<T> getTarget)"}</code> | Starts a lerp from the current value to a fixed target over `lerpSpeed` seconds, or to a target read each frame. The protected overload does the interpolation. |
| <Link id="m-snap" /><code>{"void Snap(T newTarget)"}</code> | Jumps straight to a value, pushes it to the setter and stops any lerp. |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(T newTarget)"}</code> | Calls `Snap` only when no lerp is running. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Advances the lerp by frame time and pushes the new value. At the end it lands on the target and stops. |
| <Link id="m-lerp" /><code>{"protected abstract T Lerp(T initial, T target, float progress)"}</code> | Starts a lerp from the current value to a fixed target over `lerpSpeed` seconds, or to a target read each frame. The protected overload does the interpolation. |
