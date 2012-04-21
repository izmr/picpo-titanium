tt.ui.itemSearch = {};

/**
 * 
 *
 * @author YUya, Kakui <y.kakui@gmail.com>
 */
(function(){
    tt.ui.itemSearch.createWindow = function() {
        var win = tt.ui.createModalWindow({
            title: 'Item Search'
        });

        win.add(tt.ui.itemSearch.createView());

        return win;
    }

    tt.ui.itemSearch.createView = function () {
        var view = Ti.UI.createView({
            layout: 'vertical'
        });
        view.add(Ti.UI.createLabel({
            top: 5,
            title: 'aaa'
        }));

        var searchButton = Titanium.UI.createButton({
            title:'検索',
//            color:'#ff0000',
            height:30,
            width:100,
              top:100
        });

        searchButton.addEventListener('click', function(e){
            // ...
        });

        var textField1 = Ti.UI.createTextField({
            width:200,
            height:30,
            borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: '検索ワード入力'
        });

        view.add(textField1);
        view.add(searchButton);

        return view;
    }
})();
