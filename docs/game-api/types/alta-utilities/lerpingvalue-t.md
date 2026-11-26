---
title: "LerpingValue<T>"
description: "abstract class LerpingValue<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingValue&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`AtmosphereColor`](/game-api/types/alta-world/atmospherecolor)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LerpingValue(Action<T> setValue)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-current" /><code>{"private T current"}</code> |
| <Link id="m-gettarget" /><code>{"private Func<T> getTarget"}</code> |
| <Link id="m-initial" /><code>{"private T initial"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-setvalue" /><code>{"private Action<T> setValue"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-current-2" /><code>{"T Current { get; }"}</code> |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> |
| <Link id="m-lerp-2" /><code>{"void Lerp(T target, float lerpSpeed)"}</code> |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<T> getTarget)"}</code> |
| <Link id="m-snap" /><code>{"void Snap(T newTarget)"}</code> |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(T newTarget)"}</code> |
| <Link id="m-update" /><code>{"void Update()"}</code> |
| <Link id="m-lerp" /><code>{"protected abstract T Lerp(T initial, T target, float progress)"}</code> |
