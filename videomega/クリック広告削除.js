(function() {
    'use strict';

    function deleteAds(mutation) {
        if(mutation.previousSibling === null && mutation.addedNodes.length === 1) {
            mutation.addedNodes[0].remove();
        }
    }

    // 対象ノードを選択
    var target = document.body;

    // オブザーバインスタンスを作成
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            deleteAds(mutation);
        });
    });

    // オブザーバの設定
    var config = { attributes: true, childList: true, characterData: true };

    // 対象ノードとオブザーバの設定を渡す
    observer.observe(target, config);

})();
