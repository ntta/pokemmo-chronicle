
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageNews.vue') },
      { path: '/pokemons', component: () => import('pages/PagePokemons.vue') },
      { path: '/abilities', component: () => import('pages/PageAbilities.vue') },
      { path: '/counter', component: () => import('pages/PageCounterType.vue') },
      { path: '/stat-calculator', component: () => import('pages/PageStatCalculator.vue') },
      { path: '/settings', component: () => import('pages/PageSettings.vue') },
      { path: '/about', component: () => import('pages/PageAbout.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
