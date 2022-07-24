// 设置页面title
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vue+egg+mongodb'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
