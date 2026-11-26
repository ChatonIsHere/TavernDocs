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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`AtmosphereColor`](/mod/game-api/types/alta-world/atmospherecolor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingValue(Action<T> setValue)"}</code> | <span className="api-desc">Creates a `LerpingValue` from `setValue`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private T current"}</code> | <span className="api-desc">Backing field for `Current`.</span> |
| <Link id="m-gettarget" /><code>{"private Func<T> getTarget"}</code> | <span className="api-desc">Returns the target. Called every frame, so the target can move during the lerp.</span> |
| <Link id="m-initial" /><code>{"private T initial"}</code> | <span className="api-desc">The value the running lerp started from.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How long a lerp takes, in seconds, despite the name (default 1).</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Lerp progress from 0 to 1.</span> |
| <Link id="m-setvalue" /><code>{"private Action<T> setValue"}</code> | <span className="api-desc">Setter that receives each new value.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"T Current { get; }"}</code> | <span className="api-desc">The value last pushed to the setter.</span> |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | <span className="api-desc">True while a lerp is running.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | <span className="api-desc">Stops the running lerp where it is.</span> |
| <Link id="m-lerp-2" /><code>{"void Lerp(T target, float lerpSpeed)"}</code> | <span className="api-desc">Starts a lerp from the current value to a fixed target over `lerpSpeed` seconds, or to a target read each frame. The protected overload does the interpolation.</span> |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<T> getTarget)"}</code> | <span className="api-desc">Starts a lerp from the current value to a fixed target over `lerpSpeed` seconds, or to a target read each frame. The protected overload does the interpolation.</span> |
| <Link id="m-snap" /><code>{"void Snap(T newTarget)"}</code> | <span className="api-desc">Jumps straight to a value, pushes it to the setter and stops any lerp.</span> |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(T newTarget)"}</code> | <span className="api-desc">Calls `Snap` only when no lerp is running.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Advances the lerp by frame time and pushes the new value. At the end it lands on the target and stops.</span> |
| <Link id="m-lerp" /><code>{"protected abstract T Lerp(T initial, T target, float progress)"}</code> | <span className="api-desc">Starts a lerp from the current value to a fixed target over `lerpSpeed` seconds, or to a target read each frame. The protected overload does the interpolation.</span> |
