'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('books', 'BookController.store')
  Route.get('books', 'BookController.index')
  Route.get('books/:id', 'BookController.retrieve')
  Route.put('books/:id', 'BookController.update')
  Route.delete('books/:id', 'BookController.delete')
}).prefix('api/v1')
