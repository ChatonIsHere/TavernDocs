---
title: "PostProcessFilter"
description: "Hand camera filter asset that swaps in a post-processing profile."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostProcessFilter

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Hand camera filter asset that swaps in a post-processing profile.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`FilterAction`](/game-api/types/alta-customization/filteraction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostProcessFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-profile" /><code>{"private PostProcessProfile profile"}</code> | The post-processing profile the filter applies. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Sets the camera's post-process volume to this filter's profile. |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Clears the volume's profile if it is still this filter's one. |
