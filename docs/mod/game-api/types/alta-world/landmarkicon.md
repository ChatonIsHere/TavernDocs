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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`HashedGeneralValue<LandmarkIcon>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LandmarkIcon`](/mod/game-api/types/alta-world/landmarkicon)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkIcon()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale`, the icon's size on the map (1 by default).</span> |
| <Link id="m-sprite" /><code>{"private Sprite sprite"}</code> | <span className="api-desc">Backing field for `Sprite`, the image shown for the landmark.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | <span className="api-desc">Size of the icon on the map. 1 by default.</span> |
| <Link id="m-sprite-2" /><code>{"Sprite Sprite { get; }"}</code> | <span className="api-desc">The icon image.</span> |

## Used in

Members of other types that take, return or hold a `LandmarkIcon`:

<div className="api-used-in">

[`ClientLandmarkManager.icon`](/mod/game-api/types/alta-world/clientlandmarkmanager#m-icon), [`Landmark.awareIcon`](/mod/game-api/types/alta-world/landmark#m-awareicon), [`Landmark.AwareIcon`](/mod/game-api/types/alta-world/landmark#m-awareicon-2), [`Landmark.discoveredIcon`](/mod/game-api/types/alta-world/landmark#m-discoveredicon), [`Landmark.DiscoveredIcon`](/mod/game-api/types/alta-world/landmark#m-discoveredicon-2), [`Landmark.SetIcons`](/mod/game-api/types/alta-world/landmark#m-seticons), [`LandmarkSaveData.AwareIcon`](/mod/game-api/types/alta-world/landmarksavedata#m-awareicon), [`LandmarkSaveData.DiscoverIcon`](/mod/game-api/types/alta-world/landmarksavedata#m-discovericon), [`MarkerInfo.AwareIcon`](/mod/game-api/types/alta-world/markerinfo#m-awareicon), [`MarkerInfo.DiscoveredIcon`](/mod/game-api/types/alta-world/markerinfo#m-discoveredicon), [`OldLandmarkSaveData1.AwareIcon`](/mod/game-api/types/alta-world/oldlandmarksavedata1#m-awareicon), [`OldLandmarkSaveData1.DiscoverIcon`](/mod/game-api/types/alta-world/oldlandmarksavedata1#m-discovericon), [`PlayerLandmark.friendIcon`](/mod/game-api/types/alta-world/playerlandmark#m-friendicon).

</div>
