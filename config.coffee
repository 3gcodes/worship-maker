exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 'app.js': /^(app|vendor|bower_components)/
      order:
        before: [
          'bower_components/jquery/jquery.js'
          'bower_components/handlebars/handlebars.js'
          'bower_components/ember/ember.js'
          'bower_components/ember-data-shim/ember-data.js'
          'bower_components/bootstrap/dist/js/bootstrap.js'
        ]
    stylesheets:
      joinTo: 'app.css': /^(app|vendor|bower_components)/
    templates:
      precompile: true
      root: 'templates'
      joinTo: 'app.js': /^app/