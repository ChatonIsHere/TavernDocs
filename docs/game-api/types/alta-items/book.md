---
title: "Book"
description: "A networked book item that holds pages (recipe books, journals) from a PageCollection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Book

A **class** in `Root.Township`, `Alta.Pages`.

A networked book item that holds pages (recipe books, journals) from a `PageCollection`. The server keeps the page list and turns pages; clients see the spawned page objects and the page count it sends.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BookSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BookSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`BookSaveData`](/game-api/types/alta-items/booksavedata)
- **Nested types** [`FlairPositions`](/game-api/types/alta-items/book-flairpositions), [`LODRenderers`](/game-api/types/alta-items/book-lodrenderers)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Book()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isfrommiddle" /><code>{"private static int _IsFromMiddle"}</code> |  |
| <Link id="m-isfront" /><code>{"private static int _IsFront"}</code> |  |
| <Link id="m-isinteracting" /><code>{"private static int _IsInteracting"}</code> |  |
| <Link id="m-isopen" /><code>{"private static int _IsOpen"}</code> |  |
| <Link id="m-maintex" /><code>{"private static int _MainTex"}</code> |  |
| <Link id="m-open" /><code>{"private static int _Open"}</code> |  |
| <Link id="m-addhighlight" /><code>{"private GameObject addHighlight"}</code> |  |
| <Link id="m-addpage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-items/newpagearguments">{"NewPageArguments"}</Link>{"> addPage"}</code> |  |
| <Link id="m-backcover" /><code>{"private Transform backCover"}</code> |  |
| <Link id="m-backobject" /><code>{"private GameObject backObject"}</code> |  |
| <Link id="m-bookanimator" /><code>{"private Animator bookAnimator"}</code> |  |
| <Link id="m-booklodgroup" /><code>{"private LODGroup bookLodGroup"}</code> |  |
| <Link id="m-bookopenanimation" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" bookOpenAnimation"}</code> |  |
| <Link id="m-bookpages" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> bookPages"}</code> |  |
| <Link id="m-btduplicate" /><code>{"private bool btDuplicate"}</code> |  |
| <Link id="m-btnclose" /><code>{"private bool btnClose"}</code> |  |
| <Link id="m-btnfill" /><code>{"private bool btnFill"}</code> |  |
| <Link id="m-btnleft" /><code>{"private bool btnLeft"}</code> |  |
| <Link id="m-btnopen" /><code>{"private bool btnOpen"}</code> |  |
| <Link id="m-btnright" /><code>{"private bool btnRight"}</code> |  |
| <Link id="m-clientpagecount" /><code>{"private uint clientPageCount"}</code> |  |
| <Link id="m-closedcoverrotation" /><code>{"private float closedCoverRotation"}</code> |  |
| <Link id="m-closeduration" /><code>{"private float closeDuration"}</code> |  |
| <Link id="m-closeupwardsdotlimit" /><code>{"private float closeUpwardsDotLimit"}</code> |  |
| <Link id="m-closevelocitylimit" /><code>{"private float closeVelocityLimit"}</code> |  |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> |  |
| <Link id="m-coverglyph" /><code>{"private Image coverGlyph"}</code> |  |
| <Link id="m-displayedspawnindex" /><code>{"private int displayedSpawnIndex"}</code> |  |
| <Link id="m-firstpageindex" /><code>{"private int firstPageIndex"}</code> |  |
| <Link id="m-flairpositions" /><code>{"private "}<Link to="/game-api/types/alta-items/book-flairpositions">{"Book.FlairPositions"}</Link>{" flairPositions"}</code> |  |
| <Link id="m-frontcover" /><code>{"private Transform frontCover"}</code> |  |
| <Link id="m-frontobject" /><code>{"private GameObject frontObject"}</code> |  |
| <Link id="m-glyphandroidrenderer" /><code>{"private Renderer glyphAndroidRenderer"}</code> |  |
| <Link id="m-glyphcanvas" /><code>{"private Canvas glyphCanvas"}</code> |  |
| <Link id="m-heldcoroutine" /><code>{"private Coroutine heldCoroutine"}</code> |  |
| <Link id="m-hovering" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> hovering"}</code> |  |
| <Link id="m-inserting" /><code>{"private Queue<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> inserting"}</code> |  |
| <Link id="m-lastopenedpage" /><code>{"private int lastOpenedPage"}</code> |  |
| <Link id="m-locationchange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" locationChange"}</code> |  |
| <Link id="m-lods" /><code>{"private LOD[] lods"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-openduration" /><code>{"private float openDuration"}</code> |  |
| <Link id="m-openupwardsdotlimit" /><code>{"private float openUpwardsDotLimit"}</code> |  |
| <Link id="m-openvelocitylimit" /><code>{"private float openVelocityLimit"}</code> |  |
| <Link id="m-pageaxis" /><code>{"private Transform pageAxis"}</code> |  |
| <Link id="m-pagecount" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pageCount"}</code> |  |
| <Link id="m-pagelocationchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pageLocationChanged"}</code> |  |
| <Link id="m-pagenumber" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pageNumber"}</code> |  |
| <Link id="m-pageprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" pagePrefab"}</code> |  |
| <Link id="m-pageturningsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" pageTurningSound"}</code> |  |
| <Link id="m-paperprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" paperPrefab"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-pickuparea" /><code>{"private "}<Link to="/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" pickupArea"}</code> |  |
| <Link id="m-removepage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> removePage"}</code> |  |
| <Link id="m-renderers" /><code>{"private "}<Link to="/game-api/types/alta-items/book-lodrenderers">{"Book.LODRenderers"}</Link>{"[] renderers"}</code> |  |
| <Link id="m-serverflippage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> serverFlipPage"}</code> |  |
| <Link id="m-setdisplay" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-items/displayarguments">{"DisplayArguments"}</Link>{"> setDisplay"}</code> |  |
| <Link id="m-sethighlight" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> setHighlight"}</code> |  |
| <Link id="m-setopen" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> setOpen"}</code> |  |
| <Link id="m-spawnedpages" /><code>{"private List<"}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{"> spawnedPages"}</code> |  |
| <Link id="m-spineobject" /><code>{"private GameObject spineObject"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-turndirection" /><code>{"private int turnDirection"}</code> |  |
| <Link id="m-turning" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> turning"}</code> |  |
| <Link id="m-turnpage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-items/turnpagearguments">{"TurnPageArguments"}</Link>{"> turnPage"}</code> |  |
| <Link id="m-turnrate" /><code>{"private float turnRate"}</code> |  |
| <Link id="m-turnskipprogress" /><code>{"private float turnSkipProgress"}</code> |  |
| <Link id="m-turntime" /><code>{"private float turnTime"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collection-2" /><code><Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" Collection { get; }"}</code> | The `PageCollection` that defines which pages this book can hold and their order. A book spawned without one destroys itself. |
| <Link id="m-isatback" /><code>{"bool IsAtBack { get; private set; }"}</code> | True when the open book shows its last page. |
| <Link id="m-isatfront" /><code>{"bool IsAtFront { get; private set; }"}</code> | True when the open book shows its first page. |
| <Link id="m-ischangingopenstate" /><code>{"bool IsChangingOpenState { get; private set; }"}</code> | True while the open or close animation runs. Page turns are refused then. |
| <Link id="m-isinserting" /><code>{"bool IsInserting { get; }"}</code> | True while pages are queued to be animated into the open book. |
| <Link id="m-isopen-2" /><code>{"bool IsOpen { get; private set; }"}</code> | Whether the book is open. The server opens it while held facing up and slow, and closes it otherwise. |
| <Link id="m-pagecount-2" /><code>{"int PageCount { get; }"}</code> | Number of pages in the book. On clients this is the count last sent by the server. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The book's `Pickup`. Holding it blocks locomotion and lets the holder turn pages. |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnewpage" /><code>{"bool AddNewPage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Server: adds a page in collection order and animates it in if the book is open. False on clients or if the collection lacks the page. |
| <Link id="m-bookremovepage" /><code>{"void BookRemovePage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData)"}</code> | Removes a page from the book's list and refreshes the open spread and page display. Called when a page is pulled out. |
| <Link id="m-close" /><code>{"void Close()"}</code> | Closes the book if it is open and not already opening or closing. The server closes it when it is dropped or tilted away. |
| <Link id="m-duplicatepage" /><code><Link to="/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" DuplicatePage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, ref bool isDuplicate)"}</code> | Server: spawns a loose paper copy of a page at the book. Always a duplicate if the collection forbids removal. Null on clients. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network messages for sync, adding, removing and turning pages, opening, highlighting and flipping. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: destroys the book if it has no collection, otherwise adds every collection page already unlocked globally and listens for new ones. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the book's state, its spawned pages, page display and open state. |
| <Link id="m-open-2" /><code>{"void Open()"}</code> | Opens the book if it is closed and not already changing state. |
| <Link id="m-setcollection" /><code>{"void SetCollection("}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> | Server: sets the page collection. Ignored on clients. |
| <Link id="m-turnleft" /><code>{"bool TurnLeft(bool isSkipping = false)"}</code> | Server: turns forward one page if the book is open and not at the back. Returns whether a turn started. |
| <Link id="m-turnright" /><code>{"bool TurnRight(bool isSkipping = false)"}</code> | Server: turns back one page if the book is open and not at the front. Returns whether a turn started. |
| <Link id="m-addflair" /><code>{"private void AddFlair("}<Link to="/game-api/types/alta-items/bookflair">{"BookFlair"}</Link>{" baseFlair, "}<Link to="/game-api/types/alta-items/bookflair">{"BookFlair"}</Link>{" overrideFlair, Transform parent, Material material, List<Renderer>[] renderers)"}</code> |  |
| <Link id="m-addpage-2" /><code>{"private void AddPage("}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" newPage, int spawnedIndex, bool isFromMiddle = false)"}</code> |  |
| <Link id="m-addpage-3" /><code>{"private void AddPage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/newpagearguments">{"NewPageArguments"}</Link>{" newPage)"}</code> |  |
| <Link id="m-applyflairs" /><code>{"private void ApplyFlairs()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-cachelods" /><code>{"private bool CacheLods()"}</code> |  |
| <Link id="m-changeopen" /><code>{"private IEnumerator ChangeOpen(bool isOpening) (iterator)"}</code> |  |
| <Link id="m-checkglobalpage" /><code>{"private void CheckGlobalPage(ValueTuple<int, uint> data)"}</code> |  |
| <Link id="m-checkinsert" /><code>{"private void CheckInsert("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-clientmoveleft" /><code>{"private void ClientMoveLeft("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |
| <Link id="m-clientmoveright" /><code>{"private void ClientMoveRight("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |
| <Link id="m-clientswiped" /><code>{"private void ClientSwiped("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-delaytointeract" /><code>{"private IEnumerator DelayToInteract("}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" newPage, bool isFromMiddle) (iterator)"}</code> |  |
| <Link id="m-destroypage" /><code>{"private void DestroyPage(int spawnedIndex)"}</code> |  |
| <Link id="m-dropped" /><code>{"private void Dropped("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-fill" /><code>{"private void Fill()"}</code> |  |
| <Link id="m-finishturning" /><code>{"private IEnumerator FinishTurning("}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" page, int direction, bool isSkipping) (iterator)"}</code> |  |
| <Link id="m-getcurrentpage" /><code>{"private int GetCurrentPage()"}</code> |  |
| <Link id="m-getpagenumber" /><code>{"private int GetPageNumber()"}</code> |  |
| <Link id="m-held" /><code>{"private IEnumerator Held("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-insertpage" /><code>{"private IEnumerator InsertPage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page) (iterator)"}</code> |  |
| <Link id="m-interactionfilter" /><code>{"private void InteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-listenforpagedrop" /><code>{"private void ListenForPageDrop("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-locationchange-2" /><code>{"private void LocationChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-pickedup" /><code>{"private void PickedUp("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-removepage-2" /><code>{"private void RemovePage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int oldPage)"}</code> |  |
| <Link id="m-serializebook" /><code>{"private void SerializeBook("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isIncludingPages)"}</code> |  |
| <Link id="m-serverflippage-2" /><code>{"private void ServerFlipPage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool flipRight)"}</code> |  |
| <Link id="m-setdisplay-2" /><code>{"private void SetDisplay("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/displayarguments">{"DisplayArguments"}</Link>{" arguments)"}</code> |  |
| <Link id="m-sethighlight-2" /><code>{"private void SetHighlight("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isHighlighted)"}</code> |  |
| <Link id="m-setopen-2" /><code>{"private void SetOpen("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isOpen)"}</code> |  |
| <Link id="m-showhighlight" /><code>{"private void ShowHighlight(bool isShowing)"}</code> |  |
| <Link id="m-spawnpage" /><code>{"private "}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" SpawnPage(int index, int spawnedIndex, bool isFromMiddle = false)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-startlisteningfordrops" /><code>{"private void StartListeningForDrops()"}</code> |  |
| <Link id="m-stoplistenforpagedrop" /><code>{"private void StopListenForPageDrop("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-stoplisteningfordrops" /><code>{"private void StopListeningForDrops()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-turnleftdebug" /><code>{"private void TurnLeftDebug()"}</code> |  |
| <Link id="m-turnpage-2" /><code>{"private void TurnPage(int spawnedIndex, int direction, bool isSkipping)"}</code> |  |
| <Link id="m-turnpage-3" /><code>{"private void TurnPage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/turnpagearguments">{"TurnPageArguments"}</Link>{" turnPage)"}</code> |  |
| <Link id="m-turnpageasserver" /><code>{"private void TurnPageAsServer(int spawnedIndex, int direction, bool isSkipping)"}</code> |  |
| <Link id="m-turnrightdebug" /><code>{"private void TurnRightDebug()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Book`:

[`BookRestrictor.bookOnServer`](/game-api/types/alta-items/bookrestrictor#m-bookonserver), [`BookRestrictor.bookPrefab`](/game-api/types/alta-items/bookrestrictor#m-bookprefab), [`BookSpawner.bookPrefab`](/game-api/types/alta-items/bookspawner#m-bookprefab), [`PageInstance.Book`](/game-api/types/alta-items/pageinstance#m-book), [`PageInstance.SetInBook`](/game-api/types/alta-items/pageinstance#m-setinbook).
