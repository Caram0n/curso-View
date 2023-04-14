import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard.js'


const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import(/*webpackChunkName:"PokemonLayout"*/  '@/modules/pokemon/layouts/PokemonLayout'),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import(/*webpackChunkName:"ListPage"*/  '@/modules/pokemon/pages/ListPage')
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import(/*webpackChunkName:"AboutPage"*/  '@/modules/pokemon/pages/AboutPage')
      },
      {
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        component: () => import(/*webpackChunkName:"PokemonPage"*/  '@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(Number(id)) ? { id: 1 } : { id: Number(id) }
        }
      },
      {
        path: '',
        redirect: { name: 'pokemon-home' }
      }

    ]
  },
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import(/*webpackChunkName:"DbzLayout"*/  '@/modules/dbz/layouts/DragonBallLayout'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/*webpackChunkName:"DbzCharactersPage"*/  '@/modules/dbz/pages/Characters')
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/*webpackChunkName:"DbzAboutPage"*/  '@/modules/dbz/pages/About')
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/*webpackChunkName:"NoPageFound"*/  '@/modules/shared/pages/NoPageFound')
  }


]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


// Guard Global - Sincrono

// router.beforeEach((to, from, next) => {

//   const random = Math.random() * 100
//   if (random > 50) {
//     console.log('Pase el guard')
//     next()
//   } else {
//     console.log('Bloqueado por el guard')
//     next({ name: 'pokemon-home' })
//   }

// })

// Guard Global - Asincrono

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100
//     if (random > 50) {
//       console.log('Pase el guard')
//       resolve(true)
//     } else {
//       console.log('Bloqueado por el guard')
//       resolve(false)
//     }
//   })


// }

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess()

//   authorized
//     ? next()
//     : next({ name: 'pokemon-home'})
// })




export default router