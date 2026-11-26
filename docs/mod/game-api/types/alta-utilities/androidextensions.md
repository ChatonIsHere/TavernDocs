---
title: "AndroidExtensions"
description: "Android-only helpers that call Java through AndroidJavaObject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AndroidExtensions

A **static class** in `Root.Township`, `Alta.Utilities`.

Android-only helpers that call Java through `AndroidJavaObject`. They do nothing useful on the PC server.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private static AndroidJavaObject _activity"}</code> | Backing field for `Activity`. |
| <Link id="m-mediastoreimagesmediaclass" /><code>{"private const string MediaStoreImagesMediaClass"}</code> | Java class name of `MediaStore.Images.Media`, used to insert images. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity-2" /><code>{"private static AndroidJavaObject Activity { get; }"}</code> | The current Unity Android activity, fetched from `UnityPlayer` once and cached. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-saveimagetogallery" /><code>{"static string SaveImageToGallery(Texture2D texture2D, string title, string description)"}</code> | Saves a texture to the Android photo gallery with a title and description. Returns the new image's URI string. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-texture2dtoandroidbitmap" /><code>{"private static AndroidJavaObject Texture2DToAndroidBitmap(Texture2D texture2D)"}</code> | Encodes the texture as PNG and decodes it into an Android `Bitmap`. |

</details>
