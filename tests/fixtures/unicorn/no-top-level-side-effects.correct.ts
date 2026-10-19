const routes = new Map<string, string>()

function register(path: string, name: string) {
  routes.set(path, name)
}

register('/sellers', 'sellers')

export default routes
