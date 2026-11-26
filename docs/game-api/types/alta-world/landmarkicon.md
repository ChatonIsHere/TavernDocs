---
title: "LandmarkIcon"
description: "A hashed asset for a map landmark icon."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkIcon

A **class** in `Root.Township`, `Alta.Map`.

A hashed asset for a map landmark icon.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`HashedGeneralValue<LandmarkIcon>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LandmarkIcon`](/game-api/types/alta-world/landmarkicon)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LandmarkIcon()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Backing field for `Scale`, the icon's size on the map (1 by default). |
| <Link id="m-sprite" /><code>{"private Sprite sprite"}</code> | Backing field for `Sprite`, the image shown for the landmark. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | Size of the icon on the map. 1 by default. |
| <Link id="m-sprite-2" /><code>{"Sprite Sprite { get; }"}</code> | The icon image. |

## Used in

Members of other types that take, return or hold a `LandmarkIcon`:

[`ClientLandmarkManager.icon`](/game-api/types/alta-world/clientlandmarkmanager#m-icon), [`Landmark.awareIcon`](/game-api/types/alta-world/landmark#m-awareicon), [`Landmark.AwareIcon`](/game-api/types/alta-world/landmark#m-awareicon-2), [`Landmark.discoveredIcon`](/game-api/types/alta-world/landmark#m-discoveredicon), [`Landmark.DiscoveredIcon`](/game-api/types/alta-world/landmark#m-discoveredicon-2), [`Landmark.SetIcons`](/game-api/types/alta-world/landmark#m-seticons), [`LandmarkSaveData.AwareIcon`](/game-api/types/alta-world/landmarksavedata#m-awareicon), [`LandmarkSaveData.DiscoverIcon`](/game-api/types/alta-world/landmarksavedata#m-discovericon), [`MarkerInfo.AwareIcon`](/game-api/types/alta-world/markerinfo#m-awareicon), [`MarkerInfo.DiscoveredIcon`](/game-api/types/alta-world/markerinfo#m-discoveredicon), [`OldLandmarkSaveData1.AwareIcon`](/game-api/types/alta-world/oldlandmarksavedata1#m-awareicon), [`OldLandmarkSaveData1.DiscoverIcon`](/game-api/types/alta-world/oldlandmarksavedata1#m-discovericon), [`PlayerLandmark.friendIcon`](/game-api/types/alta-world/playerlandmark#m-friendicon).
