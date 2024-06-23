import { useRoute } from 'vue-router'

export const useNav = () => {
  const route = useRoute()
  const navArr = [
    { name: 'Home', to: '/', match: 'index' },
    { name: 'Projects', to: '/projects', match: 'projects' },
    { name: 'About', to: '/about', match: 'about' },
    { name: 'Contact', to: '/contact', match: 'contact' }
  ]

  function isCurrent(name: string) {
    return route.name === name;
  }

  return {
    isCurrent,
    navArr
  }
} 
