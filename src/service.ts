import { factory, primaryKey } from '@mswjs/data'
import { setupWorker } from 'msw/browser'
// import { http, HttpResponse } from 'msw'

const db = factory({
  user: {
    id: primaryKey(String),
    firstName: String,
  },
})

export function seedDb() {
  db.user.create({id: "42", firstName: "Douglas"})
}

// Generates REST API request handlers.
const handlers = db.user.toHandlers('rest')

// const handlers = [
//   http.get('/users', ({}) => {
//     const data = JSON.stringify(db.user.getAll());
//     return HttpResponse.json(data);
//   })
// ]

export const worker = setupWorker(...handlers)
