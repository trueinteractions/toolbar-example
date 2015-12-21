require('Common');

var win = new Window();
win.visible = true;

var toolbar = new Toolbar();
win.toolbar = toolbar;

var createTorrentButton = new ToolbarItem();
createTorrentButton.tooltip = 'Create a torrent';
createTorrentButton.image = './write.png';

var addTorrent = new ToolbarItem();
addTorrent.tooltip = 'Add torrent files';
addTorrent.image = 'add';
addTorrent.addEventListener('click', function() {
    var fileDialog = new FileDialog('open');
    fileDialog.open(win);
})

toolbar.appendChild([
    addTorrent,
    createTorrentButton
]);
