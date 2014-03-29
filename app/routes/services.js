App.ServicesRoute = Ember.Route.extend({
  model: function() {
    return services;
  }
})

services = [{
  id: '1',
  createdBy: 'Chris Shuman',
  dateCreated: '01-28-2014'
},
  {
    id: '1',
    createdBy: 'Chris Shuman',
    dateCreated: '01-21-2014'
  },
  {
    id: '1',
    createdBy: 'Chris Shuman',
    dateCreated: '01-14-2014'
  },
  {
    id: '1',
    createdBy: 'Gregg Bolinger',
    dateCreated: '01-07-2014'
  },
  {
    id: '1',
    createdBy: 'Chris Shuman',
    dateCreated: '01-01-2014'
  }
]