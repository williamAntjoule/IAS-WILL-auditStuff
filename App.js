Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    launch: function () {
        console.log("test of rallyAppBuilder");
        this._loadData();  
    },
    
    _loadData: function(){
           var mystore = Ext.create('Rally.data.wsapi.Store', {
           model: 'PortfolioItem',
            fetch: ['formattedID', 'Name', 'DirectChildrenCount','CreationDate', 'c_Team'],
            autoLoad: true,
            filters: [
                {
                    property: 'CreationDate',
                    operator: '=',
                    value: 'LastYear'
                }
            ],
            sorters:[
				{
        			property: 'CreationDate',
        			direction: 'DESC'
				}
			],
            listeners: {
                load: function(myStore, myData, success){
                    console.log('get data!', myStore, myData, success);
                    this._loadGrid(myStore);
                },
                scope: this
            }
        });
    },
    
    _loadGrid: function(myStoryStore){
        var myGrid = Ext.create('Rally.ui.grid.Grid',{
            store: myStoryStore,
            columnCfgs:[
                "FormattedID", "Name", "DirectChildrenCount", "CreationDate", "c_Team"
            ]
        }); 
        this.add(myGrid);
        console.log('what is this?',this);
    }
});
 