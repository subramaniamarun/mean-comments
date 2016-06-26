'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MyComments = new Module('myComments');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MyComments.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  MyComments.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  MyComments.menus.add({
    title: 'Blog',
    link: 'myComments example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  MyComments.aggregateAsset('css', 'myComments.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    MyComments.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MyComments.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    MyComments.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return MyComments;
});
