import { ref } from 'vue'


const sidebarStatus = ref<boolean>(false)

export const useSidebar = () => {

    const openSidebar = () => {
        sidebarStatus.value = true
    }

    const closeSidebar = () => {
        sidebarStatus.value = false
    }
    
    const toggleSidebar = () => {
        sidebarStatus.value = !sidebarStatus.value
    }

    return { sidebarStatus, openSidebar, closeSidebar, toggleSidebar}
}